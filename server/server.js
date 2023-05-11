const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./db.js');
const medicineRouter = require('./routes/medicine.routes.js');
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get('/',(req,res) => {
    res.send(
       " <html><head></head><body><h1>Hello world</h1></body></html>"
    )
})
app.use('/medicine',medicineRouter);

connectDB();
app.listen(PORT,() => { 
    console.log(`Server is listening on port ${PORT}`);
})