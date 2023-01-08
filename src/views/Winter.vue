<template>
  <body>
  <section class="about section">
    <h2>Winter</h2>
    <p>When is the best season to plant seeds to ensure you get the best results in your garden? To answer this question,<br />
      it really comes down to what it is you plan on growing. So we’ve divided up the seasons to let you know when is the <br />
      best time of year to plant a range of different fruits and vegetables.</p>
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
              <img src="../assets/broc.jpg" class="card-image" height="300" width="400" alt="broccoli" style="position: relative">
            </div>
          </div>
          <!-- col md 8 -->
          <div class="col-md-8">
            <h3>Broccoli</h3>
            <p>Broccoli grows best in fertile, well-drained, moisture-retentive soil, in full sun or very light shade.
              Cover seed beds and newly transplanted indoor-raised plants with fleece to exclude cabbage root fly.
              You can remove it in May, when the risk of damage is reduced. Water broccoli every 10–14 days in dry weather.
              When plants about 20cm (8in) tall, add a high nitrogen fertiliser, such as sulphate of ammonia, at 35g (1oz) per square metre/yard.
            </p>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 margin-top-30" style="border: none">
              <img src="../assets/bs.jpg" class="card-image" height="300" width="400" alt="broccoli" style="position: relative">
            </div>
          </div>
          <!-- col md 8 -->
          <div class="col-md-8">
            <h3>Brussels sprout</h3>
            <p>Brussel sprouts will withstand frost, as says the gardening team at Essential Living.
              In fact, many cultivars actually taste better after they've been through colder conditions.
              The RHS recommends sowing the seeds from early March to early April, under cloches or fleece,
              or in a cold frame. They can be transplanted in mid-May to early June into a sunny position with rich soil that's kept moist.
            </p>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 margin-top-30" style="border: none">
              <img src="../assets/cabbage.jpg" class="card-image" height="300" width="400" alt="broccoli" style="position: relative">
            </div>
          </div>
          <!-- col md 8 -->
          <div class="col-md-8">
            <h3>Cabbage</h3>
            <p>This cool season plant is actually even available in a true late-season variety known as winter cabbage.
              Winter cabbage needs less water than when growing in summer. It does best when row covers are used if
              extreme cold and freezes are expected. If growing from seeds, they will germinate in temps as low as 40°F.
              In some zones, you’ll need to harvest cabbage in early winter. If temperatures are going to plunge, your
              cabbage may split. For the most part, cabbage can tolerate a moderate frost, but it will likely be damaged
              by any hard, deep freezes. Once harvested, store heads in a cool cellar or basement for several months.
              Be sure to remove any damaged leaves before storing.
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
  name: 'Winter',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>

</style>
