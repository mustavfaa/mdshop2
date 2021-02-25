<template>
<div>





  <div class="container hidden-xs hidden-sm" id="containerProfile"  v-if="loggedIn">
    <h4 >Мой заказы</h4>
    <div class="col-12" id="profile12C">
      <div class="row">

        <navbarProfile/>

        <div class="col-10" id="profileC10">
          <div class="row" style="padding: 10px 10px 0px 10px;" v-if="likeProduck.length>0">
            <div class="col-12">
              <div>
                <b style="font-size:15px;font-family: sans-serif; ">Мой заказы</b>
              </div>
            </div>

            <div class="col-12" style="margin-top: 5px;border-bottom:solid 1px #f4f4f4;" v-for="item in likeProduck" :key="item.id">
              <div class="row"  style="padding-right: 0px;padding-left: 0px; ">

                  <div class="col-12" style="padding-left: 0px;padding-right: 0px;padding:0px 15px;" v-for="smartphone in item.smartphone" :key="smartphone.id">
                    <div class="col-1" style="text-align: center;padding-right: 0px;padding-left: 0px;">
                         <img id="cartimg" :src="'http://127.0.0.1:8000'+smartphone.img1" alt="item1" style="width: 80px;height: auto;" />
                    </div>
                    <div class="col-9" id="col9" >
                        <div class="row" style="padding-right: 0px;padding-left: 0px;">
                          <div class="col-12" style="padding-right: 0px;padding-left: 0px;" >
                              <span class="item-name">
                                <a  class="shripht" style="font-size: 12px; -webkit-box-orient: vertical;-webkit-line-clamp: 1;display: -webkit-box;overflow: hidden;" href="#"  @click="goTo(smartphone.id)" >
                                  {{smartphone.title}}
                                </a>
                              </span>

                              <div>
                                  <span  
                                    class="shripht" 
                                    style="color: green;position: relative;">
                                    {{ smartphone.price.toLocaleString() }} ₸
                                  </span>
                              </div>

                              

                          </div>
                        </div>
                    </div>
                    
                  </div>
                  <div class="container">
                    <div class="row" style="padding-right: 15px;padding-left: 15px;">
                      <h2 style="font-size: 12px;">Стоимость:</h2><h2 style="font-size: 12px;margin-left: 2px;">{{item.price}}</h2>
                    </div>
                    
                    
                  </div>
                  
                                                                          
                                              
                  


                
              </div>
            </div>
            


            
          </div>
          <div class="row" v-else >
            <div class="col-12" style="padding: 100px 0px;text-align: center;margin: 0 auto;">
              <h4>У вас нет  заказы</h4>
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
  <h4 >Мой заказы</h4>
  <div class="row" style="padding-right: 0px;padding-left: 0px; width: 100%;margin-right: 0px;margin-left: 0px;">
    <navbarProfile2/>
    <div class="col-11" style="padding-left: 0px;padding-right: 0px;width: 100%;" >
      <div class="col-12" style="padding-left: 0px;padding-right: 0px;width: 100%;background-color: white;border-bottom:solid 2px #f4f4f4;" v-for="item in likeProduck" :key="item.id" >
        <div class="row" style="padding-right: 0px;padding-left: 0px; width: 100%;margin-right: 0px;margin-left: 0px;" v-for="smartphone in item.smartphone" :key="smartphone.id">

          <div class="col-4" style="padding-right: 0px;padding-left: 0px; width: 100%;margin-right: 0px;margin-left: 0px;">
            <img style="width: 100%;margin-top: 4px;" :src="'http://127.0.0.1:8000'+smartphone.img1" alt="item1" />
          </div>

          <div class="col-8" style="padding-left: 0px;padding-right: 0px;width: 100%;">
            <div class="row" style="padding-right: 0px;padding-left: 0px; width: 100%;margin-right: 0px;margin-left: 0px;">

              <div class="col-12" style="padding-left: 0px;padding-right: 0px;width: 100%;">
                <div class="title">
                  <h2 style="font-size: 14px;margin-top: 2px;-webkit-box-orient: vertical;-webkit-line-clamp: 2;display: -webkit-box;overflow: hidden;">{{smartphone.title}}</h2>
                </div>
              </div>

              
              
              <div class="col-6" style="text-align: center;padding-left: 0px;padding-right: 0px;width: 100%;">
                <div>
                  <p >
                    <span   style="font-size: 19px;">
                      {{ smartphone.price.toLocaleString() }} ₸
                    </span>
                  </p>
                </div>
              </div>
              
              
            </div>
          </div>

        </div>
      </div>
      
      
    </div>
  </div>
</div>
                                                
                                                
                                                  
                                               
                                                     
                                                      
                                                      
                                                    
                                            
                                            
                                            


                                           
                                            
                                          
                                          
                                          
                                      

                                       
                
                




  
    


  
     






   
</div>
</template>





 

<script>
import navbarProfile from "./navbarProfile"
import navbarProfile2 from "./navbarProfile2"
import axios from 'axios';
import {mapGetters} from 'vuex'
  export default {
    name: 'like',
    components: {navbarProfile,navbarProfile2},





    

    data () {
      return {

          totlprice:'',
          totprice1:'',
          likeProduck:[],
          proMds:[]
          
          
          
        }
    },
    

    created() {
      
      this.Likelike()
      
     
        
    },
    computed: {
          ...mapGetters([
            'loggedIn'
            
          
            ],
            
            

            
          

          ),


        },
 
    
    methods: {
      
      
      Likelike(){
        axios
          .get('http://127.0.0.1:8000/api/v1/customer/order', { headers: { Authorization: 'Bearer '+ this.$store.state.accessToken } })
          .then((response) => {
        
            this.likeProduck=response.data
            console.log(this.likeProduck)
          })
          .catch(err => { console.error(err) })
           },
           
           goTo(id) {
              this.$router.push({ name: 'Single', params: {id: id} })
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