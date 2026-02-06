function Previsao3Horas ({horas}){
    if(!horas) return null;

    return ( 

       <div className="container_condicoes" style={{display: "flex", flexDirection:"column", marginTop: "12px"}}>
        <h2>Previsão a cada 3 Horas</h2>
        <div style={{display: "flex", width: "100%", marginTop: "8px", gap: "9px"}}>
         {horas.map((item)=>(
            <div>
                <p>{item.hora}</p>
                <img src={`https://openweathermap.org/img/wn/${item.icon}.png`} alt="icone clima"/>
                <p>{item.temp}°C</p>
            </div>
         ))}
       </div>
       </div>
       
    ) 
}
export default Previsao3Horas;