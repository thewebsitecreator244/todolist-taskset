import { Creator } from "../../core/creator";
import {
  headerParams,
  nightModeButtonParams,
  logotypeParams,
  searchNoteParams,
  functionalWrapperParams,
} from "./header-params";

export class HeaderView {
  constructor() {
    this.header = new Creator(headerParams);
    this.nightModeBtn = new Creator(nightModeButtonParams);
    this.logotype = new Creator(logotypeParams);
    this.SearchNote = new Creator(searchNoteParams);
    this.functionalWrapper = new Creator(functionalWrapperParams).getTag();

    this.header.getTag().append(this.logotype.getTag(), this.functionalWrapper);
    this.functionalWrapper.append(
      this.SearchNote.getTag(),
      this.nightModeBtn.getTag(),
    );
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
