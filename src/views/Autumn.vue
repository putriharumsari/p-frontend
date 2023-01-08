<template>
  <body>
  <section class="about section">
    <h2>Autumn</h2>
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
              <img src="../assets/carrot.jpg" class="card-image" height="300" width="400" alt="broccoli" style="position: relative">
            </div>
          </div>
          <!-- col md 8 -->
          <div class="col-md-8">
            <h3>Carrot</h3>
            <p>Humble carrots are another good autumn choice. They are quite hardy, and can tolerate colder temperatures,
              even frost to a point. However, you want them to be ready before that, so to get them to grow quickly
              you’ll want to ensure they’ve got a better growing environment, which could be done with a polytunnel or
              greenhouse. Plant as early as possible in the ground in autumn, keep them protected, the soil moist, and
              you’ll have a lovely harvest of fresh carrots to enjoy in the winter. There are certain varieties that
              grow faster than others too so opt for one of these to make things go a bit easier.
            </p>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 margin-top-30" style="border: none">
              <img src="../assets/springonion.jpg" class="card-image" height="300" width="400" alt="broccoli" style="position: relative">
            </div>
          </div>
          <!-- col md 8 -->
          <div class="col-md-8">
            <h3>Spring Onion</h3>
            <p>Hardy varieties of Spring onion will grow well over the autumn months. They are quite a quick cropper,
              in about eight weeks, so not as fast as radishes but still quick enough to grow a plentiful amount before
              winter. Grow under a polytunnel and you’re onto a winner. They’re also small enough to be planted as a
              filler crop amongst other autumn grown veg.
            </p>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 margin-top-30" style="border: none">
              <img src="../assets/radish.jpg" class="card-image" height="300" width="400" alt="broccoli" style="position: relative">
            </div>
          </div>
          <!-- col md 8 -->
          <div class="col-md-8">
            <h3>Radish</h3>
            <p>There’s fast then there’s radishes. A go-to choice for growing in autumn because of the extremely quick
              growing time: four weeks from planting! That’s right, four weeks, maybe slightly longer depending on
              conditions, but it is a rapid grower. Plant in the ground and use a polytunnel to give them a consistent
              temperature and protection and watch them grow.
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
  name: 'Autumn',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>

</style>
