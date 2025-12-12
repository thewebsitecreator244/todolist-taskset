export class Model {
  constructor() {
    console.log(1);
    localStorage.setItem("fox", "cat");
    alert(localStorage.getItem("fox"));
  }
}
