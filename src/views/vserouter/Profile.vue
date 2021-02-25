<template>
<div>





  <div class="container hidden-xs hidden-sm" id="containerProfile" v-if="loggedIn">
    <h4 >Профиль</h4>
    <div class="col-12" id="profile12C">
      <div class="row">

        <navbarProfile />

        <div class="col-10" id="profileC10">
          <div class="row" style="padding: 10px;">
            <div class="col-12">
              <div>
                <b style="font-size:15px;font-family: sans-serif; ">Мой профиль</b>
              </div>
            </div>
            <div class="col-12" style="padding-right: 0px;padding-left: 0px;" >
              <form  @submit.prevent="customerData()">
                <div class="col-12" style="margin-top: 20px;">
                  <div class="row">
                    <div class="col-3">
                      <h5 style="font-size:12px;font-family: sans-serif;color:#919191;margin-top: 5px;  ">Имя</h5>
                    </div>
                    <div class="col-4" style="text-align: center;">
                      <input class="inborder"  v-model="first_name">
                    </div>
                    
                  </div>
                </div>
                <div class="col-12" style="margin-top: 20px;">
                  <div class="row">
                    <div class="col-3">
                      <h5 style="font-size:12px;font-family: sans-serif;color:#919191;margin-top: 5px;  ">Фамилия</h5>
                    </div>
                    <div class="col-4" style="text-align: center;">
                      <input  class="inborder"  v-model="last_name">
                    </div>
                    
                  </div>
                </div>
                <div class="col-12" style="margin-top: 20px;">
                  <div class="row">
                    <div class="col-3">
                      <h5 style="font-size:12px;font-family: sans-serif;color:#919191;margin-top: 5px;  ">Мобильный номер телефона</h5>
                    </div>
                    <div class="col-4" style="text-align: center;">
                      <input  class="inborder"  v-model="phone">
                    </div>
                    
                  </div>
                </div>
                <div class="col-12" style="margin-top: 20px;">
                  <div class="row">
                    <div class="col-3">
                      <h5 style="font-size:12px;font-family: sans-serif;color:#919191;margin-top: 5px;  ">E-mail</h5>
                    </div>
                    <div class="col-4" style="text-align: center;">
                      <input  class="inborder"  v-model="email">
                    </div>
                    
                  </div>
                </div>
                <div class="col-12" style="margin-top: 20px;">
                  <div class="row">
                    <div class="col-3">
                      <h5 style="font-size:12px;font-family: sans-serif;color:#919191;margin-top: 5px;  ">Пароль</h5>
                    </div>
                    <div class="col-4" style="margin-left: 30px;">
                      <a href="" style="color: green;">Изменить пароль</a>
                    </div>
                    
                  </div>
                </div>
                <div class="col-12" style="margin-top: 20px;">
                  <div class="row">
                    <div class="col-7" style="text-align: center;">
                      <button variant="primary" type="submit" class="regbut" >Сохранить</button>
                    </div>
                   
                    
                  </div>
                </div>
              </form>
            </div>


            
          </div>
        </div>

      </div>
    </div>
  </div>




  
<div v-if="!loggedIn" class="container">
  <div class="col-12" style="text-align: center;">
    <h5>Вы должны быть авторизованы, чтобы добавить товар в Список желаний.</h5>
  </div>
  
  
</div>

  
     



<div class="container hidden-lg hidden-md " style="padding-right: 0px;padding-left: 0px;width: 100%;" v-if="loggedIn">
  <h4 >Профиль</h4>
  <div class="row" style="padding-right: 0px;padding-left: 0px; width: 100%;margin-right: 0px;margin-left: 0px;">
    <navbarProfile2/>
    <div class="col-11" style="padding-left: 0px;padding-right: 0px;width: 100%;" >
      <div class="col-12" style="padding-left: 0px;padding-right: 0px;width: 100%;background-color: white;border-bottom:solid 2px #f4f4f4;">
        <form  @submit.prevent="customerData()" style="padding: 15px 0px;">
                <div class="col-12" style="">
                  <div class="row">
                    <div class="col-3">
                      <h5 style="font-size:12px;font-family: sans-serif;color:#919191;margin-top: 5px;  ">Имя</h5>
                    </div>
                    <div class="col-4" style="text-align: center;">
                      <input class="inborder"  v-model="first_name">
                    </div>
                    
                  </div>
                </div>
                <div class="col-12" style="margin-top: 20px;">
                  <div class="row">
                    <div class="col-3">
                      <h5 style="font-size:12px;font-family: sans-serif;color:#919191;margin-top: 5px;  ">Фамилия</h5>
                    </div>
                    <div class="col-4" style="text-align: center;">
                      <input  class="inborder"  v-model="last_name">
                    </div>
                    
                  </div>
                </div>
                <div class="col-12" style="margin-top: 20px;">
                  <div class="row">
                    <div class="col-3">
                      <h5 style="font-size:12px;font-family: sans-serif;color:#919191;margin-top: 5px;  ">Телефона</h5>
                    </div>
                    <div class="col-4" style="text-align: center;">
                      <input  class="inborder"  v-model="phone">
                    </div>
                    
                  </div>
                </div>
                <div class="col-12" style="margin-top: 20px;">
                  <div class="row">
                    <div class="col-3">
                      <h5 style="font-size:12px;font-family: sans-serif;color:#919191;margin-top: 5px; ">E-mail</h5>
                    </div>
                    <div class="col-4" style="text-align: center;">
                      <input  class="inborder"  v-model="email">
                    </div>
                    
                  </div>
                </div>
                
                <div class="col-12" style="margin-top: 20px;">
                  <div class="row">
                    <div class="col-7" style="text-align: center;">
                      <button variant="primary" type="submit" class="regbut" >Сохранить</button>
                    </div>
                   
                    
                  </div>
                </div>
              </form>
      </div>
      
      
    </div>
  </div>
</div>



   
</div>
</template>





 

<script>
import navbarProfile from "./navbarProfile"
import navbarProfile2 from "./navbarProfile2"
import {mapGetters} from 'vuex'
import axios from 'axios';
  export default {
    name: 'Favorites',
    components: {navbarProfile,navbarProfile2},






    data () {
      return {
        dataCustomer:[],
        first_name:'',
        last_name:'',
        phone:'',
        email:'',
        customerId:''



         
          
          
        }
    },
    

    created() {
      this.saveProfile()
      
      
     
        
    },
    computed: {
          ...mapGetters([
            'loggedIn',
            
          
            ],
            
            

            
          

          ),


        },
 
    
    methods: {
      Profile(){
        this.$router.push('/shop/profile');
        
      },
      goAddress(){
        this.$router.push('/shop/address');
        
      },
      saveProfile(){
              axios
                .get('http://127.0.0.1:8000/api/v1/customers/', { headers: { Authorization: 'Bearer '+ this.$store.state.accessToken } })
                .then(response=> {
                  response.data.data,
                  this.dataCustomer=response.data.data.[0],
                  this.first_name=response.data.data.[0].first_name,
                  this.last_name=response.data.data.[0].last_name,
                  this.phone=response.data.data.[0].phone,
                  this.email=response.data.data.[0].email,
                  this.customerId=response.data.data.[0].id,
                  console.log(this.dataCustomer)
                  console.log(this.first_name)
                })
                console.log(this.$store.state.accessToken )
                
              

          },
          customerData(){
            axios
            .put('http://127.0.0.1:8000/api/v1/customer/update/'+this.customerId,
              {'first_name': this.first_name,'last_name':this.last_name,'email':this.email,'phone':this.phone},
              { headers: { Authorization: 'Bearer '+ this.$store.state.accessToken } }
              )
            .then(() => {
              location.href='/shop/profile';
            })
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