import mongoose from "mongoose";


const AccountSchema = mongoose.Schema({
    name: String,
    balance: Number
}, {timestamp:true});

export const AccountModel = mongoose.model('Inventory', AccountSchema);