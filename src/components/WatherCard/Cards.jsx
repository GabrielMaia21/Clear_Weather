import { Box, Flex, Image, Text } from "@chakra-ui/react";

import iconSol from "../../assets/icons/clima/ceu-limpo-dia.webp";
import iconLua from "../../assets/icons/clima/ceu-limpo-noite.webp"
import iconSolNublado from "../../assets/icons/clima/poucas-nuvens-dia.webp"
import iconLuaNublada from "../../assets/icons/clima/poucas-nuvens-noite.webp"
import iconNublado from "../../assets/icons/clima/nublado.webp";
import iconLuaChuva from "../../assets/icons/clima/chuva-leve-noite.webp"
import iconSolChuva from "../../assets/icons/clima/chuva-leve-dia.webp"
import iconTempestade from "../../assets/icons/clima/tempestade.webp"
import iconNeve from "../../assets/icons/clima/neve.webp"

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
  }

  return (
    <div className="container_cards">
      <div className="info">
        <div className="linha-cima">
          <Text fontSize={36}>{clima.cidade}</Text>
          <Text fontSize={14}>Chance de Chuva: {chanceChuva ?? 0}%</Text>
        </div>

        <div className="linha-baixo">
          <Text fontSize={64}>{clima.temp}°C</Text>
        </div>
      </div>

      <Box w={"150px"}>
        <Image
          w={300}
          src={iconesClima[clima.icon] || `https://openweathermap.org/img/wn/${clima.icon}@2x.png`}
          alt={clima.descricao}
        />
      </Box>
    </div>
  );
}

export default Cards;

//componente dos cards mostrando o clima
