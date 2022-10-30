using System;
using apiPersonaNet.Database;
using apiPersonaNet.Models;
using Microsoft.AspNetCore.Mvc;

namespace apiPersonaNet.Services
{
    public class EmailServices
    {

        public EmailServices() { }

        public DataEmail de = new DataEmail();

        public List<UserModel> getPersonList()
        {
            return de.List();
        }

        public List<UserModel> getEmailList(int id)
        {
            return de.GetEmailByID(id);
        }

        public bool Add(UserModel data)
        {
            return de.Add(data);
            
        }

        public bool Delete(int id)
        {
            return de.Delete(id);

        }

    }
}
