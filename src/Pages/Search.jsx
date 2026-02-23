import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { Box, Text, Spinner, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { chakra } from "@chakra-ui/react";
const MotionBox = chakra(motion.div);

import Pesquisa from "../components/SearchBar/Pesquisa";
import Cards from "../components/WeatherCard/Cards";
import Error from "../components/ErrorMessage/Error";
import {
  pesquisarPorCidade,
  previsao5Dias,
  previsao3Horas,
} from "../Services/Api";
import CondicoesClima from "../components/Condicoes/CondicoesClima";
import Previsao3Horas from "../components/Previsao3horas/Previsao3horas";
import Previsao from "../components/Previsao/Previsao";

function Search() {
  const [cidade, setCidade] = useState("");
  const [searchParams] = useSearchParams();
  const cityParam = searchParams.get("city");

  useEffect(() => {
    if (cityParam) setCidade(cityParam);
  }, [cityParam]);

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

  if (
    climaQuery.isLoading ||
    previsaoQuery.isLoading ||
    previsao3HorasQuery.isLoading
  ) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minH="100vh"
      >
        <VStack>
          <Spinner size="xl" borderWidth="4px" mb={2} />
          <Text>Carregando...</Text>
        </VStack>
      </Box>
    );
  }

  return (
    <Box
      as="main"
      display={"flex"}
      justifyContent={"center"}
      w="100vw"
      h="100%"
      mt={8}
      px={4}
      pb={{ base: 12, sm: 12, md: 6}}
    >
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        gap={8}
        alignItems="flex-start"
        w="100%"
        maxW="1340px"
      >
        <MotionBox
          display="flex"
          gap={6}
          flexDir={"column"}
          w="100%"
          maxW="897px"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Pesquisa onPesquisa={pesquisar} />

          {(climaQuery.isError || previsaoQuery.isError) && (
            <Error message="Cidade não encontrada" />
          )}

          <Cards
            clima={climaQuery.data}
            chanceChuva={previsaoQuery.data?.[0]?.chanceChuva ?? 0}
          />

          <Previsao3Horas horas={previsao3HorasQuery.data} />

          <CondicoesClima
            clima={climaQuery.data}
            chanceChuva={previsaoQuery.data?.[0]?.chanceChuva ?? 0}
          />
        </MotionBox>

        {climaQuery.data && previsaoQuery.data?.length > 0 && (
          <MotionBox
            alignSelf={{ lg: "end", base: "auto" }}
            w="100%"
            maxW={{ lg: "420px", md: "100%", base: "100%" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Previsao previsao={previsaoQuery.data} />
          </MotionBox>
        )}
      </Box>
    </Box>
  );
}
export default Search;
//componente principal
