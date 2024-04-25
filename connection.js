const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://athira:12345@cluster0.dw3beco.mongodb.net/blogapp?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("db connected")
    })
    .catch((error)=>{
        console.log(error)
    })