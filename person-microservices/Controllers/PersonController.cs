using apiPersonaNet.Models;
using apiPersonaNet.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace apiPersonaNet.Controllers
{
    [Route("api/person")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        PersonServices services = new PersonServices();

        [HttpPost("ids")]
        public List<PersonInfo> ListByYear([FromBody] int[] ids)
        {
            Console.WriteLine("ingreso peticion");
            Console.WriteLine(JsonConvert.SerializeObject(ids));
            return services.getPersonList(ids);
        }

        [HttpPost("auth")]
        public string Auth([FromBody] LoginCredentials auth)
        {
            UserModel um =  services.auth(auth);
            var json_auth = JsonConvert.SerializeObject(um);
            return json_auth;
            
        }

        [HttpGet("/")]
        public string index()
        {
            string info = "Api person online";
            return info;
        }
    }
}
