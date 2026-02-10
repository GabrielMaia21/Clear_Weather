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
        <Box display="Flex">
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
              <Box
                bg="rgba(32, 43, 61, 1)"
                borderRadius="xl"
                p={5} // aumentei um pouco o padding geral
                w="320px"
                h="627px"
                boxShadow="lg"
                display="flex"
                flexDirection="column"
              >
                <Text
                  fontSize="sm"
                  color="white"
                  mb={5} // mais espaço abaixo do título
                  fontWeight="medium"
                >
                  Previsão de 5 dias
                </Text>

                {/* Container principal dos dias */}
                <Box
                  flex="1" // ocupa todo o espaço restante
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-evenly" // distribui igualmente o espaço
                  gap={3} // espaço mínimo entre os itens
                >
                  {previsaoQuery.data.map((dia, index) => (
                    <Box key={index}>
                      <Flex
                        align="center"
                        justify="space-between"
                        px={3} // padding lateral interno
                        py={2}
                        borderRadius="md"
                        _hover={{ bg: "whiteAlpha.50" }} // feedback visual opcional
                        transition="background 0.2s"
                      >
                        <Text
                          fontSize="16px"
                          minW="90px" // evita quebra em dias longos
                          fontWeight="500"
                        >
                          {dia.data}
                        </Text>

                        <Image
                          src={`https://openweathermap.org/img/wn/${dia.icon}@2x.png`} // @2x fica mais nítido
                          alt={dia.descricao}
                          boxSize="48px" // ícone maior = melhor legibilidade
                          fallbackSrc="https://via.placeholder.com/48?text=?" // boa prática
                        />

                        <Text
                          fontSize="18px"
                          fontWeight="bold"
                          minW="60px"
                          textAlign="right"
                        >
                          {dia.temp}°C
                        </Text>
                      </Flex>

                      {index < previsaoQuery.data.length - 1 && (
                        <Box h="1px" bg="whiteAlpha.200" mx={3} my={1} />
                      )}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      )}
    </main>
  );
}
export default Home;

//componente principal
