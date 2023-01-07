<template>
<body>
<section class="main swiper mySwiper">
  <div class="wrapper swiper-wrapper">
    <div class="slide swiper-slide">
      <img src="../assets/a.jpg" alt="" class="image" />
      <div class="image-data">
        <span class="text"><em>plant in the right season</em></span>
        <h2>
          we help you find <br />
          your suitable plants
        </h2>
<!--        <a href="#" class="button">Find more</a>-->
        <router-link class="button" to="/findmore">Find more</router-link>
      </div>
    </div>
  </div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-pagination"></div>
  <HelloWorld />
</section>
  </body>
</template>
<script src="">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
h2 {
  font-family: Dubai;
}
.button {
  background-color: #232836;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.main {
  height: 100vh;
  width: 100%;
}
.wrapper,
.slide {
  position: relative;
  width: 100%;
  height: 100%;
}
.slide {
  overflow: hidden;
}
.slide::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
}
.slide .image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.slide .image-data {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  z-index: 100;
}
.image-data span.text {
  font-size: 14px;
  font-weight: 400;
  color: #fff;
}
.image-data h2 {
  font-size: 45px;
  font-weight: 600;
  color: #fff;
}
a.button {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 25px;
  color: #333;
  background: #fff;
  text-decoration: none;
  margin-top: 25px;
  transition: all 0.3s ease;
}
.button:hover {
  color: #fff;
  background-color: #232836;
}

/* swiper button css */
.nav-btn {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
}
.nav-btn:hover {
  background: rgba(255, 255, 255, 0.4);
}
.swiper-button-next {
  right: 50px;
}
.swiper-button-prev {
  left: 50px;
}
.nav-btn::before,
.nav-btn::after {
  font-size: 25px;
  color: #fff;
}
.swiper-pagination-bullet {
  opacity: 1;
  height: 12px;
  width: 12px;
  background-color: #fff;
  visibility: hidden;
}
.swiper-pagination-bullet-active {
  border: 2px solid #fff;
  background-color: #c87e4f;
}

@media screen and (max-width: 768px) {
  .nav-btn {
    visibility: hidden;
  }
  .swiper-pagination-bullet {
    visibility: visible;
  }
}
:root{
  --white-color: #fff;
  --dark-color: #222;
  --body-bg-color: #fff;
  --section-bg-color: #202834;
  --navigation-item-hover-color: #3b5378;

  --text-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  --box-shadow: 0 5px 25px rgb(0 0 0 / 20%);

  --scroll-bar-color: #fff;
  --scroll-thumb-color: #282f4e;
  --scroll-thumb-hover-color: #454f6b;
}

/*======= Scroll bar =======*/
::-webkit-scrollbar{
  width: 11px;
  background: var(--scroll-bar-color);
}

::-webkit-scrollbar-thumb{
  width: 100%;
  background: var(--scroll-thumb-color);
  border-radius: 2em;
}

::-webkit-scrollbar-thumb:hover{
  background: var(--scroll-thumb-hover-color);
}

/*======= Main CSS =======*/
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body{
  background: var(--body-bg-color);
}

section{
  position: relative;
}

.section{
  color: var(--white-color);
  background: var(--section-bg-color);
  padding: 35px 200px;
  transition: 0.3s ease;
}

/*======= Header =======*/
header{
  z-index: 999;
  position: fixed;
  width: 100%;
  height: calc(5rem + 1rem);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  transition: 0.5s ease;
  transition-property: height, background;
}

header.sticky{
  height: calc(2.5rem + 1rem);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

header .nav-bar{
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 200px;
  transition: 0.3s ease;
}

.nav-close-btn, .nav-menu-btn{
  display: none;
}

.nav-bar .logo{
  color: var(--white-color);
  font-size: 1.8em;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  text-shadow: var(--text-shadow);
}

.navigation .nav-items a{
  color: var(--white-color);
  font-size: 1em;
  text-decoration: none;
  text-shadow: var(--text-shadow);
}

.navigation .nav-items a i{
  display: none;
}

.navigation .nav-items a:not(:last-child){
  margin-right: 45px;
}

/*======= Home =======*/
.home{
  min-height: 100vh;
}

.home:before{
  z-index: 888;
  content: '';
  position: absolute;
  width: 100%;
  height: 50px;
  bottom: 0;
  left: 0;
  background: linear-gradient(transparent, var(--section-bg-color));
}

/*======= Background slider =======*/
.bg-slider{
  z-index: 777;
  position: relative;
  width: 100%;
  min-height: 100vh;
}

.bg-slider .swiper-slide{
  position: relative;
  width: 100%;
  height: 100vh;
}

.bg-slider .swiper-slide img{
  width: 100%;
  height: 100vh;
  object-fit: cover;
  background-position: center;
  background-size: cover;
  pointer-events: none;
}

.swiper-slide .text-content{
  position: absolute;
  top: 25%;
  color: var(--white-color);
  margin: 0 200px;
  transition: 0.3s ease;
}

.swiper-slide .text-content .title{
  font-size: 4em;
  font-weight: 700;
  text-shadow: var(--text-shadow);
  margin-bottom: 20px;
  transform: translateY(-50px);
  opacity: 0;
}

.swiper-slide-active .text-content .title{
  transform: translateY(0);
  opacity: 1;
  transition: 1s ease;
  transition-delay: 0.3s;
  transition-property: transform, opacity;
}

.swiper-slide .text-content .title span{
  font-size: 0.3em;
  font-weight: 300;
}

.swiper-slide .text-content p{
  max-width: 700px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  text-shadow: var(--text-shadow);
  padding: 20px;
  border-radius: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: var(--box-shadow);
  transform: translateX(-80px);
  opacity: 0;
}

.swiper-slide-active .text-content p{
  transform: translateX(0);
  opacity: 1;
  transition: 1s ease;
  transition-delay: 0.3s;
  transition-property: transform, opacity;
}

.swiper-slide .text-content .read-btn{
  border: none;
  outline: none;
  background: var(--white-color);
  color: var(--dark-color);
  font-size: 1em;
  font-weight: 500;
  padding: 8px 25px;
  display: flex;
  align-items: center;
  margin-top: 40px;
  border-radius: 10px;
  cursor: pointer;
  transform: translateX(50px);
  opacity: 0;
}

.swiper-slide-active .text-content .read-btn{
  transform: translateX(0);
  opacity: 1;
  transition: 1s ease;
  transition-delay: 0.3s;
  transition-property: transform, opacity;
}

.swiper-slide .text-content .read-btn i{
  font-size: 1.6em;
  transition: 0.3s ease;
}

.swiper-slide .text-content .read-btn:hover i{
  transform: translateX(5px);
}

.dark-layer:before{
  content: '';
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
}

.bg-slider-thumbs{
  z-index: 777;
  position: absolute;
  bottom: 7em;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.3s ease;
}

.thumbs-container{
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 10px 3px;
  border-radius: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: var(--box-shadow);
}

.thumbs-container img{
  width: 50px;
  height: 35px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
}

.swiper-slide-thumb-active{
  border: 1px solid var(--white-color);
}

/*======= Media icons =======*/
.media-icons{
  z-index: 999;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 90px;
}

.media-icons a{
  color: var(--white-color);
  font-size: 1.7em;
  margin: 10px 0;
}

/*======= About section =======*/
.about h2{
  font-size: 3em;
  font-weight: 600;
}

.about p{
  margin: 25px 0;
}

/*======= Media queries (max-width: 1100px) =======*/
@media screen and (max-width: 1100px){
  header .nav-bar{
    padding: 0 50px;
  }

  .section{
    padding: 25px 50px;
  }

  .media-icons{
    right: 0;
    margin-right: 50px;
  }

  .swiper-slide .text-content{
    margin: 0 120px 0 50px;
  }

  .bg-slider-thumbs{
    bottom: 3em;
  }
}

/*======= Media queries (max-width: 785px) =======*/
@media screen and (max-width: 785px){
  header .nav-bar{
    padding: 25px 20px;
  }

  .section{
    padding: 25px 20px;
  }

  .media-icons{
    margin-right: 20px;
  }

  .media-icons a{
    font-size: 1.5em;
  }

  .swiper-slide .text-content{
    margin: 0 70px 0 20px;
  }

  .swiper-slide .text-content .title{
    font-size: 3em;
  }

  .swiper-slide .text-content .title span{
    font-size: 0.35em;
  }

  .swiper-slide .text-content p{
    font-size: 0.9em;
  }

  /*======= Navigation menu =======*/
  .nav-menu-btn{
    display: block;
    color: var(--white-color);
    font-size: 1.5em;
    cursor: pointer;
  }

  .nav-close-btn{
    display: block;
    color: var(--dark-color);
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.3em;
    margin: 10px;
    cursor: pointer;
    transition: 0.3s ease;
  }

  .navigation{
    z-index: 99999;
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease;
  }

  .navigation.active{
    visibility: visible;
    opacity: 1;
  }

  .navigation .nav-items{
    position: relative;
    background: var(--white-color);
    width: 400px;
    max-width: 400px;
    display: grid;
    place-content: center;
    margin: 20px;
    padding: 40px;
    border-radius: 20px;
    box-shadow: var(--box-shadow);
    transform: translateY(-200px);
    transition: 0.3s ease;
  }

  .navigation.active .nav-items{
    transform: translateY(0);
  }

  .navigation .nav-items a{
    color: var(--dark-color);
    font-size: 1em;
    margin: 15px 50px;
    transition: 0.3s ease;
  }

  .navigation .nav-items a:hover{
    color: var(--navigation-item-hover-color);
  }

  .navigation .nav-items > a > i{
    display: inline-block;
    font-size: 1.3em;
    margin-right: 5px;
  }

  .swiper-slide .text-content .read-btn{
    font-size: 0.9em;
    padding: 5px 15px;
  }

  /*======= About section =======*/
  .about h2{
    font-size: 2.5em;
  }

  .about p{
    font-size: 0.9em;
  }
}
</style>
