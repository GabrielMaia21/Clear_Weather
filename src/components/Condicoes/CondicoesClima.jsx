import { Box, Text, SimpleGrid, Flex, Icon } from "@chakra-ui/react";
import { WiThermometer, WiStrongWind, WiHumidity, WiRain } from "react-icons/wi";

function CondicoesClima({ clima, chanceChuva }) {
  if (!clima) return null;

  return (
    <Box
      bg="rgba(32, 43, 61, 1)"
      borderRadius="2xl"
      p={{ base: 4, md: 5 }}
      w="100%"
      maxW="897px"
      h={{ base: "auto", md: "252px" }}
      boxShadow="dark-lg"
    >
      <Text
        fontSize={{ base: "14px", md: "15px" }}
        m={1}
        color="whiteAlpha.700"
        mb={4}
      >
        Condições climáticas
      </Text>

      <SimpleGrid
        px={{ base: 2, md: 5 }}
        columns={{ base: 2, md: 2 }}
        spacing={{ base: 6, md: 10 }}
      >
        <Flex align="center" gap={3}>
          <Icon
            as={WiThermometer}
            boxSize={{ base: 6, md: 8 }}
            color="whiteAlpha.700"
          />
          <Box>
            <Text fontSize={{ base: "14px", md: "16px" }} color="whiteAlpha.600">
              Sensação térmica
            </Text>
            <Text fontSize={{ base: "16px", md: "18px" }} fontWeight="medium">
              {clima.sensacao}°
            </Text>
          </Box>
        </Flex>

        <Flex align="center" gap={3}>
          <Icon
            as={WiStrongWind}
            boxSize={{ base: 6, md: 8 }}
            color="whiteAlpha.700"
          />
          <Box>
            <Text fontSize={{ base: "14px", md: "16px" }} color="whiteAlpha.600">
              Velocidade do vento
            </Text>
            <Text fontSize={{ base: "16px", md: "18px" }} fontWeight="medium">
              {clima.vento} km/h
            </Text>
          </Box>
        </Flex>

        <Flex align="center" gap={3}>
          <Icon
            as={WiRain}
            boxSize={{ base: 6, md: 8 }}
            color="whiteAlpha.700"
          />
          <Box>
            <Text fontSize={{ base: "14px", md: "16px" }} color="whiteAlpha.600">
              Chance de chuva
            </Text>
            <Text fontSize={{ base: "16px", md: "18px" }} fontWeight="medium">
              {chanceChuva ?? 0}%
            </Text>
          </Box>
        </Flex>

        <Flex align="center" gap={3}>
          <Icon
            as={WiHumidity}
            boxSize={{ base: 6, md: 8 }}
            color="whiteAlpha.700"
          />
          <Box>
            <Text fontSize={{ base: "14px", md: "16px" }} color="whiteAlpha.600">
              Umidade do ar
            </Text>
            <Text fontSize={{ base: "16px", md: "18px" }} fontWeight="medium">
              {clima.umidade}%
            </Text>
          </Box>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}

export default CondicoesClima;
