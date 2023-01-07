<template>
  <div class="accordion w-100" id="basicAccordion">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                data-mdb-target="#basicAccordionCollapseOne" aria-expanded="false" aria-controls="collapseOne">
          Question #1
        </button>
      </h2>
      <div id="basicAccordionCollapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
           data-mdb-parent="#basicAccordion" style="">
        <div class="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown by default,
          until the collapse plugin adds the appropriate classes that we use to style each
          element. These classes control the overall appearance, as well as the showing and
          hiding via CSS transitions. You can modify any of this with custom CSS or overriding
          our default variables. It's also worth noting that just about any HTML can go within
          the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                data-mdb-target="#basicAccordionCollapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Question #2
        </button>
      </h2>
      <div id="basicAccordionCollapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
           data-mdb-parent="#basicAccordion" style="">
        <div class="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to style each
          element. These classes control the overall appearance, as well as the showing and
          hiding via CSS transitions. You can modify any of this with custom CSS or overriding
          our default variables. It's also worth noting that just about any HTML can go within
          the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                data-mdb-target="#basicAccordionCollapseThree" aria-expanded="false" aria-controls="collapseThree">
          Question #3
        </button>
      </h2>
      <div id="basicAccordionCollapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
           data-mdb-parent="#basicAccordion" style="">
        <div class="accordion-body">
          <strong>This is the third item's accordion body.</strong> It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to style each
          element. These classes control the overall appearance, as well as the showing and
          hiding via CSS transitions. You can modify any of this with custom CSS or overriding
          our default variables. It's also worth noting that just about any HTML can go within
          the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  </div>
</template>

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
</style>
