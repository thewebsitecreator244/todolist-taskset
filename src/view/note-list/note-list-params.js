const noteListParams = {
  tagName: "ul",
  classList: [
    "max-w-lg",
    "w-full",
    "flex",
    "gap-2",
    "flex-col",
    "items-center",
  ],
  attributes: {},
};
const liParams = {
  tagName: "li",
  classList: ["max-w-lg", "w-full"],
  attributes: { "data-index": "" },
};
const noteContainerParams = {
  tagName: "div",
  classList: [
    "flex",
    "border-3",
    "border-black",
    "p-2",
    "w-full",
    "flex-col",
    "gap-1",
    "dark:border-white",
  ],
  attributes: {},
};
const noteWrapperParams = {
  tagName: "div",
  classList: ["flex", "gap-2", "items-center"],
  attributes: {},
};
const noteNameParams = {
  tagName: "h3",
  classList: ["font-medium", "dark:text-white"],
  attributes: {},
  text: "",
};
const btnWrapperParams = {
  tagName: "div",
  classList: ["flex"],
  attributes: {},
};
const changeBtnParams = {
  tagName: "button",
  classList: ["changeBtn"],
  attributes: { type: "button" },
};
const deleteBtnParams = {
  tagName: "button",
  classList: ["deleteBtn"],
  attributes: { type: "button" },
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

const noteTextParams = {
  tagName: "p",
  classList: ["text-gray-500"],
  attributes: {},
  text: "",
};
export {
  noteListParams,
  liParams,
  noteContainerParams,
  noteNameParams,
  noteTextParams,
  noteWrapperParams,
  btnWrapperParams,
  favBtnParams,
  FavWrapperParams,
  FakeParams,
  changeBtnParams,
  deleteBtnParams,
};
