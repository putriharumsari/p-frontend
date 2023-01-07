<template>
  <div class="background-image"></div>
  <div class="hello">
    <h1>{{ msg }}</h1>
<!--    <h1>&#x1F331;</h1> -->
<!--    <span style='font-size:100px;'>&#128154;</span> -->
  </div>
  <body>
  <section class="footer">
    <ul class="list">
      <li>
        <router-link class="home" to="/">Home</router-link>
      </li>
      <li>
        <router-link class="about" to="/about">About</router-link>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
    <p class="copyright"></p>
    <h6>&copy; You Grow</h6>
  </section>
  </body>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
/*.background-image {
  background-image: url("../assets/img2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}*/
body {
  font-family: 'Segoe UI';
  font-weight: 400;
}
.footer {
  margin-top: 30vh;
  padding: 40px 0;
}
.footer .social {
  text-align: center;
  padding-bottom: 25px;
  color:#4b4c4d;
}
.footer .social a {
  font-size: 20px;
  color:inherit;
  width: 40px;
  height: 40px;
  line-height: 38px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  margin: 0 8px;
  opacity: 0.75;
}
.footer .social:hover {
  opacity: 0.9;
}
.footer ul {
  margin-top: 0;
  padding: 0;
  list-style: none;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 0;
  text-align: center;
}
.footer ul li a {
  color: inherit;
  text-decoration: none;
  opacity: 0.8;
}
.footer ul li {
  display: inline-block;
  padding: 0 15px;
}
.footer ul li a:hover {
  opacity: 1;
}
.footer .copyright {
  margin-top: 15px;
  text-align: center;
  font-size: 13px;
  color: #aaaa;
  opacity: 15%;
}
</style>
