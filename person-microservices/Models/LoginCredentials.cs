using System;

namespace apiPersonaNet.Models
{
    public class LoginCredentials
    {
        public string email {get; set;}
        public string password { get; set;}


        public override string ToString()
        {
            return $"{nameof(email)}: {email}, {nameof(password)}: {password}";
        }
    }
}
