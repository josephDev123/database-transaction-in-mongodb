import express from 'express';
import {User_model} from '../model/User.js';
import {Profile_model} from '../model/profile.js';
import {signUp_profileTransaction} from '../db_transaction.js'
// import {createAccount} from '../utils/createAccount.js'

export const Router = express.Router()

Router.post('/sign-up', async (req, res)=>{
const user_credential = req.body; 
// 1.  check whether the user has already registered

// 2. start transaction here
    try{
        await signUp_profileTransaction(User_model, Profile_model, user_credential);
        res.end()
    }catch(error){
        console.log(error)
    }
   
});

Router.post('/trial', async (req, res)=>{
    console.log('trial')
})
