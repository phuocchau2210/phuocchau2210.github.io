const noteService = require("../services/noteService");

const getAllNotes = async (req, res) => {
  const notes = await noteService.getAllNotes();
  res.json(notes);
};

const addOneNote = async (req, res) => {
  const addedNote = await noteService.addOneNote(req.body);
  res.json(addedNote);
};

module.exports = {
  getAllNotes,
  addOneNote,
};
