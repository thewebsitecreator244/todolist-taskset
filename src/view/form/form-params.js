const formParams = {
  tagName: "form",
  classList: [],
  attributes: {},
};
const inputWrapperParams = {
  tagName: "div",
  classList: [],
  attributes: {},
  text: "",
};
const textInputParams = {
  tagName: "input",
  classList: [],
  attributes: { id: "NoteName" },
  text: "",
};
const favBtnParams = {
  tagName: "button",
  classList: [],
  attributes: { type: "button" },
  text: "",
};
const textAreaParams = {
  tagName: "textarea",
  classList: [],
  attributes: { id: "NoteDesc" },
  text: "",
};
const postWrapperParams = {
  tagName: "div",
  classList: [],
  attributes: {},
  text: "",
};
const submitBtnParams = {
  tagName: "button",
  classList: [],
  attributes: {},
  text: "",
};
const cancelBtnParams = {
  tagName: "button",
  classList: [],
  attributes: { type: "reset" },
  text: "",
};
const fadeParams = {
  tagName: "div",
  classList: [
    "w-full",
    "h-full",
    "bg-cyan-500/40",
    "fixed",
    "inset-0",
    "backdrop-blur-xs",
  ],
  attributes: { id: "fade" },
};
export {
  formParams,
  fadeParams,
  inputWrapperParams,
  textInputParams,
  favBtnParams,
  textAreaParams,
  postWrapperParams,
  cancelBtnParams,
  submitBtnParams,
};
