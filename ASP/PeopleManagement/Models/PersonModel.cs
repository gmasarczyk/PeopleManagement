using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PeopleManagement.Models
{
    public class PersonModel
    {
        public int Id { get; set; }
        
        [StringLength(50, ErrorMessage = "Nazwisko może się składać maksymalnie z 50 znaków.")]
        [Display(Name = "Nazwisko")]
        public string LastName { get; set; }
        
        [StringLength(50, ErrorMessage = "Imię może się składać maksymalnie z 50 znaków.")]
        [Display(Name = "Imię")]
        public string FirstName { get; set; }
        
        [StringLength(50, ErrorMessage = "Ulica może się składać maksymalnie z 50 znaków.")]
        [Display(Name = "Ulica")]
        public string Street { get; set; }
        
        [StringLength(20, ErrorMessage = "Nr domu/lokalu może się składać maksymalnie z 20 znaków.")]
        [Display(Name = "Nr domu/lokalu")]
        public string HomeNumber { get; set; }

        [DataType(DataType.PostalCode)]
        [StringLength(20, ErrorMessage = "Kod pocztowy może się składać maksymalnie z 20 znaków.")]
        [Display(Name = "Kod pocztowy")]
        public string PostalCode { get; set; }
        
        [StringLength(50, ErrorMessage = "Miejscowość może się składać maksymalnie z 50 znaków.")]
        [Display(Name = "Miejscowość")]
        public string City { get; set; }

        [DataType(DataType.PhoneNumber)]
        [StringLength(20, ErrorMessage = "Telefon może się składać maksymalnie z 20 znaków.")]
        [Display(Name = "Telefon komórkowy")]
        public string MobilePhone { get; set; }

        [DataType(DataType.EmailAddress)]
        [StringLength(50, ErrorMessage = "E-mail może się składać maksymalnie z 50 znaków.")]
        [Display(Name = "E-mail")]
        public string Email { get; set; }

    }
}
