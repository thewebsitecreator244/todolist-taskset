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
  FavWrapperParams,
  FakeParams,
} from "./form-params";
import { Creator } from "../../core/creator";

export class FormView {
  constructor() {
    this.formElement = null;
    this.fadeElement = null;
  }
  buildForm() {
    const fade = new Creator(fadeParams).getTag();
    const form = new Creator(formParams).getTag();
    const inputWrapper = new Creator(inputWrapperParams).getTag();
    const textInput = new Creator(textInputParams).getTag();
    const favBtn = new Creator(favBtnParams).getTag();
    const FavWrapper = new Creator(FavWrapperParams).getTag();
    const FakeCheckBox = new Creator(FakeParams).getTag();
    const textArea = new Creator(textAreaParams).getTag();
    const postWrapper = new Creator(postWrapperParams).getTag();
    const submitBtn = new Creator(submitBtnParams).getTag();
    const cancelBtn = new Creator(cancelBtnParams).getTag();

    form.append(inputWrapper, textArea, postWrapper);
    inputWrapper.append(textInput, FavWrapper);
    FavWrapper.append(favBtn, FakeCheckBox);
    postWrapper.append(submitBtn, cancelBtn);
    //export the creation of components here//
    this.formElement = form;
    this.fadeElement = fade;
    const FormElement = this.formElement;
    const FadeElement = this.fadeElement;
    return { FormElement, FadeElement };
  }
  delete() {
    this.formElement.remove();
    this.fadeElement.remove();
  }
}
