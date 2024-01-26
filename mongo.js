require('dotenv').config()
const mongoose = require('mongoose')

const url = process.env.TEST_MONGODB_URI

mongoose.set('strictQuery', false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//     content: "",
//     important: true,
// })

// note.save()
//     .then(() => {
//         console.log('note saved!')
//         mongoose.connection.close()
//     })


Note.find({}).then(result => {
    result.forEach(n => {
        console.log(n)
    })
    mongoose.connection.close()
})