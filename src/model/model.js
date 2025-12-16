export class Model {
  key = "notes";
  constructor() {
    this.getData(this.key);
  }

  addData(key, data) {
    const DataJson = JSON.stringify(data);
    localStorage.setItem(key, DataJson);
  }
  getData(key) {
    const structure = {
      normal: [],
      favorite: [],
    };
    const keyIsInLocalStorage = localStorage.getItem(key);
    if (!keyIsInLocalStorage) {
      this.addData(key, structure);
      return structure;
    }
    return keyIsInLocalStorage;
  }
}
