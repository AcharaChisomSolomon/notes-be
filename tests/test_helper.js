const Note = require('../models/note');
const User = require('../models/user');

const initialNotes = [
    {
        content: "HTML IS easy",
        important: false,
    },
    {
        content: "Browser can execute only JavaScript",
        important: true,
    },
];

const nonExistingId = async () => {
    const note = new Note({ content: 'willremovethissoon' })
    await note.save()
    await note.deleteOne()

    return note._id.toString()
}

const notesInDB = async () => {
    const notes = await Note.find({})
    return notes.map(n => n.toJSON())
}

const usersInDB = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
}



module.exports = {
    initialNotes, nonExistingId, notesInDB, usersInDB
}