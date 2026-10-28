namespace BackEndBiblioteca.Services
{
    public class CodigoBarrasService
    {
        public string GerarCodigo(int exemplarId)
        {
            return $"EX{exemplarId:D10}";
        }
    }
}