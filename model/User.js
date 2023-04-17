
import {Schema, model} from 'mongoose'

//create schema
const user_schema = new Schema({
    name: String,
    email: String
})

//create model
const user_model = new model('user', user_schema)