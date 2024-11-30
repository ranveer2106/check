// import connectToMongo from './database/db.js';
import express from 'express';
import cors from 'cors';
import payment from './routes/payment.js'
import { connectDB } from './database/db.js';
import 'dotenv/config'



// connectToMongo();
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

connectDB();
//* Available Route 
app.get('/', (req, res) => {
    res.send('Hello this is Razorpay Payment Gateway Using React And Node Js ')
})
app.use('/api/payment', payment);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})