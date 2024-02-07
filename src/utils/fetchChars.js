import axios from "axios";

const public_key = "0cc960625ee7722e285f4d5ce5c5cfed";
const private_key = "d263fc106fb644b3753f7dbf02c169bf92df62da";
const timestamp = "1";
const hash = "fd4dff99dc9cdeb4b6e86243b862cd79";

export const getChars = async () => {
  try {
    const response = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${public_key}&hash=${hash}`
    );

    return response.data.data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};