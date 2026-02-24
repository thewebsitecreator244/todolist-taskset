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

  buildForm(editNote = {}) {
    // Если форма уже открыта — не создаём новую
    if (this.formElement)
      return { FormElement: this.formElement, FadeElement: this.fadeElement };

    // Защита от null
    editNote = editNote || {};

    // Поля формы
    textInputParams.attributes.value = editNote.title || "";
    textAreaParams.text = editNote.text || "";
    formParams.attributes.id = editNote.id || "";

    // Создаём элементы
    const fade = new Creator(fadeParams).getTag();
    const form = new Creator(formParams).getTag();
    const inputWrapper = new Creator(inputWrapperParams).getTag();
    const textInput = new Creator(textInputParams).getTag();
    const favBtn = new Creator(favBtnParams).getTag();
    favBtn.type = "checkbox";
    favBtn.checked = editNote.isFavorite || false;
    favBtn.classList.add("favBtn"); // класс для CSS
    const FavWrapper = new Creator(FavWrapperParams).getTag();
    const FakeCheckBox = new Creator(FakeParams).getTag();
    FakeCheckBox.classList.add("fake"); // класс для CSS
    const textArea = new Creator(textAreaParams).getTag();
    const postWrapper = new Creator(postWrapperParams).getTag();
    const submitBtn = new Creator(submitBtnParams).getTag();
    const cancelBtn = new Creator(cancelBtnParams).getTag();

    // Собираем структуру
    form.append(inputWrapper, textArea, postWrapper);
    inputWrapper.append(textInput, FavWrapper);
    FavWrapper.append(favBtn, FakeCheckBox); // важный порядок: input + fake
    postWrapper.append(submitBtn, cancelBtn);

    // Сохраняем ссылки
    this.formElement = form;
    this.fadeElement = fade;

    return { FormElement: this.formElement, FadeElement: this.fadeElement };
  }

  delete() {
    if (this.formElement) this.formElement.remove();
    if (this.fadeElement) this.fadeElement.remove();

    this.formElement = null;
    this.fadeElement = null;
  }
}
