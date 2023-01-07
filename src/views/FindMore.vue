<template>
  <body>
  <section class="about section">
    <h2>When is the best season to plant?</h2>
    <p>When is the best season to plant seeds to ensure you get the best results in your garden? <br />
      To answer this question, it really comes down to what it is you plan on growing. <br />
      So we’ve divided up the seasons to let you know when is the best time of year to plant a range of different vegetables.</p>
    <p></p>
  </section>
  <section class="home">

    <div class="swiper bg-slider">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/winter.jpg" alt="">
          <div class="text-content">
            <h3><mark>Winter can sometimes be tricky for your garden, especially if temperatures get below freezing,
              as this can damage your produce. However, there are still some plants that can survive the colder months.</mark></h3>
            <router-link class="btn btn-outline-dark uil-arrow-right" to="/winter">Winter vegetables</router-link>
          </div>
        </div>
        <div class="swiper-slide dark-layer">
          <img src="../assets/autumn.jpg" alt="">
          <div class="text-content">
            <!--            <h2 class="title">Winter <span>Season</span></h2>-->
            <h3><mark>Autumn can be one of the most beneficial seasons of the year to plant your seeds because
              it’s not too hot or too cold, and rain is steady. When it comes to vegetables, good choices to plant for hearty
              autumn meals include celery, cauliflower, broccoli and broad beans.</mark></h3>
            <router-link class="btn btn-outline-dark uil-arrow-right" to="/autumn">Autumn vegetables</router-link>
          </div>
        </div>
        <div class="swiper-slide dark-layer">
          <img src="../assets/summer.jpg" alt="">
          <div class="text-content">
            <h3><mark>In the summertime, rain is scarce, so it’s best to plant seeds that will thrive
              on long and hot summer days. Unless you plan on planting in the shade under a reticulation
              system, of course! Consider planting tomatoes, zucchini and capsicum in your garden by the
              middle of summer to get the best growth throughout the season.</mark></h3>
            <router-link class="btn btn-outline-dark uil-arrow-right" to="/summer">Summer vegetables</router-link>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="../assets/spring.jpg" alt="">
          <div class="text-content">
            <h3><mark>Spring is the time of year for new life, so you’re right in thinking it’s a good time of year
              to get out into the garden and start planting a new vegetable patch. Some of the best herbs to
              sow at this time of year include basil, dill, mint and parsley. Vegetables and fruit can grow well
              when planted in spring too.</mark></h3>
            <router-link class="btn btn-outline-dark uil-arrow-right" to="/spring">Spring vegetables</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-slider-thumbs">
      <div class="swiper-wrapper thumbs-container">
        <img src="../assets/winter.jpg" class="swiper-slide" alt="">
        <img src="../assets/autumn.jpg" class="swiper-slide" alt="">
        <img src="../assets/summer.jpg" class="swiper-slide" alt="">
        <img src="../assets/spring.jpg" class="swiper-slide" alt="">
      </div>
    </div>
  </section>
  </body>
</template>
<!--  <div class="cardS" style="width: 18rem;">
    <img src="../assets/summer.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Summer</h5>
      <p class="card-text">The hottest days of summer can make your plants fizzle. Have no fear, we’ve rounded up a varieties that can take the heat and look great doing it.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  <div class="cardA" style="width: 18rem;">
    <img src="../assets/autumn.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Autumn</h5>
      <p class="card-text">As the days shorten and become cooler, summer plantings begin to wind down. There are many veggies to plant in autumn, which you can then grow and harvest through winter and even into early spring.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  <div class="cardW" style="width: 18rem;">
    <img src="../assets/winter.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Winter</h5>
      <p class="card-text">After the bounty of summer veggies and fall harvests, winter can feel like a bit of a letdown! The grey skies and icy ground, make everything seem, well...drab. But there are plenty of delicious winter vegetables that bring color and flavor to your family meals.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  <div class="cardSp" style="width: 18rem;">
    <img src="../assets/spring.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Spring</h5>
      <p class="card-text">Ah, spring. The sun is shining, the trees are budding, and most importantly, the ground is thawing. Wondering what to plant in the spring? Here are a few low-maintenance spring vegetables you can raise—even as a beginner.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  <div class="input-box">
    <i class="uil uil-search"></i>
    <input type="text" placeholder="Search here..." />
    <button class="button">Search</button>
  </div>
  &lt;!&ndash; list plants &ndash;&gt;
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-6 g-2">
      <div class="col" v-for="pflanzen in pflanzens" :key="pflanzen.id">
        <div class="card">
          <img :src="getAvatar(pflanzen)" class="card-img-top" :alt="pflanzen.plantName">
          <div class="card-body">
            <h5 class="card-title">{{ pflanzen.plantName }}</h5>
            <p class="card-text">
              {{ pflanzen.anotherName }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>-->

<script>
import axios from 'axios'
export default {
  name: 'Pflanzens',
  data () {
    return {
      pflanzens: []
    }
  },
  methods: {
    getAvatar (pflanzen) {
      if (pflanzen.plantName === 'Brokkoli') {
        return require('../assets/broc.jpg')
      } else if (pflanzen.plantName === 'Knoblauch') {
        return require('../assets/garlic.jpg')
      } else if (pflanzen.plantName === 'Tomaten') {
        return require('../assets/tom1.jpeg')
      } else if (pflanzen.plantName === 'Karotte') {
        return require('../assets/carrot.jpg')
      } else if (pflanzen.plantName === 'Paprika') {
        return require('../assets/pap.jpg')
      } else if (pflanzen.plantName === 'Chilli') {
        return require('../assets/chill.jpg')
      } else if (pflanzen.plantName === 'Spinat') {
        return require('../assets/spinat.jpeg')
      }
    },
    retrievePflanzen () {
      axios.get('http://localhost:8080/api/v1/pflanzens')
        .then(response => {
          this.pflanzens = response.data
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  mounted () {
    this.retrievePflanzen()
  }
}
</script>

<style scoped>
mark {
  background-color: #CACACA;
}
.btn {
  margin-top: 20px;
}
h3 {
  font-family: "Malgun Gothic";
  align-items: center;
  position: center;
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
