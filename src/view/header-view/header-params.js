const headerParams = {
  tagName: "header",
  classList: [
    "border-5",
    "border-(var:--color-nightmode)",
    "border-dashed",
    "py-1",
    "px-2",
    "flex",
    "justify-between",
    "dark:border-[#ffffff]",
    "items-center",
    "md:p-3",
  ],
};
const nightModeButtonParams = {
  tagName: "button",
  classList: [
    "rounded-4xl",
    "bg-[url(/moonicon.svg)]",
    "w-10",
    "h-10",
    "bg-cover",
    "bg-center",
    "border-2",
    "border-(var:--color-nightmode)",
    "hover:rotate-180",
    "duration-300",
    "dark:border-[#ffffff]",
    "dark:bg-[url(/sunicon.svg)]",
    "hover:cursor-pointer",
  ],
  attributes: { id: "nightModeBtn" },
};
const logotypeParams = {
  tagName: "div",
  classList: [
    "bg-[url(/logo.svg)]",
    "max-w-30",
    "w-full",
    "bg-contain",
    "bg-center",
    "bg-no-repeat",
    "h-20",
    "dark:bg-[url(/logo-night.svg)]",
    "md:max-w-50",
  ],
};

export { headerParams, nightModeButtonParams, logotypeParams };
