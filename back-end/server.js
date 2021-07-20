import express  from 'express'
import mongoose from 'mongoose'
import Products from './model/product.js';
const db = mongoose.connect("mongodb://localhost:12345/v-ecommerce");

  
  

const app = express()
const allRoutes = express.Router()
allRoutes.route("/Products")
.get((req, res) =>{

    Products.find((err , product)=>{
        if(err){
            return res.send(err)
        }
        return res.json(product) 
    })

})



app.use('/api' , allRoutes)
app.listen(3000, ()=>{
    console.log("Server running!!");
})


export default db