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

  static async fetchFirstSeenEpisode(episodeURL) {
    const responce = await axios.get(`${episodeURL}`);
    return responce.data;
  }

  static async fetchSeenEpisodes(episodeURLs) {
    const episodes = [];
    for (let i = 0; i < episodeURLs.length; i++) {
      const responce = await axios.get(`${episodeURLs[i]}`);
      episodes.push(responce.data);
    }
    return episodes;
  }
}
