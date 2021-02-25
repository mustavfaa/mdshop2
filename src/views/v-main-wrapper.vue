<template>
    <div id="app">
      <div >
        <header  class="hidden-sm hidden-xs">
            <div class="col-12" style="padding-right: 0px;padding-left: 0px;">
 
              <div id="mainmenu__area" class="mainmenu__area1 sticky-header scroll-header " >

                    
                      <div class="container " style="padding-right: 15px;padding-left: 10px;">
                 
                            
                                <div class="col-12 " style="padding-right: 0px;padding-left: 0px;">
                                  <div class="col-lg-2 col-4" style="    padding-right: 0px;padding-left: 0px;">

                                   <a href="#" @click="gopost()"><img  id="logo" style="margin-left: -10px;" src="../assets/images/logo.png" ></a>  
                                  


                                  </div>


                                  
                                  <div class="col-lg-7 col-4" style="padding-right: 0px;padding-left: 0px;align-self: center;text-align: -webkit-center;">
                                   
                                 

                                     
                                      <div class="search" style="margin-top: 12px;width: 100%;">
                                          <input type="text" name="" placeholder="поиск" class="input" v-model='allsearch' />
                                          <button type="submit" name="" href="#" value="" class="submit" @click='clicksearch(allsearch)'></button> 
                                      </div>
                             

                                       



                            
                                  


                                  </div>  

                                  <div class="col-lg-3 col-4" id="colcart" style="   padding-right: 15px;padding-left: -15px;">



                                    <a  @click="show12 = !show12" v-on-clickaway="away" v-if="loggedIn">

                                      <div class="row" id="rowhover" style="width: 180px; margin-left: 77.8px;">

                                        <div class="col-7" style="padding-right: 0px;padding-left: 0px;align-self: center;text-align: center;">
                                          <p style="width: 100%;margin-left: 0px; margin: 0 auto;position: center;" class="shripht">{{nameAll}}</p>
                                          
                                        </div>
                                        <div class="col-5" style="padding-right: 0px;padding-left: 0px;float: right; height: 49px;text-align: center;margin-top: 7px;">
                                          <img src="../assets/images/avatar.jpg" id="avatarProfile" style="border-radius: 50%;float: left; height: 40px;">
                                          
                                        </div>
                                        

                                      </div>
                                      
                                      




                                    </a>
                                    <div class="row">


                                      <div class="col-12" style="text-align: center;">
                                        <p style="margin-top: 14px;margin-left: 40px;" id="preg" v-if="!loggedIn">


                                          <a id="areg" href="#" @click="log()" >Войти </a>
                                          <a id="areg" href="#" style="border: solid green 1px;border-radius: 30px;padding: 5px;" @click="reg()">Регистрация</a>
                                          
                                          
                                         </p>
                                        
                                      </div>
                                      


                                    </div>
                                    


                                    


                                     
                                      
                                      

                                    

                                    
                                   
                                        
                                   
                       


                                    
                                    
                                  

                                    
                                  </div><!-- end col-2 -->






                                      
                      </div>
                      
                    </div>

                      </div>







          
                     

             </div>  



          </header>
          
          <header  class="hidden-lg hidden-md">
            <div class="col-12">

              <div id="mainmenu__area" class="mainmenu__area1 sticky-header scroll-header " >

                    
                      <div class="container " >
                 
                            
                                <div class="col-12 " >
                                  <div class="row">


                                    <div class="col-lg-3 col-3" style="    padding-right: 0px;padding-left: 0px;">

                                   <a href="#" @click="gopost()">
                                    <img  id="logo" style="width: 100%;margin-left:-5px;height: 40px;margin-top: 6px;"  src="../assets/images/logo.png" >
                                   </a>  
                                  


                                  </div>
                                  <div class="col-lg-5 col-5" style="padding-right: 0px;padding-left: 0px;">
                                   
                                 

                                     
                                      <div class="search" style="margin-top: 10px;width: 100%;">
                                          <input type="text" name="" placeholder="поиск" class="input" v-model='allsearch' />
                                          <button type="submit" name="" href="#" value="" class="submit" @click='clicksearch(allsearch)'></button> 
                                      </div>
                             

                                       



                            
                                  


                                  </div>  

                                  <div class="col-lg-4 col-4" id="colcart" style="    padding-right: 0px;padding-left: 0px; margin: 0 auto; text-align: center;margin-top: 14px;">
                                    <span style="margin-top: 14px;"  v-if="loggedIn">
                                      <a id="areg" href="#" @click="onLogout()" >Выйти </a>
                                      
                                    </span>
                                    
                                    <span style="display: block;margin-left: 20px;margin-top: 1px;"  v-if="!loggedIn">
                                      <a  href="#" @click="log()" style="text-decoration:none;color: black;display: block;text-align: center;" >Войти </a>
                                      <a  href="#" @click="reg()" style="text-decoration:none;color: black;display: block;text-align: center;border: solid green 1px;border-radius: 30px;" > Регистрация</a>
                                    </span>
                                    
                                   
                                        
                                   
                       


                                    
                                    
                                  

                                    
                                  </div><!-- end col-2 -->
                                    



                                  </div>
                                  

                                      
                      </div>
                      
                    </div>

                      </div>







          
                     

             </div>  



          </header>



            


            
            <div v-if="show12" id="contpadding"   class="container" style="margin-top: 56px;position: fixed;right: 0;left: 0;top: 0;bottom: 0;z-index: 1000;" >
           
              <div class="shopping-cart" style="border: 1px #f4f4f4 solid;width: 180px;    height: 105px;background-color: rgb(255, 255, 255,0.97);" >
                <div class="row">
                  
                  <div style="border-bottom: 0.2px solid rgb(0,0,0,0.13); width: 180px;margin-left: 14px;" id="prohover">
                    <div class="col-12"  style="margin-left: 6px;padding: 5px;">

                      <a href="/shop/profile" class="shripht" >Профиль</a>
                      
                    </div>                  
                  </div>
                  <div style="border-bottom: 0.2px solid rgb(0,0,0,0.13); width: 180px;margin-left: 14px;" id="prohover">
                    <div class="col-12" style="margin-left: 6px;padding: 5px;">

                      <a href="/shop/customer/order" class="shripht" >Мой заказы</a>
                      
                    </div>                  
                  </div>
                  <div style=" width: 180px;margin-left: 14px;" id="prohover">
                    <div class="col-12" style="margin-left: 6px;padding: 5px;">

                      <a  class="shripht" href="/auth/signin" @click="onLogout()" >Выйти</a>
                      
                    </div>                  
                  </div>

                  

                  
                  



                </div>

                          
                                        

                                  

                                       

              </div> <!--end shopping-cart -->


                


         

    
          </div>
         
         








          <div id="mainmenu" style="" class="hidden-sm hidden-xs">
            <div class="container" style="padding-right: 0px;padding-left: 0px;">
              <div class="row">
                <div class="col-12  " style="margin-top: 50px; padding: 10px;">









                  <div class="col-4" style="padding-right: 0px;padding-left: 10px;">
                    <a   style="color:black;    margin-left: 0px;"  @click="show1 = !show1" >
                      <img id="cartt" style="" src="../assets/images/menuicon.png">  
                      <a href="#" style="color:black; margin-left: 10px;text-decoration: none;"  class="shripht">Все категории</a></a> 
                    
                  </div>

                  <div class="col-4">
                    <a href="#" class="shripht" style="color:black;    margin-left: 60px;"></a> 
                    
                  </div>
                  <div class="col-4">
                    <div class="col-12">
                      <div class="row">
                    
                        <div class="col-4" id="col4" >
                          <a  href="#" class="shripht" id="cart" @click="show = !show">
                            <img style="margin-top: -4px; padding: 5px;" id="cartt" src="../assets/images/sraf.png">
                            Сравнить
                          </a> 
                        </div>
                        <div class="col-4" id="col4">
                          <a  href="#" class="shripht" id="cart" @click="show = !show"  v-on-clickaway="away1">
                            <img style="margin-top: -4px;padding: 3px;" id="cartt" src="../assets/images/cart.png">
                            Корзина
                          </a> 
                        </div>
                        
                        <div class="col-4" id="col4">
                          <a  href="/shop/like" class="shripht" id="cart" @click="show = !show">
                            <img style="margin-top: -4px;padding: 5px;" id="cartt" src="../assets/images/like.png" >
                            Избранное
                          </a> 
                        </div>
                        
                    
                          </div>
                      </div>

                    
                  </div>

















                    
















                  
                </div>

                
                
              </div>
              
            </div>
              
              

          </div>
          <div id="menumobil" class="hidden-lg hidden-md"  style="height: 50px;position: fixed;bottom: 0;">
            <div class="container "  style=" ">
              <div class="row">
                <div class="col-sm-12 col-xs-12  " style=" padding: 10px;">









                  <div class="col-sm-12 col-xs-12  ">
                    <div class="row">
                      
                     
                       
                        
                     
                    </div>
                    
                    
                  </div>
                   
                  <div class="col-sm-12 col-xs-12  " >
                   
                    <div class="row">
                   
                      <div class="col-4" id="col4" >
                          <a  href="#" class="shripht" id="cart" @click="show = !show" >
                            <img style=" " id="cartt" src="../assets/images/sraf.png">
                            
                          </a> 
                        </div>
                        <div class="col-4 " id="col4">
                          <a  href="#" class="shripht" id="cart" @click="goToEvents()" style="">
                            <div style="margin: 0 auto;text-align: center; ">
                              <img style="margin-top: -4px;height: 35px;" id="cartt" src="../assets/images/cart.png">
                              
                            </div>
                            
                            
                          </a> 
                        </div>
                        
                        <div class="col-4 " id="col4">
                          <a  href="/shop/like" class="shripht" id="cart" @click="show = !show">
                            <img style="display: block;right: 0;position: absolute;" id="cartt" src="../assets/images/like.png" >
                            
                          </a> 
                        </div>
                      
                    </div>
                    
                    
                        
                        
                    
                         

                    
                  </div>












                  




                    
















                  
                </div>

                
                
              </div>
              
            </div>
              
              

          </div>





























            
















          </div> 
          
          


            
            <div v-if="show"  v-on-clickaway="away1"   class="container" style="position:relative;" >
           
              <div class="shopping-cart" style="border: 1px #f4f4f4 solid" v-if="cart.length>0">

                          
                                        

                                        <ul class="shopping-cart-items" >

                                          <li class="clearfix" v-for="item in cart" :key="item.id" style="margin-top: 10px;height: 80px;border-bottom: #f4f4f4 solid 1px;">
                                            <div class="col-12">
                                            <div class="col-3" style="padding-right: 0px;padding-left: 0px">
                                                   <img id="cartimg" :src="'http://127.0.0.1:8000'+item.img1" alt="item1" />
                                            </div>

                                            
                                            <div class="col-9" style="padding-right: 0px;padding-left: 0px">
                                              <div class="row">


                                              
                                                  <div class="col-12" style="padding-right: 0px;padding-left: 0px">
                                                    



                                                    <div class="col-10" style="padding-right: 0px;padding-left: 0px;">
                                                      <span class="item-name">
                                                        
                                                        <h6  class="shripht" style="-webkit-box-orient: vertical;-webkit-line-clamp: 1;display: -webkit-box;overflow: hidden;margin-left: 10px; ">{{item.title}}
                                                        </h6>
        
                                                      </span>
                                                    </div>
                                                    

                                                    <div class="col-1" style="padding-right: 0px;padding-left: 0px;"> 
                                                      <a href="#"  id="textx" style="color:black;right: 0;position: absolute;" @click="removeItemFromCart(item.id)">X</a>
                                                    </div>
                                                    
                                                      
                                                   
                                                         
                                                          
                                                          
                                                        
                                                  </div>


                                                  <div class="col-12" style="padding-right: 0px;padding-left: 0px">
                                                        
                                                        <span  class="item-price" style="margin-left: 12px;">
                                                          {{item.price.toLocaleString()}} ₸
                                                        </span>
                                                        
                                                        <span class="item-quantity" style="right: 100px;position: absolute;">
                                                          <button id="minusplus" @click="reduceQty(item.id),totprice()">
                                                            -
                                                          </button>     
                                                            {{ item.qty }}
                                                          <button id="minusplus" @click="addQty(item.id),totprice2()">
                                                            +
                                                          </button>
                                                        </span>
                                                            
                                                            
                                                          
                                                  </div>



                                              </div>

                                            </div>
                                            
                                            


                                           
                                            
                                          
                                          </div>
                                          
                                          </li>

                                        </ul>

                                        <button class="vcart"  @click="goToEvents(),show=!show"  style="    margin-bottom: 15px;">
                                          Перейти в корзину
                                        </button> 

                                      </div> <!--end shopping-cart -->
                                      <div class="shopping-cart" v-else style="text-align: center;">
                                        <span id="shripht" style="font-size: 25px;">Ваша корзина пуста</span>
                                        <button id="cartButton" style="width: 100%;">Перейти к покупкам</button>
                                        
                                      </div>


                


              </div>

    
        
        
          














              <div class="container" style="background-color:#f4f4f4; position: relative;" >
                <div class="row">
                  <div class="col-lg-12">


                    <transition name="fade">
                     <div class="col-lg-3" style="width:100%;padding-right: 0px;padding-left: 0px;margin-left: -15px; " v-if="show1" @mouseleave="show1=false" id="menufixed">



                      <div class="categories-menu mrg-xs">
                          <div class="category-menu-list">

                            
                            <ul style="   margin-top: 0; margin-bottom: 0px;">
                              <li>
                                <a href="/category/smartigadget" id="fond"  style="text-decoration: none;background-color: white;color: black;">
                                  Смартфоны и гаджеты 
                                </a>

                                <div class="category-menu-dropdown" style="">
                                  <div class="category-part-1 category-common mb--30" style="background-color: white;">
                                      
                                      <a href="/category/smartphone" style="text-decoration: none;background-color: white;padding: 0px;font-size: 12px;">
                                        <h4 style="text-decoration: none;"> 
                                          Смартфоны и телефоны
                                        </h4>
                                      </a>

                                      <ul>
                                          
                                          <li>
                                            <a href="/category/aplle" style="text-decoration: none;background-color: white;color: black;font-size: 11px;" > 
                                              Смартфоны Apple
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/category/samsung" style="text-decoration: none;background-color: white;color: black;font-size: 11px;" > 
                                              Смартфоны Samsung
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/category/huawei" style="text-decoration: none;background-color: white;color: black;font-size: 11px;" > 
                                              Смартфоны Huawei
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/category/xiaomi" style="text-decoration: none;background-color: white;color: black;font-size: 11px;" > 
                                              Смартфоны Xiaomi
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/category/oppo" style="text-decoration: none;background-color: white;color: black;font-size: 11px;" > 
                                              Смартфоны OPPO
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/category/xiaomi" style="text-decoration: none;background-color: white;color: black;font-size: 11px;" > 
                                              Недорогие смартфоны
                                            </a>
                                          </li>
                                          

                                      </ul>

                                  </div>
                                  

                                </div>

                              </li>
                            </ul>


                        </div>
                      </div>
                      
                    






                  </div>

                


                 
                     </transition>
                    
                </div>

              </div>

            </div>














          <ul class="wrapper hidden-lg hidden-md" style="margin-top:50px; ">
              <li>
                <!-- font awesome icon with a rotating animation -->
                
                <!-- The list title with the click event for toggling the open status -->   
                <div class="title1" style="    margin-left: -9px;">
                  <a href="#" class="shripht" @click="open1 = !open1">
                    <img id="cartt" style="margin-top: -2px;" src="../assets/images/menuicon.png" >  
                    Все категории
                  </a>
                </div>
                <transition 
                  name="expand"
                  @enter="enter"
                  @after-enter="afterEnter"
                  @leave="leave">
                  <!-- renders the ListItem Component for each list element -->
                  <ul class="wrapper hidden-lg hidden-md" v-show="open1">
                    <li v-for="(item, index) in list" :key="'item'+index">
                      <!-- font awesome icon with a rotating animation -->
                      <i class="fas fa-chevron-circle-right"
                         :class="{'open':item.open}"></i>
                      <!-- The list title with the click event for toggling the open status -->   
                      <div class="title" @click="item.open = !item.open">

                        <a href="#" id="clickA" class="shripht1" >{{ item.title }}</a>
                      </div>
                      <!-- renders the ListItem Component for each list element -->
                      <ListItem :list="item" />
                    </li>
                  </ul>
                </transition>
              </li>
            </ul>


            
















        <keep-alive >
          <router-view />
        </keep-alive>
      <Footer />
    </div>


    
</template>


<script>

    import { mixin as clickaway } from 'vue-clickaway';
    import Footer from "./vserouter/Footer"
    
    import {mapActions,mapGetters} from 'vuex'
    import ListItem from "./ListItem";
    export default {
        name: 'v-main-wrapper',
        components: {Footer,ListItem},
        mixins: [ clickaway ],


        data () {
          return {
              allsearch:'',
              show: false,
              show1: false,
              open1:false,
              massage:'',
              Profil:[],
              show12:false,
              name:'',
              riz:'',
              
              list: [
                      {
                        title: "Смартфоны и телефоны",
                        open: false,
                        sublist: [
                          "Смартфоны Apple", "Смартфоны Samsung", "Смартфоны Huawei", "Смартфоны Xiaomi","Смартфоны OPPO","Недорогие смартфоны"
                        ],

                      },
                     
                      
                      
                      
                    ]
      
              
              
            }
        },
        created() {
          console.log(this.loggedIn);
          this.profileSave()


        



          

            
              
           
              
              
              
        
          

         
            
        },
        
        computed: {
          ...mapGetters([

            'SEARCH_VALUE',
            'cart'


          ]),
          ...mapGetters([
            'loggedIn',
            'nameAll'
          
            ],
            
            

            
          

          ),


        },
        destroyed () {
          document.removeEventListener('click', this.dropdown)
        }, 
        methods: {


          profileSave(){



            this.$store.dispatch('saveProfile');
            return;   
            




            




          },
          profile(){

          },
          away(){
            this.show12=false;

          },
          away1(){
            this.show=false;

          },
          
          gopost(){
            this.$router.push('/')
          },
          ...mapActions([
            'GET_SEARCH_VALUE_TO_VUEX',"removeItemFromCart", "addQty", "reduceQty", "emptyCart"



          ]),
          clicksearch(value){
            this.GET_SEARCH_VALUE_TO_VUEX(value);
            this.$router.push('/smartphone/aplle/all')

          },
          goToEvents(){
            this.$router.push('/shop/cart')
          },
          showhide: function() {
                  if (!this.collapsed)
                      this.collapsed = true;
                  else
                      this.collapsed = false;
          },
          dropdown(e){
            let el = this.$refs.dropdown;
            let target = e.target;
            if (el !== target && !el.contains(target)){
              this.show = false
            }
          } ,





          enter(el) {
        // set the element to his natural hight
        el.style.height = 'auto';

        /*
          get the calculated height.
          getComputedStyle returns an object containing all the CSS properties 
          of the element after all active styles have been loaded and the basic 
          calculations have been performed.

          We need the height after all basic calculations have been performed, 
          then the height of each element here is dynamically, 
          based on the number of items in the sublist.
        */
        const height = getComputedStyle(el).height;

        // set the height to zero for the opening animation
        el.style.height = 0;

        /*
          Force the repaint to make sure the animation is triggered correctly, 
          then you can fire the method getComputedStyle again.
          This is not necessary, but sometimes the animation may not start depending on the case.
        */
        getComputedStyle(el);

        /*
          Set the height from the element to the calculated height.
          With setTimeout you make sure the browser has finished the painting 
          after setting the height to zero.
        */
        setTimeout(() => {
          el.style.height = height;
        });        
      },
      afterEnter(el) {
        el.style.height = 'auto';
      },
      leave(el) {
        /*
          Same as with the enter method, but only the other way around.
        */
        el.style.height = getComputedStyle(el).height;
        
        getComputedStyle(el);

        setTimeout(() => {
          el.style.height = 0;
        });
      },
      didClickAway: function(e) {
      this.event = function(event) {
        if (event.target !== e.target) {
          this.show = false;
          document.body.removeEventListener("click", this.event);
        } else {
          console.log('hi');
          this.show = true;
        }
      }.bind(this);
      document.body.addEventListener("click", this.event);
    },
    
    
    onLogout() {
        this.$store.dispatch('userLogout');            
        return;

      },
      log(){
        this.$router.push('/auth/signin');
        return;

      },
      reg(){
        this.$router.push('/auth/register/');


      }












        }




    }
</script>


<style>
  @import "../assets/css/default.css";

  @import "../assets/css/header.css";
  @import "../assets/css/shortcodes.css";
 
  @import "../assets/css/core.css";

  @import "../assets/css/style.css";




@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);

@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);

$main-color: #6394F8;
$light-text: #ABB0BE;

@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);

@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);



{
  text-decoration: none;
  

}
#contpadding{
  padding-right: 0px; 
  padding-left: 0px; 
  
}
#prohover:hover{
  background-color: rgb(220, 220, 220,0.7);

}
#rowhover:hover{
  background-color: rgb(220, 220, 220,0.7);
}
#avatarProfile{
  border: solid 1px black;

}
#avatarProfile:hover{
  border: solid 1px black;
  
}

#cartmenu{

}

.shripht{

  font-family:  sans-serif;
  color: black;


}
#cartButton{
    border: solid green 1px;
    border-radius: 20px;
    padding: 7px;
    color: white;
    background-color: rgb(2, 143, 104);

}
#cartButton:hover{
    border: solid green 1px;
    border-radius: 20px;
    padding: 7px;
    color: black;
    background-color: white;

}
.shripht:hover{
  text-decoration: none;

  color: black;
}
#textx:hover{
  color: black;
  text-decoration: none;

}

#clickA{
  color:black;
  text-decoration: none;
}
#clickA:hover{
  color:black;
  text-decoration: none;
}

*, *:before, *:after {
  box-sizing: border-box;
}

body {
  font: 14px/22px "Lato", Arial, sans-serif;
  background: #6394F8;
}

.lighter-text {
  color: #ABB0BE;
}

.main-color-text {
  color: $main-color;
}

nav {
  padding: 20px 0 40px 0;
  background: #F8F8F8;
  font-size: 16px;
  
  .navbar-left {
    float: left;
  }
  
  .navbar-right {
    float: right;
  }
  ul {
    
    li {
      display: inline;
      padding-left: 20px;
      a {
        color: #777777;
        text-decoration: none;
        
        &:hover {
          color: black;
        }
      }
    }
  }
}

.container {
  margin: auto;
  width: 80%;
}

.badge {
    background-color: #6394F8;
    border-radius: 10px;
    color: white;
    display: inline-block;
    font-size: 12px;
    line-height: 1;
    padding: 3px 7px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
}


#cart{
  text-decoration: none;
  color: black;
  font-size: 12px;
  padding-left: 0px;

}
#cartt{
  width: 30px;
  height: 30px;
}
#cartimg {
  width: 70px;
  height: 70px;

}




*,
*::after,
*::before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
#mainmenu {
    background: white;
    position: relative;
    overflow: hidden;
    height: 90px;
    
   
}

#mainmenu ul li{
  
    left: -50%;
    float: left;
    margin-top:50px;

   
   
   
     
    }#mainmenu ul {

    list-style: none;
   margin: 0px -140px;
    padding: 0;
 position:relative;
    left: 50%;
    float: left;
    font: 14px Arial, Helvetica, sans-serif;
    
}
    #mainmenu .scroll{

  background: rgba(246, 246, 248, 0.9) ;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  left: 0;
  margin: 0 auto;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 99;
    }
   
    

.ent_item{
  transition: all 0.4s ease-in-out;
}
.hide{
  transform: scale(0);
  width: 0;
  padding: 0;
  transition: all 0.4s ease-in-out;
}

.col-md-7{
    float: right;
}
.ina{
    line-height: 75px;
}
#mainmenu ul li a.ina {
    font-family: "Roboto Condensed",sans-serif;
    
    font-weight: 600;
   font-size: 25px;
   color: white;
   font-size: -10px;
    display: block;
    text-decoration: none;
    padding: 0 44px;
    
   
    height: 70px;
    text-align: center;
}
#mainmenu ul li a.ina:hover {
    background-color:white;
    color: #14171a;
}








$main-color: #6394F8;
$light-text: #ABB0BE;

@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);

@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);

*, *:before, *:after {
  box-sizing: border-box;
}

body {
  font: 14px/22px "Lato", Arial, sans-serif;
  background: #6394F8;
}

.lighter-text {
  color: #ABB0BE;
}

.main-color-text {
  color: $main-color;
}

nav {
  padding: 20px 0 40px 0;
  background: #F8F8F8;
  font-size: 16px;
  
  .navbar-left {
    float: left;
  }
  
  .navbar-right {
    float: right;
  }
  ul {
    
    li {
      display: inline;
      padding-left: 20px;
      a {
        color: #777777;
        text-decoration: none;
        
        &:hover {
          color: black;
        }
      }
    }
  }
}

.container {
  margin: auto;
  width: 80%;
}

.badge {
    background-color: #6394F8;
    border-radius: 10px;
    color: white;
    display: inline-block;
    font-size: 12px;
    line-height: 1;
    padding: 3px 7px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
}

.shopping-cart {
  margin: 0px 0;
  float: right;
  background: white;
  width: 370px;
  position:absolute;
  
  z-index: 10;
  right: 20px;

  padding-bottom: 5px;
  



  
  
  .shopping-cart-header {
    border-bottom: 1px solid #E8E8E8;
    padding-bottom: 15px;
    
    .shopping-cart-total {
      float: right;
    }
  }
  
  .shopping-cart-items {
    
    padding-top: 20px;

      li {
        margin-bottom: 18px;
      }

    img {
      float: left;
      margin-right: 12px;
    }
    
    .item-name {
      display: block;
      padding-top: 10px;
      font-size: 16px;
    }
    
    .item-price {
      color: $main-color;
      margin-right: 8px;
    }
    
    .item-quantity {
      color: $light-text;
    }
  }
   
}



.cart-icon {
  color: #515783;
  font-size: 24px;
  margin-right: 7px;
  float: left;
}

.button {
  background: $main-color;
  color:white;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  display: block;
  border-radius: 3px;
  font-size: 16px;
  margin: 25px 0 15px 0;
  
  &:hover {
    background: lighten($main-color, 3%);
  }
}

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}






.vcart{
  border-radius: 6px;
  padding: 5px 5px 8px 5px;
  width: 80%;
  margin: 0px 37px;
  text-align: center;
  color: white;
  background-color: rgb(2, 143, 104);
  border: black 1px solid;
}
.vcart:hover{
  background-color: #f4f4f4;
  color: black; 
}
#minusplus{
  
  z-index: 2;
    width: 1.7rem;
    height: 1.7rem;
    text-align: center;
    top: 0;
    left: calc(var(--input-type-number-width) - 2rem);
    border: 0;
    border-radius: 50%;
    font-weight: 100;
    opacity: .6;
    color: var(--color-quantity-add);
    background:   rgb(144, 238, 144,0.2);
    margin:0px 5px;
}
#col4{
  padding-right: 0px;
  padding-left: 0px;
}
#menufixed{
  position: absolute;
  z-index: 1000000;
  float: left;

}







#colcart{
  margin: 0 auto;
  display: block;
}
#colcart:hover{
  

}


#preg{
 text-align: center;
 margin: 0 auto;

}
#areg{
 color: black;
 margin-top: 25px;
 margin-left: 10px;
  

}
#areg{
  text-decoration: none;
}
#menumobil{
  animation: 300ms ease-in-out 0s normal none 1 running fadeInDown;
  background: rgba(246, 246, 248, 0.9) none repeat scroll 0 0; 
  box-shadow: 0 0 15px rgba(0, 0, 0,  0.04);
  left: 0;
  margin: 0 auto;
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 99;
  height: 56px;
}




.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>

<style lang="scss" >
@import url("https://use.fontawesome.com/releases/v5.11.0/css/all.css");
@import url("https://fonts.googleapis.com/css?family=Oswald");
  .wrapper {
    list-style: none;
    background-color: #fefefe;
    
    overflow: hidden;
    li {
      position: relative;
      color: #555;
      
      cursor: pointer;
      .title {
        padding: 10px 0;
        text-indent: 20px;
        &:hover {
          color: #4f7351;
          background-color: #DFEEE0;
        }
      }
      

      
      i {
        position: absolute;
        top: 14px;
        right: 10px;
        transition: transform .5s ease-in-out;
        &.open {
          transform: rotateZ(90deg);
        }
      }
      
    }
  }
  .title1{
    padding: 10px 0;
    text-indent: 20px;

  }
  .title1:hover{
    list-style: none;
    background-color: #fefefe;

  }
  .list-item {
    list-style: none;

    .sub-items {
      padding: 10px;
      text-indent: 20px;
      color: #fefefe;
      background-color: #333;
      border-top: 1px solid #222;

      &:hover {
        color: #333;
        background-color: #38B087;
      }
    }
  }

  /*
    The CSS classes for the opening and closing animation.
  */
  .expand-enter-active, .expand-leave-active {
    transition: height .5s ease-in-out;
    overflow: hidden;
  }
</style>

