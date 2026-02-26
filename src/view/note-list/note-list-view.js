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
      // Устанавливаем стабильный id
      liParams.attributes["data-id"] = note.id;

      // Иконка избранного
      if (note.isFavorite) {
        favBtnParams.classList = [
          "w-5",
          "h-5",
          "bg-[url(/fav-checked.svg)]",
          "bg-no-repeat",
          "bg-center",
          "bg-cover",
          "hover:cursor-pointer",
        ];
      } else {
        favBtnParams.classList = [
          "w-5",
          "h-5",
          "bg-[url(/fav.svg)]",
          "dark:bg-[url(/fav-dark.svg)]",
          "bg-no-repeat",
          "bg-center",
          "bg-cover",
          "hover:cursor-pointer",
        ];
      }

      const li = new Creator(liParams).getTag();
      const noteContainer = new Creator(noteContainerParams).getTag();
      const noteWrapper = new Creator(noteWrapperParams).getTag();
      const btnWrapper = new Creator(btnWrapperParams).getTag();
      const changeBtn = new Creator(changeBtnParams).getTag();
      const deleteBtn = new Creator(deleteBtnParams).getTag();
      const favBtn = new Creator(favBtnParams).getTag();
      noteNameParams.text = note.title;
      noteTextParams.text = note.text;
      if (noteNameParams.text == "") {
        noteNameParams.text = "No Title";
      }
      if (noteTextParams.text == "") {
        noteTextParams.text = "No description";
      }

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
