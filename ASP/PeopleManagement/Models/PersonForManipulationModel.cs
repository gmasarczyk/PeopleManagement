using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PeopleManagement.Models
{
    public abstract class PersonForManipulationModel
    {

        //[Required]
        [StringLength(50, ErrorMessage = "Nazwisko może się składać maksymalnie z 50 znaków.")]
        [Display(Name = "Nazwisko")]
        public virtual string LastName { get; set; }

        // [Required(ErrorMessage = "Imię jest wymagane.")]
        [StringLength(50, ErrorMessage = "Imię może się składać maksymalnie z 50 znaków.")]
        [Display(Name = "Imię")]
        public virtual string FirstName { get; set; }

        // [Required]
        [StringLength(50, ErrorMessage = "Ulica może się składać maksymalnie z 50 znaków.")]
        [Display(Name = "Ulica")]
        public virtual string Street { get; set; }

        //  [Required]
        [StringLength(20, ErrorMessage = "Nr domu/lokalu może się składać maksymalnie z 20 znaków.")]
        [Display(Name = "Nr domu/lokalu")]
        public virtual string HomeNumber { get; set; }

        [DataType(DataType.PostalCode)]
        //  [Required]
        [StringLength(20, ErrorMessage = "Kod pocztowy może się składać maksymalnie z 20 znaków.")]
        [Display(Name = "Kod pocztowy")]
        public virtual string PostalCode { get; set; }

        //  [Required]
        [StringLength(50, ErrorMessage = "Miejscowość może się składać maksymalnie z 50 znaków.")]
        [Display(Name = "Miejscowość")]
        public virtual string City { get; set; }

        [DataType(DataType.PhoneNumber)]
        // [Required]
        [StringLength(20, ErrorMessage = "Telefon może się składać maksymalnie z 20 znaków.")]
        [Display(Name = "Telefon komórkowy")]
        public virtual string MobilePhone { get; set; }

        [DataType(DataType.EmailAddress)]
        //   [Required]
        [StringLength(50, ErrorMessage = "E-mail może się składać maksymalnie z 50 znaków.")]
        [Display(Name = "E-mail")]
        public virtual string Email { get; set; }
    }
}
