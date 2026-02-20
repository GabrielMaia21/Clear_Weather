import { useState } from "react";
import {
  Input,
  InputGroup,
  Image,
  InputLeftElement,
  Text,
  Box,
} from "@chakra-ui/react";
import { buscarCidade } from "../../Services/GeoApi";
import busca from "../../assets/icons/interface/busca.png";

function Pesquisa({ onPesquisa }) {
  const [cidade, setCidade] = useState("");
  const [sugestoes, setSugestoes] = useState([]);

  function enviar(envio) {
    envio.preventDefault();

    if (!cidade.trim()) return;
    setSugestoes([]);
    onPesquisa(cidade);
    setCidade("");
  }

  function selecionarCidade(item) {
    setCidade(item.cidade);
    setSugestoes([]);
    setCidade("");
    onPesquisa(item.cidade);
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
    <Box as={"form"} onSubmit={enviar} w="100%">
      <Box
        position={"relative"}
        overflow="visible"
        mx="auto"
        w="100%"
        maxW={{ base: "100%", sm: "100%", md: "100%", lg: "897px" }}
      >
        <InputGroup
          w="100%"
          maxW={{ lg: "897px", md: "100%", sm: "100%", base: "100%" }}
          boxShadow={"dark-lg"}
          mx={"auto"}
          borderRadius={12}
          opacity={"0.8"}
          mt={{ md: 5, base: 7 }}
          border="1px solid #ffffff1d"
        >
          <InputLeftElement
            w={{ md: "70px", sm: "55px", base: "40px" }}
            h={{ lg: "51px", md: "45px", sm: "39px", base: "33px" }}
          >
            <Image w={{ md: "26px", sm: "24px", base: "20px" }} src={busca} />
          </InputLeftElement>
          <Input
            value={cidade}
            h={{ lg: "51px", md: "45px", sm: "39px", base: "33px" }}
            type="text"
            fontSize={{ lg: "18px", md: "16px", sm: "14px", base: "13px" }}
            placeholder="Digite o nome da Cidade"
            _placeholder={{ color: "rgba(255, 255, 255, 0.8)" }}
            pl={{ md: "65px", sm: "55px" }}
            fontWeight={"light"}
            size={18}
            bg="#202B3D"
            border="none"
            onChange={(envio) => alterarValor(envio)}
          />
        </InputGroup>
        {sugestoes.length > 0 && (
          <Box
            as="ul"
            position={"absolute"}
            top="101%"
            left={0}
            right={0}
            w={"100%"}
            mt={"6px"}
            bg="rgba(13, 18, 30, 0.95)"
            color="white"
            boxShadow="dark-lg"
            listStyleType="none"
            borderRadius={"16px"}
            p={0}
            m={0}
          >
            {sugestoes.map((item, index) => (
              <Box
                as="li"
                bg="rgba(13, 18, 30, 1)"
                p={{ md: "10px 12px", sm: "12px", base: "10px" }}
                fontSize={{ md: "18px", sm: "15px" }}
                key={index}
                color="white"
                cursor={"pointer"}
                opacity={0.9}
                fontWeight={"light"}
                _hover={{
                  bg: "#172035",
                }}
                transition={"0.3s all ease-out"}
                borderRadius={"6px"}
                onClick={() => selecionarCidade(item)}
              >
                {item.cidade}, {item.pais}
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Pesquisa;

//componente com o formulario de input e botao
