import axios from "axios";

const phrasesApi = axios.create({
  baseURL: "https://english-thai-flashcards.cyclic.app/api/",
});

export const getPhrases = () => {
  return phrasesApi.get("phrases").then((res) => {
    return res.data;
  });
};

export const addPhrase = (newPhrase) => {
  return phrasesApi.post("phrases", newPhrase).then((res) => {
    return res.data;
  });
};
