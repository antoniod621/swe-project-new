const mongoose = require('mongoose');
const NoteSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true,'Please add a title'],
        unique: true,
        trim: true,
        maxLength: [40, 'Title is too long']
    },
    description: {
        type: String,
        required: true,
        maxLength: [200, 'Description is too long']
    }
})

module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema);