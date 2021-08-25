const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    myFile: {
        type: String,
        required: [true, 'Recipe image is required']
    },
    title: {
        type: String,
        required: [true, 'title is required field']
    },
    category: {
        type: String,
        required: [true, 'Category is required']
    },
    preparation_time: {
        type: Number,
        required: true
    },
    people: {
        type: Number,
        required: [true, 'Please select the number of people']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    recipe: {
        type: String,
        required: [true, 'Recipe details is required']
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    likes: {
        type: Number,
        default: 0,
      },
      createdAt: {
          type: String,
          default: new Date().toLocaleDateString()
      }
})

module.exports = mongoose.model('Recipe', recipeSchema);