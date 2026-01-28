function Previsao({ previsao }) {
  if (!previsao) return null;

  const dias = previsao.list.filter((item) => item.dt_txt.includes("12:00:00"));

  return (
    <div>
      {dias.map((dia, index) => {
        const data = new Date(dia.dt_txt);
        const nomeDia = data.toLocaleDateString("pt-BR", { weekday: "long" });

        return (
          <div className="card_forecast" key={index}>
            <h3>{nomeDia}</h3>

            <img
              src={`https://openweathermap.org/img/wn/${dia.weather[0].icon}@2x.png`}
              alt={dia.weather[0].description}
            />

            <p>{Math.round(dia.main.temp)}</p>
            <p>{dia.weather[0].description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Previsao;
