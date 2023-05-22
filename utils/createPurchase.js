import {PurchaseModel} from '../model/Account.js';

(async function createPurchase(){
    const number = Math.floor(Math.random() * 10000)
    const data = [
        {purchaseName:'Fufu'+number, amount: '20USD'},
        {purchaseName:'Indomie'+number, amount: '30USD'},
        {purchaseName:'Golden morn'+number, amount: '40USD'}
    ]

    try{
        const purchase =  await PurchaseModel.insertMany(JSON.stringify(data))
        console.log('Purchase created successfully')
      }catch(e){
          console.log('Purchase creation fails')
      }
  
})()