<template>
  <div>


     <div class="w-50  rounded p-3 mx-auto hidden-xs hidden-sm">
       <form @submit="register">
          <div style="height: 250px;">


            <div class="form-group">
               <label for="username"><span class="text-danger">*</span>Логин:</label>
               <input v-model="username" type="text" id="username" class="inborder"  required>
               <p class="text-danger" >{{errorLogin}}</p>
             </div>
             
             
             


             <div class="form-group required">
                <label class="control-label" for="password"><span class="text-danger">*</span>Пароль:</label>
                <input v-model="password" type="password" id="password" class="inborder" required>
                <p><small class="text-muted">Минимальная длина пароля 8 символов</small></p>
              </div>

              <div class="form-group required">
                <label class="control-label" for="repeatPassword"><span class="text-danger">*</span>Повторите пароль:</label>
                <input v-model="repeatPassword" type="password" id="repeatPassword" class="inborder" required>
              </div>

              <p class="text-danger" v-if="!$v.password.minLength">Длина пароля меньше 8 символов</p>
              <p class="text-danger" style="margin-top:-15px;" v-if="$v.password.required && $v.repeatPassword.required && !$v.repeatPassword.sameAs">Введённые пароли не совпадают</p>

            




          </div>
         

          <button variant="primary" class="regbut" type="submit" :disabled="formValid">Регистрация</button>
          
          <p class="mt-3" >Уже есть аккаунт? <router-link to="/auth/signin">Вход</router-link>
          </p>
          <p class="mt-3"><small class="text-muted">Все поля отмеченные <span class="text-danger">*</span> обязательны для заполнения.</small></p>
       </form>
     </div>



     <div class="w-100  rounded p-3 mx-auto hidden-lg hidden-md">
       <form @submit="register">
          <div style="height: 250px;">


            <div class="form-group">
               <label for="username"><span class="text-danger">*</span>Логин:</label>
               <input v-model="username" type="text" id="username" class="inborder"  placeholder="">
             </div>
             
             
             


             <div class="form-group required">
                <label class="control-label" for="password"><span class="text-danger">*</span>Пароль:</label>
                <input v-model="password" type="password" id="password" class="inborder" placeholder="">
                <p><small class="text-muted">Минимальная длина пароля 8 символов</small></p>
              </div>

              <div class="form-group required">
                <label class="control-label" for="repeatPassword"><span class="text-danger">*</span>Повторите пароль:</label>
                <input v-model="repeatPassword" type="password" id="repeatPassword" class="inborder" placeholder="">
              </div>

              <p class="text-danger" v-if="!$v.password.minLength">Длина пароля меньше 8 символов</p>
              <p class="text-danger" style="margin-top:-15px;" v-if="$v.password.required && $v.repeatPassword.required && !$v.repeatPassword.sameAs">Введённые пароли не совпадают</p>

            




          </div>
         

          <button variant="primary"  type="submit" class="regbut" style="" >Регистрация</button>
          
          
          <p class="mt-3" >Уже есть аккаунт? <router-link to="/auth/signin">Вход</router-link>
          </p>
          <p class="mt-3"><small class="text-muted">Все поля отмеченные <span class="text-danger">*</span> обязательны для заполнения.</small></p>
       </form>
     </div>
        







  </div>

</template>
<script>
import { required, minLength, sameAs } from 'vuelidate/lib/validators'
import { IMaskDirective } from 'vue-imask'
export default {
 name: "SignUp",
 data() {
   return {
     username: "",
     password: "",
     repeatPassword: "",
     phone: "",
     email:"",
     errorLogin:"",
     Login:"Такой логин занять"


     
   };
 },
 computed: {
  
   
  },
 validations: {
    username: {
      required,
      minLength: minLength(5)
    },
    password: {
      required,
      minLength: minLength(8)
    },
    repeatPassword: {
      required,
      sameAs: sameAs('password')
    },
    phone: {
      required
    },
    customerOrExecutor: {
      required
    }
  },
 methods: {
  
   register(event) {
     event.preventDefault();

     this.axios
    .post(`http://localhost:8000/api/v1/auth/users/`, {'username': this.username, 'password': this.password,'email':this.email })
    .then(response => {console.log(response) ;this.$router.push('/auth/signin') })
    .catch(function(error) {
    if (error.response && error.response.status === 400) {
      this.errorLogin=this.Login
    } else {
      // Handle error however you want
    }
  });

   }
 },

 directives: {
    imask: IMaskDirective
  }
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