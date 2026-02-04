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
      //1.depending on the value of favbtn the object gets pushed to a certain list so we need to create data attributes in here
      //2.indexes take from structure
      attribute: length(this.structure),
    };
    if (object.favBtn) {
      this.structure.favorite.push(object);
    } else {
      this.structure.normal.push(object);
    }
    this.addData(this.key, this.structure);
  }

  deleteNote(listName, index) {
    const deletedNote = this.structure[listName].pop(index);
    return deletedNote;
  }
}
