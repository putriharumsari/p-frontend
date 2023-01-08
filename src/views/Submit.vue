<template>
  <body>
  <section class="winter section">
    <div class="container"></div>
    <h2>Upload File</h2>
  </section>
  <b />
  <!--<div class="card" style="width: 60%">
    <div class="card-body align-items-center display-9" style="background-color: #CACACA">
      <h4>Broccoli</h4>
      <p>Broccoli grows best in fertile, well-drained, moisture-retentive soil, in full sun or very light shade.
        Cover seed beds and newly transplanted indoor-raised plants with fleece to exclude cabbage root fly. You can remove it in May, when the risk of damage is reduced. Water broccoli every 10–14 days in dry weather. When plants about 20cm (8in) tall, add a high nitrogen fertiliser, such as sulphate of ammonia, at 35g (1oz) per square metre/yard
      </p>
    </div>
  </div>-->
  <div class="card" style="width: 18rem;" v-for="pflanzen in pflanzens" :key="pflanzen + pflanzen.id">
    <img :src="pflanzen.url" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text d-flex">Broccoli grows best in fertile, well-drained, moisture-retentive soil, in full sun or very light shade.
        Cover seed beds and newly transplanted indoor-raised plants with fleece to exclude cabbage root fly. You can remove it in May, when the risk of damage is reduced. Water broccoli every 10–14 days in dry weather. When plants about 20cm (8in) tall, add a high nitrogen fertiliser, such as sulphate of ammonia, at 35g (1oz) per square metre/yard
      </p>
    </div>
  </div>
  <div class="card">
    <div class="row">
      <div class="col-md-4" style="background-color: darkred"></div>
      <div class="col-md-8" style="background-color: yellow"></div>
      <div class="card-body">
        <p class="card-text"></p>
      </div>
    </div>
  </div>
  <UploadFiles />
  <HelloWorld />
  </body>
</template>
<script>
import HelloWorld from '@/components/HelloWorld'
import UploadFiles from '@/components/UploadFiles'
import axios from '@/apis/server'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Submit',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld,
    UploadFiles
  },
  data () {
    return {
      pflanzens: []
    }
  },
  methods: {
    retrievePflanzen () {
      axios.get('/files')
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
    console.log(this.pflanzens)
  }
}

</script>
<style scoped>
</style>
