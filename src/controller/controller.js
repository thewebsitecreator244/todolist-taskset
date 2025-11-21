import { View } from "../view/view";

class Controller {
  constructor() {
    this.view = new View();
    this.setListener();
  }
  setListener() {
    const button = this.view.main.mainBtn.getTag();
    button.addEventListener("click", () => {
      console.log("never gonna give you up");
    });
  }
}
new Controller();
