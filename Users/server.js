const express = require("express");
const mongoose = require("mongoose")
const productModel = require("./models/productModel")

const app = express();

app.use(express.json());



app.listen(3000,()=>{
    console.log("Server running");
})

const ConnectDB = async()=>{
    try{
        await mongoose.connect("mongodb+srv://Mainuser:himi11234@cluster0.ys1qaxp.mongodb.net/MERN?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Database Connected");
        
    }catch(error){
        console.error(error);
    }
}

ConnectDB();




app.get("/",()=>{
    console.log("Hii");
})

app.post("/productRoute",async (req,res)=>{
    try{
        const product = await productModel.create(req.body);
        console.log(product);
        res.send(product)
    }catch(error){
        console.error("Bhai bhasad hai khai")
    }
})

app.put("/products/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const product = await productModel.findByIdAndUpdate(id,req.body);
        if(!product){
            return res.status(404).json({message:`connot find any product`})
        }
        res.status(200).json(product);
    }catch(error){
        console.error("Bhai bhasad hai khai")
        res.send("error",error)
        res.status(500)
    }
})


app.delete("/products/:id",async(req,res)=>{
    try{
        const{id} = req.params;
        const product = await productModel.findByIdAndDelete(id);
        if(!product){
            res.status(404).json({message:`cannot find any product`})
        }
    }catch(error){
        console.error("Bhai bhasad hai khai")
        res.send("error",error)
        res.status(500)
    }
})
