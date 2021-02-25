<template>
<div>




  <div class="container" v-if="cart.length>0">
    <br>
    <h4>    Корзина</h4>
    <div class="container hidden-sm hidden-xs" >



      <div class="row">


        

        <div  class="col-9" style="padding: 10xp">
          <div style="background-color: white; ">

          <div class="shopping-cartt ">



                                        <ul class="shopping-cart-items">
                                          <li class="clearfix" style="height: 20px" >
                                            <div class="col-12">
                                            <div class="col-2" style="">
                                                   <p class="shripht" style="margin-left: 23px;font-size: 10px;">Фото</p>
                                            </div>

                                            
                                            <div class="col-10" id="col9" >
                                              <div class="row">


                                              
                                              <div class="col-12" style="">

                                                <div class="col-6" >
                                                  <span class="item-name">
                                                    <p class="shripht"  style="margin-left: 104px;font-size: 10px;">
                                                        Названия
                                                    </p>
                                                  </span>
                                                </div>

                                                <div class="col-3" style="">
                                                  <div>
                                                    <span class="item-quantity">
                                                     
                                                          <p class="shripht" style="margin-left: 22px;font-size: 10px;">Количества</p>
                                                     

                                                    </span>
                                                  </div>

                                                  
                                                </div>
                                                <div class="col-2">
                                                   <p class="shripht" style="margin-left: 9px;font-size: 10px;">Цена</p>
                                                </div>



                                                <div class="col-1" >
                                                  <p class="shripht" style="margin-left: 2px;font-size: 10px;">  Удалить</p>
                                                  
                                                </div>
                                                
                                                  
                                               
                                                     
                                                      
                                                      
                                                    
                                              </div>
                                              
                                            </div>

                                            </div>
                                            
                                            


                                           
                                            
                                          
                                          </div>
                                          
                                          </li>

                                        </ul>
                          
                                        

                                        <ul class="shopping-cart-items">
                                          <li class="clearfix" v-for="item in cart" :key="item.id" >
                                            <div class="col-12">
                                            <div class="col-2" style="">
                                                   <img id="cartimg" :src="'http://127.0.0.1:8000'+item.img1" alt="item1" />
                                            </div>

                                            
                                            <div class="col-10" id="col9" >
                                              <div class="row">


                                              
                                              <div class="col-12" style="margin-top: 30px;">

                                                <div class="col-6" >
                                                  <span class="item-name">
                                                    <h6  class="shripht" style="-webkit-box-orient: vertical;
    -webkit-line-clamp: 1;display: -webkit-box;overflow: hidden;font-size: 10px;">
                                                      {{item.title}}
                                                    </h6>
                                                  </span>
                                                </div>

                                                <div class="col-3" style="margin-top: -5px;">
                                                  <div>
                                                    <span class="item-quantity" >
                                                      <p class="shripht">
                                                        <button id="minusplus" @click="reduceQty(item.id),totprice()">-</button>     
                                                           {{ item.qty }}
                                                          <button
                                                            id="minusplus"
                                                            @click="addQty(item.id),totprice2()"
                                                          >+</button>
                                                        



                                                      </p>
                                                     
                                                          
                                                     

                                                    </span>
                                                  </div>

                                                  
                                                </div>
                                                <div class="col-2">
                                                   <div>
                                                      <p class="shripht">
                                                        <span  class="item-price">
                                                          {{ item.price.toLocaleString() }} ₸
                                                        </span>
                                                      </p>
                                                    </div>
                                                  
                                                </div>



                                                <div class="col-1" >
                                                  <a href="#"  id="textx" style="color:black;margin-left: 15px;" @click="removeItemFromCart(item.id)">
                                                      X
                                                  </a>
                                                </div>
                                                
                                                  
                                               
                                                     
                                                      
                                                      
                                                    
                                              </div>
                                              
                                            </div>

                                            </div>
                                            
                                            


                                           
                                            
                                          
                                          </div>
                                          
                                          </li>

                                        </ul>

                                        

                                      </div> <!--end shopping-cart -->



                                    </div>
          
        </div> <!-- end col-9 -->
        <div class="col-3" style="background: white;border-left: 10px #f4f4f4 solid; height: 155px; margin-top: 10px;">

          <div class="col-12">
            <div class="row">
              <p>
                <h6 style="margin-left: 30px;" class="shripht">К отплате </h6>
                <h6 style="margin-left: 50px;" class="shripht"> {{totprice1.toLocaleString()}}</h6><h6> ₸</h6>
                <h6 class="shripht" style="    background-color: rgb(144, 238, 144,0.3);color: var(--color-menu-contacts);padding: 10px;text-align: center;margin: 10px 0;">Заказы от 10 000 тенге доставим бесплатно</h6>
         
            </div>
          </div>
          <button id="ofermit" class="shripht" @click="goOrder()">Оформить заказ</button>
          

          

        </div>
          










      </div>
    </div>
  </div>





     



<div class="container hidden-lg hidden-md" style="padding-left: 0px;padding-right: 0px;width: 100%;background-color: white;"  v-if="cart.length>0">
  <div class="col-12" style="padding-left: 0px;padding-right: 0px;width: 100%;" v-for="item in cart" :key="item.id" >
    <div class="row" style="padding-left: 0px;padding-right: 0px;width: 100%;">

      <div class="col-5">
        <img style="width: 100%;" :src="'http://127.0.0.1:8000'+item.img1" alt="item1" />
      </div>

      <div class="col-7" style="padding-left: 0px;padding-right: 0px;width: 100%;">
        <div class="row" style="padding-left: 0px;padding-right: 0px;width: 100%;">

          <div class="col-12" style="padding-left: 0px;padding-right: 0px;width: 100%;">
            <div class="title">
              <h2 style="font-size: 14px;margin-top: 2px;-webkit-box-orient: vertical;-webkit-line-clamp: 2;display: -webkit-box;overflow: hidden;">{{item.title}}</h2>
            </div>
          </div>

          <div class="col-12" style="padding-left: 0px;padding-right: 0px;width: 100%;">
            <div class="col-9" style="text-align: center;margin-top: 2px;">
              <span class="item-quantity" >
                <p class="shripht">
                  <button id="minusplus" @click="reduceQty(item.id),totprice()">-</button>     
                     {{ item.qty }}
                  <button id="minusplus" @click="addQty(item.id),totprice2()">+</button>
                </p>  
              </span>
            </div>
          </div>
          
          <div class="col-9" style="text-align: center;">
            <div>
              <p class="shripht">
                <span   style="font-size: 19px;">
                  {{ item.price.toLocaleString() }} ₸
                </span>
              </p>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  </div>
  <div class="col-12" style="border-top: 1px #f4f4f4 solid;">
    <div class="row" style="padding: 5px;">
        <div class="col-12" style="text-align: center;">
          <div class="row" style="text-align: center;place-content: center;">
            <h2  >К отплате </h2>
            <h2  style="margin-left: 14px;"> {{totprice1.toLocaleString()}}</h2><h2> ₸</h2>
          </div>
        </div>
        <button id="ofermit" class="shripht" @click="goOrder()" style="margin: 0px;width: 100%;">Оформить заказ</button>
    </div>
  </div>
  
</div>

<div class="container" v-else>
  <div class="row">
    <div class="col-12" style="text-align: center;padding: 50px 0px;">
  
        <div>
          <h1>Ваша корзина пуста</h1>
        </div>

    </div>
  </div>
  
</div>



   
</div>
</template>



<style scoped>


</style>

 

<script>


import {mapActions,mapGetters} from 'vuex'
  export default {
    name: 'cart',







    data () {
      return {

          totlprice:'',
          totprice1:''
          
          
          
        }
    },
    

    created() {
      this.totprice(),
      this.totprice2()
      
     
        
    },
 
    
    methods: {
      ...mapActions([
            "removeItemFromCart", "addQty", "reduceQty", "emptyCart"



          ]),
      totprice(){
        this.totprice1=this.cart.reduce((a, b) => a + b.qty * b.price, 0);

      },
      totprice2(){
        this.totprice1=this.cart.reduce((a, b) => a + b.qty * b.price, 0);

      },
      goOrder(){
     
        location.href='/shop/order';
      }
      

      



      






    },
    components: {
 
      
      
 


    },
    computed:{
      ...mapGetters([
        'cart'
      ]),
      totalPrice() {
        return this.cart.reduce((a, b) => a + b.qty * b.price, 0);
      }
    }

















  }
</script>

<style scoped>

$color-border: #eee;
$color-label: #aaa;
$font-default: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, sans-serif;
$font-bold: 'HelveticaNeue-Medium', 'Helvetica Neue Medium';


/* Global "table" column settings */
.product-image { float: left; width: 20%; }
.product-details { float: left; width: 37%; }
.product-price { float: left; width: 12%; }
.product-quantity { float: left; width: 10%; }
.product-removal { float: left; width: 9%; }
.product-line-price { float: left; width: 12%; text-align: right; }


/* This is used as the traditional .clearfix class */
.group:before,
.group:after {
    content: '';
    display: table;
} 
.group:after {
    clear: both;
}
.group {
    zoom: 1;
}


/* Apply clearfix in a few places */
.shopping-cart, .column-labels, .product, .totals-item {
  @extend .group;
}


/* Apply dollar signs */
.product .product-price:before, .product .product-line-price:before, .totals-value:before {
  content: '$';
}

#ofermit{
  border-radius: 6px;
  padding: 5px 5px 8px 5px;
  width: 80%;
  margin: 0px 27px;
  text-align: center;
  color: white;
  background-color: rgb(2, 143, 104);
  border: black 1px solid;
}
#ofermit:hover{
  background-color: #f4f4f4;
  color: black; 
}
/* Body/Header stuff */
body {
  padding: 0px 30px 30px 20px;
  font-family: $font-default;
  font-weight: 100;
}

h1 {
  font-weight: 100;
}

label {
  color: $color-label;
}

.shopping-cart {
  margin-top: -45px;
}


/* Column headers */
.column-labels {
  label {
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid $color-border;
  }
  
  .product-image, .product-details, .product-removal {
    text-indent: -9999px;
  }
}


/* Product entries */
.product {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid $color-border;
  
  .product-image {
    text-align: center;
    img {
      width: 100px;
    }
  }
  
  .product-details {
    .product-title {
      margin-right: 20px;
      font-family: $font-bold;
    }
    .product-description {
      margin: 5px 20px 5px 0;
      line-height: 1.4em;
    }
  }
  
  .product-quantity {
    input {
      width: 40px;
      
    }
  }
  
  .remove-product {
    border: 0;
    padding: 4px 8px;
    background-color: #c66;
    color: #fff;
    font-family: $font-bold;
    font-size: 12px;
    border-radius: 3px;
  }
  
  .remove-product:hover {
    background-color: #a44;
  }
}


/* Totals section */
.totals {
  .totals-item {
    float: right;
    clear: both;
    width: 100%;
    margin-bottom: 10px;
    
    label {
      float: left;
      clear: both;
      width: 79%;
      text-align: right;
    }
    
    .totals-value {
      float: right;
      width: 21%;
      text-align: right;
    }
  }
  
  .totals-item-total {
    font-family: $font-bold;
  }
}

.checkout {
  float: right;
  border: 0;
  margin-top: 20px;
  padding: 6px 25px;
  background-color: #6b6;
  color: #fff;
  font-size: 25px;
  border-radius: 3px;
}

.checkout:hover {
  background-color: #494;
}

/* Make adjustments for tablet */
@media screen and (max-width: 650px) {
  
  .shopping-cart {
    margin: 0;
    padding-top: 20px;
    border-top: 1px solid $color-border;
  }
  
  .column-labels {
    display: none;
  }
  
  .product-image {
    float: right;
    width: auto;
    img {
      margin: 0 0 10px 10px;
    }
  }
  
  .product-details {
    float: none;
    margin-bottom: 10px;
    width: auto;
  }
  
  .product-price {
    clear: both;
    width: 70px;
  }
  
  .product-quantity {
    width: 100px;
    input {
      margin-left: 20px;
    }
  }
  
  .product-quantity:before {
    content: 'x';
  }
  
  .product-removal {
    width: auto;
  }
  
  .product-line-price {
    float: right;
    width: 70px;
  }
  
}
#col9{
  margin-left:-40px;
}

/* Make more adjustments for phone */
@media screen and (max-width: 350px) {
  
  .product-removal {
    float: right;
  }
  
  .product-line-price {
    float: right;
    clear: left;
    width: auto;
    margin-top: 10px;
  }
  
  .product .product-line-price:before {
    content: 'Item Total: $';
  }
  
  .totals {
    .totals-item {
      label {
        width: 60%;
      }
      
      .totals-value {
        width: 40%;
      }
    }
  }
}
#cartimg{
  height: 80px;
  width: 80px;
}
.clearfix{
  -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;display: -webkit-box;overflow: hidden;
    margin-top: 10px;height: 90px;border-bottom: #f4f4f4 solid 1px;
}
.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10 {
    padding-right: 0px;padding-left: 0px
}
#minusplus{
    font-family: Geneva, Arial, Helvetica, sans-serif;
    font-weight: 580;
    color: black;
    
    z-index: 2;
    width: 2rem;
    height: 2rem;
    text-align: center;
    top: 0;
    left: calc(var(--input-type-number-width) - 2rem);
    border: 0;
    border-radius: 50%;
   
    opacity: .6;
  
    background:   rgb(144, 238, 144,0.2);
    margin:0px 5px;
}

</style>