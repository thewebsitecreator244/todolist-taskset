import { HeaderView } from "./header-view/header-view";
export class View {
  constructor() {
    this.app = document.querySelector("#app");
    this.headerView = new HeaderView();
    this.initialView();
  }

  initialView() {
    this.app.prepend(this.headerView.header.getTag());
  }
}
