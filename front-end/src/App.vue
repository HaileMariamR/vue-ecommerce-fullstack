


<template>
 
 <div>


 <nav class="navbar navbar-light bg-light justify-content-between">
  <a class="navbar-brand">My Shooping</a>
  <router-link to="/products">Products</router-link> |
      <router-link to="/cart">Cart</router-link>
  
</nav>


    <!-- router-view re render component -->
    <router-view/>

 </div>

</template>

<style>
  body{
    overflow-x: hidden;
  }
  * {
    box-sizing: border-box;
    font-family: Arial;
  }

  #page-wrap {
    margin: auto;
    max-width: 800px;
    min-height: 100vh;
  }

  button {
    background-color: black;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    outline: 0;
    padding: 16px;
  }
</style>