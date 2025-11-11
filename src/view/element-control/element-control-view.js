import { btnParams } from "./element-control-params";
import { Creator } from "./../../core/creator";
import { mainParams } from "../view-params";

export class MainView {
  constructor() {
    this.main = new Creator(mainParams);
    this.mainBtn = new Creator(btnParams);
    this.mainConstructor();
  }
  mainConstructor() {
    this.main.getTag().append(this.mainBtn.getTag());
  }
}
