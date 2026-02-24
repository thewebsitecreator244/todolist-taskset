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
      id: form.id,
      isEdited: false,
    };

    if (form.id) {
      const noteData = form.id.split("-");
      const listName = noteData[0];
      const index = noteData[1];
      if (
        object.title != this.structure[listName][index].title ||
        object.textArea != this.structure[listName][index].textArea ||
        object.favBtn != this.structure[listName][index].favBtn
      ) {
        object.isEdited = true;
        this.structure[listName].pop(index);
      }
    }

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
  move(deletedNote, listName) {
    if (listName == "favorite") {
      deletedNote.id = `normal-${this.structure.normal.length}`;
      deletedNote.favBtn = null;
      this.structure.normal.push(deletedNote);
    }
    if (listName == "normal") {
      deletedNote.id = `favorite-${this.structure.favorite.length}`;
      deletedNote.favBtn = "on";
      this.structure.favorite.push(deletedNote);
    }
  }

  edit(listName, index) {
    return this.structure[listName][index];
  }
}
