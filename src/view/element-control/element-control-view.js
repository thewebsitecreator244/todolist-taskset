import { btnParams } from "./element-control-params";
import { Creator } from "./../../core/creator";
import { mainParams } from "../view-params";
import { NoteListView } from "../note-list/note-list-view";

export class MainView {
  constructor() {
    this.main = new Creator(mainParams).getTag();
    this.mainBtn = new Creator(btnParams).getTag();
    this.noteList = new NoteListView();
    this.mainConstructor();
  }
  mainConstructor() {
    this.main.append(this.mainBtn, this.noteList.list.getTag());
  }
}
