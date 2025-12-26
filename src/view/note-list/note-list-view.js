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
  FavWrapperParams,
  FakeParams,
  changeBtnParams,
  deleteBtnParams,
} from "./note-list-params";

export class NoteListView {
  constructor() {
    this.list = new Creator(noteListParams);
  }
  fillLoop(arrayNotes) {
    const li = new Creator(liParams).getTag();
    const noteContainer = new Creator(noteContainerParams).getTag();
    const noteWrapper = new Creator(noteWrapperParams).getTag();
    const btnWrapper = new Creator(btnWrapperParams).getTag();
    const changeBtn = new Creator(changeBtnParams).getTag();
    const deleteBtn = new Creator(deleteBtnParams).getTag();
    const favWrapper = new Creator(FavWrapperParams).getTag();
    const fake = new Creator(FakeParams).getTag();
    const favBtn = new Creator(favBtnParams).getTag();

    arrayNotes.forEach((note) => {
      noteNameParams.text = note.title;
      noteTextParams.text = note.textArea;
      const noteName = new Creator(noteNameParams);
      const noteText = new Creator(noteTextParams);

      this.list.getTag().append(li);
      li.append(noteContainer, noteText);
      noteContainer.append(noteWrapper);
      noteWrapper.append(noteName, btnWrapper);
      btnWrapper.append(changeBtn, deleteBtn, favWrapper);
      favWrapper.append(fake, favBtn);
    });
  }
}
