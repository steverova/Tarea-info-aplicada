
using apiPersonaNet.Models;
using apiPersonaNet.Services;
using Microsoft.AspNetCore.Mvc;


namespace apiPersonaNet.Controllers
{

    [Route("/emails")]
    [ApiController]
    public class EmailPerson : ControllerBase
    {

        EmailServices services = new EmailServices();

        [HttpGet("test")]
        public string index()
        {
            string info = "Api person online";
            return info;
        }

        [HttpGet]
        public List<UserModel> List()
        {
            Console.WriteLine("ingreso peticion list");

            return services.getPersonList();
        }

        [HttpGet("{id}")]
        public List<UserModel> List([FromRoute] int id)
        {
            Console.WriteLine("ingreso peticion get");

            return services.getEmailList(id);
        }

        [HttpPost]
        public IActionResult Add([FromBody] UserModel data)

        
        {
            bool result = services.Add(data);

            if (result)
            {
                return StatusCode(StatusCodes.Status200OK, new { result = "agregado" });
            }
            return StatusCode(StatusCodes.Status400BadRequest, new { result = "ERROR!!" });
        }

        [HttpDelete("{id}")]
        public IActionResult Delete([FromRoute] int id)
        {

            Console.WriteLine("delete id: " + id);
            bool result = services.Delete(id);

            if (result)
            {
                return StatusCode(StatusCodes.Status200OK, new { result = "Eliminado" });
            }
            return StatusCode(StatusCodes.Status400BadRequest, new { result = "ERROR!!" });
        }
    }
}