<template>
  <div>
    <div v-if="currentFile" class="progress">
      <div
        class="progress-bar progress-bar-info progress-bar-striped"
        role="progressbar"
        :aria-valuenow="progress"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{ width: progress + '%' }"
      >
        {{ progress }}%
      </div>
    </div>

    <label class="btn btn-default">
      <input type="file" ref="file" @change="selectFile" />
    </label>

    <button class="btn btn-success" :disabled="!selectedFiles" @click="upload">
      Upload
    </button>

    <div class="alert alert-light" role="alert">{{ message }}</div>

    <div stye="margin-bottom: 50px;"
         v-if="previewImage">
      <div>

        <img class="img-fluid rounded" :src="previewImage" alt=""
             style="object-fit:cover; width: 600px; height: 350px;"/>
      </div>
    </div>

    <div class="card">
      <div class="card-header">List of Files</div>
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item"
          v-for="(file, index) in fileInfos"
          :key="index"
        >
          <a :href="file.url">{{ file.name }}</a>
          <a>
            <img class="img-fluid rounded" :src="file.url" alt=""
                 style="object-fit:cover; width: 600px; height: 350px;"/>
          </a>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import UploadService from '../FileUpload/UploadFileService'

export default {
  name: 'upload-files',
  data () {
    return {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: '',

      fileInfos: [],

      previewImage: undefined,
      currentImage: undefined
    }
  },
  methods: {
    selectFile () {
      this.selectedFiles = this.$refs.file.files.item(0)
      this.previewImage = URL.createObjectURL(this.selectedFiles)
      this.progress = 0
    },
    upload () {
      this.progress = 0

      this.currentFile = this.selectedFiles.item(0)
      UploadService.upload(this.currentFile, event => {
        this.progress = Math.round((100 * event.loaded) / event.total)
      })
        .then(response => {
          this.message = response.data.message
          return UploadService.getFiles()
        })
        .then(files => {
          this.fileInfos = files.data
        })
        .catch(() => {
          this.progress = 0
          this.message = 'Could not upload the file!'
          this.currentFile = undefined
        })

      this.selectedFiles = undefined
    }

  },
  mounted () {
    UploadService.getFiles().then(response => {
      this.fileInfos = response.data
    })
  }
}
</script>
