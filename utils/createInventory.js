import {InventoryModel} from '../model/Account.js';

async function createInventory(){

    const data = [
        {productName:'Garri', count: 10},
        {productName:'fufu', balance: 15},
        {productName:'Indomie', balance: 20}
    ]

    try{
      const inventory =  await InventoryModel.insertMany(JSON.stringify(data))
      console.log('inventory created successfully')
    }catch(e){
        console.log('inventory created fails')
    }

}