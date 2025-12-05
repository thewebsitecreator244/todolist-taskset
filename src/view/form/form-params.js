const formParams = {
  tagName: "form",
  classList: [
    "bg-white",
    "z-3",
    "fixed",
    "top-1/2",
    "left-1/2",
    "-translate-1/2",
    "p-7",
    "rounded-2xl",
    "max-w-130",
    "w-full",
  ],
  attributes: {},
};
const inputWrapperParams = {
  tagName: "div",
  classList: ["flex", "gap-3.5", "border-b-3", "border-black"],
  attributes: {},
  text: "",
};
const textInputParams = {
  tagName: "input",
  classList: ["max-w-190", "w-full"],
  attributes: { id: "NoteName", placeholder: "note title" },
  text: "",
};
const favBtnParams = {
  tagName: "button",
  classList: ["bg-[url(/fav.svg)]", "h-5", "w-5", "bg-center", "bg-cover"],
  attributes: { type: "button" },
  text: "",
};
const textAreaParams = {
  tagName: "textarea",
  classList: ["max-w-190", "w-full", "max-h-100"],
  attributes: { id: "NoteDesc", placeholder: "note description" },
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
    "z-2",
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
