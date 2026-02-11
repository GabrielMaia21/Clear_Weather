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
  if(!previsao) return null

  return (
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
          {previsao.map((dia, index) => {
            return(
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
                  src={iconesClima[dia.icon] || `https://openweathermap.org/img/wn/${dia.icon}@2x.png`}
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

              {index < previsao.length - 1 && (
                <Box h="1px" bg="whiteAlpha.200" mx={3} my={1} />
              )}
            </Box>
          )
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Previsao;
