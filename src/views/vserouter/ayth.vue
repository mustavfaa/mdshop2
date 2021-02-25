<template>


<div>











  <p style="" id="preg" v-if="isAuthenticated">
    <a id="areg" href="#" @click="onLogout()" >log out </a>
    
  </p>
  <p style="" id="preg" v-if="!isAuthenticated">
    <a id="areg" href="#" @click="log()" >Log in </a>
    <a id="areg" href="#" @click="reg()"> Sign up</a>
    
    
  </p>
































</div>






   

</template>



<style scoped>


</style>

 

<script>


import {mapGetters} from 'vuex'
  export default {
    name: 'ayth',







    data () {
      return {

          
          
          
        }
    },
    

    created() {
      
      
     
        
    },
    watch(){

    },
 
    
    methods: {
      onLogout() {
            this.$store.dispatch('auth/logout');            
            return;

          },
          log(){
            this.$router.push('/auth/signin');
            return;

          },
          reg(){
            this.$router.push('/auth/register/');


          }
      
      

      



      






    },
    components: {
 
      
      
 


    },
    computed:{
      ...mapGetters({
            isAuthenticated: 'auth/isAuthenticated',

        }),
    }

















  }
</script>

<style scoped>


</style>