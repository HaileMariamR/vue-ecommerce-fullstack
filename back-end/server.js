import express  from 'express'
import mongoose from 'mongoose'
import Products from './model/product.js';
import bodyParser from 'body-parser';
import path from 'path'
import { dirname } from 'path';
import cors from 'cors'
import { fileURLToPath } from "url";
const db = mongoose.connect("mongodb://localhost:12345/v-ecommerce" , { useNewUrlParser: true } );


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
  

const app = express()
app.use('/images' , express.static(path.join(__dirname, '../assets')))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

const allRoutes = express.Router()
allRoutes.route("/Products")
.get( async (req, res) =>{

 await Products.find((err , product)=>{
        if(err){
            return res.send(err)
        }
        return res.json(product) 
    })

})
allRoutes.route('/Products/:ProductId')
.get(async  (req, res) =>{
    const ProductId = req.params.ProductId
  await  Products.findOne({"id" : ProductId} , (err , product)=>{
    if(err){
        return res.send(err)
    }
    return res.json(product) 
});
  

      
}
)


app.use('/api' , allRoutes)
app.listen(3000, ()=>{
    console.log("Server running!!");
})


export default db