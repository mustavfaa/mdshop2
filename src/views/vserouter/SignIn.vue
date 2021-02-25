<template>


  <div>






    <div class="w-50  rounded p-3 mx-auto hidden-sm hidden-xs">
     <p v-if="incorrectAuth">Incorrect username or password entered - please try again</p>
     <form  @submit.prevent="login()" >
       <div class="form-group">
         <label for="username">Логин:</label>
         <input v-model="username" required type="text" id="username" class="inborder"  placeholder="Логин...">

       </div>
       <div class="form-group">
         <label for="password">Пароль:</label>
         <input v-model="password" type="password" id="password" class="inborder" required  placeholder="Пароль...">
       </div>
       
       <button variant="primary" :href="url" type="submit" class="regbut" style="padding: 5px 15px 8px 15px;">Войти</button>
       <p class="mt-3">Ещё не зарегистрированы? <router-link to="/auth/register/">Регистрация</router-link>
       </p>
   
     </form>
   
   </div>

   <div class="w-100  rounded p-3 mx-auto hidden-lg hidden-md">
     <form  @submit.prevent="login()" >
       <div class="form-group">
         <label for="username">Логин:</label>
         <input v-model="username" required type="text" id="username" class="inborder"  placeholder="Логин...">

       </div>
       <div class="form-group">
         <label for="password">Пароль:</label>
         <input v-model="password" type="password" id="password" class="inborder" required  placeholder="Пароль...">
       </div>
       
       <button variant="primary" :href="url" type="submit" class="regbut" style="padding: 5px 15px 8px 15px;">Войти</button>
       <p class="mt-3">Ещё не зарегистрированы? <router-link to="/auth/register/">Регистрация</router-link>
       </p>
   
     </form>
   
   </div>
    





  </div>
 

</template>
<script>
export default {
 name: "SignIn",
 data() {
   return {
     username: "",
     password: "",
     url:""

   };
 },
  methods: {
    /**async onSubmit() {
      const { username, password } = this;
      const { data } = await this.$store.dispatch('auth/login', {
        username,
        password,
        
      });

      if (!data) {
        return;
      }

      return location.href='/';

    },**/
    login () { 
      this.$store.dispatch('userLogin', {
        username: this.username,
        password: this.password
      })
      .then(() => {
        location.href='/';
      })
      .catch(err => {
        console.log(err)
        this.incorrectAuth = true
      })
      }
    




  }
};

</script>
<style scoped>
.inborder{
  border-radius: 3px;
  border: 1px solid green;
}
.regbut{
  border-radius: 6px;


  margin: 0 auto;
  text-align: center;
  display: -webkit-box;

  color: white;
  background-color: rgb(2, 143, 104);
  border: black 1px solid;
}
.regbut:hover{
  background-color: #f4f4f4;
  color: black; 
}
</style>