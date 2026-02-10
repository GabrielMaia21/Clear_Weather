import { Box, Flex, Image, Text } from "@chakra-ui/react";
function Cards({ clima, chanceChuva }) {
  if (!clima) return null;

  return (
    <div className="container_cards">
      <div className="info">
        <div className="linha-cima">
          <Text fontSize={36}>{clima.cidade}</Text>
          <Text fontSize={14}>Chance de Chuva: {chanceChuva ??0}%</Text>
        </div>

        <div className="linha-baixo">
          <Text fontSize={64}>{clima.temp}°C</Text>
        </div>
      </div>

      <div className="img">
        <Image
          w={160}
          h={140}
          src={`https://openweathermap.org/img/wn/${clima.icon}@2x.png`}
          alt={clima.descricao}
        />
      </div>
    </div>
  );
}

export default Cards;

//componente dos cards mostrando o clima