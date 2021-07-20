<template>
     
     
    <div class="">

        <div class="row">
                <div  v-for="product in allProduct" :key="product.id"
                    class="product-item col-md-4"
                >
                <img v-bind:src="product.imageUrl">
                <h3 class="product-name">{{product.name}}</h3>
                <p class="product-price">${{product.price}}</p>
                <router-link v-bind:to="'productDetail' + product.id">
                <button>View Detail</button>
                </router-link>

                </div>
        </div>

        <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
            © 2021 Copyright: Hailemariam Fiakdie
        </div>
    </div>

</template>


<script>

// import {allProduct} from '../tempo-data';
import axios from 'axios'


export default {
    name:"Products",
     data(){
        return { 

          allProduct :[]
           
        }
    
    }, 
    

     created() {
  
                // Creating loader
            
  
                axios.get(
        `http://localhost:3000/api/products`)
                    .then(response => {
  
                        // JSON responses are 
                        // automatically parsed
                        this.allProduct = response.data
                    })   
  
                    // Dealing with errors
                    .catch(error => {
                        console.log(error)
                        this.errored = true
                    })
            }
   

}
</script>

<style scoped>
  .grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
  }

  .product-item {
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 2px 5px #888;
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;
    padding: 20px;
    position: relative;
    width: 32%;
  }

  .product-name {
    margin-bottom: 0;
  }

  img {
    height: 200px;
    width: 200px;
  }

  a {
    width: 100%;
  }

  button {
    width: 100%;
  }
</style>