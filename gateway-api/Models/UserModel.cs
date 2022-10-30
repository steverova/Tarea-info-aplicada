namespace apiPersonaNet.Models
{
    public class UserModel
    {

        public UserModel() { }

        public int? BusinessEntityID { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? EmailAddress { get; set; }

        public int? EmailAddressID { get; set; }
        public string? PasswordHash { get; set; }
    }
}
