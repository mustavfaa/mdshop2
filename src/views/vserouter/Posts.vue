



<template>



<div style="">



<div id="mainmenu"  class="hidden-sm hidden-xs" style="height:400px;width:100%;padding-right: 0px;padding-left: 0px;">
            <div class="container" style="padding-right: 0px;padding-left: 0px;">
              <div class="row">
                <div class="col-lg-12" style="width:100%;">

        
                    <div id="myCarousel" class="carousel slide" data-ride="carousel" style="width:100%;height:400px; padding:0px;">
                      <!-- Indicators -->
                      <ol class="carousel-indicators">
                     
                    </ol>
                      <!-- Wrapper for slides -->
                      <div class="carousel-inner">
                        <div class="item active">
                          <img src="../../assets/slider/aaaa.png" alt="" style="width:100%;height:400px">
                        </div>

                        <div class="item">
                          <img src="../../assets/slider/b.png" alt="" style="width:100%;height:400px">
                        </div>
                      
                        <div class="item">
                          <img src="../../assets/slider/c.png" alt="" style="width:100%;height:400px">
                          
                        </div>
                        <div class="item">
                          <img src="../../assets/slider/v.png" alt="" style="width:100%;height:400px">
                          
                        </div>
                      </div>

                      <!-- Left and right controls -->
                      <a class="left carousel-control" href="#myCarousel" data-slide="prev" style="background:transparent;">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="right carousel-control" href="#myCarousel" data-slide="next" style="background:transparent;">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
                  </div>

                


























                    
















                  

                
                
              </div>
              
            </div>
              
              

          </div>
    



<div id="mainmenu"  class="hidden-lg hidden-md" style="height:250px;width:100%;padding-right: 0px;padding-left: 0px;margin-top: -12px;">
            <div class="container" style="padding-right: 0px;padding-left: 0px;">
              <div class="row">
                <div class="col-lg-12" style="width:100%;">

        
                    <div id="myCarousel" class="carousel slide" data-ride="carousel" style="width:100%;height:250px; padding:0px;">
                      <!-- Indicators -->
                      <ol class="carousel-indicators">
                     
                    </ol>
                      <!-- Wrapper for slides -->
                      <div class="carousel-inner">
                        <div class="item active">
                          <img src="../../assets/slider/aaaa.png" alt="" style="width:100%;height:250px">
                        </div>

                        <div class="item">
                          <img src="../../assets/slider/b.png" alt="" style="width:100%;height:250px">
                        </div>
                      
                        <div class="item">
                          <img src="../../assets/slider/c.png" alt="" style="width:100%;height:250px">
                          
                        </div>
                        <div class="item">
                          <img src="../../assets/slider/v.png" alt="" style="width:100%;height:250px">
                          
                        </div>
                      </div>

                      <!-- Left and right controls -->
                      <a class="left carousel-control" href="#myCarousel" data-slide="prev" style="background:transparent;">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="right carousel-control" href="#myCarousel" data-slide="next" style="background:transparent;">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
                  </div>

                


























                    
















                  

                
                
              </div>
              
            </div>
              
              

          </div>
    





























<div class="container"  style="margin-top:10px;">

<h2>       Популярные товары</h2>
    <div class="col-12" style=" padding-right: 0px;padding-left: 0px; ">
        <div class="row">






        
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


























        
    </div>

    



</div>













<div class="container">
  <div class="container center" id="app">
  <ul class="cd-accordion-menu">
    <item :model="treeData"></item>
  </ul>
</div>
  

</div>



























</div>








</template>

















<script>

  import {mapGetters} from 'vuex'
 
  
  import {mapState} from 'vuex'
  export default {
    name: 'Posts',
    data () {
      return {
          listShop:[],
          Profil:[],
          riz:[]
          

        }
    },
    components: {},
    created() { 
      this.loadListShop()

      


      
        
     
        
        
        
    },
    methods: {
        async loadListShop() {
            this.listShop = await fetch(
                `${this.$store.getters.getServerUrl}/mds`
            ).then(response => response.json())
            console.log(this.listShop)
        },
        goTo(id) {
            this.$router.push({ name: 'Single', params: {id: id} })
        },
        
        clickdata() {
          this.$store.dispatch('dataLike');
          return;  

        },
       

       




    },
    computed: {
      ...mapState(['APIData']),
      currentUser() {
        return this.$store.state.auth.user;
      },
      ...mapGetters(['loggedIn']
          

        ),
    
      
    },

    
  }
</script>

<style scoped>






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
#cssprice{
 position: absolute;margin-left:-5px ;width:100%;text-align:center;font-size:15px;bottom: 0;


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

    display: -webkit-box;
    -webkit-box-orient: vertical;
    
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    color: var(--gray-90);
    font-family: MuseoSansCyrl,sans-serif;
}
#imgcen{
    padding:7px;
    width:100%;

}
#fond{
    font-family: Geneva, Arial, Helvetica, sans-serif;
}


#imgvn{
  
  
}
#colhover{
  border:solid 1px white;
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

#padcol{
    float:left;
    padding:0px;
    padding-right: 0px; 
    padding-left: 0px;
    border-radius:10px;
    animation: fade .4s ease 0s 1 normal;

}

#imgcen{
    padding: 3px 20px 7px 20px;
    width:100%;

}
#fond{
    font-family: Geneva, Arial, Helvetica, sans-serif;
}












.samoletovosa-menyu {
  width: 85%;
  max-width: 550px;
  margin: 1em auto;
  background: rgba(27, 27, 27, 0.7);
  box-shadow: -1px 8px 10px 3px rgba(0, 0, 0, 0.3);
}

.samoletovosa-menyu li {
  user-select: none;
}

.samoletovosa-menyu li span {
  float: right;
}

.samoletovosa-menyu label, .samoletovosa-menyu a {
  position: relative;
  display: block;
  padding: 16px 16px 16px 54px;
  box-shadow: inset 0 -1px #000;
  color: #ffffff;
}
.no-touch .samoletovosa-menyu label:hover,
.no-touch .samoletovosa-menyu a:hover {
  background: #52565d;
}
.samoletovosa-menyu label::before,
.samoletovosa-menyu label::after,
.samoletovosa-menyu a::after {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.samoletovosa-menyu label {
  cursor: pointer;
}

.samoletovosa-menyu label span {
  float: right;
  color: #828282;
}

.samoletovosa-menyu li.file > label::before {
content: "\f15b";  
}
.samoletovosa-menyu li.folder > label::before {
  content: "\f054";
}

.samoletovosa-menyu li.file > label::before {
content: "\f15b";  
}
.samoletovosa-menyu li.add > label::before {
  content: "\f067";
}

.samoletovosa-menyu label::before {
  /* arrow icon */
  font: normal normal normal 14px/1 FontAwesome;
  left: 18px;
  transform: translateY(-50%);
  transition: transform 0.3s;
}
.samoletovosa-menyu label.open::before {
  transform: translateY(-25%) rotate(90deg);
}

.samoletovosa-menyu ul label, .samoletovosa-menyu ul a {
  background: #1f1e1e;
  box-shadow: inset 0 -1px #353535;
  padding-left: 82px;
}
.no-touch .samoletovosa-menyu ul label:hover,
.no-touch .samoletovosa-menyu ul a:hover {
  background: #3c3f45;
}
.samoletovosa-menyu > li:last-of-type > label,
.samoletovosa-menyu > li:last-of-type > a,
.samoletovosa-menyu > li > ul > li:last-of-type label,
.samoletovosa-menyu > li > ul > li:last-of-type a {
  box-shadow: none;
}
.samoletovosa-menyu ul label::before {
  left: 36px;
}
.samoletovosa-menyu ul label::after,
.samoletovosa-menyu ul a::after {
  left: 59px;
}
.samoletovosa-menyu ul ul label,
.samoletovosa-menyu ul ul a {
  padding-left: 100px;
}
.samoletovosa-menyu ul ul label::before {
  left: 54px;
}
.samoletovosa-menyu ul ul label::after,
.samoletovosa-menyu ul ul a::after {
  left: 77px;
}
.samoletovosa-menyu ul ul ul label,
.samoletovosa-menyu ul ul ul a {
  padding-left: 118px;
}
.samoletovosa-menyu ul ul ul label::before {
  left: 72px;
}
.samoletovosa-menyu ul ul ul label::after,
.samoletovosa-menyu ul ul ul a::after {
  left: 95px;
}
</style>

