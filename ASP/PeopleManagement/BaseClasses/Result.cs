using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeopleManagement.BaseClasses
{
    public class Result<T>
    {
        public Result()
        {
            IsValid = false;
            Errors = new List<string>();
            InfoMessages = new List<string>();
        }

        public T Value { get; set; }

        public bool IsValid { get; set; }

        public List<string> Errors { get; set; }

        public List<string> InfoMessages { get; set; }

        public void SetValueMapped<SourceT>(SourceT value, AutoMapper.IMapper mapper)
        {
            this.Value = mapper.Map<SourceT, T>(value);
        }
    }
}
