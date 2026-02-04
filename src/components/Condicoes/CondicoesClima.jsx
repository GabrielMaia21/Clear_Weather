function CondicoesClima ({clima, chanceChuva}){
    if(!clima) return null;

    return ( 

       <div className="container_condicoes">
         <h2>Condições Climáticas</h2>
         <p>Umidade: {clima.umidade}%</p>
         <p>Velocidade do Vento: {clima.vento} km/h</p>
         <p>Chance de Chuva: {chanceChuva ??0}%</p>
       </div>
       
    ) 
}
export default CondicoesClima;
