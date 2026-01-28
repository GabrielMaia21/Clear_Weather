import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

async function buscarWeather(cidade) {
  const resposta = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: cidade,
        units: "metric",
        lang: "pt_br",
        appid: API_KEY,
      },
    },
  );
  return resposta.data;
}

async function buscarForecast(cidade) {
  const resposta = await axios.get(
    "https://api.openweathermap.org/data/2.5/forecast",
    {
      params: {
        q: cidade,
        units: "metric",
        lang: "pt_br",
        appid: API_KEY,
      },
    },
  );
  return resposta.data;
}

export async function pesquisarPorCidade(cidade) {
  let data;

  try {
    data = await buscarWeather(`${cidade},BR`);
  } catch (error) {
    if (error.response?.status !== 404) {
      throw error;
    }

    data = await buscarWeather(cidade);
  }

  return {
    cidade: data.name,
    temp: Math.round(data.main.temp),
    sensacao: Math.round(data.main.feels_like),
    umidade: data.main.humidity,
    vento: data.wind.speed,
    descricao: data.weather[0].description,
    icon: data.weather[0].icon,
  };
}

export async function previsao5Dias(cidade) {
  let data;

  try {
    data = await buscarForecast(`${cidade},BR`);
  } catch (error) {
    if (error.response?.status !== 404) {
      throw error;
    }

    data = await buscarForecast(cidade);
  }

  const diasFiltrados = data.list.filter((item) =>
    item.dt_txt.includes("12:00:00"),
  );

  return diasFiltrados.slice(0, 5).map((dia) => ({
    data: new Date(dia.dt_txt).toLocaleDateString("pt-BR", {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }),
    temp: Math.round(dia.main.temp),
    icon: dia.weather[0].icon,
    descricao: dia.weather[0].description,
  }));
}
