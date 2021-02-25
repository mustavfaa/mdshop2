<template>
  <div 
    v-if="CART.length"
    :cart_data=""
  >
    



    <h1>Cart</h1>






  </div>
     






   

</template>



<style scoped>


</style>

 

<script>

  export default {
    name: 'v-cart',







    data () {
      return {
          
          
          
        }
    },
    components: {
      


      }

      
    },
    props:{
      cart_data:{
        type:Array,
        default(){
          return[]
        }

    }
    created() {
      
     
        
    },
    methods: {

      



      






    }

















  }
</script>


<script>
  

</script>