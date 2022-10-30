
using apiPersonaNet.Models;
using GateWayApi.Services;
using Microsoft.AspNetCore.Mvc;


namespace GateWayApi.Controllers
{
    [Route("emails")]
    [ApiController]
    public class EmailController : ControllerBase
    {

        private EmailServices services = new EmailServices();

        [HttpGet]
        public async Task<List<UserModel>> getAll()
        {
            return await services.list();
        }

        [HttpGet("{id}")]
        public async Task<List<UserModel>> getEmails([FromRoute] int id)
        {
            return await services.listEmail(id);
        }

        [HttpPost]
        public async Task<string> Add([FromBody] UserModel userdata)
        {
            Console.WriteLine(userdata.BusinessEntityID + " - " + userdata.EmailAddress + " - " + userdata.EmailAddressID);
            return await services.add(userdata);
        }

        [HttpDelete("{id}")]
        public async Task<string> Delete([FromRoute] int id)
        {
            Console.WriteLine("Gateway: " + id);
            return await services.delete(id);
        }

    }
}