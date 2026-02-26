const filterWrapperParams = {
  tagName: "div",
  classList: ["flex", "gap-5"],
  attributes: {},
  text: "",
};
const normalParams = {
  tagName: "button",
  classList: [
    "border-5",
    "border-black",
    "py-2",
    "px-5",
    "dark:border-white",
    "dark:text-white",
    "font-bold",
    "hover:cursor-pointer",
    "hover:opacity-60",
    "duration-300",
    "max-w-xs",
  ],
  attributes: { "data-normal": "" },
  text: "Normal",
};
const favParams = {
  tagName: "button",
  classList: [
    "border-5",
    "border-black",
    "py-2",
    "px-5",
    "dark:border-white",
    "dark:text-white",
    "font-bold",
    "hover:cursor-pointer",
    "hover:opacity-60",
    "duration-300",
    "max-w-xs",
  ],
  attributes: { "data-favorite": "" },
  text: "Favorite",
};
export { filterWrapperParams, normalParams, favParams };
