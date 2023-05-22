import {AccountModel} from '../model/Account.js';

(async function createAccount(){
    
    try{
        // const number = Math.floor(Math.random() * 10000)
        
        const data = [
            {name:'user 1', balance: 50},
            {name:'user 2', balance: 60},
            {name:'user 3', balance: 70}
        ]
        const options = {ordered: true}
    
        const account = await AccountModel.insertMany(data, options)
        console.log('account created successfully')

      }catch(e){
          console.log('account creation fails')
      }
})()