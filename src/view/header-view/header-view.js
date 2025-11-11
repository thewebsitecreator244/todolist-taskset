import { Creator } from "../../core/creator";
import { headerParams, nightModeButtonParams } from "./header-params";

export class HeaderView {
  constructor() {
    this.header = new Creator(headerParams);
    this.nightModeBtn = new Creator(nightModeButtonParams);
    this.header.getTag().append(this.nightModeBtn.getTag());
    this.setEventListener();
  }

  eventHandler(event) {
    const isNightModeBtn = event.target.closest("#nightModeBtn");
    if (isNightModeBtn) {
      this.nightMode();
    }
  }

  nightMode() {
    const htmlWrapper = document.querySelector("html");
    htmlWrapper.classList.toggle("dark");
  }

  setEventListener() {
    this.header
      .getTag()
      .addEventListener("click", (event) => this.eventHandler(event));
  }
}
