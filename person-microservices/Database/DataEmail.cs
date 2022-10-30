using System.Runtime.InteropServices.ComTypes;
using System;
using apiPersonaNet.Models;
using apiPersonaNet.StoredProcedures;
using Newtonsoft.Json;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;

using Microsoft.AspNetCore.Cors;

namespace apiPersonaNet.Database
{
    public class DataEmail
    {

        public DataEmail() { }
        public List<UserModel> List()
        {
            var list = new List<UserModel>();

            var conn = new DBConnection();
            using (var sqlconn = new SqlConnection(conn.getConnection()))
            {
                sqlconn.Open();
                Console.WriteLine("Coneccion a base de datos:" + sqlconn.State);
                SqlCommand cmd = new SqlCommand("SP_EmailPerson_Add_Steven", sqlconn);
                cmd.CommandType = CommandType.StoredProcedure;
                using (var res = cmd.ExecuteReader())
                {
                    while (res.Read())
                    {
                        UserModel tmp = new UserModel();
                        tmp.BusinessEntityID = Convert.ToInt32(res["BusinessEntityID"]);
                        tmp.FirstName = res["FirstName"].ToString();
                        tmp.LastName = res["LastName"].ToString();
                        list.Add(tmp);
                    }
                }
            }
            return list;
        }

        public List<UserModel> GetEmailByID(int id)
        {
            var list = new List<UserModel>();
            var conn = new DBConnection();
            using (var sqlconn = new SqlConnection(conn.getConnection()))
            {
                sqlconn.Open();
                Console.WriteLine("Coneccion a base de datos:" + sqlconn.State);
                SqlCommand cmd = new SqlCommand("SP_GetEmail_Steven", sqlconn);
                cmd.Parameters.AddWithValue("@id", id);
                cmd.CommandType = CommandType.StoredProcedure;

                using (var res = cmd.ExecuteReader())
                {
                    while (res.Read())
                    {
                        UserModel tmp = new UserModel();
                        tmp.BusinessEntityID = Convert.ToInt32(res["BusinessEntityID"]);
                        tmp.EmailAddress = res["EmailAddress"].ToString();
                        tmp.EmailAddressID = Convert.ToInt32(res["EmailAddressID"]);
                        list.Add(tmp);
                    }
                }
            }
            return list;
        }

        public bool Add(UserModel data)
        {
                var conn = new DBConnection();
                using (var sqlconn = new SqlConnection(conn.getConnection()))
                {
                    sqlconn.Open();
                    var cmd = new SqlCommand("SP_PersonEmail_Add_UpdateEmail", sqlconn);
                    cmd.Parameters.AddWithValue("@BusinessEntityID", data.BusinessEntityID);
                    cmd.Parameters.AddWithValue("@EmailAddress", data.EmailAddress);
                    cmd.Parameters.AddWithValue("@EmailAddressID", data.EmailAddressID);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.ExecuteNonQuery();
                }
            return true;
        }

        public bool Delete(int id)
        {
            var list = new List<UserModel>();
            var conn = new DBConnection();
            using (var sqlconn = new SqlConnection(conn.getConnection()))
            {
                sqlconn.Open();
                Console.WriteLine(" Delete Coneccion a base de datos:" + sqlconn.State);
                SqlCommand cmd = new SqlCommand("SP_PersonEmail_Delete", sqlconn);
                cmd.Parameters.AddWithValue("@id", id);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.ExecuteNonQuery();
            }
            return true;
        }

    }
}
