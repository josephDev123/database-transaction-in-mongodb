import mongoose from 'mongoose';

export async function signUp_profileTransaction(model1, model, user_credentials){
    const option = {
        readPreference: 'primary',
        readConcern: { level: 'local' },
        writeConcern: { w: 'majority' }
    }

    //start session
    const session = await mongoose.startSession();
    try{
    const signUp_profileTransaction = await session.withTransaction(async ()=>{
        const {name, email, lastname, telephone, age, gender} = user_credentials
      
            const user = new model1({'name': name,'email': email});
            console.log(user)
        
    }, option)
    

    }catch(e){
        console.log("The transaction was aborted due to an unexpected error: " + e);
    }finally{
        
        session.endSession();
    }

}