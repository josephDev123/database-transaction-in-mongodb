import mongoose from "mongoose";


const InventorySchema = mongoose.Schema({
    productName: String,
    count: Number
}, {timestamp:true});

export const InventoryModel = mongoose.model('Inventory', InventorySchema);