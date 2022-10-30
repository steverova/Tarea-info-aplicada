using apiPersonaNet.Models;
using GateWayApi.Models;
using GateWayApi.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GateWayApi.Controllers
{
    [Route("api/home")]
    [ApiController]
    //[Authorize]
    public class HomeController : ControllerBase
    {
        private SalesReport services = new SalesReport();

        [HttpPost("report1")]
        public async Task<List<Register>> report([FromBody] int[] year)
        {
            Console.WriteLine("api/home/report");
            return await services.salesReport(year);
        }

        [HttpPost("report2")]
        public async Task<List<Register>> report2([FromBody] int[] year)
        {
            Console.WriteLine("api/home/report2");
            return await services.salesReport2(year);
        }

        [HttpPost("report3")]
        public async Task<List<Register3>> report3([FromBody] int[] year)
        {
            Console.WriteLine("api/home/report3");
            Console.WriteLine(year);
             return await services.salesReport3(year);
        }

        [HttpGet("/")]
        public string index(){
            string info =
            "api gateway actualizó x 2 \n"+ 
            "sales = https://sales-microservice.azurewebsites.net/ \n"+
            "person = https://person-microservices.azurewebsites.net/";
             
            return info;
        }
    }
}
