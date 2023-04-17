import {Schema, model} from 'mongoose'

//create schema
const profile_schema = new Schema({
    name: String,
    email: String,
    description: {
        type: String,
        maxLength: 40,
        minLength: 20
    },
    telephone: Number,
    age: Number
})

//create model
const user_model = new model('profile', profile_schema)