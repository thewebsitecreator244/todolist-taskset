import { Creator } from "../../core/creator";
import {
  noteListParams,
  liParams,
  noteContainerParams,
  noteNameParams,
  noteTextParams,
  noteWrapperParams,
  btnWrapperParams,
  favBtnParams,
  changeBtnParams,
  deleteBtnParams,
} from "./note-list-params";

export class NoteListView {
  constructor() {
    this.list = new Creator(noteListParams);
  }
  fillLoop(arrayNotes) {
    arrayNotes.forEach((note) => {
      liParams.attributes["data-index"] = note.id;
      const li = new Creator(liParams).getTag();
      const noteContainer = new Creator(noteContainerParams).getTag();
      const noteWrapper = new Creator(noteWrapperParams).getTag();
      const btnWrapper = new Creator(btnWrapperParams).getTag();
      const changeBtn = new Creator(changeBtnParams).getTag();
      const deleteBtn = new Creator(deleteBtnParams).getTag();
      const favBtn = new Creator(favBtnParams).getTag();
      noteNameParams.text = note.title;
      noteTextParams.text = note.textArea;
      const noteName = new Creator(noteNameParams).getTag();
      const noteText = new Creator(noteTextParams).getTag();

      this.list.getTag().append(li);
      li.append(noteContainer);
      noteContainer.append(noteWrapper);
      noteWrapper.append(noteName, btnWrapper);
      btnWrapper.append(changeBtn, deleteBtn, favBtn);
      noteContainer.append(noteText);
    });
  }
  deleteOld() {
    this.list.getTag().innerHTML = "";
  }
}
