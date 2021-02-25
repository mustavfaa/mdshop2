<template>
<div>







    

        
            <div class="col-12">
              <div>
                <b style="font-size:15px;font-family: sans-serif; ">Адреса доставки</b>
              </div>
            </div>
            <div class="col-12" style="padding-right: 0px;padding-left: 0px;" >
              <form  @submit.prevent="customerData()">
                <div class="col-12" style="margin-top: 20px;">
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
</template>





 

<script>

import {mapGetters} from 'vuex'
import axios from 'axios';
  export default {
    name: 'Favorites',







    data () {
      return {
        dataCustomer:[],
        country:'',
        town:'',
        address:'',
        apartment:'',
        index:'',
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
      goTO(){
        location.href='/shop/address';
      },
      saveProfile(){
              axios
                .get('http://127.0.0.1:8000/api/v1/customer/address/', { headers: { Authorization: 'Bearer '+ this.$store.state.accessToken } })
                .then(response=> {
                  response.data.data,
                  this.dataCustomer=response.data.[0],
                  this.country=response.data.[0].country,
                  this.town=response.data.[0].town,
                  this.address=response.data.[0].address,
                  this.house=response.data.[0].house,
                  this.apartment=response.data.[0].apartment,
                  this.index=response.data.[0].index,
                  this.customerId=response.data.[0].id,
                  console.log(this.dataCustomer)
                  console.log(this.country)
                })
                console.log(this.$store.state.accessToken )
                
              

          },
          customerData(){
            axios
            .put('http://127.0.0.1:8000/api/v1/address/update/'+this.customerId,
              {'country': this.country,'town':this.town,'address':this.address,'house':this.house,'apartment':this.apartment,'index':this.index}
              )
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