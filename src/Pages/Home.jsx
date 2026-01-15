import { useState } from "react";

import  Pesquisa  from "../components/SearchBar/Pesquisa";
import  Cards  from "../components/WatherCard/Cards";
import  Error  from "../components/ErrorMessage/Error";
import { pesquisarPorCidade } from "../Services/Api";

function Home(){
    const [clima,setClima] = useState(null);
    const [erro,setErro] = useState("");
    const [carregamento,setCarregamento] = useState(false);

    async function pesquisar(cidade) {
        try{
            setCarregamento(true);
            setErro("")

            const data = await  pesquisarPorCidade(cidade);
            setClima(data)
        } catch (err){
            setClima(null)
            setErro(err.message)
        } finally{
            setCarregamento(false)
        }
    }

    return(
        <main className="container_principal">
            <h1>Previsão do Tempo</h1>

            <Pesquisa onPesquisa={pesquisar}/>

            {carregamento && <p>Carregando...</p>}

            <Error message={erro}/>

            <Cards clima={clima}/>
        </main>
    )
}

export default Home;

//componente principal
