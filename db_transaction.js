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
    const transactions = await session.withTransaction( async ()=>{
        const {name, email, lastname, telephone, age, gender} = user_credentials
      
        //all the code runs sucessful or finally. nothing like partial success
            const user = new model1({'name': name,'email': email});
            const profile = new model({
                name: name,
                lastname: lastname,
                email: email,
                description: 'Im Joseph  in nigeria',
                telephone: telephone,
                age: age,
                gender: gender
            })
            
            await user.save({session});
            await profile.save({session});
        
    }, option)

    // const result = await transactions
    console.log(transactions)
    if(transactions){
        console.log("The transaction was successful");
    }
   
    }catch(e){
        console.log("The transaction will be aborted due to an unexpected error: " + e);
        // session.abortTransaction();
    }finally{
        await session.endSession();
    }

}