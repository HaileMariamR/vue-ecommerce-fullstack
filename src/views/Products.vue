<template>
     
     


        <div class=".grid-wrap">
                <div v-for="product in allProduct" :key="product.id"
                    class="product-item"
                >
                <h3 class="product-name">{{product.name}}</h3>
                
                </div>

        </div>
  
</template>


<script>

import {allProduct} from '../tempo-data';

export default {
    name:"Products",
    data(){

        return { allProduct };
    
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