import {
  Box,
  Flex,
  Text,
  Image,
  HStack,
  Link,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import background from "../assets/icons/home/bg-image.webp";
import busca from "../assets/icons/interface/busca.png";
import logo from "../assets/icons/home/logo.webp";
import { buscarCidade } from "../Services/GeoApi";

function Home2() {
  const [cidade, setCidade] = useState("");
  const [sugestoes, setSugestoes] = useState([]);
  const navigate = useNavigate();

  function enviar(envio) {
    envio.preventDefault();

    if (!cidade.trim()) return;
    navigate(`/search?city=${encodeURIComponent(cidade.trim())}`);
  }

  function selecionarCidade(item) {
    setCidade(item.cidade);
    navigate(`/search?city=${encodeURIComponent(item.cidade)}`);
  }

  async function alterarValor(e) {
    const valor = e.target.value;
    setCidade(valor);

    if (valor.length <= 3) {
      setSugestoes([]);
      return;
    }

    try {
      const resultados = await buscarCidade(valor);
      setSugestoes(resultados);
    } catch (error) {
      console.error("Erro ao buscar cidade: ", error);
      setSugestoes([]);
    }
  }

  return (
    <Flex
      direction="column"
      align="stretch"
      bgImage={`linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${background})`}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgPosition={"center bottom"}
      minH="100vh"
    >
      <Box
        w={"100%"}
        px={10}
        py={5}
        borderBottom={"1px solid #ffffff37"}
        backdropFilter="blur(10px)"
        bg="blackAlpha.300"
      >
        <HStack justify={"space-between"}>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={1}
            cursor={"default"}
          >
            <Image src={logo} w={"52px"} />
            <Text fontSize={28}>ClearWeather</Text>
          </Box>
          <Link
            href="https://github.com/GabrielMaia21/Clear_Weather"
            target="_blank"
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={2}
              
            >
              <FaGithub size={22} />
              <Text
                fontSize={22}
                fontWeight={"light"}
                textColor={"#ffffffda"}
                transition={"all 0.2s"}
                color={"white"}
              >
                Docs
              </Text>
            </Box>
          </Link>
        </HStack>
      </Box>

      <Box
        w={"100%"}
        flex={1}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={4}
        flexDir={"column"}
      >
        <Box display={"flex"} alignItems={"center"} gap={4} cursor={"default"}>
          <Image src={logo} w={"102px"} />
          <Text fontSize={56} textColor={"#ffffffda"}>
            ClearWeather
          </Text>
        </Box>
        <Box>
          <Text fontSize={25} textColor={"#ffffffda"}>
            Pesquise o clima de qualquer cidade em segundos.
          </Text>
        </Box>

        <form onSubmit={enviar}>
          <Box position={"relative"} overflow="visible">
            <InputGroup
              w="800px"
              boxShadow={"dark-lg"}
              borderRadius={12}
              opacity={"0.8"}
              mt={5}
              border="1px solid #ffffff1d"
            >
              <InputLeftElement w="70px" minH={"71px"}>
                <Image w={"28px"} src={busca} />
              </InputLeftElement>
              <Input
                value={cidade}
                minH={"71px"}
                type="text"
                fontSize={22}
                placeholder="Digite o nome da Cidade"
                _placeholder={{ color: "rgba(255, 255, 255, 0.8)" }}
                pl="65px"
                fontWeight={"light"}
                size={18}
                bg="#20304F"
                border="none"
                onChange={(envio) => alterarValor(envio)}
              />
            </InputGroup>
            {sugestoes.length > 0 && (
              <Box
                as="ul"
                position={"absolute"}
                top="100%"
                left={0}
                right={0}
                w="800px"
                bg="rgba(13, 18, 30, 0.95)"
                borderRadius="12px"
                zIndex={999}
                color="white"
                boxShadow="dark-lg"
                listStyleType="none"
                p={0}
                m={0}
              >
                {sugestoes.map((item, index) => (
                  <Box
                    as="li"
                    bg="rgba(13, 18, 30, 1)"
                    p={"10px 12px"}
                    fontSize={18}
                    key={index}
                    color="white"
                    zIndex={999}
                    cursor={"pointer"}
                    opacity={0.8}
                    fontWeight={"light"}
                    _hover={{
                      bg: "#172035",
                    }}
                    onClick={() => selecionarCidade(item)}
                  >
                    {item.cidade}, {item.pais}
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </form>
      </Box>

      <Box
        w={"100%"}
        px={10}
        py={5}
        display={"flex"}
        justifyContent={"center"}
        mb={6}
      >
        <Text fontSize={25} textColor={"#ffffffda"} fontWeight={"light"}>
          Clima em tempo real via {" "}
          <Link
            href="https://openweathermap.org/api"
            target="_blank"
            fontWeight={"medium"}
          >
            
            OpenWeather API
          </Link>
        </Text>
      </Box>
    </Flex>
  );
}

export default Home2;
