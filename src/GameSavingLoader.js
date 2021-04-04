import read from './Reader.js';
import json from './Json.js';

export default class GameSavingLoader {
  static async load() {
    // return read().then((data) => json(data));
    const data = await read();
    const result = await json(data);
    return result;
  }
}
