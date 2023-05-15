import mongoose from "mongoose";


const PurchaseSchema = mongoose.Schema({
    purchaseName: String,
    amount: Number
}, {timestamp:true});

export const PurchaseModel = mongoose.model('Inventory', PurchaseSchema);