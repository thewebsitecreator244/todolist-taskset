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
  classList: ["flex", "gap-3.5", "border-b-3", "border-black", "pb-2"],
  attributes: {},
  text: "",
};
const textInputParams = {
  tagName: "input",
  classList: ["max-w-190", "w-full", "outline-none", "focus:shadow-xl"],
  attributes: { name: "Title", placeholder: "Note title" },
  text: "",
};
const FavWrapperParams = {
  tagName: "label",
  classList: ["favWrapper"],
  attributes: {},
};
const FakeParams = {
  tagName: "div",
  classList: ["fake"],
  attributes: {},
};
const favBtnParams = {
  tagName: "input",
  classList: ["favBtn"],
  attributes: { type: "checkbox", name: "favBtn" },
};
const textAreaParams = {
  tagName: "textarea",
  classList: [
    "max-w-190",
    "w-full",
    "max-h-50",
    "min-h-10",
    "outline-none",
    "focus:shadow-xl",
  ],
  attributes: { name: "textArea", placeholder: "Note description" },
  text: "",
};
const postWrapperParams = {
  tagName: "div",
  classList: ["flex", "items-center", "gap-4"],
  attributes: {},
  text: "",
};
const submitBtnParams = {
  tagName: "button",
  classList: [
    "rounded-3xl",
    "py-1",
    "bg-lime-500",
    "px-4",
    "hover:cursor-pointer",
    "hover:ring-lime-200",
    "duration-300",
    "hover:ring-5",
  ],
  attributes: {},
  text: "Submit",
};
const cancelBtnParams = {
  tagName: "button",
  classList: [
    "rounded-3xl",
    "bg-red-500",
    "py-1",
    "px-4",
    "hover:cursor-pointer",
    "hover:ring-red-200",
    "duration-300",
    "hover:ring-5",
  ],
  attributes: { type: "reset", id: "cancelBtn" },
  text: "Cancel",
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
  submitBtnParams,
  cancelBtnParams,
  FavWrapperParams,
  FakeParams,
};
