<template>
  <div>
    <div class="card mb-3" style="">
        <div class="row no-gutters">
          <div class="col-md-2 d-flex align-items-center">
            <img :src="content.img" class="card-img" alt="...">
            <i class="el-icon-video-play imgIcon" v-if="content.type=='video'"></i>
          </div>
          <div class="col-md-10">
            <div class="card-body">
              <h5 class="card-title">
                <b-link @click="goto">
                  <span v-if="content.type=='message'" class="article-date">{{ content.title | ellipsis }}</span>
                  <span v-else>{{ content.title }}</span>
                </b-link>
            </h5>
              <div class="article-date mb-1">发布于 {{ content.date }}</div>    
             <div class="article-date mb-3">
                <span class="pr-2">阅读 {{ content.data.read }}</span>
                <span class="pr-2">点赞 {{ content.data.sup }}</span>
                <span class="pr-2">收藏 {{ content.data.collection }}</span>
             </div>
            </div>
            <div style="position:absolute; bottom:0;right:0; " class="p-1">
                <el-popconfirm
                title="是否删除这篇文章？">
                <el-button type="danger" icon="el-icon-delete" size="mini" slot="reference" class="ml-1 mr-2">删除</el-button>
                </el-popconfirm>
                <el-switch
                v-model="value1"
                active-text="显示"
                inactive-text="隐藏"
                >
                </el-switch>
                </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props:['content'],
  filters: { // 限制文本显示字数,超出部分用...代替
    ellipsis (value) {
      if (!value) return ''
      if (value.length > 20) {
        return value.slice(0, 20) + ' ...'// 0:下标,从第一个字开始显示,95:显示字数,多余用...代替
      }
      return value
    }
  },
  data() {
    return {
        value1: true,
        
    }
  },
methods: {
    goto(){
        switch(this.content.type){
        case 'article':
            this.$router.push({path:'/articleRead',query: {url:this.content.url}});
            break;
        case 'img':
            this.$router.push({path:'/imageInfo',query: {url:this.content.url,imgId:this.content.imgId}});
            break;
        case 'video':
            this.$router.push({path:'/videoInfo',query: {url:this.content.url}});
            break;
        case 'message':
            this.$router.push({path:'/messageInfo',query: {info:this.content.go}});
            break
    }
    }
  },
mounted(){
    this.value1 = this.content.isShow; //显示状态
    // switch(this.content.type){
    //     case 'article':
    //         this.goto = "{path:'/articleRead',query:{url:"+this.content.url+"}}";
    //         break;
    //     case 'img':
    //         this.goto = '/imageInfo';
    //         break;
    //     case 'video':
    //         this.goto = '/videoInfo';
    //         break;
    //     case 'message':
    //         this.goto = '/messageInfo';
    //         break
    // }
    
  }
}
</script>

<style scoped>
.article-date {
    font-size: 15px;
    color: #999999;
    margin-bottom: 29px;
  }
  .imgIcon{
    position: absolute;
    top: calc(50% - 15px);
    left: calc(50% - 15px);
    z-index: 999;
    color: white;
    font-size: 30px;
}
</style>
