import mongoose from "mongoose";
const {Schema} = mongoose


const AccountSchema = new Schema({
    name: String,
    balance: Number
});

export const AccountModel = mongoose.model('Account', AccountSchema);