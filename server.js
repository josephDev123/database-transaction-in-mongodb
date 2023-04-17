import express from 'express';
import dotenv from 'dotenv';
import {Router} from './routers/user_profile_router.js'
import {dbconnection} from './db.js'

dotenv.config();
// dbconnection()
const PORT = process.env.PORT || 5000
const app = express();

app.use('api/v1/', Router);

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`));