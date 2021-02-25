<template>
<div>
 <div class="container" >

   
 </div> 



<div class="hidden-xs hidden-sm ">
  <div class="container" id="containerProfile"  v-if="loggedIn" >
    <h4 >Адреса доставки</h4>
    <div class="col-12" id="profile12C">
      <div class="row">

        <navbarProfile/>
        <div class="col-10" id="profileC10" style="border-radius: 3px;" v-if="api.length>0">
          <div style="padding:10px 0px;">
            <addressPUT/>
            
            
          </div>
        
        </div>
        <div class="col-10" id="profileC10" v-else>
          <div class="row" style="padding: 10px;">
            <div class="col-12">
              <div>
                <b style="font-size:15px;font-family: sans-serif; ">Адреса доставки</b>
              </div>
            </div>
            <div class="col-12" style="padding-right: 0px;padding-left: 0px;" >
              <form @submit.prevent="customerAddress()">
                <div class="col-12" style="padding-right: 0px;padding-left: 0px;">
                  
                    <div class="col-12" style="margin-top: 20px;">
                      <div class="row">
                        <div class="col-3">
                          <h5 style="font-size:12px;font-family: sans-serif;color:#919191;margin-top: 5px;  ">Страна</h5>
                        </div>
                        <div class="col-4" style="text-align: center;">
                          <input class="inborder" required v-model="country">
                        </div>
                        
                      </div>
                    </div> 
                  
                  
                    <div class="col-12" style="margin-top: 20px;">
                      <div class="row">
                        <div class="col-3">
                          <h5 style="font-size:12px;font-family: sans-serif;color:#919191;margin-top: 5px;  ">Город</h5>
                        </div>
                        <div class="col-4" style="text-align: center;">
                          <input  class="inborder" required v-model="town">
                        </div>
                        
                      </div>
                    </div>
                 
                </div>
                <div class="col-12" style="padding-right: 0px;padding-left: 0px;">
                    <div class="col-12" style="margin-top: 20px;">
                      <div class="row">
                        <div class="col-3">
                          <h5 style="font-size:12px;font-family: sans-serif;color:#919191;margin-top: 5px;  ">Адрес</h5>
                        </div>
                        <div class="col-4" style="text-align: center;">
                          <input class="inborder" required v-model="address">
                        </div>
                      </div>
                    </div> 
                    <div class="col-12" style="margin-top: 20px;">
                      <div class="row">
                        <div class="col-3">
                          <h5 style="font-size:12px;font-family: sans-serif;color:#919191;margin-top: 5px;  ">Дом</h5>
                        </div>
                        <div class="col-4" style="text-align: center;">
                          <input  class="inborder" required v-model="house">
                        </div>
                      </div>
                    </div>
                </div>
                <div class="col-12" style="padding-right: 0px;padding-left: 0px;">
                    <div class="col-12" style="margin-top: 20px;">
                      <div class="row">
                        <div class="col-3">
                          <h5 style="font-size:12px;font-family: sans-serif;color:#919191;margin-top: 5px;  ">Квартира</h5>
                        </div>
                        <div class="col-4" style="text-align: center;">
                          <input class="inborder" required v-model="apartment"> 
                        </div>
                        
                      </div>
                    </div> 
                    <div class="col-12" style="margin-top: 20px;">
                      <div class="row">
                        <div class="col-3">
                          <h5 style="font-size:12px;font-family: sans-serif;color:#919191;margin-top: 5px;  ">Индекс</h5>
                        </div>
                        <div class="col-4" style="text-align: center;">
                          <input  class="inborder" required v-model="index">
                        </div>
                        
                      </div>
                    </div>
                  
                </div>
                
                
                <div class="col-12" style="margin-top: 20px;">
                  <div class="row">
                    <div class="col-6" style="text-align: center;">
                      <button variant="primary" type="submit" class="regbut" >Создать</button>
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
  
</div>




<div v-if="!loggedIn" class="container">
  <div class="col-12" style="text-align: center;">
    <h5>Вы должны быть авторизованы, чтобы добавить товар в Список желаний.</h5>
  </div>
  
  
</div>


<div class="container hidden-lg hidden-md " style="padding-right: 0px;padding-left: 0px;width: 100%;" v-if="loggedIn">
  <h4 >Адреса доставки</h4>
  <div class="row" style="padding-right: 0px;padding-left: 0px; width: 100%;margin-right: 0px;margin-left: 0px;">
    <navbarProfile2/>
    <div class="col-11" style="padding-left: 0px;padding-right: 0px;width: 100%;" >
      <div class="col-12" style="padding-left: 0px;padding-right: 0px;width: 100%;background-color: white;border-bottom:solid 2px #f4f4f4;">
        <form @submit.prevent="customerData()" style="padding: 15px 0px;">
                <div class="col-12" >
                  <div class="row">
                    <div class="col-3">
                      <h5 style="font-size:12px;font-family: sans-serif;color:#919191;margin-top: 5px;  ">Страна</h5>
                    </div>
                    <div class="col-4" style="text-align: center;">
                      <input class="inborder"  v-model="country">
                    </div>
                    
                  </div>
                </div>
                <div class="col-12" style="margin-top: 20px;">
                  <div class="row">
                    <div class="col-3">
                      <h5 style="font-size:12px;font-family: sans-serif;color:#919191;margin-top: 5px;  ">Город</h5>
                    </div>
                    <div class="col-4" style="text-align: center;">
                      <input  class="inborder"  v-model="town">
                    </div>
                    
                  </div>
                </div>
                <div class="col-12" style="margin-top: 20px;">
                  <div class="row">
                    <div class="col-3">
                      <h5 style="font-size:12px;font-family: sans-serif;color:#919191;margin-top: 5px;  ">Адрес</h5>
                    </div>
                    <div class="col-4" style="text-align: center;">
                      <input  class="inborder"  v-model="address">
                    </div>
                    
                  </div>
                </div>
                <div class="col-12" style="margin-top: 20px;">
                  <div class="row">
                    <div class="col-3">
                      <h5 style="font-size:12px;font-family: sans-serif;color:#919191;margin-top: 5px;  ">Дом</h5>
                    </div>
                    <div class="col-4" style="text-align: center;">
                      <input  class="inborder"  v-model="house">
                    </div>
                    
                  </div>
                </div>
                <div class="col-12" style="margin-top: 20px;">
                  <div class="row">
                    <div class="col-3">
                      <h5 style="font-size:12px;font-family: sans-serif;color:#919191;margin-top: 5px;  ">Квартира</h5>
                    </div>
                    <div class="col-4" style="text-align: center;">
                      <input  class="inborder"  v-model="apartment">
                    </div>
                    
                  </div>
                </div>
                <div class="col-12" style="margin-top: 20px;">
                  <div class="row">
                    <div class="col-3">
                      <h5 style="font-size:12px;font-family: sans-serif;color:#919191;margin-top: 5px;  ">Индекс</h5>
                    </div>
                    <div class="col-4" style="text-align: center;">
                      <input  class="inborder"  v-model="index">
                    </div>
                    
                  </div>
                </div>
                
                <div class="col-12" style="margin-top: 20px;">
                  <div class="row">
                    <div class="col-7" style="text-align: center;">
                      <button variant="primary" type="submit" class="regbut" @click="goTO()">Сохранить</button>
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
  import addressPUT from "./addressPUT"
  import {mapGetters} from 'vuex'
  import axios from 'axios';
  import navbarProfile2 from "./navbarProfile2"
  export default {
    name: 'Favorites',
    components: {navbarProfile,addressPUT,navbarProfile2},






    data () {
      return {
        country:'',
        town:'',
        address:'',
        house:'',
        apartment:'',
        index:'',
        addressApi:[],
        api:[]



         
          
          
        }
    },
    

    created() {
      this.Address()
      
      
     
        
    },
    computed: {
          ...mapGetters([
            'loggedIn'
            
          
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
      change(){
        this.$router.push('/shop/address/put');
        
      },
      customerAddress(){
        axios
        .post(
          `http://127.0.0.1:8000/api/v1/customer/address/create`, 
          {'country':this.country,
            'town':this.town,
            'address':this.address,
            'house':this.house,
            'apartment':this.apartment,
            'index':this.index,
            'addressCustomer':this.$store.state.userid})
        .then(response => {console.log(response) ;location.href='/shop/address'; })
        .catch(err => { console.error(err) })

        

        
      },
      Address(){

        axios
          .get('http://127.0.0.1:8000/api/v1/customer/address/', { headers: { Authorization: 'Bearer '+ this.$store.state.accessToken } })
          .then((response) => {
            this.api=response.data
            this.addressApi=response.data.[0]
            console.log(this.addressApi)
          })
          .catch(err => { console.error(err) })
           },

      deleteAddress(addressApi){
            axios
            .delete('http://127.0.0.1:8000/api/v1/customer/address/delete/'+addressApi.id)

           },

      

      
      
     

         
      

      



      






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