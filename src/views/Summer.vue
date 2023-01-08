<template>
  <body>
  <section class="about section">
    <h1>What are the best vegetables to plant in Summer?</h1>
    <p></p>
    <br />
    <div class="tab-content" id="tab-content1">
      <div class="tab-pane fade show active"
           id="tabs-1"
           role="tabpanel"
           aria-labelledby="tab1">
        <div class="row">

          <!-- col md 4-->
          <div class="col-md-4">
            <div class="card mb-3 margin-top-30" style="border: none">
              <img src="../assets/tomato.jpg" class="card-image" height="300" width="400" alt="broccoli" style="position: relative">
<!--              <h3>Tomatoes</h3>
              <p>Tomatoes generally need a long growing season with plenty of heat and full sun, at least 6 to 8 hours a day.
                Some patio and bush tomatoes have shorter growing seasons. As a rule of thumb, it is best to plant tomatoes
                as soon as the weather warms in spring to ensure a bumper crop by August. Tomatoes thrive when planted with
                marigolds, basil and chives, among other companion plants.</p>-->
            </div>
          </div>
          <!-- col md 8 -->
          <div class="col-md-8">
            <h3>Tomatoes</h3>
            <p>Tomatoes generally need a long growing season with plenty of heat and full sun, at least 6 to 8 hours a day. Some patio and bush tomatoes have shorter growing seasons. As a rule of thumb, it is best to plant tomatoes as soon as the weather warms in spring to ensure a bumper crop by August. Tomatoes thrive when planted with marigolds, basil and chives, among other companion plants.
            </p>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 margin-top-30" style="border: none">
              <img src="../assets/corn.jpg" class="card-image" height="300" width="400" alt="broccoli" style="position: relative">
            </div>
          </div>
          <!-- col md 8 -->
          <div class="col-md-8">
            <h3>Corn</h3>
            <p>Corn is a bit tricky to grow in comparison to some other summer vegetables, but with the right knowledge and a little attention to the details of when and where to plant it, it can be a rewarding, delicious crop all season long. Corn needs both a lot of space as well as proper pollination to yield a successful crop. Plant in short rows about 1 foot apart for the best chance of pollination. Water regularly, as corn is a shallow-rooted plant and will not tolerate dried out soil. Grow corn with squash and beans for what is commonly referred to as planting of the “three sisters.”
            </p>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 margin-top-30" style="border: none">
              <img src="../assets/pepper.jpg" class="card-image" height="300" width="400" alt="broccoli" style="position: relative">
            </div>
          </div>
          <!-- col md 8 -->
          <div class="col-md-8">
            <h3>Peppers</h3>
            <p>Peppers can be grown side-by-side with tomatoes as well as eggplants because they have similar growing requirements. They all prefer full sun, rich soil and consistent deep watering. To help keep your peppers well-watered, use a bubbler or a Thumb Control Watering Nozzle. Make sure to water near soil level whenever possible to prevent soil borne diseases from splashing on lower leaves. Grow patio varieties, sweet or hot peppers to add to pizzas and salsas or for roasting. In addition to the tomato and eggplant companion plants, peppers can be planted close to carrots, radishes, squash and members of the Allium family (like onions and garlic).
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </body>
  <HelloWorld />
</template>

<script>
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'Summer',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
h1 {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
