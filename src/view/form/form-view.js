import { fadeParams, formParams } from "./form-params";
import { Creator } from "../../core/creator";

export class FormView {
  constructor() {
    this.form = new Creator(formParams);
    this.fade = new Creator(fadeParams);
  }
}
