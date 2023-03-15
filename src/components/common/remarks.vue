<template>
  <div>
    <!-- 输入区域 -->
    <b-row no-gutters class="mt-3 mb-3">
      <b-col cols="auto" class="mr-3">
        <el-avatar :size="30" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </b-col>
      <b-col>
        <el-input
          type="textarea"
          autosize
          placeholder="评论千万条 友善第一条"
          maxlength="300"
          show-word-limit
          v-model="textarea1"
          clearable>
        </el-input>
      </b-col>
      <b-col cols="auto" class="ml-3">
        <b-button variant="primary" size="sm">发布</b-button>
      </b-col>
     </b-row>
     <!-- 评论区 -->
     <!-- 标题 -->
     <b-row no-gutters class="border p-2">
        <div class="container-fluid">
          <h6 class="border-bottom pb-3 pt-1">{{ remarksInfo.num = remarksInfo.num?remarksInfo.num:0 }}条评论</h6>
        </div>
        <!-- 内容 -->
        <div v-if="disContent">
          <remarks-user v-for="remarksl in remarksList" :remarks="remarksl" ></remarks-user>
        </div>
        <!-- 无评论时显示画面 -->
          <div v-else style="height:30vh; width:100%;">
            <div style="text-align: center; margin-top: 5%;">
              <img src="../../assets/img/锤子.svg" alt="" height="100px">
              <p class="mt-5" style="font-size: 17px; color:rgb(153, 153, 153);">还没有评论，快来发表一个吧</p>
            </div>
          </div>
     </b-row>

  </div>
</template>

<script >
import remarksUser from './remarksUser.vue'
export default {
  props: ['remarksInfo'],
  components: {
    remarksUser
  },
  data () {
    return {
      textarea1: '',
      remarksList: this.remarksInfo.remarks,
      disContent:true
    }
  },
  methods: {

  },
  mounted () {
    if(this.remarksList.length<=0){
      this.disContent = false;
    }
  }
}
</script>

<style scoped>
ul{
  padding: 0;
}
li{
  list-style: none;
}
.article-date {
  font-size: 15px;
  color: #999999;
}

</style>
