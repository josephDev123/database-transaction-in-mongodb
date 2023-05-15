import {AccountModel} from '../model/Account.js';

(async function createAccount(){
    const number = Math.floor(Math.rand() * 10000)
    const data = [
        {name:'user'+number, balance: '50USD'},
        {name:'user'+number, balance: '60USD'},
        {name:'user'+number, balance: '70USD'}
    ]

    try{
        const account =  await AccountModel.insertMany(JSON.stringify(data))
        console.log('account created successfully')
      }catch(e){
          console.log('account creation fails')
      }
})*()