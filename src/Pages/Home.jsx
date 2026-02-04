import { useState } from "react";
import { useQuery} from "@tanstack/react-query";
import Pesquisa from "../components/SearchBar/Pesquisa";
import Cards from "../components/WatherCard/Cards";
import Error from "../components/ErrorMessage/Error";
import { pesquisarPorCidade, previsao5Dias } from "../Services/Api";
import CondicoesClima from "../components/Condicoes/CondicoesClima";

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

      {climaQuery.data && (
  <div className="container_layout">

    <div className="col_left">
      <Cards clima={climaQuery.data} />
      <CondicoesClima clima={climaQuery.data} chanceChuva={previsaoQuery.data?.[0]?.chanceChuva ?? 0} />
    </div>

    {previsaoQuery.data?.length > 0 && (
      <div className="col_right">
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
      </div>
    )}

  </div>
)}
    </main>
  );
}
export default Home;

//componente principal
