export class Model {
  key = "notes";

  constructor() {
    this.notes = this.load();
  }

  // ========================
  // Storage
  // ========================

  save() {
    localStorage.setItem(this.key, JSON.stringify(this.notes));
  }

  load() {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  }

  // ========================
  // Create
  // ========================

  create({ title, textArea, favBtn }) {
    const newNote = {
      id: crypto.randomUUID(),
      title: title || "",
      text: textArea || "",
      isFavorite: !!favBtn,
      createdAt: Date.now(),
      updatedAt: null,
    };

    this.notes.push(newNote);
    this.save();
  }

  // ========================
  // Delete
  // ========================

  delete(id) {
    const index = this.notes.findIndex((note) => note.id === id);
    if (index !== -1) {
      this.notes.splice(index, 1);
      this.save();
    }
  }

  // ========================
  // Update
  // ========================

  update(id, { title, textArea, favBtn }) {
    const note = this.notes.find((n) => n.id === id);
    if (!note) return;

    note.title = title;
    note.text = textArea;
    note.isFavorite = !!favBtn;
    note.updatedAt = Date.now();

    this.save();
  }

  // ========================
  // Toggle favorite
  // ========================

  toggleFavorite(id) {
    const note = this.notes.find((n) => n.id === id);
    if (!note) return;

    note.isFavorite = !note.isFavorite;
    this.save();
  }

  // ========================
  // Getters
  // ========================

  getAll() {
    return this.notes;
  }

  getFavorites() {
    return this.notes.filter((note) => note.isFavorite);
  }

  getNormal() {
    return this.notes.filter((note) => !note.isFavorite);
  }

  getById(id) {
    return this.notes.find((note) => note.id === id);
  }
}
