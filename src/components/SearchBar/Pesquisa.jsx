import { useState } from "react";

function Pesquisa({onPesquisa}){

    const [cidade,setCidade] = useState("");

    function enviar(envio){
        envio.preventDefault();
        if(!cidade.trim()) return;
        onPesquisa(cidade);
        setCidade("");
    }

    return(
        <form className="container_pesquisa" onSubmit={enviar}>
        <input className="input_pesquisa" type="text" placeholder="🔍 Digite o nome da Cidade" value={cidade} onChange={(envio) => setCidade(envio.target.value)}/>
        <button className="btn_pesquisar" type="submit">Buscar</button>
        </form>

    )

}

export default Pesquisa;

//componente com o formulario de input e botao