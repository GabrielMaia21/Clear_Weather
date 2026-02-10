import {
  Box,
  Text,
  Flex,
  Image
} from "@chakra-ui/react";

function Previsao3Horas({ horas }) {
  if (!horas || horas.length === 0) return null;

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
              src={`https://openweathermap.org/img/wn/${item.icon}.png`}
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
