import { Box,Text,SimpleGrid,Flex,Icon} from "@chakra-ui/react";
import { WiThermometer,WiStrongWind,WiHumidity,WiRain} from "react-icons/wi";

function CondicoesClima({ clima, chanceChuva }) {
  if (!clima) return null;

  return (
    <Box
      bg="rgba(32, 43, 61, 1)"
      borderRadius="2xl"
      p={5}
      w="100%"
      maxW="520px"
      boxShadow="dark-lg"
    >
      <Text
        fontSize="sm"
        color="whiteAlpha.700"
        mb={4}
      >
        Condições climáticas
      </Text>

      <SimpleGrid columns={2} spacing={6}>
        <Flex align="center" gap={3}>
          <Icon as={WiThermometer} boxSize={6} color="whiteAlpha.700" />
          <Box>
            <Text fontSize="sm" color="whiteAlpha.600">
              Sensação térmica
            </Text>
            <Text fontSize="lg" fontWeight="medium">
              {clima.sensacao}°
            </Text>
          </Box>
        </Flex>

        <Flex align="center" gap={3}>
          <Icon as={WiStrongWind} boxSize={6} color="whiteAlpha.700" />
          <Box>
            <Text fontSize="sm" color="whiteAlpha.600">
              Velocidade do vento
            </Text>
            <Text fontSize="lg" fontWeight="medium">
              {clima.vento} km/h
            </Text>
          </Box>
        </Flex>

        <Flex align="center" gap={3}>
          <Icon as={WiRain} boxSize={6} color="whiteAlpha.700" />
          <Box>
            <Text fontSize="sm" color="whiteAlpha.600">
              Chance de chuva
            </Text>
            <Text fontSize="lg" fontWeight="medium">
              {chanceChuva ?? 0}%
            </Text>
          </Box>
        </Flex>

        <Flex align="center" gap={3}>
          <Icon as={WiHumidity} boxSize={6} color="whiteAlpha.700" />
          <Box>
            <Text fontSize="sm" color="whiteAlpha.600">
              Umidade do ar
            </Text>
            <Text fontSize="lg" fontWeight="medium">
              {clima.umidade}%
            </Text>
          </Box>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}

export default CondicoesClima;

