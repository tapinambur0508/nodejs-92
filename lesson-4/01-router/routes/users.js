const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get Users");
});

router.get("/1", (req, res) => {
  res.send("Get User 1");
});

router.post("/", (req, res) => {
  res.send("Create User");
});

router.put("/1", (req, res) => {
  res.send("Update User 1");
});

router.delete("/1", (req, res) => {
  res.send("Delete User 1");
});

module.exports = router;
