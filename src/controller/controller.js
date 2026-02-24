import { Model } from "../model/model";
import { View } from "../view/view";

class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();

    this.setListeners();
    this.render();
  }

  // ========================
  // Основные слушатели
  // ========================
  setListeners() {
    const main = this.view.main.main;

    // Клик по всему main
    main.addEventListener("click", (event) => this.handleClick(event));

    // Кнопки в header
    this.view.headerView.header
      .getTag()
      .addEventListener("click", (event) => this.handleClick(event));
  }

  // ========================
  // Обработчик кликов
  // ========================
  handleClick(event) {
    const createBtn = event.target.closest("#noteBtn");
    const deleteBtn = event.target.closest("[data-delete]");
    const favBtn = event.target.closest("[data-fav]");
    const editBtn = event.target.closest("[data-edit]");
    const nightBtn = event.target.closest("#nightModeBtn");

    if (nightBtn) {
      this.view.headerView.nightMode();
      return;
    }

    if (createBtn) {
      this.openForm();
      return;
    }

    if (deleteBtn) {
      const noteElement = deleteBtn.closest("[data-id]");
      const id = noteElement.dataset.id;

      this.model.delete(id);
      this.render();
      return;
    }

    if (favBtn) {
      const noteElement = favBtn.closest("[data-id]");
      const id = noteElement.dataset.id;

      this.model.toggleFavorite(id);
      this.render();
      return;
    }

    if (editBtn) {
      const noteElement = editBtn.closest("[data-id]");
      const id = noteElement.dataset.id;

      const note = this.model.getById(id);
      this.openForm(note);
      return;
    }
  }

  // ========================
  // Работа с формой
  // ========================
  openForm(note = null) {
    const main = this.view.main.main;
    const form = this.view.formView.buildForm(note);

    main.append(form.FormElement, form.FadeElement);

    form.FormElement.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);
      const data = {
        title: formData.get("Title"),
        textArea: formData.get("textArea"),
        favBtn: formData.get("favBtn"),
      };

      if (note) {
        this.model.update(note.id, data);
      } else {
        this.model.create(data);
      }

      this.view.formView.delete();
      this.render();
    });

    form.FormElement.addEventListener("click", (event) => {
      const cancelBtn = event.target.closest("#cancelBtn");
      if (cancelBtn) {
        this.view.formView.delete();
      }
    });
  }

  // ========================
  // Рендер заметок
  // ========================
  render() {
    this.view.main.noteList.deleteOld();

    const normal = this.model.getNormal();
    const favorites = this.model.getFavorites();

    // Можно сначала избранные, потом обычные
    this.view.main.noteList.fillLoop(favorites);
    this.view.main.noteList.fillLoop(normal);
  }
}

new Controller();
