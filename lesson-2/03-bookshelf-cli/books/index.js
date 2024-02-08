const fs = require("node:fs/promises");
const path = require("node:path");
const crypto = require("node:crypto");

const FILE_PATH = path.join(__dirname, "books.json");

async function readBooks() {
  const data = await fs.readFile(FILE_PATH, { encoding: "utf-8" });

  return JSON.parse(data);
}

function writeBooks(books) {
  return fs.writeFile(FILE_PATH, JSON.stringify(books, undefined, 2));
}

async function getAll() {
  const books = await readBooks();

  return books;
}

async function getById(id) {
  const books = await readBooks();

  const book = books.find((book) => book.id === id);

  return book;
}

async function create(book) {
  const books = await readBooks();

  const newBook = { ...book, id: crypto.randomUUID() };

  books.push(newBook);

  await writeBooks(books);

  return newBook;
}

async function update(id, book) {
  const books = await readBooks();
  const index = books.findIndex((book) => book.id === id);

  if (index === -1) {
    return undefined;
  }

  const updatedBook = { ...book, id };
  // const newBooks = [
  //   ...books.slice(0, index),
  //   updatedBook,
  //   ...books.slice(index + 1),
  // ];

  books[index] = updatedBook;

  await writeBooks(books); // await writeBooks(newBooks);

  return updatedBook;
}

async function remove(id) {
  const books = await readBooks();
  const index = books.findIndex((book) => book.id === id);

  if (index === -1) {
    return undefined;
  }

  const deletedBook = books[index];

  // const newBooks = [...books.slice(0, index), ...books.slice(index + 1)];
  books.splice(index, 1);

  await writeBooks(books);

  return deletedBook;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
