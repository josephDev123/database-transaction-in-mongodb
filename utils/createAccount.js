import {AccountModel} from '../model/Account.js';

async function createAccount(){
    const data = [
        {name:'user 1', balance: '50USD'},
        {name:'user 2', balance: '60USD'},
        {name:'user 3', balance: '70USD'}
    ]

    try{
        const account =  await AccountModel.insertMany(JSON.stringify(data))
        console.log('account created successfully')
      }catch(e){
          console.log('account creation fails')
      }
}