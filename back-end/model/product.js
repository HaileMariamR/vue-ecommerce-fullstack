import mongoose from 'mongoose'

const ProductSchema = mongoose.Schema({

        id : {
            type : String,
            required:true,
            unique : true
        },
        name:{
            type:String , 
            required:true, 
            unique:true
        }, 
        price:{
            type:String , 
            required:true, 
            unique:true
        }, 
        description:{
            type:String , 
            required:true, 
            unique:true
        }, 
        imageUrl:{
            type:String , 
            required:true, 
            unique:true
        }, 
        averageRating:{
        type:String , 
        required:true, 
        unique:true
        
    }
        
        
        


})

 const Products = mongoose.model("Product" , ProductSchema);
 export default Products
