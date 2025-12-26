import { HeaderView } from "./header-view/header-view";
import { MainView } from "./element-control/element-control-view";
import { FormView } from "./form/form-view";
export class View {
  constructor() {
    this.app = document.querySelector("#app");
    this.headerView = new HeaderView();
    this.main = new MainView();
    this.formView = new FormView();

    this.initialView();
  }

  initialView() {
    this.app.append(this.headerView.header.getTag(), this.main.main);
  }
}
