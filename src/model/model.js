export class Model {
  key = "notes";
  constructor() {
    this.structure = this.getData(this.key);
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
    return JSON.parse(keyIsInLocalStorage);
  }
  checkFormData(form) {
    const formData = new FormData(form);
    const object = {
      title: formData.get("Title"),
      favBtn: formData.get("favBtn"),
      textArea: formData.get("textArea"),
      id: null,
    };
    if (object.favBtn) {
      object.id = `favorite-${this.structure.favorite.length}`;
      this.structure.favorite.push(object);
    } else {
      object.id = `normal-${this.structure.normal.length}`;
      this.structure.normal.push(object);
    }
    this.addData(this.key, this.structure);
  }

  deleteNote(listName, index) {
    const deletedNote = this.structure[listName].pop(index);
    return deletedNote;
  }
}
