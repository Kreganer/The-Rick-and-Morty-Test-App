import axios from 'axios';

export default class CharactersService {
  static async fetchCharacters(page = 1) {
    const responce = await axios.get('https://rickandmortyapi.com/api/character', {
      params: {
        page: page
      }
    });
    return responce.data;
  }

  static async fetchRandomCharacter() {
    const rnd = Math.floor(Math.random() * (826 - 1 + 1) + 1);
    const responce = await axios.get(`https://rickandmortyapi.com/api/character/${rnd}`);
    return responce.data;
  }

  static async fetchCharacterById(id) {
    const responce = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    return responce.data;
  }
}
