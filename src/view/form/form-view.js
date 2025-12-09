import {
  formParams,
  fadeParams,
  inputWrapperParams,
  textInputParams,
  favBtnParams,
  textAreaParams,
  postWrapperParams,
  cancelBtnParams,
  submitBtnParams,
} from "./form-params";
import { Creator } from "../../core/creator";

export class FormView {
  constructor() {}
  buildForm() {
    const fade = new Creator(fadeParams).getTag();
    const form = new Creator(formParams).getTag();
    const inputWrapper = new Creator(inputWrapperParams).getTag();
    const textInput = new Creator(textInputParams).getTag();
    const favBtn = new Creator(favBtnParams).getTag();
    const textArea = new Creator(textAreaParams).getTag();
    const postWrapper = new Creator(postWrapperParams).getTag();
    const submitBtn = new Creator(submitBtnParams).getTag();
    const cancelBtn = new Creator(cancelBtnParams).getTag();

    form.append(inputWrapper, textArea, postWrapper);
    inputWrapper.append(textInput, favBtn);
    postWrapper.append(submitBtn, cancelBtn);
    return { form, fade };
  }
}
