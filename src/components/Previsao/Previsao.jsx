import { Box, Flex, Text, Image } from "@chakra-ui/react";

import iconSol from "../../assets/icons/clima/ceu-limpo-dia.webp";
import iconLua from "../../assets/icons/clima/ceu-limpo-noite-miniatura.webp";
import iconSolNublado from "../../assets/icons/clima/poucas-nuvens-dia.webp";
import iconLuaNublada from "../../assets/icons/clima/poucas-nuvens-noite.webp";
import iconNublado from "../../assets/icons/clima/nublado.webp";
import iconLuaChuva from "../../assets/icons/clima/chuva-leve-noite.webp";
import iconSolChuva from "../../assets/icons/clima/chuva-leve-dia.webp";
import iconTempestade from "../../assets/icons/clima/tempestade.webp";
import iconNeve from "../../assets/icons/clima/neve.webp";

const iconesClima = {
  "01d": iconSol,
  "01n": iconLua,
  "02d": iconSolNublado,
  "02n": iconLuaNublada,
  "03d": iconNublado,
  "03n": iconNublado,
  "04d": iconNublado,
  "04n": iconNublado,
  "10d": iconSolChuva,
  "10n": iconLuaChuva,
  "11d": iconTempestade,
  "11n": iconTempestade,
  "13d": iconNeve,
  "13n": iconNeve,
  "50d": iconNublado,
  "50n": iconNublado,
};

function Previsao({ previsao }) {
  if (!previsao) return null;

  return (
    <Box>
      <Box
        boxShadow="dark-lg"
        bg="rgba(32, 43, 61, 1)"
        borderRadius="xl"
        p={{ base: 4, md: 5 }}
        w="100%"
        maxW="897px"
        h={{ base: "auto", md: "810px" }}
        display="flex"
        flexDirection="column"
      >
        <Text
          fontSize={{ base: "14px", md: "15px" }}
          m={1}
          color="whiteAlpha.700"
          mb={5}
          fontWeight="medium"
        >
          Previsão de 5 dias
        </Text>

        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          gap={{ base: 2, md: 3 }}
        >
          {previsao.map((dia, index) => {
            return (
              <Box key={index}>
                <Flex
                  align="center"
                  justify="space-between"
                  px={{ base: 2, md: 3 }}
                  py={{ base: 4, md: 8 }}
                  borderRadius="md"
                  _hover={{ bg: "whiteAlpha.50" }}
                  transition="background 0.2s"
                >
                  <Text
                    fontSize={{ base: "14px", md: "16px" }}
                    minW={{ base: "70px", md: "90px" }}
                    fontWeight="500"
                  >
                    {dia.data}
                  </Text>

                  <Image
                    src={
                      iconesClima[dia.icon] ||
                      `https://openweathermap.org/img/wn/${dia.icon}@2x.png`
                    }
                    alt={dia.descricao}
                    boxSize={{ base: "40px", md: "52px" }}
                    fallbackSrc="https://via.placeholder.com/48?text=?"
                  />

                  <Text
                    fontSize={{ base: "18px", md: "22px" }}
                    fontWeight="bold"
                    minW={{ base: "50px", md: "60px" }}
                    textAlign="right"
                  >
                    {dia.temp}°C
                  </Text>
                </Flex>

                {index < previsao.length - 1 && (
                  <Box h="1px" bg="whiteAlpha.200" mx={3} my={1} />
                )}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Previsao;
