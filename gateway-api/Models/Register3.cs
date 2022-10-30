using GateWayApi.Models;
using System;

namespace GateWayApi.Models
{
    public class Register3
    {
        public int id { get; set; }
        public string name { get; set; }
        public List<int> sales { get; set; }
        public List<int> years { get; set; }
        
    }
}