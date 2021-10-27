const express=require("express");
const files=require('./data/files');
const dotenv= require('dotenv');
const connectDB=require("./config/db");
const userRoutes=require('./routes/userRoutes');
const { notFound,errorHandler } = require("./middlewares/errorMiddleware");


 const app = express(); // main thing
 dotenv.config();
 connectDB();
 app.use(express.json()); // to accept json data

 app.use("/api/users", userRoutes);

 app.get("/",(req,res)=>{
     res.send("API is running..");
 });

 app.get("/api/files",(req,res)=>{
    res.json(files);
});


// app.get("/api/files/:id",(req,res)=>{
//     const note =files.find((n)=>n._id===req.params.id);
//     res.send(note);
    
// });

app.use(notFound);
app.use(errorHandler);
const PORT=process.env.PORT || 5000;

 app.listen(PORT,console.log(`server started on PORT ${PORT}`));

