import {dbconnection} from '../db.js';
import {AccountModel} from '../model/Account.js';


export async function createAccount(){
    try{
        dbconnection()
        // const number = Math.floor(Math.random() * 10000)
        
        const data = [
            {name:'user 1', balance: 50},
            {name:'user 2', balance: 60},
            {name:'user 3', balance: 70}
        ]
        const options = {ordered: true}
    
        await AccountModel.insertMany(data, options)
        console.log('account created successfully')

      }finally{
        console.log('alway runs')
      }
    //   catch(e){
    //       console.log('account creation fails: '+  e.message)
    //   }
}

createAccount().catch((err)=> console.log('account creation fails: '+  err.message))