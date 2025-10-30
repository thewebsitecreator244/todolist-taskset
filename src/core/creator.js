//the creator class should have these parameters: tagName,classList,text,object with attributes//
//the creator must create an element from these parameters//
const buttonParams = {
  tagName: "button",
  classList: ["bg-red-500", "h-5"],
  text: "Click me im an experimental button",
  attributes: {
    id: "button",
    "data-action": "click",
  },
};
class Creator {
  constructor(params) {
    this.element = this.createElement(params);
    this.setClassList(params);
    this.setAttributesToElement(params);
  }

  createElement(params) {
    if (params.tagName) {
      const currentElement = document.createElement(params.tagName);
      return currentElement;
    }
  }
  setClassList(params) {
    if (this.element && params.classList && params.classList.length > 0) {
      this.element.classList.add(...params.classList);
    }
  }

  setAttributesToElement(params) {
    if (this.element && params.attributes) {
      for (let attribute in params.attributes) {
        const attibuteKey = attribute;
        const attributeValue = params.attributes[attribute];
        this.element.setAttribute(attibuteKey, attributeValue);
      }
    }
  }

  getTag() {
    if (this.element) {
      return this.element;
    }
  }
}
let button = new Creator(buttonParams).getTag();
console.log(button);
