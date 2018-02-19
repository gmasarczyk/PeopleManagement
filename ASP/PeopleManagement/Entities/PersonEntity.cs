using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace peopleManagement.Entities
{
    public class PersonEntity
    {
        public int Id { get; set; }

        // [Required]
        [StringLength(50)]
        public string LastName { get; set; }

        // [Required]
        [StringLength(50)]
        public string FirstName { get; set; }

        // [Required]
        [StringLength(50)]
        public string Street { get; set; }

        //   [Required]
        [StringLength(20)]
        public string HomeNumber { get; set; }

        [DataType(DataType.PostalCode)]
        //   [Required]
        [StringLength(20)]
        public string PostalCode { get; set; }

        //  [Required]
        [StringLength(50)]
        public string City { get; set; }

        [DataType(DataType.PhoneNumber)]
        //[Required]
        [StringLength(20)]
        public string MobilePhone { get; set; }               

        [DataType(DataType.EmailAddress)]
        //[Required]
        [StringLength(50)]
        public string Email { get; set; }

        //[DataType(DataType.DateTime)]
        ////   [Required]
        //public DateTime CreationDate { get; set; }

        //[DataType(DataType.DateTime)]
        ////   [Required]
        //public DateTime ModifiedDate { get; set; }

        ///// <summary>
        ///// If true don't display in list and treat as removed (null should act as false)
        ///// </summary>
        //public bool Removed { get; set; }
    }
}
