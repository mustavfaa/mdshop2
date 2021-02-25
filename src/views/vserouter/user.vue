<template>
  <div>


     



     <div class="w-50  rounded p-3 mx-auto">
       <form @submit="register">
          <div style="height: 420px;">


            
             <div class="form-group">
               <label for="phone">Мобильный телефон</label>
               <input v-model="phone" type="text" id="phone" class="inborder" placeholder="">
             </div>
            
             
             


             

            




          </div>
         

          <button variant="primary"  type="submit" class="regbut" style="" >Регистрация</button>
          
          
         
        
         
       </form>
     </div>
        







  </div>

</template>
<script>

export default {
 name: "user",
 props: ['userId'],
 data() {
   return {
     username: "",
     password: "",
     repeatPassword: "",
     phone: "",
     email:"",

     


     
   };
 },
 computed: {
  
   
  },
 
 methods: {
  
 },
 
};

</script>
<style scoped>
.inborder{
  border-radius: 3px;
  border: 1px solid green;
}


.mt-3{
    text-align: center;
}
.regbut{
  color: white;background-color: rgb(2, 143, 104);border: black 1px solid;border-radius: 6px;padding: 5px 15px 8px 15px;margin: 0 auto;text-align: center;  display: -webkit-box;

}
</style>