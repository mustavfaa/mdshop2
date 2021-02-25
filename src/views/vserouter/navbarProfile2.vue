<template>

<div class="col-1" style="padding-right: 0px;padding-left: 0px;border-right: 2px solid #f4f4f4;height: 240px;background-color: white;">

  <div class="col-12" style="padding-right: 0px;padding-left: 0px;width: 100%;text-align: center;padding: 2px;">
    <img @click="Profile()" src="../../assets/img/user.png" style="width: 90%">
  </div>
  <div class="col-12" style="padding-right: 0px;padding-left: 0px;width: 100%;margin-top: 5px;text-align: center;padding: 2px;">
    <img @click="goAddress()" src="../../assets/img/edit.png" style="width: 90%">
  </div>
  <div class="col-12" style="padding-right: 0px;padding-left: 0px;width: 100%;margin-top: 5px;text-align: center;padding: 2px;">
    <img @click="goLike()" src="../../assets/img/like.png" style="width: 90%">
  </div>
  <div class="col-12" style="padding-right: 0px;padding-left: 0px;width: 100%;margin-top: 5px;text-align: center;padding: 2px;">
    <img @click="goOrder()"  src="../../assets/img/clipboard.png" style="width: 90%">
  </div>
  <div class="col-12" style="padding-right: 0px;padding-left: 0px;width: 100%;margin-top: 5px;text-align: center;padding: 2px;">
    <img src="../../assets/img/logout.png" style="width: 90%">
  </div>
  
  
</div>



</template>





 

<script>



  export default {
    name: 'Favorites',







    data () {
      return {


         
          
          
        }
    },
    

    created() {
      
      
     
        
    },
 
    
    methods: {
      Profile(){
        this.$router.push('/shop/profile');
        
      },
      goAddress(){
        this.$router.push('/shop/address');
        
      },
      goLike(){
        this.$router.push('/shop/like');
      },
      goOrder(){
        this.$router.push('/shop/customer/order');
      }

      
      
     

         
      

      



      






    },

    
















  }
</script>

<style scoped>
#containerProfile{
  padding-right: 0px;
  padding-left: 0px;
  margin-top: 20px;

}
#profileC2{
  background-color: white;
  border-radius: 2px;
  border: #f4f4f4 2px solid; 
  height: 130px;

}
#profileC10{
  background-color: white;
  border-radius: 2px ;
  border-right: #f4f4f4 4px  solid;
  border-left: #f4f4f4 4px  solid;
  border-top: #f4f4f4 2px solid;
  border-bottom:#f4f4f4 2px solid;

}
.shripht{
  font-size: 10px;
}
.inborder{
  border-radius: 3px;
  border: 1px solid green;
  width: 220px;
}
.regbut{
  border-radius: 6px;


  margin: 0 auto;
  text-align: center;
  display: -webkit-box;
  padding: 2px;
  color: white;
  background-color: rgb(2, 143, 104);
  border: rgb(2, 143, 104) 1px solid;
}

</style>