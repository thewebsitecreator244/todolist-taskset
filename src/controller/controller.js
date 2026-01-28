import { Model } from "../model/model";
import { View } from "../view/view";

class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.setListeners();
    this.renderNotes();
  }

  setListeners() {
    const main = this.view.main.main;
    main.addEventListener("click", (event) => this.eventHandler(event));

    this.view.headerView.header
      .getTag()
      .addEventListener("click", (event) => this.eventHandler(event));
  }

  eventHandler(event) {
    const isNightModeBtn = event.target.closest("#nightModeBtn");
    const isButton = event.target.closest("#noteBtn");
    const isDelete = event.target.closest("[data-delete]");

    if (isDelete) {
      const noteToDelete = isDelete.closest("[data-index]");
      const noteData = noteToDelete.getAttribute("data-index").split("-");
      const listName = noteData[0];
      const index = noteData[1];
      this.model.deleteNote(listName, index);
      this.renderNotes();
    }

    if (isNightModeBtn) {
      this.view.headerView.nightMode();
    }

    if (isButton) {
      const main = this.view.main.main;
      const form = this.view.formView.buildForm();
      main.append(form.FormElement, form.FadeElement);
      form.FormElement.addEventListener("submit", (event) => {
        event.preventDefault();
        this.model.checkFormData(event.target);
        this.view.formView.delete();
        this.renderNotes();
      });
      form.FormElement.addEventListener("click", (event) => {
        const isCancel = event.target.closest("#cancelBtn");
        if (isCancel) {
          this.view.formView.delete();
        }
      });
    }
  }
  renderNotes() {
    this.view.main.noteList.deleteOld();
    this.view.main.noteList.fillLoop(this.model.structure.normal);
    this.view.main.noteList.fillLoop(this.model.structure.favorite);
  }
}

new Controller();
