import { useState } from "react";
import {
  Input,
  InputGroup,
  Image,
  InputLeftElement,
  Text,
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
    <form className="container_pesquisa" onSubmit={enviar}>
      <InputGroup w="897px">
        <InputLeftElement w="60px" minH={"51px"}>
          <Image w={"24px"} src={busca} />
        </InputLeftElement>
        <Input
          minH={"51px"}
          type="text"
          placeholder="Digite o nome da Cidade"
          _placeholder={{color: "rgba(255, 255, 255, 0.8)"}}
          value={cidade}
          pl="50px"
          size={18}
          bg="#202B3D"
          border="none"
          borderRadius={16}
          onChange={(envio) => alterarValor(envio)}
        />
      </InputGroup>
      {sugestoes.length > 0 && (
        <ul className="lista-sugestao">
          {sugestoes.map((item, index) => (
            <Text
              bg="rgba(13, 18, 30, 1);"
              onClick={() => selecionarCidade(item)}
              className="lista-item"
              key={index}
            >
              {item.cidade}, {item.pais}
            </Text>
          ))}
        </ul>
      )}
    </form>
  );
}

export default Pesquisa;

//componente com o formulario de input e botao
