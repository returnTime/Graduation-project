<template>

    <b-row no-gutters class="container-fluid pt-2 pb-2">
        <!-- 头像 -->
        <b-col cols="auto" class="pr-2">
            <el-avatar :size="30" shape="square" :src="remarks.avatar"></el-avatar>
        </b-col>
        <b-col >
            <!-- 用户名 -->
            <h6><a href="" class="font-weight-bold text-dark">{{ remarks.user }}</a><a href="" v-if="remarks.reply" class="text-dark"><i class="el-icon-caret-right"></i>{{ remarks.reply }}</a></h6>
            <!-- 内容 -->
            <div >{{ remarks.content }}</div>
            <b-row no-gutters class="mb-1">
                <!-- 发布日期 -->
              <b-col cols="auto" class="article-date">{{ remarks.date }} </b-col>
              <b-col cols="auto" class="ml-auto">
                <!-- 回复按钮 -->
                <el-button type="text" class="text-secondary p-0" @click="disReply"><i class="el-icon-chat-round pr-1"></i>回复</el-button>
                <!-- 点赞数 -->
                <el-button type="text" class="text-secondary p-0" @click="support" title="点赞"><b-icon :icon="sup.icon" variant="secondary" class="mr-2"> </b-icon>{{ sup.num }}</el-button>
              </b-col>
            </b-row>
            <!-- 回复输入框 -->
            <b-row no-gutters v-if="isReply">
                <b-col>
                    <el-input
                      type="textarea"
                      autosize
                      :placeholder="'回复 '+remarks.user"
                      maxlength="300"
                      show-word-limit
                      v-model="textarea1"
                      clearable>
                    </el-input>
                  </b-col>
                <b-col cols="auto">
                    <b-button variant="primary" size="sm" class="ml-2">发布</b-button>
                </b-col>
            </b-row>
            <!-- 子评论 -->
            <ul v-if="subInfo && subInfo.length>0">
                <!-- 递归组件调用 -->
                <remarks-user v-for="subRemarks in changeFoldInfo" :remarks="subRemarks"></remarks-user>
                <el-button size="mini" v-if="subInfo.length>2" class="changeFoldState" @click="changeFoldState">{{ remainderNum }}<i :class="brandFold.icon"></i></el-button>
            </ul>
        </b-col>

    </b-row>

</template>

<script>

export default {
  props: ['remarks'],
  name: 'remarks-user',
  data () {
    return {
      subInfo: this.remarks.subRemarks,
      sup: {
        is: false,
        icon: 'triangle',
        num: this.remarks.supNum
      },
      brandFold: {
        is: true,
        icon: 'el-icon-arrow-right'
      },
      textarea1: '',
      isReply: false
    }
  },
  methods: {
    support () {
      this.sup.is = !this.sup.is
      if (this.sup.is) {
        this.sup.num++
        this.sup.icon = 'triangle-fill'
      } else {
        this.sup.num--
        this.sup.icon = 'triangle'
      }
    },
    disReply () {
      this.isReply = !this.isReply
    },
    changeFoldState () {
      this.brandFold.is = !this.brandFold.is
      if (this.brandFold.is) {
        this.brandFold.icon = 'el-icon-arrow-right'
      } else {
        this.brandFold.icon = 'el-icon-arrow-down'
      }
    }
  },
  mounted () {

  },
  computed: {
    changeFoldInfo () {
      if (this.brandFold.is) {
        if (this.subInfo.length > 2) {
          const disInfo = []
          for (let i = 0; i < 2; i++) {
            disInfo.push(this.subInfo[i])
          }
          return disInfo
        } else {
          return this.subInfo
        }
      } else {
        return this.subInfo
      }
    },
    remainderNum () {
      const num = this.subInfo.length - 2
      if (this.brandFold.is) {
        const btnText = '查看剩余' + num + '条评论'
        return btnText
      } else {
        return '收起' + num + '条评论'
      }
    }
  }
}
</script>

<style scoped>
li{
    list-style: none;
}
ul{
    padding: 0;
}
ul .container-fluid{
    padding-left: 0;
    padding-right: 0;
}
.article-date {
    font-size: 12px;
    color: #999999;
    line-height: 200%;
  }
.changeFoldState{
    background: rgba(133,144,166,.1);
    color: #8590a6;
}

</style>
