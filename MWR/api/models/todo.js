const mongoose = require('mongoose');
const todosSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },

    status:{
        type: String,
        enum: ["pending", "completed"],
        default: "pending",
    },
    category:{
        type: String,
        required: true,
    },
    dueDate:{
        type: Date,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },  
});
const Todo = mongoose.model("Todo", todosSchema);
module.exports = Todo;