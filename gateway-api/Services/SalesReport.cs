using System;
using System.Net.Http.Headers;
using apiPersonaNet.Models;
using GateWayApi.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;


namespace GateWayApi.Services
{
    public class SalesReport
    {

        string sales_Baseurl = "https://localhost:7002/";
        string person_Baseurl = "https://localhost:7001/";
        public async Task<List<Register>> salesReport([FromBody] int[] year)
        {

            List<Register> list = new List<Register>();
            var json = JsonConvert.SerializeObject(year);

            var client = new HttpClient();
            var request = new HttpRequestMessage
            {
                Method = HttpMethod.Post,
                RequestUri = new Uri(sales_Baseurl + "api/sales/sales1"),
                Content = new StringContent(json)
                {
                    Headers =
        {
            ContentType = new MediaTypeHeaderValue("application/json")
        }
                }
            };
            using (var response = await client.SendAsync(request))
            {
                response.EnsureSuccessStatusCode();
                var body = await response.Content.ReadAsStringAsync();
                list = JsonConvert.DeserializeObject<List<Register>>(body);
                Console.WriteLine(body);
            }

            return list;

        }

        public async Task<List<Register>> salesReport2([FromBody] int[] year)
        {

            List<Register> list = new List<Register>();
            var json = JsonConvert.SerializeObject(year);

            var client = new HttpClient();
            var request = new HttpRequestMessage
            {
                Method = HttpMethod.Post,
                RequestUri = new Uri(sales_Baseurl + "api/sales/sales2"),
                Content = new StringContent(json)
                {
                    Headers =
        {
            ContentType = new MediaTypeHeaderValue("application/json")
        }
                }
            };
            using (var response = await client.SendAsync(request))
            {
                response.EnsureSuccessStatusCode();
                var body = await response.Content.ReadAsStringAsync();
                list = JsonConvert.DeserializeObject<List<Register>>(body);
                Console.WriteLine(body);
            }

            return list;

        }

        public async Task<List<Register3>> salesReport3([FromBody] int[] year)
        {

            Console.WriteLine(year);

            List<Register3> list = new List<Register3>();
            var json = JsonConvert.SerializeObject(year);

            var client = new HttpClient();
            var request = new HttpRequestMessage
            {
                Method = HttpMethod.Post,
                RequestUri = new Uri(sales_Baseurl + "api/sales/sales3"),
                Content = new StringContent(json)
                {
                    Headers =
        {
            ContentType = new MediaTypeHeaderValue("application/json")
        }
                }
            };
            using (var response = await client.SendAsync(request))
            {
                response.EnsureSuccessStatusCode();
                var body = await response.Content.ReadAsStringAsync();
                list = JsonConvert.DeserializeObject<List<Register3>>(body);
                Console.WriteLine(body);
            }

            return list;

        }


        public async Task<UserModel> auth(LoginCredentials auth)
        {

            var json = JsonConvert.SerializeObject(auth);

            var client = new HttpClient();
            var request = new HttpRequestMessage
            {
                Method = HttpMethod.Post,
                RequestUri = new Uri(person_Baseurl + "api/person/auth"),
                Content = new StringContent(json)
                {
                    Headers =
                    {
                        ContentType = new MediaTypeHeaderValue("application/json")
                    }
                }
            };
            UserModel authUser = new UserModel();
            using (var response = await client.SendAsync(request))
            {
                response.EnsureSuccessStatusCode();
                var body = await response.Content.ReadAsStringAsync();
                authUser = JsonConvert.DeserializeObject<UserModel>(body);
                Console.WriteLine(body);
            }
            return authUser;
        }

    }

    
}
