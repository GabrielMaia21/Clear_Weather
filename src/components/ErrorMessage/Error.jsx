function Error({message}){
    if(!message){
        return null;
    }

    return(
        <p style={{color: "red"}}>{message}</p>
    )
}

export default Error;

// componente para exibir mensagem de erro
