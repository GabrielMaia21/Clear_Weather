function Previsao3Horas ({horas}){
    if(!horas) return null;

    return ( 

       <div className="container_condicoes">
        <h2>Previsão a cada 3 Horas</h2>
         {horas.map((item)=>(
            <div>
                <p>{item.hora}</p>
                <img src={`https://openweathermap.org/img/wn/${item.icon}.png`} alt="icone clima"/>
                <p>{item.temp}°C</p>
            </div>
         ))}
       </div>
       
    ) 
}
export default Previsao3Horas;