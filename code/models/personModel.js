import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    favouriteFoods: {String}
});

const Person = mongoose.model('Person', personSchema);

export default Person;