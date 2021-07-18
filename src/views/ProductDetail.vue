<template>
 

    <div class="row">
        <div class="offset-3 p-5">
            <img v-bind:src="single_product.imageUrl" alt="">
      
            <h1>{{single_product.name}}</h1>
            <h3 >{{single_product.price}}</h3>
            <p>Average Rating : {{single_product.averageRating}}</p>
            <button class="btn btn-primary" id="add">AddtoCart</button>

        </div>

        <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
            © 2021 Copyright: Hailemariam Fiakdie
        </div>

    </div>
    
</template>


<script>
import {allProduct} from '../tempo-data'
export default {
    name:"ProductDetail",
    data(){
        return {
            single_product : allProduct.find((product) => product.id === this.$route.params.id),
        }
    }

}
</script>

<style scoped>
  #page-wrap {
    margin-top: 16px;
    padding: 16px;
    max-width: 600px;
  }

  #img-wrap {
    text-align: center;
  }

  img {
    width: 400px;
  }

  #product-details {
    padding: 16px;
    position: relative;
  }

  #add-to-cart {
    width: 100%;
  }

  #price {
    position: absolute;
    top: 24px;
    right: 16px;
  }
</style>