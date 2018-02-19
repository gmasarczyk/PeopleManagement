using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using peopleManagement.Data;
using peopleManagement.Entities;
using peopleManagement.Interfaces;
using PeopleManagement.BaseClasses;
using PeopleManagement.Interfaces;
using PeopleManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace peopleManagement.Services
{
    public class PeopleService : IPeopleService
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;
        private readonly ILogger _logger;
        private IPropertyMappingService _propertyMappingService;

        public PeopleService(ApplicationDbContext context, 
            IMapper mapper, 
            ILoggerFactory loggerFactory, 
            IPropertyMappingService propertyMappingService)
        {
            _context = context;
            _mapper = mapper;
            _logger = loggerFactory.CreateLogger("IPeopleService");
            _propertyMappingService = propertyMappingService;
        }
        private IQueryable<PersonEntity> filter(PersonParameters searchModel)
        {
            var result = _context.People.ApplySort(searchModel.OrderBy, _propertyMappingService.GetPropertyMapping<PersonModel, PersonEntity>());
            if (searchModel != null)
            {

                if (!string.IsNullOrWhiteSpace(searchModel.City))
                {
                    result = result.Where(x => x.City == searchModel.City);                  
                }
                if (!string.IsNullOrWhiteSpace(searchModel.LastName))
                {
                    result = result.Where(x => x.LastName == searchModel.LastName);
                }
            }
            return result;
        }

        public async Task<PersonModel> GetAsync(int id)
        {
            var Person = await _context.People.SingleOrDefaultAsync(m => m.Id == id);
            var model = _mapper.Map<PersonEntity, PersonModel>(Person);

            return model;
        }

        public async Task<List<PersonModel>> GetList(PersonParameters fi)
        {
            return _mapper.Map<List<PersonModel>>(await filter(fi).ToListAsync());
        }

        public async Task<PagedList<PersonEntity, PersonModel>> GetAsync(PersonParameters fi)
        {
            var Person = filter(fi);
            return PagedList<PersonEntity, PersonModel>.Create(Person, fi.PageNumber, fi.PageSize, _mapper);
        }

        public async Task<Result<PersonModel>> ValidateNewAsync(PersonEntity dbEntity)
        {
            Result<PersonModel> result = new Result<PersonModel>();
            try
            {
                var person = await _context.People.FirstOrDefaultAsync(m =>
                    m.Email.ToUpper() == dbEntity.Email.ToUpper()
                );

                if (person == null)
                {
                    result.IsValid = true;
                }
                else
                {
                    result.IsValid = false;
                    result.InfoMessages.Add("Email is already used for another person");
                    return result;
                }
            }
            catch (Exception ex)
            {
                result.IsValid = false;
                result.Errors.Add(ex.Message + ex.StackTrace);
            }
            finally
            {
                result.Value = _mapper.Map<PersonEntity, PersonModel>(dbEntity);
            }
            return result;
        }

        public async Task<Result<PersonModel>> SaveNewAsync(PersonForCreationModel model, string userId)
        {
            PersonEntity dbEntity = _mapper.Map<PersonForCreationModel, PersonEntity>(model);

            Result<PersonModel> result = await ValidateNewAsync(dbEntity);

            if (result.IsValid)
            {
                try
                {
                    dbEntity.PostalCode = !string.IsNullOrEmpty(dbEntity.PostalCode) ? new string(dbEntity.PostalCode.Where(c => Char.IsNumber(c)).ToArray()) : dbEntity.PostalCode;

                    _context.People.Add(dbEntity);
                    await _context.SaveChangesAsync();
                    result.IsValid = true;
                }
                catch (Exception ex)
                {
                    result.IsValid = false;
                    result.Errors.Add( ex.Message + ex.StackTrace );
                    throw;
                }
                finally
                {
                    result.Value = _mapper.Map<PersonEntity, PersonModel>(dbEntity);
                }
            }
            return result;
        }

        public async Task<Result<PersonModel>> ValidateUpdateAsync(PersonEntity dbEntity)
        {
            Result<PersonModel> result = new Result<PersonModel>();
            try
            {
                result.IsValid = true;
            }
            catch (Exception ex)
            {
                result.IsValid = false;
                result.Errors.Add(ex.Message + ex.StackTrace);
                throw;
            }
            finally
            {
                result.Value = _mapper.Map<PersonEntity, PersonModel>(dbEntity); ;
            }
            return result;
        }

        public async Task<Result<PersonModel>> UpdateAsync(int id, PersonForUpdateModel model, string userId)
        {
            PersonEntity dbEntity = _mapper.Map<PersonForUpdateModel, PersonEntity>(model);
            Result<PersonModel> result = await ValidateUpdateAsync(dbEntity);

            var modelFromRepo = await _context.People.Where(b => b.Id == id).FirstOrDefaultAsync();
            if (modelFromRepo == null)
            {
                result.IsValid = false;
                result.Errors.Add("W bazie nie istnieje osoba o podanym identyfikatorze" );
            }
            else
            {
                Mapper.Map(model, modelFromRepo);
                modelFromRepo.PostalCode = !string.IsNullOrEmpty(dbEntity.PostalCode) ? new string(dbEntity.PostalCode.Where(c => Char.IsNumber(c)).ToArray()) : modelFromRepo.PostalCode;
                if (_context.SaveChanges() < 0)
                {
                    throw new Exception($"Nie powiodła się operacja zapisu zmodyfikowanej osoby o id = {id} podczas zatwierdzania zmian na bazie danych");
                }
            }

            return result;
        }

        public async Task<Result<PersonModel>> DeleteAsync(int id, string userId)
        {
            Result<PersonModel> result = new Result<PersonModel>();

            var modelFromRepo = await _context.People.Where(b => b.Id == id).FirstOrDefaultAsync();
            if (modelFromRepo == null)
            {
                result.IsValid = false;
                result.Errors.Add("W bazie nie istnieje osoba o podanym identyfikatorze" );
            }
            else
            {
                if (_context.SaveChanges() < 0)
                {
                    throw new Exception($"Nie powiodła się operacja deaktywacji osoby o id = {id} podczas zatwierdzania zmian na bazie danych");
                }
                else
                {
                    result.IsValid = true;
                }
            }

            return result;
        }

        public ConfigurationModel GetConfiguration()
        {
            List<CityModel> cities = new List<CityModel>()
            {
                new CityModel(){ Id = 1, Name = "London"},
                new CityModel(){ Id = 2, Name = "Rybnik"},
                new CityModel(){ Id = 3, Name = "Warszawa"},
                new CityModel(){ Id = 4, Name = "Wrocław"},
            };

            ConfigurationModel configuration = new ConfigurationModel();
            configuration.Cities = cities;

            return configuration;
        }


        #region IDisposable Support
        private bool disposedValue = false; // To detect redundant calls

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    // TODO: dispose managed state (managed objects).
                }

                // TODO: free unmanaged resources (unmanaged objects) and override a finalizer below.
                // TODO: set large fields to null.

                disposedValue = true;
            }
        }

        // TODO: override a finalizer only if Dispose(bool disposing) above has code to free unmanaged resources.
        // ~PersonBusinessModel() {
        //   // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
        //   Dispose(false);
        // }

        // This code added to correctly implement the disposable pattern.
        public void Dispose()
        {
            // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
            Dispose(true);
            // TODO: uncomment the following line if the finalizer is overridden above.
            // GC.SuppressFinalize(this);
        }

        #endregion
    }
}
