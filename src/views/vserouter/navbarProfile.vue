<template>

<div class="col-2 " id="profileC2">
  <div class="row   hidden-xs hidden-sm">
    <div class="col-12" id="profileC3C12">
      <div>
        <a href="#" @click="Profile()" class="shripht">Мой профиль</a>
      </div>
    </div>  
    <div class="col-12" id="profileC3C12">
      <div>
        <a href="#" @click="goAddress()" class="shripht">Адреса доставки</a>
      </div>
    </div>
    <div class="col-12" id="profileC3C12">
      <div>
        <a href="#" @click="goLike()" class="shripht">Список желаний</a>
      </div>
    </div>
    <div class="col-12" id="profileC3C12">
      <div>
        <a href="#" @click="goOrder()" class="shripht">Мой заказы</a>
      </div>
    </div>
    <div class="col-12" id="profileC3C12">
      <div>
        <a href="#" class="shripht">Выйти</a>
      </div>
    </div>
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