using AutoMapper;
using peopleManagement.Entities;
using PeopleManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeopleManagement
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Add as many of these lines as you need to map your objects
            CreateMap<PersonEntity, PersonModel>();
            CreateMap<PersonModel, PersonEntity>();
            CreateMap<PersonForCreationModel, PersonEntity>();
            CreateMap<PersonForUpdateModel, PersonEntity>();           
        }
    }
}
