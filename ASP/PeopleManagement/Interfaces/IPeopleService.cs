using peopleManagement.Entities;
using PeopleManagement.BaseClasses;
using PeopleManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace peopleManagement.Interfaces
{
    public interface IPeopleService : IDisposable
    {
        Task<PagedList<PersonEntity, PersonModel>> GetAsync(PersonParameters fi);

        Task<List<PersonModel>> GetList(PersonParameters fi);
        
        Task<PersonModel> GetAsync(int id);
        
        Task<Result<PersonModel>> SaveNewAsync(PersonForCreationModel model, string userId);

        Task<Result<PersonModel>> UpdateAsync(int id, PersonForUpdateModel model, string userId);

        Task<Result<PersonModel>> DeleteAsync(int id, string userId);

        ConfigurationModel GetConfiguration();
    }
}
