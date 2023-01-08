<template>
  <body>
  <UploadFiles />
  <HelloWorld />
  </body>
</template>
<script>
import HelloWorld from '@/components/HelloWorld'
import UploadFiles from '@/components/UploadFiles'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Submit',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld,
    UploadFiles
  }
}

</script>
<style scoped>
</style>
