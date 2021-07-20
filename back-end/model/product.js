import mongoose from 'mongoose'

const ProductSchema = mongoose.Schema({

        id : {
            type : String,
            required:true,
        },
        name:{
            type:String , 
            required:true, 
        }, 
        price:{
            type:String , 
            required:true, 
        }, 
        description:{
            type:String , 
            required:true, 
        }, 
        imageUrl:{
            type:String , 
            required:true, 
        }, 
        averageRating:{
        type:String , 
        required:true, 
        
    }
        
        
        


})

 const Products = mongoose.model("Product" , ProductSchema);
 export default Products
