import {
  Box,
  Text,
  Flex,
  Image
} from "@chakra-ui/react";

import iconSol from "../../assets/icons/clima/ceu-limpo-dia.webp";
import iconLua from "../../assets/icons/clima/ceu-limpo-noite-miniatura.webp"
import iconSolNublado from "../../assets/icons/clima/poucas-nuvens-dia.webp"
import iconLuaNublada from "../../assets/icons/clima/poucas-nuvens-noite.webp"
import iconNublado from "../../assets/icons/clima/nublado.webp";
import iconLuaChuva from "../../assets/icons/clima/chuva-leve-noite.webp"
import iconSolChuva from "../../assets/icons/clima/chuva-leve-dia.webp"
import iconTempestade from "../../assets/icons/clima/tempestade.webp"
import iconNeve from "../../assets/icons/clima/neve.webp"

function Previsao3Horas({ horas }) {
  if (!horas || horas.length === 0) return null;

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
    }

  return (
    <Box
      bg="rgba(32, 43, 61, 1)"
      borderRadius="2xl"
      p={5}
      mt={4}
      mb={4}
      w="100%"
      maxW="520px"
      boxShadow="xl"
    >
      {/* Título */}
      <Text
        fontSize="sm"
        color="whiteAlpha.700"
        mb={4}
      >
        Previsão de hoje
      </Text>

      {/* Linha de horários */}
      <Flex justify="space-between" align="center">
        {horas.map((item, index) => (
          <Flex
            key={index}
            direction="column"
            align="center"
            flex="1"
            position="relative"
          >
            {/* Hora */}
            <Text fontSize="sm" mb={2}>
              {item.hora}
            </Text>

            {/* Ícone */}
            <Image
              src={iconesClima[item.icon] || `https://openweathermap.org/img/wn/${item.icon}@2x.png`}
              alt="Ícone clima"
              boxSize="40px"
              mb={2}
            />

            {/* Temperatura */}
            <Text fontWeight="medium">
              {item.temp}°
            </Text>

            {/* Divisor vertical */}
            {index < horas.length - 1 && (
              <Box
                position="absolute"
                right="0"
                top="15%"
                h="70%"
                w="1px"
                bg="whiteAlpha.200"
              />
            )}
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}

export default Previsao3Horas;
