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
      p={{base: 3, md: 5, sm: 4}}
      mt={4}
      mb={4}
      w="100%"
      maxW={{base:"100%", lg:"container.md"}}
      boxShadow="dark-lg"
    >
      {/* Título */}
      <Text
        fontSize={{sm:"sm", base: "xs", md:"md"}}
        color="whiteAlpha.700"
        mb={{base: "3", md:"4"}}
      >
        Previsão de hoje
      </Text>

      {/* Linha de horários */}
      <Flex 
      justify="space-between" 
      align="center"
      flexWrap={{base:"wrap", md:"nowrap"}}
      gap={{base: 4, md: 0}}
      >
        {horas.map((item, index) => (
          <Flex
            key={index}
            direction="column"
            align="center"
            flex="1"
            minW={{base: "30%", sm: "22%", md: "auto"}}
            position="relative"
          >
            {/* Hora */}
            <Text fontSize={{sm: "sm", base:"xs"}}
            mb={2}>
              {item.hora}
            </Text>

            {/* Ícone */}
            <Image
              src={iconesClima[item.icon] || `https://openweathermap.org/img/wn/${item.icon}@2x.png`}
              alt="Ícone clima"
              boxSize={{base:"32px", md:"40px", sm:"36px"}}
              mb={2}
            />

            {/* Temperatura */}
            <Text fontWeight="medium"
            fontSize={{base: "sm", md:"md"}}
            >
              {item.temp}°
            </Text>

            {/* Divisor vertical */}
            {index < horas.length - 1 && (
              <Box
                display={{base:"none", md: "block"}}
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
