import { useState } from "react";
import { buscarCidade } from "../../Services/GeoApi";

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
      <input
        className="input_pesquisa"
        type="text"
        placeholder="🔍 Digite o nome da Cidade"
        value={cidade}
        onChange={(envio) => alterarValor(envio)}
      />
      {sugestoes.length > 0 && (
        <ul className="lista-sugestao">
          {sugestoes.map((item, index) => (
            <li
              onClick={() => selecionarCidade(item)}
              className="lista-item"
              key={index}
            >
              {item.cidade}, {item.pais}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default Pesquisa;

//componente com o formulario de input e botao
