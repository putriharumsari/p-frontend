<template>
  <h1>yo welcome to my plant</h1>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="veg in vegetables" :key="veg.id">
        <div class="card h-100">
          <img :src="getAvatar(veg)" class="card-img-top" :alt="veg.plantName">
          <div class="card-body">
            <h5 class="card-title">{{ veg.plantName }}</h5>
            <p class="card-text">
              {{ veg.descName }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vegetable',
  data () {
    return {
      vegetables: []
    }
  },
  methods: {
    getAvatar (vegetable) {
      if (vegetable.farbe === 'green') {
        return require('../assets/broc.jpg')
      } else if (vegetable.farbe === 'white') {
        return require('../assets/garlic.jpg')
      }
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_URL + '/api/v1/pflanzens'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(vegetables => {
        this.vegetables.push(vegetables)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
</style>
