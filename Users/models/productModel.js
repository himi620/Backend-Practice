const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        name:{
            type: String,
            require: [true, "Enter the name"]
        },
        quantity:{
            type:Number,
            require:[true],
            default:0
        },
        price:{
            type:String,
            require: true
        },
        image:{
            type:String,
        }
    },
    {
        timestamps:true
    }
) 

const product = mongoose.model("Product",productSchema);

module.exports = product;