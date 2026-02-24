// API para o AutoComplete da barra de pesquisa

import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY2;

export async function buscarCidade(cidade) {
  try {
    const resposta = await axios.get(
      "https://api.openweathermap.org/geo/1.0/direct",
      {
        params: {
          q: cidade,
          limit: 5,
          appid: API_KEY,
        },
      },
    );

    const data = resposta.data;
    let infos = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].name && data[i].country) {
        let jaExiste = false;

        for(let j = 0; j < infos.length; j++) {
          if(infos[j].cidade == data[i].name && infos[j].pais == data[i].country) {jaExiste = true};
        }

        if (!jaExiste) {
          infos.push({ cidade: data[i].name, pais: data[i].country });
        }
      }
    }

    return infos;
  } catch (error) {
    console.error("Erro na requisição da API Geocode. Erro: ", error);
    return [];
  }
}
