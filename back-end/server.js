import express  from 'express'
import mongoose from 'mongoose'
import Products from './model/product.js';
import bodyParser from 'body-parser';
const db = mongoose.connect("mongodb://localhost:12345/v-ecommerce" , { useNewUrlParser: true } );


  
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

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