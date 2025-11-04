export class Creator {
  constructor(params) {
    this.element = this.createElement(params);
    this.setClassList(params);
    this.setAttributesToElement(params);
    this.setText(params);
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

  setText(params) {
    if (this.element && params.text) {
      this.element.textContent = params.text;
    }
  }

  getTag() {
    if (this.element) {
      return this.element;
    }
  }
}
