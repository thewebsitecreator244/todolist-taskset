import { View } from "../view/view";

class Controller {
  constructor() {
    this.view = new View();
    this.setListeners();
  }

  setListeners() {
    const main = this.view.main.main.getTag();
    main.addEventListener("click", (event) => this.eventHandler(event));

    this.view.headerView.header
      .getTag()
      .addEventListener("click", (event) => this.eventHandler(event));
  }

  eventHandler(event) {
    const isNightModeBtn = event.target.closest("#nightModeBtn");
    const isButton = event.target.closest("#noteBtn");

    if (isNightModeBtn) {
      this.view.headerView.nightMode();
    }

    if (isButton) {
      const main = this.view.main.main.getTag();
      const form = this.view.formView.buildForm();
      main.append(form.form, form.fade);
    }
  }
}

new Controller();
