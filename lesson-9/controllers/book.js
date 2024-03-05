import Book from "../models/book.js";

async function getBooks(req, res, next) {
  try {
    const books = await Book.find({ ownerId: req.user.id });

    res.send(books);
  } catch (error) {
    next(error);
  }
}

async function getBook(req, res, next) {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);

    if (book === null) {
      return res.status(404).send("Book not found:(");
    }

    if (book.ownerId.toString() !== req.user.id) {
      // return res.status(403).send("Access denied");
      return res.status(404).send("Book not found:(");
    }

    res.send(book);
  } catch (error) {
    next(error);
  }
}

async function createBook(req, res, next) {
  // Add Joi before

  const book = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    year: req.body.year,
    ownerId: req.user.id,
  };

  try {
    const result = await Book.create(book);

    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
}

async function updateBook(req, res, next) {
  // Add Joi before
  const { id } = req.params;

  const book = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    year: req.body.year,
  };

  try {
    const result = await Book.findByIdAndUpdate(id, book, { new: true });

    if (result === null) {
      return res.status(404).send("Book not found:(");
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
}

async function deleteBook(req, res, next) {
  const { id } = req.params;

  try {
    const result = await Book.findByIdAndDelete(id);

    if (result === null) {
      return res.status(404).send("Book not found:(");
    }

    res.send({ id });
  } catch (error) {
    next(error);
  }
}

export default {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
