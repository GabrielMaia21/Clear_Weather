function Cards({ clima }) {
  if (!clima) return null;

  const {
    name,
    main: { temp, humidity },
    weather: info,
  } = clima;

  const icon = info[0].icon;
  const description = info[0].description;

  return (
    <div className="container_cards">
      <div className="info">
        <div className="linha-cima">
          <h1>{name}</h1>
          <p>Umidade: {humidity}%</p>
        </div>

        <div className="linha-baixo">
          <h2>{Math.round(temp)}°C</h2>
          <p>Clima: {description}</p>
        </div>

      </div>
      <div className="img">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
      </div>
    </div>
  );
}

export default Cards;

//componente dos cards mostrando o clima