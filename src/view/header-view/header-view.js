import { Creator } from "../../core/creator";
import {
  headerParams,
  nightModeButtonParams,
  logotypeParams,
} from "./header-params";

export class HeaderView {
  constructor() {
    this.header = new Creator(headerParams);
    this.nightModeBtn = new Creator(nightModeButtonParams);
    this.logotype = new Creator(logotypeParams);
    this.header
      .getTag()
      .append(this.logotype.getTag(), this.nightModeBtn.getTag());
    // this.setEventListener();
  }

  // eventHandler(event) {
  //   const isNightModeBtn = event.target.closest("#nightModeBtn");
  //   if (isNightModeBtn) {
  //     this.nightMode();
  //   }
  // }

  nightMode() {
    const htmlWrapper = document.querySelector("html");
    htmlWrapper.classList.toggle("dark");
  }

  // setEventListener() {
  //   this.header
  //     .getTag()
  //     .addEventListener("click", (event) => this.eventHandler(event));
  // }
}
