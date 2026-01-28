import { useState } from "react";
import { useQuery} from "@tanstack/react-query";
import Pesquisa from "../components/SearchBar/Pesquisa";
import Cards from "../components/WatherCard/Cards";
import Error from "../components/ErrorMessage/Error";
import { pesquisarPorCidade, previsao5Dias } from "../Services/Api";

function Home() {
  const [cidade, setCidade] = useState("");

  const climaQuery = useQuery({
    queryKey: ["clima", cidade],
    queryFn: () => pesquisarPorCidade(cidade),
    enabled: !!cidade,
  });

  const previsaoQuery = useQuery({
    queryKey: ["previsao", cidade],
    queryFn: () => previsao5Dias(cidade),
    enabled: !!cidade,
  });

  function pesquisar(cidadeDigitada) {
    setCidade(cidadeDigitada.trim());
  }

  return (
    <main className="container_principal">
      <h1>Previsão do Tempo</h1>

      <Pesquisa onPesquisa={pesquisar} />

      {(climaQuery.isLoading || previsaoQuery.isLoading) && (<p>Carregando...</p>)}

      {(climaQuery.isError || previsaoQuery.isError) && (<Error message="Cidade não encontrada" />)}

      {climaQuery.data && (<Cards clima={climaQuery.data} />)}

      {previsaoQuery.data?.length > 0 && (
        <div className="container_forecast">
          {previsaoQuery.data.map((dia, index) => (
            <div className="card_forecast" key={index}>
              <h3>{dia.data}</h3>
              <img
                src={`https://openweathermap.org/img/wn/${dia.icon}.png`}
                alt={dia.descricao}
              />
              <p>{dia.temp}°C</p>
              <p>{dia.descricao}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
export default Home;

//componente principal
