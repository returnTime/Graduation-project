<template>
  <div>
    <user-page-vue :hePage="content"></user-page-vue>
  </div>
</template>

<script>
import userPageVue from './userPage.vue'
export default {
  components:{
    userPageVue
  },
  data() {
    return {
        content:{}
    }
  },
methods: {

  },
mounted(){
     
  },
created(){
    this.content = this.$route.query.content
  }
}
</script>

<style scoped>
</style>
