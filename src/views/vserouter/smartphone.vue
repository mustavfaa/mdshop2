<template>
<div  style="margin-top: 10px;">
  <div class="container" >

    <div class="row">







      <div class="col-lg-2 hidden-xs hidden-sm" style="margin-top:-5px;padding-left: 0px;padding-right: 0px;">
        <div class="col-lg-12 col-6" style="margin-top:5px;">
          <p style="margin-bottom:0rem;" > Бренд  </p>
          <label style="font-size:14px;font-weight: 500;" class="shripht" >
            <input type="checkbox"  style="font-size:90px; " value="iphone,"    v-model="clickapple" @change="check($event)" > 
          Apple</label><br>
          <label style="font-size:14px;font-weight: 500;" class="shripht" >
            <input type="checkbox"  style="font-size:90px; " value="samsung,"    v-model="clickapple" @change="check($event)" > 
          Samsung</label><br>
          <label style="font-size:14px;font-weight: 500;" class="shripht" >
            <input type="checkbox"  style="font-size:90px; " value="oppo,"    v-model="clickapple" @change="check($event)" > 
          OPPO</label><br>
          <label style="font-size:14px;font-weight: 500;" class="shripht" >
            <input type="checkbox"  style="font-size:90px; " value="xiaomi,"    v-model="clickapple" @change="check($event)" > 
          Xiaomi</label><br>
          <label style="font-size:14px;font-weight: 500;" class="shripht" >
            <input type="checkbox"  style="font-size:90px; " value="huawei,"    v-model="clickapple" @change="check($event)" > 
          Huawei</label><br>
        </div>
        
        <div class="col-lg-12 col-6 " style="margin-top:5px;">
          <p style="margin-bottom:0rem;" > Pice</p>
          <label>
          <input  style="border-radius: 10px;width: 60px;font-size: 8px;" type="number" v-model='text' >
            -
          <input style="border-radius: 10px;width: 60px;font-size: 8px;text-decoration: none;" placeholder="до" type="number" v-model='text1'></label>

          <button id="PriceRangeMin1"  style=""  @click="check($event)">Применить</button>
        </div>
        
      </div>
      <div class="col-lg-2 hidden-lg hidden-md" style="margin-top:-5px;padding-left: 10px;padding-right: 10px;">
        <div class="col-lg-12 col-6" style="margin-top:5px;">
          <p style="margin-bottom:0rem;" > Бренд  </p>
          <label style="font-size:14px;font-weight: 500;" class="shripht" >
            <input type="checkbox"  style="font-size:90px; " value="iphone,"    v-model="clickapple" @change="check($event)" > 
          Apple</label><br>
          <label style="font-size:14px;font-weight: 500;" class="shripht" >
            <input type="checkbox"  style="font-size:90px; " value="samsung,"    v-model="clickapple" @change="check($event)" > 
          Samsung</label><br>
          <label style="font-size:14px;font-weight: 500;" class="shripht" >
            <input type="checkbox"  style="font-size:90px; " value="oppo,"    v-model="clickapple" @change="check($event)" > 
          OPPO</label><br>
          <label style="font-size:14px;font-weight: 500;" class="shripht" >
            <input type="checkbox"  style="font-size:90px; " value="xiaomi,"    v-model="clickapple" @change="check($event)" > 
          Xiaomi</label><br>
          <label style="font-size:14px;font-weight: 500;" class="shripht" >
            <input type="checkbox"  style="font-size:90px; " value="huawei,"    v-model="clickapple" @change="check($event)" > 
          Huawei</label><br>
          
        </div>
        
        <div class="col-lg-12 col-6 " style="margin-top:5px;text-align: center;">
          <p style="margin-bottom:0rem;" > Pice</p>
          <div class="col-12" style="text-align: center;">
            <label style="">
          <input  id="PriceRangeMin" type="number" v-model='text' >
            -
          <input id="PriceRangeMax" placeholder="до" type="number" v-model='text1'></label>
          </div>
          

          <button id="PriceRangeMin1"  style=""  @click="check($event)">Применить</button>
        </div>
        
      </div>







    




      <div class="col-lg-10" >
        <div class="col-lg-12" id="padcol" style=" padding-right: 0px;padding-left: 0px; ">



          
          <div>



            <div class="col-lg-2 col-sm-4 col-6 "  style="padding:0px 1px;border-radius: 5px;" @click="goTo(mds.id)"  id="padcol" v-for="mds in listShop" :key="mds.id">

              
                <div class="col-12" id="padcol" style="background-color: white;">
                  <div  id="colhover">
                    <a href=""  >
                      <img :src="'http://127.0.0.1:8000'+mds.img1"  style="height: 150px;" id="imgcen">
                    </a>
                    <h4 style="font-size:5px;font-family: Geneva, Arial, Helvetica, sans-serif;" id="textal"  @click="goTo(mds.id)">
                      <a href="" class="shripht"  id="textal" @click="goTo(mds.id)" style="font-size:11px;font-family: Geneva, Arial, Helvetica, sans-serif;">
                        {{mds.title}} 
                      </a>
                    </h4>
                    <h5 id="cssprice" class="shripht" style="font-size: 16px;">
                      {{mds.price.toLocaleString()}}₸
                    </h5>
                  </div>
                </div>
              
            </div>
            




          </div>
          
          





          
            
            


            










            

            <div class="col-lg-2 col-sm-4 col-6" id="padcol" >

              <div class="row">
                <div
                  class="card"
                  style="width: 15rem;"
                  v-for="item in products"
                  :key="item.id"
                >
                  <img :src="item.imgUrl" class="card-img-top" :alt="item.title" />
                  <div class="card-body">
                    <p class="card-title">{{ item.title }}</p>
                    <p class="card-text"> {{ item.price.toLocaleString() }}</p>
                    <button class="btn btn-primary" @click="addItemToCart(item)">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              
            </div>





                    


                    













            
        </div>



        

        
      </div>
      
    </div>
    
  </div>














<h1></h1>

</div>
</template>






<script>
    


    
  
  import {mapGetters,mapActions} from 'vuex'

  import axios from 'axios';



  
 

  export default {
    name: 'samsung',
    props:['id'],


    
    data () {
      return {
          listShop:[],
          text:[0],
          text1:[9999999],
          clickapple:[''],
          clicksamsung:[],
          filterr:['СмартфоныApple'],
          
          allcart:''

          
          
        }
    },
    
    computed: {
      ...mapGetters([

        'SEARCH_VALUE',
        "products"
       


      ])
    },
    components: {
      
      
    


    },
    created() {
        this.loadListShop()
        

      


    },
    watch: {
      SEARCH_VALUE() {
        this.loadListShop();
      },
      clicksamsung(){
        this.check();
        this.loadListShop();
        

      }

    },
      methods: {
      ...mapActions([
       
        "addItemToCart", "getProducts"



      ]),

      
        loadListShop(){
        axios
          .get('http://127.0.0.1:8000/api/v1/mds/?price_min='+(this.text)+`&price_max=`+(this.text1)+`&genres=`+(this.clickapple))
          .then((response) => {this.listShop=response.data, console.log(this.likeProduck)})
          
        },



        
        goTo(id) {
            this.$router.push({ name: 'Single', params: {id: id} })
        },
        
        textcon(){

  console.log(this.text)
    console.log(this.text1) 

    },
        check:  async function(e){
  
      console.log(this.clickapple[0],e)
      console.log(this.text)
      console.log(this.text1) 
      
      axios
          .get('http://127.0.0.1:8000/api/v1/mds/?price_min='+(this.text)+`&price_max=`+(this.text1)+`&genres=`+(this.clickapple))
          .then((response) => {this.listShop=response.data, console.log(this.likeProduck)})
        
            
            

        },
        async sortProductsBySearchValue(){
            this.listShop = await fetch(
                    `${this.$store.getters.getServerUrl}/mds/?search=`+`${this.$store.getters.SEARCH_VALUE}`
                ).then(response => response.json())
                console.log(this.listShop)
        

        }
        


        
        
    },
     mounted() {
        this.getProducts();
      }
    
    



      
    

   
       
        
    






    }
    
  
</script>


<style scoped>
#cart{
  font-size:10px;
  bottom: 0;position: absolute;margin-left:11px ;width:100%;text-align:center;margin-bottom:3px;border:solid 1px rgb(2, 143, 104);border-radius:5px;width:80%;background-color:rgb(2, 143, 104);color:white;
}
#cart:hover{
   background-color: #f4f4f4;
  color: black; 

}
#PriceRangeMin1{
  font-size:10px;
  bottom: 0;
  width:100%;
  text-align:center;
  border:solid 1px rgb(2, 143, 104);
  border-radius:10px;
  width:86%;
  background-color:rgb(2, 143, 104);
  color:white;

}
#PriceRangeMin1:hover{
  background-color: #f4f4f4;
  color: black; 


}
#cssprice{
 position: absolute;margin-left:-5px ;width:100%;text-align:center;font-size:15px;bottom: 0;


}
#imgvn{
  
  
}
#colhover{
  border:solid 1px white;
}
#colhover:hover{
  border:solid 1px  green
  
  
}


#imgcen{

}
#imgvn{
    
    
}

#padcol{
    float:left;
    padding:0px;
    padding-right: 0px; 
    padding-left: 0px;
 

}

#imgcen{
    
    width:100%;

}
#fond{
    font-family: Geneva, Arial, Helvetica, sans-serif;
}
#imgvn{
    
    
}
#colhover{

    height:203px;
    border-radius: 5px;
    border:#f4f4f4 solid 1px;
  
    
}
#colhover:hover{
    height:203px;
    border: solid 1px #f4f4f4;
    border-radius: 5px;
    box-shadow: 1px 1px 3px 2px rgba(34, 60, 80, 0.2);


    
    
}

#padcol{
  margin-top: 1px;
    float:left;
    padding:0px;
    padding-right: 0px; 
    padding-left: 0px;


}

#imgcen{
    padding:10px;
    width:100%;

}
#fond{
    font-family: Geneva, Arial, Helvetica, sans-serif;
}


#imgvn{
  
  
}

#padcol{
  float:left;
  padding:0px;
  padding-right: 0px; 
    padding-left: 0px;
    border-radius: 5px;
}
#padcol:hover{
  border-radius: 5px;

}


#padcol{
    float:left;
    padding:0px;
    padding-right: 0px; 
    padding-left: 0px;

    animation: fade .4s ease 0s 1 normal;

}
#textal{
    text-align:center; 

    display: -webkit-box;
    -webkit-box-orient: vertical;
    
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    color: var(--gray-90);
    font-family: MuseoSansCyrl,sans-serif;
}
#imgcen{
 
    width:100%;

}
#fond{
    font-family: Geneva, Arial, Helvetica, sans-serif;
}







</style>



