namespace apiPersonaNet.Database
{
    public class DBConnection
    {
        private string connectionString = string.Empty; 

        public DBConnection(){

            var builder = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("appsettings.json").Build();
            connectionString = builder.GetSection("ConnectionStrings:ConnectionString").Value;
        }

        public String getConnection()
        {
            return connectionString;
        }
    }
}