<template>
  <div>
    <b-card title="" :img-src="imgUrl" img-alt="Image" img-top>
        <b-card-text style="font-size:14px;">
            {{ text }}
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted" >来自用户：{{ userName }}</small>
          <b-button squared variant="primary"
           style="float:right;line-height: 1;"
            :to="{path:'/messageInfo',query:{info:go}}"
            >查看</b-button>
        </template>
      </b-card>
  </div>
</template>

<script>
export default {
    props:['imgUrl','text','userName','go'],
    name:'message-card',
  data() {
    return {
        message:{

        }
    }
  },
methods: {

  },
mounted(){
  }
}
</script>

<style scoped>
</style>
