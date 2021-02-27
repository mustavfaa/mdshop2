<template>
<div>

<div id="parallax2" style="margin-top: 20px;">
  <div id="parallax3">
    
  </div>
  <div class="container elementor" style="padding-right: 0px;padding-left: 0px;width: 100%;">

      <div class="row wor" style="padding-right: 0px;padding-left: 0px;margin-right: 0px;margin-left: 0px;width: 100%;" >
        <div class="elementor-heading-title col-12" style="text-align: center;padding-right: 0px;padding-left: 0px;">
          Child Prodigy
        </div>
        <div class="elementor-widget-container col-12" style="text-align: center;padding-right: 0px;padding-left: 0px;">
          для детей 7-11 лет
        </div>
        
      </div>

  </div>
</div>
<div class="container box" v-mdb-animate-on-scroll="'fadeIn'" style="background-color: white;width: 100%;padding-left: 0px;padding-right: 0px;">
    <div class="row" style="margin-left: 0px;width: 100%;margin-right: 0px;padding-left: 0px;padding-right: 0px;">

        <div class="col-12" style="color: #303133;       font-size: 35px;margin-top: 30px;padding-right: 0px;padding-left: 0px;width: 100%;">
          Увлекательное изучение английского для детей
        </div>
        <div class="col-12" style="padding-right: 0px;padding-left: 0px;">
            <div class="col-1" style="padding-right: 0px;padding-left: 0px;">
                <hr class="col-10" style="width: 100%; ">
            </div>
        </div>
        <div class="col-12" style="color: #303133;       font-size: 18px;padding-right: 0px;padding-left: 0px;width: 100%;">
          В младшем школьном возрасте происходит переход от игровой деятельности к учебной, это время не только подвижных, но интеллектуальных игр. На занятиях ребята:
        </div>
        <div class="col-12" style="color: #303133;       font-size: 18px;padding-right: 0px;padding-left: 0px;width: 100%;margin:10px 0px;">
          - Участвуют в квестах и эстафетах, ролевых играх.<br>
          - Выезжают на различные тематические мероприятия<br>
          - Посещают кулинарные занятия (Cooking Club), караоке и соревнования по английскому языку.<br>
        </div>
        <div class="col-12" style="color: #303133;       font-size: 18px;padding-right: 0px;padding-left: 0px;width: 100%;margin:10px 0px;">
          Программа «Child Prodigy» учитывает возрастные особенности детей и предусматривает углубление в грамматику, улучшение разговорной и письменной речи, аудиального восприятия
        </div>
        .
        
    </div>
</div> 








</div>
</template>

<script>



export default {
	name: 'alakol',
  components: {

  },
  data() {
    return {
     
    };
  },
  methods: {
   
   
  },
 // mounted() {
 //  if (process.browser) {
 //    const VueCarousel = () => import('vue-carousel')
 // }
 // }

 
}
</script>

<style scoped>
#parallax2{
  background-position: top center;width: 100%;    min-height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-color: rgba(0, 137, 216, 0);
  background-image: url(https://englishgo.kz/wp-content/uploads/2020/08/фывфыв.jpg);

}
#parallax3{

  width: 100%;
  background-image: linear-gradient(180deg, #FFFFFF 44%, #FFFFFF 62%);
  opacity: 0.61;
  min-height: 1000px;

    top: 0;
    left: 0;
    position: absolute;
}
#parallax12{
  background-position: top center;width: 100%;    min-height: 100px;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background:#0089D8;


}
#parallax13{

  width: 100%;

  min-height: 1000px;

    top: 0;
    left: 0;
    position: absolute;
}
#parallax{
    background-image: url(../assets/img/fotoLake.png) ;
    min-height: 624px;
    width: 100%;
    background-attachment: fixed;

    background-repeat: no-repeat;
    background-size: cover;
}

.elementor-heading-title{
    color: #000;
    font-family: "Roboto Mono", Sans-serif;
    width: 100%;
    font-weight: 600;
    padding: 5px;
    font-size: 47px;
  }
.elementor-widget-container{
    color: #000;
    font-family: "Roboto Mono", Sans-serif;
    font-size: 20px;
    font-weight: 500;
    padding: 5px;
}
.wor{
    margin-top: 30px;
}
.button-wrapper{
    font-family: "Roboto", Sans-serif;
    font-size: 17px;
    background-color: #CD0E2C;
    border-radius: 0px 0px 0px 0px;
    padding: 18px 83px 18px 83px;
    text-decoration: none;
    color: white;

}
.box {
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}




.carousel-component {
  position: relative;
  overflow: hidden;
}

.carousel-page {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.5s;
  padding: 10px;
  border: 1px solid #EEE;

  h2 {
    margin: 0;
  }

  img {
    width: 300px;
  }
}

.carousel-page.active {
  visibility: visible;
  position: static;
}

.carousel-nav-prev,
.carousel-nav-next {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  display: block;
  width: 50px;
  height: 50px;
  border: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #FFF;
  cursor: pointer;
}

.carousel-nav-prev {
  left: 5px;
}

.carousel-nav-next {
  right: 5px;
}

</style>
