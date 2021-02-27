<template>
<div style="">


	<header  class="hidden-sm hidden-xs" style="">
            <div class="col-12">

                <div id="mainmenu__area" class="mainmenu__area1 sticky-header scroll-header " >

                    
                      <div class="container " >
                        



                          <div class="col-lg-12 col-md-12 " >
                            <div class="row">
                            <div class="col-lg-2" id="colpadding">
                                  
                                    <a href="/" id="color-text-menu" style="  line-height: 56px;">
                                      <img src="../assets/img/logo21.jpg" style="width: 100%;margin-top: 5px;vertical-align: middle;">
                                    </a>
                                 
                            </div>
                            <div class="col-lg-9" style="margin-left: 45px;"id="colpadding">
                              <div class="row" style="margin-left: 0px;width: 100%;margin-right: 0px;padding-left: 0px;padding-right: 0px;">

                                <div class="col-lg-1 col-md-1" id="colpadding">

                                  <div id="padding-text-menu">
                                    <a href="/" id="color-text-menu">
                                      О НАС
                                    </a>
                                  </div>
                                  
                                </div>
                                <div class="col-lg-1 col-md-1" id="colpadding">

                                  <div id="padding-text-menu">
                                    <a href="/student" id="color-text-menu" style="vertical-align: middle;">
                                      ВЗРОСЛЫМ
                                    </a>
                                  </div>
                                  
                                </div>
                                <div class="col-lg-1 col-md-1" id="colpadding">

                                  <div id="padding-text-menu">
                                    <a href="/school" id="color-text-menu">
                                      ДЕТЯМ
                                    </a>
                                  </div>
                                  
                                </div>
                                <div class="col-lg-1 col-md-1" id="colpadding">

                                  <div id="padding-text-menu">
                                    <a href="/photo"  id="color-text-menu">
                                      ФОТО
                                    </a>
                                  </div>
                                  
                                </div>
                                <div class="col-lg-1 col-md-1" id="colpadding">

                                  <div id="padding-text-menu">
                                    <a href="/price"  id="color-text-menu">
                                      ЦЕНЫ
                                    </a>
                                  </div>
                                  
                                </div>
                                <div class="col-lg-1 col-md-1" id="colpadding">

                                  <div id="padding-text-menu">
                                    <a href="/contact"  id="color-text-menu">
                                      БИБЛИОТЕКА
                                    </a>
                                  </div>
                                  
                                </div>
                                <div class="col-lg-1 col-md-1" id="colpadding">

                                  <div id="padding-text-menu">
                                    <a href="/contact"  id="color-text-menu">
                                      КОНТАКТЫ
                                    </a>
                                  </div>
                                  
                                </div>
                                <div class="col-lg-1 col-md-1" id="colpadding">

                                  <div id="padding-text-menu">
                                    <a href="/contact"  id="color-text-menu">
                                      ОНЛАЙН
                                    </a>
                                  </div>
                                  
                                </div>
                                
                                




                              </div>
                            </div>
                              
                                

                              
                              
                              

                            
                                  



                            

                                      
                          </div>




                          

                        </div>
                 
                            
                                
                      
                    </div>

                </div>







          
                     

             </div>  



    </header>

    

<header  class="hidden-lg hidden-md" style="">
            <div class="col-12" style="padding-right: 0px;padding-left: 0px;width: 100%;">

                <div id="mainmenu__area" class="mainmenu__area1 sticky-header scroll-header " >

                    
                      <div class="container " >
                        <div class="row">
                          <div class="col-3" style="padding-right: 0px;padding-left: 0px;width: 100%;">
                            <nav id="nav-menu">
                              <i class="material-icons menu" v-on:click="onToggleMenu()" v-if="!menuOpen"  style="color:black;z-index: 1000000 " key="menu">
                                <img src="../assets/img/menu.png" style="width: 22px;"></i>
                              
                              


                            </nav>
                          </div>
                          <div class="col-7" id="colpadding" style="padding-right: 10px;text-align: center;">

                            <a href="/" id="color-text-menu">
                              <img src="../assets/img/logo21.jpg" style="float: left;margin-top:12px;vertical-align: middle;width: 70%;">
                            </a>
                          </div>
                          











                          


                        </div>
                 
                            
                                
                      
                    </div>

                </div>







          
                     

             </div>  



    </header>	
<div id="app">
 
  <div >
      

    
    <header class="header" style="margin-top: -46px;"  v-if="menuOpen">
      
      <div class="navigation" :class="{'open': menuOpen}" >
      <i class="material-icons clear" v-on:click="onToggleMenu()" v-if="menuOpen"  style="color:white;z-index: 1000000;padding: 15px; " key="clear">
        <img src="../assets/img/close.png" style="width: 25px;">
      </i>
        <nav >
          <ul style="padding: 0px 0px 0px 0px;">
            <li >
              <a href="/" style="color:white;">Главная</a>
            </li>
            <li >
              <a href="/student" style="color:white;">ВЗРОСЛЫМ</a>
            </li>
            <li>
              <a href="/school" style="color:white;">ДЕТЯМ</a>
            </li>
            <li>
              <a href="/photo" style="color:white;">ФОТО</a>
            </li>
            <li>
              <a href="/price" style="color:white;">ЦЕНЫ</a>
            </li>
            <li>
              <a href="/price" style="color:white;">КОНТАКТЫ</a>
            </li>

          </ul>
        </nav>
      </div>
    

      

      
    </header>
  </div>


</div> 





</div>





    
    



 
  
</template>
<script>


// register the component
export default {
  name: 'navbar',
  data(){
    return{
      show:false,
      menuOpen: false
    }
    

 

    
  },
  components: {

  },
  
  
  
  props: {
        isOpen: {
          type: Boolean,
          required: false
        },
        right: {
          type: Boolean,
          required: false
        },
        width: {
          type: [String],
          required: false,
          default: '300'
        },
        disableEsc: {
          type: Boolean,
          required: false
        },
        noOverlay: {
          type: Boolean,
          required: false
        },
        onStateChange: {
          type: Function,
          required: false
        },
        burgerIcon: {
          type: Boolean,
          required: false,
          default: true
        },
        crossIcon: {
          type: Boolean,
          required: false,
          default: true
        },
        disableOutsideClick: {
          type: Boolean,
          required: false,
          default: false
        },
        closeOnNavigation: {
          type: Boolean,
          required: false,
          default: false
        }
      },

      methods: {
      goHome(){
        this.$router.push('/')
      },
      goAlakol(){
        this.$router.push('/alakol')
      },
      goHome(){
        this.$router.push('/')
      },
      goAlakol(){
        this.$router.push('/alakol')
      },
      onToggleMenu () {
        this.menuOpen = !this.menuOpen
      },

      

      



      






    },








  





}
  

</script>

<style >
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
#colpadding{
  padding-left: 0px;
  padding-right: 0px;

  
}
.bm-menu{
	background-color: #FFFFFF;
}
.bm-burger-button{
    top: 8px;
    left: 15px;
    
}
.bm-burger-bars{
  background-color: #FFD700;
}

#color-text-menu{
  color: #303133;


  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 56px;

  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
}
#color-text-menu:hover{
text-decoration:none;
color: #E9168C;
}
.bm-cross{

  background: #FFD700;
}

#padding-text-menu{
  display: flex;
  justify-content: center;
  align-items: center;
}
.col-lg-1{
  margin:0px 15px;
}







#header{
 
  position: inherit;
    top: auto;
  left: 0;
  margin:100px;
  
  right: 0;
  top: 0;
  width: 100%;
  

 
}
#sticky-header-with-topbar{
background: #ffffff none repeat scroll 0 0;
display: flex;

}




















/*-------------------------
  Menu Style 7
--------------------------*/

.menu__style--7 .main__menu li.drop:hover ul.dropdown {
  opacity: 1;
  visibility: visible;
  top: 0;
}

#mainmenu__area{


}
.sticky-header.scroll-header{

  background: #ffffff;

  left: 0;
  margin: 0 auto;
  position: relative;
  right: 0;
 
  width: 100%;
  z-index: 99;
  height: 46px;

}


#logo{
  
  
    height: 42px;
    text-align: center;
    /* width: 80px; */
    margin-top: 2px;
}











.header {
  background: #151414;
  margin-bottom: 10px;

  right: 0;

  left: 0;
  position: fixed;
  z-index: 1000;
  height: 100%;
}

.logo {
  color:white;
  font-size: 2em;
  z-index:900;
  position:absolute;
  padding: 10px;
}

.hidden {
  visibility: hidden;
}

.invisible {
  display: none;
}

.menu {
  padding: 12px;
  position: relative;
  z-index: 1000;
}

.menu-hamburger {
  width: 43px;
  height: 30px;
  /*position: absolute;*/
  top: 20px;
  right: 25px;
  margin-left: auto;
  cursor: pointer;
  color: white;
}

.menu-hamburger > .top,
.menu-hamburger > .bottom {
/*   width: 100%; */
  height: 5px;
  background: white;
  margin: 6px auto;
  transition-duration: 0.1s;
}

.menu-hamburger > .middle {
  position: relative;
  background: none;
  text-align: center;
  height: 5px;
  top: -5px;
}

.menu-hamburger > .top.open {
  transform: translate(0px, 11px) rotate(45deg);
}

.menu-hamburger > .middle.open {
  opacity: 0;
}

.menu-hamburger > .bottom.open {
  transform: translate(0px, -11px) rotate(-45deg);
}

.navigation {
  background: #151414;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 900;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.15s;
}

.navigation.open {
  max-height: 300px;
  transition: max-height 0.25s;

}


nav ul {
  list-style: none;
  text-align: center;
  margin: 4em auto;
}


a {
  transition-duration: 0.5s;
  text-decoration: none;
  color: white;
  font-size: 1.5em;
  line-height: 2;
  
}




</style>
