// const mongoose = require('mongoose');
const mongoose = require('mongoose');
const app = require('./app');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const express = require('express');
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(
  express.urlencoded({ extended: true })
);
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('MongoDB connection error:', err);
});




// import express from 'express';

// import userRoutes from './routes/userRoutes.js'
// import  dotenv  from 'dotenv';
// import cookieParser from 'cookie-parser';

// import cors from 'cors';
// const app = express()
// dotenv.config()


// app.use(
//   cors({
//     origin: ["https://shivay-enterprises.vercel.app","https://shivay-enterprises.co.in","http://localhost:5173"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );
// app.use(
//   express.urlencoded({ extended: true })
// );
// app.use(express.json());
// app.use(cookieParser())

// app.get('/', (req, res)=>{
//     res.send('server is listening...')
//   })
//   app.use('/api/users', userRoutes) 
//   const PORT = 5000 || process.env.PORT

// app.listen(PORT, ()=>{
//   console.log(`server is running on port http://localhost:${PORT}`);
// })