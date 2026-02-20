import { Box, Flex, Image, Text } from "@chakra-ui/react";

import iconSol from "../../assets/icons/clima/ceu-limpo-dia.webp";
import iconLua from "../../assets/icons/clima/ceu-limpo-noite.webp";
import iconSolNublado from "../../assets/icons/clima/poucas-nuvens-dia.webp";
import iconLuaNublada from "../../assets/icons/clima/poucas-nuvens-noite.webp";
import iconNublado from "../../assets/icons/clima/nublado.webp";
import iconLuaChuva from "../../assets/icons/clima/chuva-leve-noite.webp";
import iconSolChuva from "../../assets/icons/clima/chuva-leve-dia.webp";
import iconTempestade from "../../assets/icons/clima/tempestade.webp";
import iconNeve from "../../assets/icons/clima/neve.webp";

function Cards({ clima, chanceChuva }) {
  if (!clima) return null;

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

  return (
    <Box
      p={{ base: 4, md: 5 }}
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
      alignItems={{ base: "center", md: "flex-start" }}
      h={{ base: "auto", md: "218px" }}
      gap={{ base: 6, md: 0 }}
      textAlign={{ base: "center", md: "left" }}
    >
      <Box>
        <Box display="flex" flexDir="column" gap={1}>
          <Text fontSize={{ base: "24px", md: "36px" }}>
            {clima.cidade}
          </Text>

          <Text
            color="#AAB4C3"
            fontSize={{ base: "12px", md: "14px" }}
          >
            Chance de Chuva: {chanceChuva ?? 0}%
          </Text>
        </Box>

        <Box display="flex" mt={{ base: 4, md: 6 }} justifyContent={{ base: "center", md: "flex-start" }}>
          <Text fontSize={{ base: "48px", md: "64px" }}>
            {clima.temp}°C
          </Text>
        </Box>
      </Box>

      <Box w={{ base: "120px", md: "150px" }}>
        <Image
          w={{ base: "150px", md: "300px" }}
          src={
            iconesClima[clima.icon] ||
            `https://openweathermap.org/img/wn/${clima.icon}@2x.png`
          }
          alt={clima.descricao}
        />
      </Box>
    </Box>
  );
}

export default Cards;

