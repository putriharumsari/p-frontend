<template>
  <h1>welcome to my plant</h1>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="pflanzen in pflanzens" :key="pflanzen.id">
        <div class="card h-100">
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
