// const express = require("express");

// const router = express.Router();

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Ger Movies");
});

router.get("/1", (req, res) => {
  res.send("Get Movie 1");
});

router.get("/2", (req, res) => {
  res.send("Get Movie 2");
});

router.get("/3", (req, res) => {
  res.send("Get Movie 3");
});

router.post("/", (req, res) => {
  res.send("Create Movie");
});

router.put("/1", (req, res) => {
  res.send("Update Movie 1");
});

router.delete("/1", (req, res) => {
  res.send("Delete Movie 1");
});

module.exports = router;
