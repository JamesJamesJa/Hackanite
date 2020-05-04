<template>
<v-app>
  <v-content> 
    <router-view />
  </v-content>
 
</v-app>
</template>

<style >
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');

  a {
    text-decoration: none;
  }
  #app {
    background: transparent !important;
    font-family: "Nunito", sans-serif;
  } 

</style>
<script>
import Register from "./views/Register";

export default {
  components: {
     Register, 
  }
};
</script>