import { Creator } from "../../core/creator";

const headerParams = {
  tagName: "header",
};

export class HeaderView {
  constructor() {
    this.header = new Creator(headerParams);
  }
}
