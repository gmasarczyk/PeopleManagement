using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using peopleManagement.Data;
using Microsoft.Extensions.Logging;
using peopleManagement.Interfaces;
using PeopleManagement.Models;
using PeopleManagement.BaseClasses;
using PeopleManagement.Enums;
using PeopleManagement.Interfaces;
using AutoMapper;
using peopleManagement.Entities;

namespace peopleManagement.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class DataController : Controller
    {
        private readonly IPeopleService _peopleService;
        private IUrlHelper _urlHelper;
        private IPropertyMappingService _propertyMappingService;
        private ITypeHelperService _typeHelperService;

        public DataController(IPeopleService peopleService,
            IUrlHelper urlHelper,
            IPropertyMappingService propertyMappingService,
            ITypeHelperService typeHelperService)
        {
            _peopleService = peopleService;
            _urlHelper = urlHelper;
            _propertyMappingService = propertyMappingService;
            _typeHelperService = typeHelperService;
        }

        private string CreateResourceUri(PersonParameters uriParameters, ResourceUriTypeEnum type)
        {
            switch (type)
            {
                case ResourceUriTypeEnum.Base:
                    return _urlHelper.Link("GetPeople",
                      new
                      {
                          fields = uriParameters.Fields,
                          orderBy = uriParameters.OrderBy,
                          searchQuery = uriParameters.SearchQuery,
                          //pageSize = uriParameters.PageSize,
                          lastName = uriParameters.LastName
                      });
                case ResourceUriTypeEnum.PreviousPage:
                    return _urlHelper.Link("GetPeople",
                      new
                      {
                          fields = uriParameters.Fields,
                          orderBy = uriParameters.OrderBy,
                          searchQuery = uriParameters.SearchQuery,
                          pageNumber = uriParameters.PageNumber - 1,
                          pageSize = uriParameters.PageSize,
                          lastName = uriParameters.LastName
                      });
                case ResourceUriTypeEnum.NextPage:
                    return _urlHelper.Link("GetPeople",
                      new
                      {
                          fields = uriParameters.Fields,
                          orderBy = uriParameters.OrderBy,
                          searchQuery = uriParameters.SearchQuery,
                          pageNumber = uriParameters.PageNumber + 1,
                          pageSize = uriParameters.PageSize,
                          lastName = uriParameters.LastName
                      });

                default:
                    return _urlHelper.Link("GetPeople",
                    new
                    {
                        fields = uriParameters.Fields,
                        orderBy = uriParameters.OrderBy,
                        searchQuery = uriParameters.SearchQuery,
                        pageNumber = uriParameters.PageNumber,
                        pageSize = uriParameters.PageSize,
                        lastName = uriParameters.LastName
                    });
            }
        }

        [HttpGet(Name = "GetPeople")]
        public async Task<IActionResult> GetPersons([FromQuery]PersonParameters par)
        {
            if (!_propertyMappingService.ValidMappingExistsFor<PersonModel, PersonEntity>(par.OrderBy))
            {
                return BadRequest();
            }

            if (!_typeHelperService.TypeHasProperties<PersonModel>(par.Fields))
            {
                return BadRequest();
            }
            
            var PersonsFromRepo = await _peopleService.GetAsync(par);

            var previousPageLink = PersonsFromRepo.HasPrevious ?
                CreateResourceUri(par,
                ResourceUriTypeEnum.PreviousPage) : null;

            var nextPageLink = PersonsFromRepo.HasNext ?
                CreateResourceUri(par,
                ResourceUriTypeEnum.NextPage) : null;

            var basePageLink = CreateResourceUri(par, ResourceUriTypeEnum.Base);

            var paginationMetadata = new
            {
                totalCount = PersonsFromRepo.TotalCount,
                pageSize = PersonsFromRepo.PageSize,
                currentPage = PersonsFromRepo.CurrentPage,
                totalPages = PersonsFromRepo.TotalPages,
                previousPageLink = previousPageLink,
                nextPageLink = nextPageLink,
                basePageLink = basePageLink
            };

            Response.Headers.Add("X-Pagination", Newtonsoft.Json.JsonConvert.SerializeObject(paginationMetadata));

            var model = Mapper.Map<List<PersonModel>>(PersonsFromRepo);

            var result = new
            {
                results = model,
                metadata = paginationMetadata
            };

            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetDetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var PersonModel = await _peopleService.GetAsync(id);

            if (PersonModel == null)
            {
                return NotFound();
            }

            return Ok(PersonModel);
        }

        [HttpPost]
        public async Task<IActionResult> SaveNewItem([FromBody] PersonForCreationModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            //

            Result<PersonModel> result = await _peopleService.SaveNewAsync(model, string.Empty);

            if (result.IsValid)
            {
                return CreatedAtAction("GetModel", new { id = result.Value.Id }, result.Value);
            }
            else
            {
                return BadRequest(result);
            }
        }

        // PUT: api/Persons/5 - zadanie put edytuje caly element (wszystkie wlasciwosci)
        [HttpPut("{id}")]
        public async Task<IActionResult> SaveChangedItem([FromRoute] int id, [FromBody] PersonForUpdateModel model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var result = _peopleService.UpdateAsync(id, model, string.Empty);
            if (!result.Result.IsValid)
            {
                return BadRequest(result.Result);
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var result = _peopleService.DeleteAsync(id, string.Empty);
            if (!result.Result.IsValid)
            {
                return BadRequest(result.Result);
            }

            return NoContent();
        }


        [HttpGet("configuration")]
        public IActionResult GetConfiguration()
        {
            var result = _peopleService.GetConfiguration();
            
            return Ok(result);
        }
    }
}
