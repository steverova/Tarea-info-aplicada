using apiPersonaNet.Database;
using apiPersonaNet.Models;

namespace apiPersonaNet.Services
{
    public class PersonServices
    {
        public PersonServices(){}

        DataPerson dp = new DataPerson();

        public List<PersonInfo>  getPersonList(int[] ids){
            return dp.List(ids);
        }

        public UserModel auth(LoginCredentials auth){

            return dp.auth(auth);

        }
    }
}