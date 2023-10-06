const express = require("express");
const router = express.Router();

const noteController = require("../controllers/noteController");

router.get("/", noteController.getAllNotes);

router.post("/", noteController.addOneNote);

module.exports = router;
