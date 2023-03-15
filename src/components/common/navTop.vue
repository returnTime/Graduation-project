<template>
    <div>

      
        <div v-if="this.global.isPop">
          <log-in></log-in>
        </div>
     
      
      <div>
        <b-navbar toggleable="lg" type="light" variant="info" class="nav-shadow">

          <div class="container-lg">
            <b-navbar-brand href="#">
              <img src="../../assets/img/logo.png" alt="">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item  to="../page">主页</b-nav-item>
                <b-nav-item to="../article" :active="curT">文章</b-nav-item>
                <b-nav-item to="../image" :active="curI">图片</b-nav-item>
                <b-nav-item to="../video" :active="curV">视频</b-nav-item>
                <b-nav-item to="../message" :active="curM">留言卡</b-nav-item>
                <b-nav-item to="../creation" :active="curC"  @click="isPopLogIn">创作</b-nav-item>
              </b-navbar-nav>

              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                <b-nav-item @click="test" class="center" v-if="!this.global.isLogInUser">登录</b-nav-item>
                <b-nav-item @click="test" class="center" v-if="!this.global.isLogInUser">注册</b-nav-item>
                <b-nav-item to="../userPage" @click="isPopLogIn">
                  <el-avatar :src="this.global.logInavatar" icon="el-icon-user-solid" size="medium" style="border:white solid 2px;"></el-avatar>
                </b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </div>
        </b-navbar>
      </div>
    </div>
</template>

<style scoped>
.nav-shadow{
  box-shadow: 0 0 8px #666666;
}
.my-ava{
  height: 38px;
  width: 38px;
  border-radius: 50%;
  border: 2px solid white;
  overflow: hidden;
}
.center{
  align-self: center;
}
</style>

<script>
export default {
  props: ['curT', 'curI','curV','curM','curC'],
  data () {
    return {
      
    }
  },
  methods:{
    isPopLogIn(){
      this.$forceUpdate();
  },
    test(){
      this.$forceUpdate();
      this.global.revisePop();
    }
  },
  created(){
    
  },
 
}
</script>
