<template>
  <div >
    

 
    
         

<div class="container" id="cont" style="margin-top: 0px;">


<div class="row" >















<div class="col-lg-6 col-sm-12 hidden-sm hidden-xs"  id="colj"> 
  <div class="row" id="colj"> 

                        <div class="col-lg-12 col-sm-12"  id="col12">
                            <div class="row" style="padding-right: 0px;padding-left: 0px;width: 100%;"> 
                                <img :src="'http://127.0.0.1:8000'+ssli" id="col12" class="img-responsive" style="height: 550px;width: 100%;margin-left: 10px;" />
                            </div>

                         
                        </div>


                        
                        <div class="col-lg-12 col-sm-12" style="padding:0px;" >

                              <div class="col-2  " style="padding:0px;" >
                                
                                      <img :src="'http://127.0.0.1:8000'+mds.img1" @mouseover="slid()" class="img-slider" id="col2"/>
                                          
                              </div>

                              <div class="col-2" style="padding:0px;" >
                                <img :src="'http://127.0.0.1:8000'+mds.img2" class="img-slider" @mouseover="slid1()" id="col2"/>
                              </div>


                              <div class="col-2" style="padding:0px;" >
                                <img :src="'http://127.0.0.1:8000'+mds.img3" class="img-slider" @mouseover="slid2()" id="col2"/>
                              </div>

                              <div class="col-2" style="padding:0px;" >
                                <img :src="'http://127.0.0.1:8000'+mds.img4" class="img-slider" @mouseover="slid3()" id="col2"/>
                              </div>
                              <div class="col-2" style="padding:0px;" >
                                <img :src="'http://127.0.0.1:8000'+mds.img5" class="img-slider" @mouseover="slid4()" id="col2"/>
                              </div>
                              <div class="col-2 " style="padding:0px;" >
                                <img :src="'http://127.0.0.1:8000'+mds.img6" class="img-slider" @mouseover="slid5()" id="col2"/>
                              </div>

                        </div>


                          
           </div>         




</div> 
  
<div class="col-lg-6 col-sm-12 hidden-lg hidden-md" id="colj"> 
  <div class="row" id="colj" style="padding-right: 0px;padding-left: 0px;margin-left: 0px;margin-right: 0px;">

                        <div class="col-lg-12 col-sm-12" style="padding:0px;height: 380px;"  >
                          <img :src="'http://127.0.0.1:8000'+ssli" id="col12" class="img-responsive" style="height: 380px;"/>

                         
                        </div>


                        
                        <div class="col-lg-12 col-sm-12" style="padding:0px;" >

                              <div class="col-2  " style="padding:0px;" >
                                
                                      <img :src="'http://127.0.0.1:8000'+mds.img1" @mouseover="slid()" class="img-slider" id="col2"/>
                                          
                              </div>

                              <div class="col-2" style="padding:0px;" >
                                <img :src="'http://127.0.0.1:8000'+mds.img2" class="img-slider" @mouseover="slid1()" id="col2"/>
                              </div>


                              <div class="col-2" style="padding:0px;" >
                                <img :src="'http://127.0.0.1:8000'+mds.img3" class="img-slider" @mouseover="slid2()" id="col2"/>
                              </div>

                              <div class="col-2" style="padding:0px;" >
                                <img :src="'http://127.0.0.1:8000'+mds.img4" class="img-slider" @mouseover="slid3()" id="col2"/>
                              </div>
                              <div class="col-2" style="padding:0px;" >
                                <img :src="'http://127.0.0.1:8000'+mds.img5" class="img-slider" @mouseover="slid4()" id="col2"/>
                              </div>
                              <div class="col-2 " style="padding:0px;" >
                                <img :src="'http://127.0.0.1:8000'+mds.img6" class="img-slider" @mouseover="slid5()" id="col2"/>
                              </div>

                        </div>


                          
           </div>         




</div> 
  





































<div class="col-lg-6 col-sm-12 " id="colj">
                <h4 style="margin-left: 10px;color:rgb(2, 143, 104); font-family: Сomic Sans MS Cursive"><b>{{mds.title}}</b></h4>

                    <hr>
                

                    <div class="col-md-12" style="padding-right: 0px;padding-left: 0px;">
                        
                        

                        <div class="col-12" style="padding-right: 0px;padding-left: 0px;">
                            <div class="col-12" style="padding-right: 0px;padding-left: 0px;">
                                <h1 style="margin-top: 10px;text-align: center; font-family: MuseoSansCyrl,sans-serif;">{{mds.price.toLocaleString()}}</h1>
                                
                            </div>
                            <div class="col-12" style="padding-right: 0px;padding-left: 0px;">
                                <div class="kacompos-dakucels" style="margin-top: 10px;">
                          
                                  <button id="cartButton" style="width: 100%;" @click="addItemToCart(mds)">Добавить в корзину</button>
                                  
                                  
                                </div>
                                
                            </div>
                            <div class="col-12" style="margin-top: 10px;padding-right: 0px;padding-left: 0px;">
                                <div class="col-6" style="text-align: center;padding-right: 0px;padding-left: 0px;">
                                    <a href="#" id="cartLike" @click="addToLike(mds)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                          <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                        </svg>
                                        В избранное
                                        

                                      
                                          
                                    </a>
                                    
                                </div>
                                <div class="col-6" style="text-align: center;padding-right: 0px;padding-left: 0px;">
                                    <a href="#" style="color: rgb(2, 143, 104);">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="36" height="36" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);color: red;" preserveAspectRatio="xMidYMid meet" viewBox="0 0 2176 1792"><path style="fill:rgb(2, 143, 104);" d="M1728 448l-384 704h768zm-1280 0L64 1152h768zm821-192q-14 40-45.5 71.5T1152 373v1291h608q14 0 23 9t9 23v64q0 14-9 23t-23 9H416q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h608V373q-40-14-71.5-45.5T907 256H416q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h491q21-57 70-92.5T1088 0t111 35.5t70 92.5h491q14 0 23 9t9 23v64q0 14-9 23t-23 9h-491zm-181 16q33 0 56.5-23.5T1168 192t-23.5-56.5T1088 112t-56.5 23.5T1008 192t23.5 56.5T1088 272zm1088 880q0 73-46.5 131t-117.5 91t-144.5 49.5T1728 1440t-139.5-16.5T1444 1374t-117.5-91t-46.5-131q0-11 35-81t92-174.5T1514 701t102-184t56-100q18-33 56-33t56 33q4 7 56 100t102 184t107 195.5t92 174.5t35 81zm-1280 0q0 73-46.5 131T732 1374t-144.5 49.5T448 1440t-139.5-16.5T164 1374t-117.5-91T0 1152q0-11 35-81t92-174.5T234 701t102-184t56-100q18-33 56-33t56 33q4 7 56 100t102 184t107 195.5t92 174.5t35 81z" fill="#626262"/></svg>
                                        Сравнить
                                        

                                      
                                          
                                    </a>
                                    
                                    
                                </div>
                                
                            </div>
                            
                        </div>
                        

                        
                            <h5 style="margin-left: 20px;margin-top: 30px;text-align: center;">
                                Описание  |   
                                <span>
                                    <a href="#xare" id="xareHover">
                                        Все характеристики
                                    </a>
                                </span>
                            </h5>
                       
                        


                        

                        <div class="col-12" id="colj">

                            <span class="rcenter" ><span class="rcenter">Диагональ экрана :</span>  <b> {{mds.pred1}}</b></span><br>
                            <span class="rcenter">Разрешение дисплея :</span>  <b> {{mds.pred2}}</b><br>

                            <span class="rcenter">Операционная система:</span>  <b> {{mds.pred3}}</b><br>
                            <span class="rcenter">Объем оперативной памяти :</span>  <b> {{mds.pred4}}</b><br>

                            <span class="rcenter">Объём встроенной памяти :</span>  <b> {{mds.pred5}}</b><br>
                            <span class="rcenter">Количество SIM-карт:</span>  <b> {{mds.pred6}}</b><br>
                            <span class="rcenter">Ёмкость аккумулятора, mAh:</span>  <b> {{mds.pred7}}</b><br>
                            <span class="rcenter">Модельный год:</span>  <b> {{mds.pred8}}</b><br>
                        </div>
            
                    </div>



                    <div class="col-md-4">




                        
                    </div>



                
            

        </div>



































</div>


</div>






























































































<div class="container hidden-lg hidden-md" style="margin-top:20px;padding-right: 0px;padding-left: 0px;width: 100%;" id="xare">


<div class="wrapper">
    
    <div class="row" id="colj">
        <div class="col-12" id="colj">
            <div class="tabs">
                <ul>
                    <li @click="activeTab = '1'" :class="[activeTab==='1'?'active':'']" style="color:#028f68;">
                        <a @click="activeTab = '1'" :class="[activeTab==='1'?'active':'']" style="color:#028f68;font-size: 9px;" >Характеристика</a>
                        
                    </li>
                    <li @click="activeTab = '2'" :class="[activeTab==='2'?'active':'']" style="color:#028f68;">
                        
                        <a @click="activeTab = '2'" :class="[activeTab==='2'?'active':'']" style="color:#028f68;font-size: 9px;">О товаре</a>
                    </li>
                    <li @click="activeTab = '3'" :class="[activeTab==='3'?'active':'']" style="color:#028f68;font-size: 9px;">
                        
                        <a @click="activeTab = '3'" :class="[activeTab==='3'?'active':'']" style="color:#028f68;font-size: 9px;">Отзывы</a>
                    </li>
                    <li @click="activeTab = '4'" :class="[activeTab==='4'?'active':'']" style="color:#028f68;font-size: 9px;">
                        
                        <a @click="activeTab = '4'" :class="[activeTab==='4'?'active':'']" style="color:#028f68;font-size: 9px;">Наличие товара</a>
                    </li>
                </ul>
            </div>
            
        </div>
        
    </div>

    

    <div class="content" style="margin-top: -24px;">
        
        <div class="content-one" v-if="activeTab==='1' " >
           
            <div class="tab_content">
                <div class="row">









                    <div class="col-md-12" id="colj">
                        <div class="col-md-6" id="colj">
                            <h3 style="color:rgb(2, 143, 104); font-family: Сomic Sans MS Cursive"><b>Основные характеристики</b></h3>
                            <ul class="botted-1">
                                <li class="botted" style="">
                                    <span>Серия</span>
                                    <span>iPhone 11</span>
                                </li>
                                <li class="botted">
                                    <span>Модельный год</span>
                                    <span>2019</span>
                                </li>

                            </ul>
                        </div>
                        <div class="col-md-6" id="colj">
                            <h3 style="color:rgb(2, 143, 104); font-family: Сomic Sans MS Cursive"><b>Дисплей</b></h3>
                            <ul class="botted-1">
                                <li class="botted" style="">
                                    <span>Число пикселей на дюйм (PPI)</span>
                                    <span>326</span>
                                </li>
                                <li class="botted">
                                    <span>Разрешение дисплея</span>
                                    <span>828x1792</span>
                                </li>
                                <li class="botted">
                                    <span>Диагональ дисплея, дюйм</span>
                                    <span>6.1</span>
                                </li>
                                <li class="botted">
                                    <span>Тип матрицы</span>
                                    <span>Liquid Retina HD</span>
                                </li>

                            </ul>
                        </div>
                        
                    </div>














                    <div class="col-md-12" style="margin-top: 30px;" id="colj">
                        <div class="col-md-6" id="colj">
                            <h3 style="color:rgb(2, 143, 104); font-family: Сomic Sans MS Cursive"><b>Процессор</b></h3>
                            <ul class="botted-1">
                                <li class="botted" style="">
                                    <span>Производитель процессора</span>
                                    <span>Apple</span>
                                </li>
                                <li class="botted">
                                    <span>Операционная система</span>
                                    <span>iOS 13</span>
                                </li>
                                <li class="botted">
                                    <span>Модель процессора</span>
                                    <span>A13 Bionic</span>
                                </li>

                                


                            </ul>
                        </div>
                        <div class="col-md-6" id="colj">
                            <h3 style="color:rgb(2, 143, 104); font-family: Сomic Sans MS Cursive"><b>Память</b></h3>
                            <ul class="botted-1">
                                <li class="botted" style="">
                                    <span>Максимальный объем поддерживаемой карты памяти</span>
                                    <span>Не поддерживает</span>
                                </li>
                                <li class="botted">
                                    <span>Объем оперативной памяти</span>
                                    <span>4</span>
                                </li>
                                <li class="botted">
                                    <span>Объём встроенной памяти</span>
                                    <span>64</span>
                                </li>
                                

                            </ul>
                        </div>
                        
                    </div>


                    <div class="col-md-12" style="margin-top: 30px;" id="colj">
                        <div class="col-md-6" id="colj">
                            <h3 style="color:rgb(2, 143, 104); font-family: Сomic Sans MS Cursive"><b>SIM-карта</b></h3>
                            <ul class="botted-1">
                                <li class="botted" style="">
                                    <span>Количество SIM-карт</span>
                                    <span>1</span>
                                </li>
                                <li class="botted">
                                    <span>Размер SIM-карт</span>
                                    <span>Nano-SIM</span>
                                </li>
                                

                                


                            </ul>
                        </div>



                        <div class="col-md-6"  id="colj">
                            <h3 style="color:rgb(2, 143, 104); font-family: Сomic Sans MS Cursive"><b>Основная камера</b></h3>
                            <ul class="botted-1">
                                <li class="botted" style="">
                                    <span>Встроенная вспышка</span>
                                    <span>Да</span>
                                </li>
                                <li class="botted">
                                    <span>Количество мегапикселей</span>
                                    <span>12</span>
                                </li>
                                <li class="botted">
                                    <span>Дополнительно</span>
                                    <span class="botted-2">Портретный режим, Режим серийной съемки, Пятилинзовый объектив, Шестилинзовый объектив, Ночной режим, Панорама, Устранение эффекта красных глаз, Контроль экспозиции, Цифровой зум 5x, Эффект боке, Оптический зум 2x, Геотегинг</span>
                                </li>

                                <li class="botted">
                                    <span>Светосила второго модуля</span>
                                    <span class="botted-2">f/2.4</span>
                                </li>
                                <li class="botted">
                                    <span>Автофокус</span>
                                    <span class="botted-2">Да</span>
                                </li>
                                <li class="botted">
                                    <span>Светосила</span>
                                    <span class="botted-2">f/1.8</span>
                                </li>
                                <li class="botted">
                                    <span>Тип первого модуля</span>
                                    <span class="botted-2">Широкоугольный объектив</span>
                                </li>

                                <li class="botted">
                                    <span>Запись видео камеры</span>
                                    <span class="botted-2">4K</span>
                                </li>
                                <li class="botted">
                                    <span>Тип второго модуля</span>
                                    <span class="botted-2">Ультраширокоугольный</span>
                                </li>
                                <li class="botted">
                                    <span>Размер пикселя, мкм</span>
                                    <span class="botted-2">1.4</span>
                                </li>
                                <li class="botted">
                                    <span>Стабилизация</span>
                                    <span class="botted-2">Да</span>
                                </li>

                                <li class="botted">
                                    <span>Количество мегапикселей второго модуля</span>
                                    <span class="botted-2">12</span>
                                </li>
                                

                            </ul>
                        </div>



                    </div>










                    <div class="col-md-12" style="margin-top: 30px;" id="colj">
                        <div class="col-md-6" id="colj">
                            <h3 style="color:rgb(2, 143, 104); font-family: Сomic Sans MS Cursive"><b>Фронтальная камераа</b></h3>
                            <ul class="botted-1">
                                <li class="botted" style="">
                                    <span>Светосила</span>
                                    <span>f/2.2</span>
                                </li>
                                <li class="botted">
                                    <span>Автофокус</span>
                                    <span>Да</span>
                                </li>
                                
                                <li class="botted" style="">
                                    <span>Стабилизация</span>
                                    <span>Да</span>
                                </li>
                                <li class="botted">
                                    <span>Запись видео камеры</span>
                                    <span>4K</span>
                                </li>


                                <li class="botted" style="">
                                    <span>Дополнительно</span>
                                    <span class="botted-2">HDR, Распознавание лиц, Вспышка дисплея, Режим замедленной съёмки, Портретный режим</span>
                                </li>

                                <li class="botted">
                                    <span>Количество мегапикселей</span>
                                    <span>12</span>
                                </li>

                                


                            </ul>
                        </div>



                        <div class="col-md-6" id="colj">
                            <h3 style="color:rgb(2, 143, 104); font-family: Сomic Sans MS Cursive"><b>Связь</b></h3>
                            <ul class="botted-1">
                                <li class="botted" style="">
                                    <span>Навигация</span>
                                    <span>Глонасс, GPS, Galileo</span>
                                </li>
                                <li class="botted">
                                    <span>Разъёмы</span>
                                    <span>Lightning</span>
                                </li>
                                <li class="botted">
                                    <span>Интерфейсы</span>
                                    <span class="botted-2">NFC, Bluetooth, Wi-Fi</span>
                                </li>
                                <li class="botted">
                                    <span>Стандарт связи</span>
                                    <span>2G, 4G (LTE), 3G (WCDMA/UMTS)</span>
                                </li>
                                

                            </ul>
                        </div>



                    </div>


























                    <div class="col-md-12" style="margin-top: 30px;" id="colj">
                        <div class="col-md-6" id="colj">
                            <h3 style="color:rgb(2, 143, 104); font-family: Сomic Sans MS Cursive"><b>Фронтальная камераа</b></h3>
                            <ul class="botted-1">
                                <li class="botted" style="">
                                    <span>Светосила</span>
                                    <span>f/2.2</span>
                                </li>
                                <li class="botted">
                                    <span>Автофокус</span>
                                    <span>Да</span>
                                </li>
                                
                                <li class="botted" style="">
                                    <span>Стабилизация</span>
                                    <span>Да</span>
                                </li>
                                <li class="botted">
                                    <span>Запись видео камеры</span>
                                    <span>4K</span>
                                </li>


                                <li class="botted" style="">
                                    <span>Дополнительно</span>
                                    <span class="botted-2">HDR, Распознавание лиц, Вспышка дисплея, Режим замедленной съёмки, Портретный режим</span>
                                </li>

                                <li class="botted">
                                    <span>Количество мегапикселей</span>
                                    <span>12</span>
                                </li>

                                


                            </ul>
                        </div>



                        <div class="col-md-6" id="colj">
                            <h3 style="color:rgb(2, 143, 104); font-family: Сomic Sans MS Cursive"><b>Связь</b></h3>
                            <ul class="botted-1">
                                <li class="botted" style="">
                                    <span>Навигация</span>
                                    <span>Глонасс, GPS, Galileo</span>
                                </li>
                                <li class="botted">
                                    <span>Разъёмы</span>
                                    <span>Lightning</span>
                                </li>
                                <li class="botted">
                                    <span>Интерфейсы</span>
                                    <span class="botted-2">NFC, Bluetooth, Wi-Fi</span>
                                </li>
                                <li class="botted">
                                    <span>Стандарт связи</span>
                                    <span>2G, 4G (LTE), 3G (WCDMA/UMTS)</span>
                                </li>
                                

                            </ul>
                        </div>



                    </div>


















                      <div class="col-md-12" style="margin-top: 30px;" id="colj">
                        <div class="col-md-6" id="colj">
                            <h3 style="color:rgb(2, 143, 104); font-family: Сomic Sans MS Cursive"><b> Питание</b></h3>
                            <ul class="botted-1">
                                <li class="botted" style="">
                                    <span>Время работы в режиме разговора, ч</span>
                                    <span>17</span>
                                </li>
                                <li class="botted">
                                    <span>Возможность беспроводной зарядки</span>
                                    <span>Да</span>
                                </li>
                                
                                <li class="botted" style="">
                                    <span>Ёмкость аккумулятора, mAh</span>
                                    <span>3110</span>
                                </li>
                                <li class="botted">
                                    <span>Быстрая зарядка</span>
                                    <span >Да</span>
                                </li>


                                
                                


                            </ul>
                        </div>



                        <div class="col-md-6" id="colj">
                            <h3 style="color:rgb(2, 143, 104); font-family: Сomic Sans MS Cursive"><b>Функции и особенности</b></h3>
                            <ul class="botted-1">
                                <li class="botted" style="">
                                    <span>Материал корпуса</span>
                                    <span class="botted-2">Металл, Стекло</span>
                                </li>
                                <li class="botted">
                                    <span>Особенности</span>
                                    <span class="botted-2">Двойная камера, Стереодинамики, Пыле- /влагозащита, Смартфон с 4G</span>
                                </li>
                                <li class="botted">
                                    <span>Стандарт защиты от пыли и влаги</span>
                                    <span class="botted-2">IP68</span>
                                </li>
                                <li class="botted">
                                    <span>Датчики</span>
                                    <span class="botted-2">Гироскоп, ID лица, Датчик освещенности, Компас, Датчик приближения, Акселерометр, Барометр</span>
                                </li>
                                

                            </ul>
                        </div>



                    </div>








                    <div class="col-md-12" style="margin-top: 30px;" id="colj">
                        <div class="col-md-6" id="colj"> 
                            
                            <h3 style="color:rgb(2, 143, 104); font-family: Сomic Sans MS Cursive"><b>Габариты</b></h3>
                            <ul class="botted-1">
                                <li class="botted" style="">
                                    <span>Толщина, мм </span>
                                    <span>8.3</span>
                                </li>
                                <li class="botted">
                                    <span>Ширина, мм</span>
                                    <span>75.7</span>
                                </li>
                                
                                <li class="botted" style="">
                                    <span>Вес, гр </span>
                                    <span>194</span>
                                </li>
                                <li class="botted">
                                    <span>Высота, мм</span>
                                    <span >150.9</span>
                                </li>


                                
                                


                            </ul>
                        </div>



                        <div class="col-md-6" id="colj">
                            
                        </div>



                    </div>























                    


























                    
                </div>
            </div>
        </div>





        <div class="content-one" v-if="activeTab==='2' " >
            <div class="title">Letter</div>
            <div class="tab_content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem inventore perspiciatis alias, magni provident nulla recusandae odio consequatur praesentium officia non voluptate voluptatum debitis consequuntur omnis incidunt fuga eaque sit aliquam nemo. Recusandae voluptatibus excepturi, voluptates inventore nulla aliquid porro a asperiores beatae quas quo incidunt at, cumque minima officiis error eius dignissimos animi ullam unde odit! Nobis aut animi quibusdam molestias libero, facere vel cum atque incidunt esse! Libero ipsam praesentium sit, enim corrupti quia nobis obcaecati nostrum voluptatem totam nulla delectus ipsa facilis optio quis iure unde repudiandae voluptas temporibus, ad veritatis dolorem, culpa maiores. Dicta, quod neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem inventore perspiciatis alias, magni provident nulla recusandae odio consequatur praesentium officia non voluptate voluptatum debitis consequuntur omnis incidunt fuga eaque sit aliquam nemo. Recusandae voluptatibus excepturi, voluptates inventore nulla aliquid porro a asperiores beatae quas quo incidunt at, cumque minima officiis error eius dignissimos animi ullam unde odit! Nobis aut animi quibusdam molestias libero, facere vel cum atque incidunt esse! Libero ipsam praesentium sit, enim corrupti quia nobis obcaecati nostrum voluptatem totam nulla delectus ipsa facilis optio quis iure unde repudiandae voluptas temporibus, ad veritatis dolorem, culpa maiores. Dicta, quod neque.</p>
            </div>
        </div>
        <div class="content-one" v-if="activeTab==='3' " >
            <div class="title">Phone</div>
            <div class="tab_content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem inventore perspiciatis alias, magni provident nulla recusandae odio consequatur praesentium officia non voluptate voluptatum debitis consequuntur omnis incidunt fuga eaque sit aliquam nemo. Recusandae voluptatibus excepturi, voluptates inventore nulla aliquid porro a asperiores beatae quas quo incidunt at, cumque minima officiis error eius dignissimos animi ullam unde odit! Nobis aut animi quibusdam molestias libero, facere vel cum atque incidunt esse! Libero ipsam praesentium sit, enim corrupti quia nobis obcaecati nostrum voluptatem totam nulla delectus ipsa facilis optio quis iure unde repudiandae voluptas temporibus, ad veritatis dolorem, culpa maiores. Dicta, quod neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem inventore perspiciatis alias, magni provident nulla recusandae odio consequatur praesentium officia non voluptate voluptatum debitis consequuntur omnis incidunt fuga eaque sit aliquam nemo. Recusandae voluptatibus excepturi, voluptates inventore nulla aliquid porro a asperiores beatae quas quo incidunt at, cumque minima officiis error eius dignissimos animi ullam unde odit! Nobis aut animi quibusdam molestias libero, facere vel cum atque incidunt esse! Libero ipsam praesentium sit, enim corrupti quia nobis obcaecati nostrum voluptatem totam nulla delectus ipsa facilis optio quis iure unde repudiandae voluptas temporibus, ad veritatis dolorem, culpa maiores. Dicta, quod neque.</p>
            </div>
        </div>







        <div class="content-one" v-if="activeTab==='4' " >
            <div class="title">Smart Phone</div>
            <div class="tab_content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem inventore perspiciatis alias, magni provident nulla recusandae odio consequatur praesentium officia non voluptate voluptatum debitis consequuntur omnis incidunt fuga eaque sit aliquam nemo. Recusandae voluptatibus excepturi, voluptates inventore nulla aliquid porro a asperiores beatae quas quo incidunt at, cumque minima officiis error eius dignissimos animi ullam unde odit! Nobis aut animi quibusdam molestias libero, facere vel cum atque incidunt esse! Libero ipsam praesentium sit, enim corrupti quia nobis obcaecati nostrum voluptatem totam nulla delectus ipsa facilis optio quis iure unde repudiandae voluptas temporibus, ad veritatis dolorem, culpa maiores. Dicta, quod neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem inventore perspiciatis alias, magni provident nulla recusandae odio consequatur praesentium officia non voluptate voluptatum debitis consequuntur omnis incidunt fuga eaque sit aliquam nemo. Recusandae voluptatibus excepturi, voluptates inventore nulla aliquid porro a asperiores beatae quas quo incidunt at, cumque minima officiis error eius dignissimos animi ullam unde odit! Nobis aut animi quibusdam molestias libero, facere vel cum atque incidunt esse! Libero ipsam praesentium sit, enim corrupti quia nobis obcaecati nostrum voluptatem totam nulla delectus ipsa facilis optio quis iure unde repudiandae voluptas temporibus, ad veritatis dolorem, culpa maiores. Dicta, quod neque.</p>
            </div>
        </div>





    </div>
</div>
</div>





<!-- Mobile end -->

<!-- Dekstop end -->











<div class="container hidden-xs hidden-sm" style="margin-top:20px;padding-right: 0px;padding-left: 0px;width: 100%;" id="xare">


<div class="wrapper">
    
    <div class="row" id="colj">
        <div class="col-12" id="colj">
            <div class="tabs">
                <ul>
                    <li @click="activeTab = '1'" :class="[activeTab==='1'?'active':'']" style="color:#028f68;">
                        <a @click="activeTab = '1'" :class="[activeTab==='1'?'active':'']" style="color:#028f68;" >Характеристика</a>
                        
                    </li>
                    <li @click="activeTab = '2'" :class="[activeTab==='2'?'active':'']" style="color:#028f68;">
                        
                        <a @click="activeTab = '2'" :class="[activeTab==='2'?'active':'']" style="color:#028f68;">О товаре</a>
                    </li>
                    <li @click="activeTab = '3'" :class="[activeTab==='3'?'active':'']" style="color:#028f68;">
                        
                        <a @click="activeTab = '3'" :class="[activeTab==='3'?'active':'']" style="color:#028f68;">Отзывы</a>
                    </li>
                    <li @click="activeTab = '4'" :class="[activeTab==='4'?'active':'']" style="color:#028f68;">
                        
                        <a @click="activeTab = '4'" :class="[activeTab==='4'?'active':'']" style="color:#028f68;">Наличие товара</a>
                    </li>
                </ul>
            </div>
            
        </div>
        
    </div>

    

    <div class="content" style="margin-top: -24px;">
        
        <div class="content-one" v-if="activeTab==='1' " >
           
            <div class="tab_content">
                <div class="row">









                    <div class="col-md-12" id="colj">
                        <div class="col-md-6" id="coljNo">
                            <h3 style="color:rgb(2, 143, 104); font-family: Сomic Sans MS Cursive"><b>Основные характеристики</b></h3>
                            <ul class="botted-1">
                                <li class="botted" style="">
                                    <span>Серия</span>
                                    <span>iPhone 11</span>
                                </li>
                                <li class="botted">
                                    <span>Модельный год</span>
                                    <span>2019</span>
                                </li>

                            </ul>
                        </div>
                        <div class="col-md-6" id="coljNo">
                            <h3 style="color:rgb(2, 143, 104); font-family: Сomic Sans MS Cursive"><b>Дисплей</b></h3>
                            <ul class="botted-1">
                                <li class="botted" style="">
                                    <span>Число пикселей на дюйм (PPI)</span>
                                    <span>326</span>
                                </li>
                                <li class="botted">
                                    <span>Разрешение дисплея</span>
                                    <span>828x1792</span>
                                </li>
                                <li class="botted">
                                    <span>Диагональ дисплея, дюйм</span>
                                    <span>6.1</span>
                                </li>
                                <li class="botted">
                                    <span>Тип матрицы</span>
                                    <span>Liquid Retina HD</span>
                                </li>

                            </ul>
                        </div>
                        
                    </div>














                    <div class="col-md-12" style="margin-top: 30px;" id="colj">
                        <div class="col-md-6" id="coljNo">
                            <h3 style="color:rgb(2, 143, 104); font-family: Сomic Sans MS Cursive"><b>Процессор</b></h3>
                            <ul class="botted-1">
                                <li class="botted" style="">
                                    <span>Производитель процессора</span>
                                    <span>Apple</span>
                                </li>
                                <li class="botted">
                                    <span>Операционная система</span>
                                    <span>iOS 13</span>
                                </li>
                                <li class="botted">
                                    <span>Модель процессора</span>
                                    <span>A13 Bionic</span>
                                </li>

                                


                            </ul>
                        </div>
                        <div class="col-md-6" id="coljNo">
                            <h3 style="color:rgb(2, 143, 104); font-family: Сomic Sans MS Cursive"><b>Память</b></h3>
                            <ul class="botted-1">
                                <li class="botted" style="">
                                    <span>Максимальный объем поддерживаемой карты памяти</span>
                                    <span>Не поддерживает</span>
                                </li>
                                <li class="botted">
                                    <span>Объем оперативной памяти</span>
                                    <span>4</span>
                                </li>
                                <li class="botted">
                                    <span>Объём встроенной памяти</span>
                                    <span>64</span>
                                </li>
                                

                            </ul>
                        </div>
                        
                    </div>


                    <div class="col-md-12" style="margin-top: 30px;" id="colj">
                        <div class="col-md-6" id="coljNo">
                            <h3 style="color:rgb(2, 143, 104); font-family: Сomic Sans MS Cursive"><b>SIM-карта</b></h3>
                            <ul class="botted-1">
                                <li class="botted" style="">
                                    <span>Количество SIM-карт</span>
                                    <span>1</span>
                                </li>
                                <li class="botted">
                                    <span>Размер SIM-карт</span>
                                    <span>Nano-SIM</span>
                                </li>
                                

                                


                            </ul>
                        </div>



                        <div class="col-md-6"  id="coljNo">
                            <h3 style="color:rgb(2, 143, 104); font-family: Сomic Sans MS Cursive"><b>Основная камера</b></h3>
                            <ul class="botted-1">
                                <li class="botted" style="">
                                    <span>Встроенная вспышка</span>
                                    <span>Да</span>
                                </li>
                                <li class="botted">
                                    <span>Количество мегапикселей</span>
                                    <span>12</span>
                                </li>
                                <li class="botted">
                                    <span>Дополнительно</span>
                                    <span class="botted-2">Портретный режим, Режим серийной съемки, Пятилинзовый объектив, Шестилинзовый объектив, Ночной режим, Панорама, Устранение эффекта красных глаз, Контроль экспозиции, Цифровой зум 5x, Эффект боке, Оптический зум 2x, Геотегинг</span>
                                </li>

                                <li class="botted">
                                    <span>Светосила второго модуля</span>
                                    <span class="botted-2">f/2.4</span>
                                </li>
                                <li class="botted">
                                    <span>Автофокус</span>
                                    <span class="botted-2">Да</span>
                                </li>
                                <li class="botted">
                                    <span>Светосила</span>
                                    <span class="botted-2">f/1.8</span>
                                </li>
                                <li class="botted">
                                    <span>Тип первого модуля</span>
                                    <span class="botted-2">Широкоугольный объектив</span>
                                </li>

                                <li class="botted">
                                    <span>Запись видео камеры</span>
                                    <span class="botted-2">4K</span>
                                </li>
                                <li class="botted">
                                    <span>Тип второго модуля</span>
                                    <span class="botted-2">Ультраширокоугольный</span>
                                </li>
                                <li class="botted">
                                    <span>Размер пикселя, мкм</span>
                                    <span class="botted-2">1.4</span>
                                </li>
                                <li class="botted">
                                    <span>Стабилизация</span>
                                    <span class="botted-2">Да</span>
                                </li>

                                <li class="botted">
                                    <span>Количество мегапикселей второго модуля</span>
                                    <span class="botted-2">12</span>
                                </li>
                                

                            </ul>
                        </div>



                    </div>










                    <div class="col-md-12" style="margin-top: 30px;" id="colj">
                        <div class="col-md-6" id="coljNo">
                            <h3 style="color:rgb(2, 143, 104); font-family: Сomic Sans MS Cursive"><b>Фронтальная камераа</b></h3>
                            <ul class="botted-1">
                                <li class="botted" style="">
                                    <span>Светосила</span>
                                    <span>f/2.2</span>
                                </li>
                                <li class="botted">
                                    <span>Автофокус</span>
                                    <span>Да</span>
                                </li>
                                
                                <li class="botted" style="">
                                    <span>Стабилизация</span>
                                    <span>Да</span>
                                </li>
                                <li class="botted">
                                    <span>Запись видео камеры</span>
                                    <span>4K</span>
                                </li>


                                <li class="botted" style="">
                                    <span>Дополнительно</span>
                                    <span class="botted-2">HDR, Распознавание лиц, Вспышка дисплея, Режим замедленной съёмки, Портретный режим</span>
                                </li>

                                <li class="botted">
                                    <span>Количество мегапикселей</span>
                                    <span>12</span>
                                </li>

                                


                            </ul>
                        </div>



                        <div class="col-md-6" id="coljNo">
                            <h3 style="color:rgb(2, 143, 104); font-family: Сomic Sans MS Cursive"><b>Связь</b></h3>
                            <ul class="botted-1">
                                <li class="botted" style="">
                                    <span>Навигация</span>
                                    <span>Глонасс, GPS, Galileo</span>
                                </li>
                                <li class="botted">
                                    <span>Разъёмы</span>
                                    <span>Lightning</span>
                                </li>
                                <li class="botted">
                                    <span>Интерфейсы</span>
                                    <span class="botted-2">NFC, Bluetooth, Wi-Fi</span>
                                </li>
                                <li class="botted">
                                    <span>Стандарт связи</span>
                                    <span>2G, 4G (LTE), 3G (WCDMA/UMTS)</span>
                                </li>
                                

                            </ul>
                        </div>



                    </div>


























                    <div class="col-md-12" style="margin-top: 30px;" id="colj">
                        <div class="col-md-6" id="coljNo">
                            <h3 style="color:rgb(2, 143, 104); font-family: Сomic Sans MS Cursive"><b>Фронтальная камераа</b></h3>
                            <ul class="botted-1">
                                <li class="botted" style="">
                                    <span>Светосила</span>
                                    <span>f/2.2</span>
                                </li>
                                <li class="botted">
                                    <span>Автофокус</span>
                                    <span>Да</span>
                                </li>
                                
                                <li class="botted" style="">
                                    <span>Стабилизация</span>
                                    <span>Да</span>
                                </li>
                                <li class="botted">
                                    <span>Запись видео камеры</span>
                                    <span>4K</span>
                                </li>


                                <li class="botted" style="">
                                    <span>Дополнительно</span>
                                    <span class="botted-2">HDR, Распознавание лиц, Вспышка дисплея, Режим замедленной съёмки, Портретный режим</span>
                                </li>

                                <li class="botted">
                                    <span>Количество мегапикселей</span>
                                    <span>12</span>
                                </li>

                                


                            </ul>
                        </div>



                        <div class="col-md-6" id="coljNo">
                            <h3 style="color:rgb(2, 143, 104); font-family: Сomic Sans MS Cursive"><b>Связь</b></h3>
                            <ul class="botted-1">
                                <li class="botted" style="">
                                    <span>Навигация</span>
                                    <span>Глонасс, GPS, Galileo</span>
                                </li>
                                <li class="botted">
                                    <span>Разъёмы</span>
                                    <span>Lightning</span>
                                </li>
                                <li class="botted">
                                    <span>Интерфейсы</span>
                                    <span class="botted-2">NFC, Bluetooth, Wi-Fi</span>
                                </li>
                                <li class="botted">
                                    <span>Стандарт связи</span>
                                    <span>2G, 4G (LTE), 3G (WCDMA/UMTS)</span>
                                </li>
                                

                            </ul>
                        </div>



                    </div>


















                      <div class="col-md-12" style="margin-top: 30px;" id="colj">
                        <div class="col-md-6" id="coljNo">
                            <h3 style="color:rgb(2, 143, 104); font-family: Сomic Sans MS Cursive"><b> Питание</b></h3>
                            <ul class="botted-1">
                                <li class="botted" style="">
                                    <span>Время работы в режиме разговора, ч</span>
                                    <span>17</span>
                                </li>
                                <li class="botted">
                                    <span>Возможность беспроводной зарядки</span>
                                    <span>Да</span>
                                </li>
                                
                                <li class="botted" style="">
                                    <span>Ёмкость аккумулятора, mAh</span>
                                    <span>3110</span>
                                </li>
                                <li class="botted">
                                    <span>Быстрая зарядка</span>
                                    <span >Да</span>
                                </li>


                                
                                


                            </ul>
                        </div>



                        <div class="col-md-6" id="coljNo">
                            <h3 style="color:rgb(2, 143, 104); font-family: Сomic Sans MS Cursive"><b>Функции и особенности</b></h3>
                            <ul class="botted-1">
                                <li class="botted" style="">
                                    <span>Материал корпуса</span>
                                    <span class="botted-2">Металл, Стекло</span>
                                </li>
                                <li class="botted">
                                    <span>Особенности</span>
                                    <span class="botted-2">Двойная камера, Стереодинамики, Пыле- /влагозащита, Смартфон с 4G</span>
                                </li>
                                <li class="botted">
                                    <span>Стандарт защиты от пыли и влаги</span>
                                    <span class="botted-2">IP68</span>
                                </li>
                                <li class="botted">
                                    <span>Датчики</span>
                                    <span class="botted-2">Гироскоп, ID лица, Датчик освещенности, Компас, Датчик приближения, Акселерометр, Барометр</span>
                                </li>
                                

                            </ul>
                        </div>



                    </div>








                    <div class="col-md-12" style="margin-top: 30px;" id="colj">
                        <div class="col-md-6" id="coljNo"> 
                            
                            <h3 style="color:rgb(2, 143, 104); font-family: Сomic Sans MS Cursive"><b>Габариты</b></h3>
                            <ul class="botted-1">
                                <li class="botted" style="">
                                    <span>Толщина, мм </span>
                                    <span>8.3</span>
                                </li>
                                <li class="botted">
                                    <span>Ширина, мм</span>
                                    <span>75.7</span>
                                </li>
                                
                                <li class="botted" style="">
                                    <span>Вес, гр </span>
                                    <span>194</span>
                                </li>
                                <li class="botted">
                                    <span>Высота, мм</span>
                                    <span >150.9</span>
                                </li>


                                
                                


                            </ul>
                        </div>



                        <div class="col-md-6" id="coljNo">
                            
                        </div>



                    </div>























                    


























                    
                </div>
            </div>
        </div>





        <div class="content-one" v-if="activeTab==='2' " >
            <div class="title">Letter</div>
            <div class="tab_content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem inventore perspiciatis alias, magni provident nulla recusandae odio consequatur praesentium officia non voluptate voluptatum debitis consequuntur omnis incidunt fuga eaque sit aliquam nemo. Recusandae voluptatibus excepturi, voluptates inventore nulla aliquid porro a asperiores beatae quas quo incidunt at, cumque minima officiis error eius dignissimos animi ullam unde odit! Nobis aut animi quibusdam molestias libero, facere vel cum atque incidunt esse! Libero ipsam praesentium sit, enim corrupti quia nobis obcaecati nostrum voluptatem totam nulla delectus ipsa facilis optio quis iure unde repudiandae voluptas temporibus, ad veritatis dolorem, culpa maiores. Dicta, quod neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem inventore perspiciatis alias, magni provident nulla recusandae odio consequatur praesentium officia non voluptate voluptatum debitis consequuntur omnis incidunt fuga eaque sit aliquam nemo. Recusandae voluptatibus excepturi, voluptates inventore nulla aliquid porro a asperiores beatae quas quo incidunt at, cumque minima officiis error eius dignissimos animi ullam unde odit! Nobis aut animi quibusdam molestias libero, facere vel cum atque incidunt esse! Libero ipsam praesentium sit, enim corrupti quia nobis obcaecati nostrum voluptatem totam nulla delectus ipsa facilis optio quis iure unde repudiandae voluptas temporibus, ad veritatis dolorem, culpa maiores. Dicta, quod neque.</p>
            </div>
        </div>
        <div class="content-one" v-if="activeTab==='3' " >
            <div class="title">Phone</div>
            <div class="tab_content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem inventore perspiciatis alias, magni provident nulla recusandae odio consequatur praesentium officia non voluptate voluptatum debitis consequuntur omnis incidunt fuga eaque sit aliquam nemo. Recusandae voluptatibus excepturi, voluptates inventore nulla aliquid porro a asperiores beatae quas quo incidunt at, cumque minima officiis error eius dignissimos animi ullam unde odit! Nobis aut animi quibusdam molestias libero, facere vel cum atque incidunt esse! Libero ipsam praesentium sit, enim corrupti quia nobis obcaecati nostrum voluptatem totam nulla delectus ipsa facilis optio quis iure unde repudiandae voluptas temporibus, ad veritatis dolorem, culpa maiores. Dicta, quod neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem inventore perspiciatis alias, magni provident nulla recusandae odio consequatur praesentium officia non voluptate voluptatum debitis consequuntur omnis incidunt fuga eaque sit aliquam nemo. Recusandae voluptatibus excepturi, voluptates inventore nulla aliquid porro a asperiores beatae quas quo incidunt at, cumque minima officiis error eius dignissimos animi ullam unde odit! Nobis aut animi quibusdam molestias libero, facere vel cum atque incidunt esse! Libero ipsam praesentium sit, enim corrupti quia nobis obcaecati nostrum voluptatem totam nulla delectus ipsa facilis optio quis iure unde repudiandae voluptas temporibus, ad veritatis dolorem, culpa maiores. Dicta, quod neque.</p>
            </div>
        </div>







        <div class="content-one" v-if="activeTab==='4' " >
            <div class="title">Smart Phone</div>
            <div class="tab_content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem inventore perspiciatis alias, magni provident nulla recusandae odio consequatur praesentium officia non voluptate voluptatum debitis consequuntur omnis incidunt fuga eaque sit aliquam nemo. Recusandae voluptatibus excepturi, voluptates inventore nulla aliquid porro a asperiores beatae quas quo incidunt at, cumque minima officiis error eius dignissimos animi ullam unde odit! Nobis aut animi quibusdam molestias libero, facere vel cum atque incidunt esse! Libero ipsam praesentium sit, enim corrupti quia nobis obcaecati nostrum voluptatem totam nulla delectus ipsa facilis optio quis iure unde repudiandae voluptas temporibus, ad veritatis dolorem, culpa maiores. Dicta, quod neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem inventore perspiciatis alias, magni provident nulla recusandae odio consequatur praesentium officia non voluptate voluptatum debitis consequuntur omnis incidunt fuga eaque sit aliquam nemo. Recusandae voluptatibus excepturi, voluptates inventore nulla aliquid porro a asperiores beatae quas quo incidunt at, cumque minima officiis error eius dignissimos animi ullam unde odit! Nobis aut animi quibusdam molestias libero, facere vel cum atque incidunt esse! Libero ipsam praesentium sit, enim corrupti quia nobis obcaecati nostrum voluptatem totam nulla delectus ipsa facilis optio quis iure unde repudiandae voluptas temporibus, ad veritatis dolorem, culpa maiores. Dicta, quod neque.</p>
            </div>
        </div>





    </div>
</div>
</div>























































































    
  </div>
</template>










<script>


  import {mapActions} from 'vuex'
// import axios from 'axios'
 

  export default {
    name: 'Single',
    props:['id'],
    data() {
          return {
              mds: {},
              ssli:{},
              activeTab: "1",
              mdsID:'',
              mdID:2,
              userID:2
              

              
          }
      },
      created() {
          this.loadShop()
      },
      methods: {
         ...mapActions([
       
            "addItemToCart","addToLike"



          ]),
          async loadShop() {
              this.mds = await fetch(
                  `${this.$store.getters.getServerUrl}/mds/${this.id}`
              ).then(response => response.json())
              console.log(this.mds)
              console.log(this.id)
              this.ssli=(this.mds.img1)
              this.mdsID=(this.id)
              console.log(this.mdsID)
          },
    
          slid(){
            this.ssli=(this.mds.img1)

          },
          slid1(){
            this.ssli=(this.mds.img2)

          },
          slid2(){
            this.ssli=(this.mds.img3)

          },
          slid3(){
            this.ssli=(this.mds.img4)

          },
          slid4(){
            this.ssli=(this.mds.img5)

          },
          slid5(){
            this.ssli=(this.mds.img6)

          },
          isActive (menuItem) {
            return this.activeItem === menuItem
          },
          setActive (menuItem) {
            this.activeItem = menuItem
          },
          handleClick(newTab) {
            this.currentTab = newTab;
          },
          productLike(){
            this.$store.dispatch('storeLike');            
            return;
          },
          //likeADD(){
          //  axios
          //  .post('http://127.0.0.1:8000/api/v1/customer/like/create', { headers: { Authorization: 'Bearer '+ "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ0MDk0OTI5LCJqdGkiOiJkY2E1ZWVjMjA0Yzk0ODE1YWI2NjU0M2Q4MjAzMWZiZiIsInVzZXJfaWQiOjJ9.3IWsVqUVwaMXmEGe19rmR0AIWmH75cJxfGzVerWYWYk" } })
          //  .then(response=>{this.mdID=response.data.like,this.userID=response.data.likeCustomer} )
         // }


          
          





      }
    
  }
</script>









<style scoped>
#colj{
    padding-right: 0px;padding-left: 0px;width: 100%;
}
#coljNo{
    padding: 5px;
    width: 100%;
}
#xareHover:hover{
    color: rgb(2, 143, 104);
}
#cartLike{
    color: rgb(2, 143, 104);
}
#cartLike:hover{
    color: red;
}
#cartButton{
    border: solid green 1px;
    border-radius: 20px;
    padding: 10px;
    color: white;
    background-color: rgb(2, 143, 104);

}
#cartButton:hover{
    border: solid green 1px;
    border-radius: 20px;
    padding: 10px;
    color: black;
    background-color: white;

}
body {
  padding: 20px 0;
}
#cont{
  background-color:white;
  margin-top:20px;


}
#col2{

  width:62px;
  height:62px;
  margin:0px 10px;
}
#col2:hover{
  border:solid black 1px;
}
#col12{
  height:550px;
  width:100%;
  

}

.img-slider{
  width: 100%;
  height: 100px;
  padding-left:  0px;

}
.col-md-2{
  padding: 1px;
}
*{
    margin:0;
    padding:0;
}

body{
    font:15px/1.3 'Open Sans', sans-serif;
    color: #5e5b64;
    text-align:center;
}



a:hover{
    text-decoration:none;
}

section, footer, header, aside, nav{
    display: block;
}

/*-------------------------
    The menu
--------------------------*/

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
    background: rgba(205, 214, 219, 0.3);
    position: relative;
    overflow: hidden;
    height: 70px;
    
   
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


.default-tabs {
  position: relative;
  margin: 0 auto;
  &__item {
    display: inline-block;
    margin: 0 5px;
    padding: 10px;
    padding-bottom: 8px;
    font-size: 16px;
    letter-spacing: 0.8px;
    color: gray;
    text-decoration: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 0.25s;
    &_active {
      color: black;
    }
    &:hover {
      border-bottom: 2px solid gray;
      color: black;
    }
    &:focus {
      outline: none;
      border-bottom: 2px solid gray;
      color: black;
    }
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &__active-line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: black;
    transition: transform 0.4s ease, width 0.4s ease;
  }
}
.ent {
  margin-top: 30px;
  font-size: 20px;
}


*{
    list-style: none;
    
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}



.tabs ul{
    display: flex;
    background: white;
    width: 100%;
    
    margin-bottom: 25px;
}

.tabs ul li{
    width: 100%;
    padding: 15px;
    border-right: 1px solid #dddddd;
    text-align: center;
    color: #3b3b3b;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 3px;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
}

.tabs ul li .icon{
    font-size: 20px;
    margin-right: 5px;
    vertical-align: middle;
}

.tabs ul li:last-child{
    border-right: 0px;
}

.tabs ul li:before{
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #028f68;
    opacity: 0;
    transition: all 0.2s ease;
}

.tabs ul li:hover,
.tabs ul li.active{
    background: #e8f5f1;
    color: #028f68;
}

.tabs ul li:hover:before,
.tabs ul li.active:before{
    opacity: 1;
}

.content{
    background: #fbfbfb;
    border: 1px solid #dddddd;
    border-radius: 5px;
    padding: 20px;
}

.tab_wrap .title{
    font-size: 20px;
    margin-bottom: 15px;
    font-weight: 600;
}

.tab_wrap .tab_content p{
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 10px;
}


        #content-wrapper{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }

        .column{
            width: 500px;
            

        }

        #featured{
            max-width: 500px;
            max-height: 600px;
            object-fit: cover;
            cursor: pointer;
            

        }



        .thumbnail{
            object-fit: cover;
            max-width: 180px;
            max-height: 100px;
            cursor: pointer;
            opacity: 0.5;
            margin: 5px;
            

        }

        .thumbnail:hover{
            opacity:1;
        }

        .active{
            opacity: 1;
        }

        #slide-wrapper{
            max-width: 500px;
            display: flex;
            min-height: 100px;
            align-items: center;
        }

        #slider{
            width: 440px;
            display: flex;
            flex-wrap: nowrap;
            overflow-x: hidden;

        }

        #slider{
            width: 440px;
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;


        }

        #slider::-webkit-scrollbar {
            width: 8px;

        }

        #slider::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);

        }
         
        #slider::-webkit-scrollbar-thumb {
          background-color: black;
          outline: 1px solid slategrey;
           border-radius: 100px;

        }

        #slider::-webkit-scrollbar-thumb:hover{
            background-color: black;
        }

        

        .arrow{
            width: 30px;
            height: 30px;
            cursor: pointer;
            transition: .3s;
        }

        .arrow:hover{
            opacity: .5;
            width: 35px;
            height: 35px;
        }
        .botted{
            justify-content: space-between;display: flex;border-bottom: dotted 1px #D3D3D3;margin-top: 10px;font-size: 12px;
        }
        .botted-1{
            margin-top: 10px;
        }
        .botted-2{
            max-width: 60%;
        }
        .rcenter{
            font-family: MuseoSansCyrl,sans-serif;
        }

</style>

