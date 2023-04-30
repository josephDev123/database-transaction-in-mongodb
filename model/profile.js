import {Schema, model} from 'mongoose'

//create schema
const profile_schema = new Schema({
    name: String,
    lastname: String,
    email: String,
    description: {
        type: String,
        maxLength: 40,
        minLength: 20
    },
    telephone: String,
    age: Number,
    gender: String
})

//create model
export const Profile_model = new model('profile', profile_schema)