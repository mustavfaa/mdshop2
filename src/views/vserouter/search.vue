<template>
<div  style="margin-top:70px;">
	<div class="container" >

		<div class="row">







			<div class="col-lg-2" style="margin-top:-5px;">
				<div class="col-lg-12 col-6" style="margin-top:5px;">
					<p style="margin-bottom:0rem;" > Бренд  </p>
					<label style="font-size:14px;">
						<input type="checkbox"  style="font-size:90px; " value="СмартфоныApple,"    v-model="clickapple" @change="check($event)" > 
					Apple</label><br>
					<label style="font-size:14px;">
						<input type="checkbox"  style="font-size:90px; " value="СмартфоныSamsung"  v-model="clicksamsung" @change="check($event)"> 
					Samsung</label><br>
					<label style="font-size:14px;">
						<input type="checkbox"  style="font-size:90px; " value="Viva"  v-model="clickapple" @change="check($event)"> 
					Viva</label><br>
					
				</div>
				
				<div class="col-lg-12 col-6 " style="margin-top:5px;">
					<p style="margin-bottom:0rem;" > Pice</p>
					<label>
					<input  id="PriceRangeMin" type="number" v-model='text' >
						-
					<input id="PriceRangeMax" placeholder="до" type="number" v-model='text1'></label>

					<button id="PriceRangeMin"  style="margin-left:30px;"  @click="check($event)">Применить</button>
				</div>
				
			</div>







		




			<div class="col-lg-10" >
				<div class="col-lg-12" id="padcol" style=" padding-right: 0px;padding-left: 0px; ">






						<div class="col-lg-2 col-sm-4 col-6"  style="padding:0px 1px;"  id="padcol" v-for="mds in listShop" :key="mds.id">
							
								<div class="col-12" id="padcol" style="background-color: white;">
									<div  id="colhover">
										<a href="" @click="goTo(mds.id)" ><img src="../../assets/images/phone.jpg"  style="height:120px;" id="imgcen"></a>
                            <h4 style="font-size:5px;font-family: Geneva, Arial, Helvetica, sans-serif;" id="textal"  @click="goTo(mds.id)"><a href="" id="textal" @click="goTo(mds.id)" style="font-size:10px;font-family: Geneva, Arial, Helvetica, sans-serif;">{{mds.title}}</a></h4>
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
    


    

  import {mapGetters} from 'vuex'




  
 

  export default {
    name: 'search',


    
    data () {
      return {
          listShop:[],
          text:[0],
          text1:[9999999],
          clickapple:[''],
          clicksamsung:[],
          filterr:['СмартфоныApple'],
          
          
        }
    },
    computed: {
      ...mapGetters([

        'SEARCH_VALUE'


      ])
    },
    components: {},
    created() {
        this.loadListShop()
        

      


    },
    watch: {
      SEARCH_VALUE() {
        this.loadListShop();
      }
    },
      methods: {

      async loadListShop() {
            this.listShop = await fetch(
                `${this.$store.getters.getServerUrl}/mds/?price_min=`+(this.text)+`&price_max=`+(this.text1)+`&genres=`+(this.clickapple)+`&title=${this.$store.getters.SEARCH_VALUE}`
            ).then(response => response.json())
            console.log(this.listShop)
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
      
      this.listShop = await fetch(
                `${this.$store.getters.getServerUrl}/mds/?price_min=`+(this.text)+`&price_max=`+(this.text1)+`&genres=`+(this.clickapple)+(this.clicksamsung)+`&title=${this.$store.getters.SEARCH_VALUE}`
            ).then(response => response.json())
            console.log(this.listShop)
        
            
            

        },
        async sortProductsBySearchValue(){
            this.listShop = await fetch(
                    `${this.$store.getters.getServerUrl}/mds/?search=`+`${this.$store.getters.SEARCH_VALUE}`
                ).then(response => response.json())
                console.log(this.listShop)
        

        }
        


        
        
    }

    
    



      
    

   
       
        
    






    }
    
  
</script>


<style scoped>


#imgvn{
	
	
}
#colhover{
	border:solid 1px white;
}
#colhover:hover{
	border:solid 1px  green
	
	
}
#padcol{
	float:left;
	padding:0px;
	padding-right: 0px; 
    padding-left: 0px;
}
#textal{
	text-align:center; 
	margin-left:-3px;
}
#imgcen{

}
#imgvn{
    
    
}
#colhover{
    height:176px;
    
    border:#f4f4f4 solid 1px;
    border-radius:10px;
    padding:4px;
    
}
#colhover:hover{
    height:176px;
    border: solid 1px #f4f4f4;
    border-radius:10px;
   
    padding:4px;
    

    
    
}
#padcol{
    float:left;
    padding:0px;
    padding-right: 0px; 
    padding-left: 0px;
    border-radius:10px;

}
#textal{
    text-align:center; 
    margin-left:-3px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
    overflow: hidden;
    color: var(--gray-90);
    font-family: MuseoSansCyrl,sans-serif;
}
#imgcen{
		padding: 3px 20px 7px 20px;
		width:100%;

}
#fond{
    font-family: Geneva, Arial, Helvetica, sans-serif;
}

</style>



