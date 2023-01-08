<template>
    <div class="container mt-5 mb p-4 border">
      <div class="row justify-content-center">
        <div class="col-3 mb-4">
          <h1 class="fw-light">Upload Vegetables</h1>
        </div>
      </div>
      <div class="row">
        <!-- Left Column : Form -->
          <div class="submit-form">
            <div>
              <form class="border p-3">
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" class="form-control" id="name" required name="name">
                </div>
                <div class="mb-3">
                  <label class="form-label">Description</label>
                  <textarea class="form-control" id="description"
                  name="description" rows="3"></textarea>
                </div>
              </form>
            </div>
          </div>

        <!-- Right Column : Upload Image -->
        <UploadFiles />

      </div>
    </div>
  <!--  <body>
    <UploadFiles />
    <section class="winter section">
      <div class="container"></div>
      <h2>File Uploaded</h2>
    </section>
    <b />
    &lt;!&ndash;<div class="card" style="width: 60%">
      <div class="card-body align-items-center display-9" style="background-color: #CACACA">
        <h4>Broccoli</h4>
        <p>Broccoli grows best in fertile, well-drained, moisture-retentive soil, in full sun or very light shade.
          Cover seed beds and newly transplanted indoor-raised plants with fleece to exclude cabbage root fly. You can remove it in May, when the risk of damage is reduced. Water broccoli every 10–14 days in dry weather. When plants about 20cm (8in) tall, add a high nitrogen fertiliser, such as sulphate of ammonia, at 35g (1oz) per square metre/yard
        </p>
      </div>
    </div>&ndash;&gt;
    <div class="card" style="width: 18rem;" v-for="pflanzen in pflanzens" :key="pflanzen + pflanzen.id">
      <img :src="pflanzen.url" class="card-img-top" alt="...">
      <div class="card-body">
      </div>
    </div>
    <HelloWorld />
    </body>-->
</template>
<script>
import HelloWorld from '@/components/HelloWorld'
import UploadFiles from '@/components/UploadFiles'
// import axios from '@/apis/server'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Submit',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld,
    UploadFiles
    /* },
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
  } */
  }
}
</script>
<style scoped>
h2 {
  margin-top: 30px;
}
.card,
.card-body {
  align-items: center;
  display: flex;
  position: center;
}
</style>
