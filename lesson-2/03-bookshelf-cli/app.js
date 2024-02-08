const { program } = require("commander");

const Books = require("./books");

async function invokeAction({ action, id, title, author }) {
  switch (action) {
    case "getAll":
      const books = await Books.getAll();
      return books;
    case "getById":
      const book = await Books.getById(id);
      return book;
    case "create":
      const createdBook = await Books.create({ title, author });
      return createdBook;
    case "update":
      const updatedBook = await Books.update(id, { title, author });
      return updatedBook;
    case "remove":
      const removedBook = await Books.remove(id);
      return removedBook;
    default:
      return "Unknown action:(";
  }
}

program
  .option("-a, --action <action>", "Action to invoke")
  .option("-i, --id <id>", "Book id")
  .option("-t, --title <title>", "Book title")
  .option("-at, --author <author>", "Book author");

program.parse(process.argv);

invokeAction(program.opts()).then(console.log).catch(console.error);
