using apiPersonaNet.Models;
using apiPersonaNet.StoredProcedures;
using Newtonsoft.Json;
using System.Data;
using System.Data.SqlClient;

namespace apiPersonaNet.Database
{
    public class DataPerson
    {
        public DataPerson() { }

        public List<PersonInfo> List(int[] year){
            var json_ids = JsonConvert.SerializeObject(year);
            var list = new List<PersonInfo>();
            var conn = new DBConnection();
            using (var sqlconn = new SqlConnection(conn.getConnection())){
                sqlconn.Open();
                Console.WriteLine("Coneccion a base de datos:" + sqlconn.State);
                SqlCommand cmd = new SqlCommand(Procedures.person_sales_list, sqlconn);
                cmd.Parameters.AddWithValue("id", json_ids);
                cmd.CommandType = CommandType.StoredProcedure;
                using (var res = cmd.ExecuteReader())
                {
                    while (res.Read())
                    {
                        PersonInfo tmp = new PersonInfo();
                        tmp.BusinessEntityID = Convert.ToInt32(res["BusinessEntityID"]);
                        tmp.name = res["FirstName"].ToString();
                        tmp.lastName = res["LastName"].ToString();

                        list.Add(tmp);
                    }
                }
            }
            return list;
        }

        //Lista de sales1


        //End sales1

        public UserModel auth (LoginCredentials auth){

            UserModel userTemp = new UserModel();
            var json_auth = JsonConvert.SerializeObject(auth);

            var conn = new DBConnection();

            using (var sqlconn = new SqlConnection(conn.getConnection()))
            {
                sqlconn.Open();
                Console.WriteLine( sqlconn.State);
                SqlCommand cmd = new SqlCommand(Procedures.auth, sqlconn);
                cmd.Parameters.AddWithValue("user_information", json_auth);
                cmd.CommandType = CommandType.StoredProcedure;
                using (var res = cmd.ExecuteReader())
                {
                    while (res.Read())
                    {
                        userTemp.BusinessEntityID = Convert.ToInt32(res["BusinessEntityID"]);
                        userTemp.FirstName = res["FirstName"].ToString();
                        userTemp.LastName = res["LastName"].ToString();
                        userTemp.PasswordHash = res["PasswordHash"].ToString();
                        userTemp.EmailAddress = res["EmailAddress"].ToString();
                    
                    }
                }
            }

            return userTemp;

        }
    }
}