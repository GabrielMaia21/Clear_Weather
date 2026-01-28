function Cards({ clima }) {
  if (!clima) return null;

  return (
    <div className="container_cards">
      <div className="info">
        <div className="linha-cima">
          <h1>{clima.cidade}</h1>
          <p>Umidade: {clima.umidade}%</p>
        </div>

        <div className="linha-baixo">
          <h2>{clima.temp}°C</h2>
          <p>Clima: {clima.descricao}</p>
        </div>
      </div>

      <div className="img">
        <img
          src={`https://openweathermap.org/img/wn/${clima.icon}@2x.png`}
          alt={clima.descricao}
        />
      </div>
    </div>
  );
}

export default Cards;

//componente dos cards mostrando o clima