<template>
  <div id="app">
    <h1>Lets go Somewhere</h1>
    <router-view></router-view>
    <router-link to="/">Home</router-link><br>
    <router-link to="/users/10">Users for team 10</router-link><br>
    <router-link to="/users/12">Users for team 12</router-link>
  </div>


</template>

<script>

  export  default {
    data(){

      return{

      }
    }

  }
</script>


