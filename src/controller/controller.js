import { View } from "../view/view";

class Controller {
  constructor() {
    this.view = new View();
    this.setListeners();
  }

  setListeners() {
    const button = this.view.main.mainBtn.getTag();
    button.addEventListener("click", () => {
      console.log("never gonna give you up");
    });

    this.view.headerView.header
      .getTag()
      .addEventListener("click", (event) => this.eventHandler(event));
  }

  eventHandler(event) {
    const isNightModeBtn = event.target.closest("#nightModeBtn");
    if (isNightModeBtn) {
      this.view.headerView.nightMode();
    }
  }
}

new Controller();
