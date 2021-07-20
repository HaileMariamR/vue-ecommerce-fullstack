<template>
    <div class="row">
        <h1>Shooping Cart</h1>
        
            <div class="product-container" v-for="item in cartItems" :key="item.id">

                    <img class="product-image" v-bind:src="item.imageUrl" alt="">

                    <div class="details-wrap">
                        <h3>{{item.name}}</h3>
                        <p>${{item.price}}</p>

                    </div>
                    <button class="remove-button">Remove</button>
            </div>
            <h3 id="total-price">Total Price of all Item : $ {{totalPrice}}</h3>
     
     <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
            © 2021 Copyright: Hailemariam Fiakdie
        </div>

    </div>

    
</template>


<script>
import {cartItems} from '../tempo-data'

export default {

    name:"Cart",
    data(){
        return {
            cartItems
        }
    },
    computed:{
        totalPrice(){
            return this.cartItems.reduce((sum,item)=> sum + Number(item.price),0,)
        }
    }

}
</script>


<style scoped>
  h1 {
    border-bottom: 1px solid black;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
  }

  #total-price {
    padding: 16px;
    text-align: right;
  }

  #checkout-button {
    width: 100%;
  }

  .product-container {
    align-content: 'center';
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 16px;
    width: 100%;
  }

  .product-image {
    flex: 1;
    height: 100px;
    max-width: 100px;
  }

  .details-wrap {
    padding: 0 16px;
    flex: 3;
  }

  .remove-button {
    flex: 1;
    margin: auto;
  }
</style>