import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Pesquisa from "../components/SearchBar/Pesquisa";
import Cards from "../components/WatherCard/Cards";
import Error from "../components/ErrorMessage/Error";
import {
  pesquisarPorCidade,
  previsao5Dias,
  previsao3Horas,
} from "../Services/Api";
import CondicoesClima from "../components/Condicoes/CondicoesClima";
import Previsao3Horas from "../components/Previsao3horas/Previsao3horas";
import Previsao from "../components/Previsao/Previsao";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

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

  const previsao3HorasQuery = useQuery({
    queryKey: ["previsao3horas", cidade],
    queryFn: () => previsao3Horas(cidade),
    enabled: !!cidade,
  });

  function pesquisar(cidadeDigitada) {
    setCidade(cidadeDigitada.trim());
  }

  return (
    <main className="container_principal">
      <Pesquisa onPesquisa={pesquisar} />

      {(climaQuery.isLoading || previsaoQuery.isLoading) && (
        <p>Carregando...</p>
      )}

      {(climaQuery.isError || previsaoQuery.isError) && (
        <Error message="Cidade não encontrada" />
      )}

      {climaQuery.data && (
        <Box display="flex">
          <div className="col_left">
            <Cards
              clima={climaQuery.data}
              chanceChuva={previsaoQuery.data?.[0]?.chanceChuva ?? 0}
            />
            <Previsao3Horas horas={previsao3HorasQuery.data} />
            <CondicoesClima
              clima={climaQuery.data}
              chanceChuva={previsaoQuery.data?.[0]?.chanceChuva ?? 0}
            />
          </div>

          {previsaoQuery.data?.length > 0 && (
            <Box>
              <Previsao previsao={previsaoQuery.data}/>
            </Box>
          )}
        </Box>
      )}
    </main>
  );
}
export default Home;

//componente principal
