import {PurchaseModel} from '../model/Account.js';

(async function createPurchase(){
    const data = {purchaseName:'', amount: '20USD'}

    try{
        const purchase =  await PurchaseModel.insertOne(JSON.stringify(data))
        console.log('Purchase created successfully')
      }catch(e){
          console.log('Purchase creation fails')
      }
  
})()