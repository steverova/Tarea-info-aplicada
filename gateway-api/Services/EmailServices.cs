using System;
using System.Net.Http.Headers;
using apiPersonaNet.Models;
using GateWayApi.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace GateWayApi.Services
{
    public class EmailServices
    {
        public async Task<List<UserModel>> list()
        {
            return await requestAPi("https://localhost:7001/emails");
        }

        public async Task<List<UserModel>> listEmail(int id)
        {
            return await requestAPi("https://localhost:7001/emails/"+id);
        }

        public async Task<List<UserModel>> requestAPi(string url)
        {
            List<UserModel> list = new List<UserModel>();
            var client = new HttpClient();
            var request = new HttpRequestMessage
            {
                Method = HttpMethod.Get,
                RequestUri = new Uri(url),
            };
            using (var response = await client.SendAsync(request))
            {
                response.EnsureSuccessStatusCode();
                var body = await response.Content.ReadAsStringAsync();
                list = JsonConvert.DeserializeObject<List<UserModel>>(body);
            }
            return list;
        }

        public async Task<string> add(UserModel userdata)
        {
            var client = new HttpClient();
            var request = new HttpRequestMessage
            {
                Method = HttpMethod.Post,
                RequestUri = new Uri("https://localhost:7001/emails"),
                Content = new StringContent(JsonConvert.SerializeObject(userdata))
                {
                    Headers ={
                        ContentType = new MediaTypeHeaderValue("application/json")}
                }
            };

            HttpResponseMessage response = await client.SendAsync(request);

            return response.ToString();

        }

        public async Task<string> delete(int id)
        {

            Console.WriteLine("Gateway services: " + id);

            // var client = new HttpClient();
            // var request = new HttpRequestMessage
            // {
            //     Method = HttpMethod.Post,
            //     RequestUri = new Uri("https://localhost:7001/emails/"+id),
            // };

            // HttpResponseMessage response = await client.SendAsync(request);

            // return response.ToString();

            var client = new HttpClient();
            var request = new HttpRequestMessage
            {
                Method = HttpMethod.Delete,
                RequestUri = new Uri("https://localhost:7001/emails/"+id),
            };
            HttpResponseMessage response = await client.SendAsync(request);

            return response.ToString();

        }
    }
}

