//arquivo js, com as funções de busca

const API_KEY = import.meta.env.VITE_API_KEY;

async function fetchCidade(query) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?${query}&units=metric&lang=pt_br&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Cidade não encontrada");
  }

  return response.json();
}

export async function pesquisarPorCidade(cidade) {
  try {
    return await fetchCidade(`q=${cidade},BR`);
  } catch {
    return await fetchCidade(`q=${cidade}`);
  }
}

// função para previsão de 5 dias
export async function previsao5Dias(cidade) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&units=metric&lang=pt_br&appid=${import.meta.env.VITE_API_KEY}`;

  const resposta = await fetch(url);

  if (!resposta.ok) {
    throw new Error("Cidade não encontrada");
  }

  const data = await resposta.json();
  return data;
}