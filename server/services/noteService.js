const Note = require("../models/note");

const getAllNotes = async () => {
  const returnedNotes = await Note.find({});
  return returnedNotes;
};

const addOneNote = async (body) => {
  const note = new Note({
    title: body.title,
    content: body.content,
  });

  try {
    const returnedNote = await note.save();
    return returnedNote;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllNotes,
  addOneNote,
};
