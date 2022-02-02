const baseUrl = "http://localhost:5000/votos";

export const getVotos = () => {
  return fetch(baseUrl).then((res) => res.json());
};
