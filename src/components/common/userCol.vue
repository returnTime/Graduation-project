<template>
  <div>
    <b-row no-gutters class="mt-2">
        <b-col cols="auto" class="mr-auto">
          <div style="display:flex" class="mb-2">
            <el-avatar :size="30" :src="userTitle.avater"></el-avatar>
            <b-link
            style="align-self: center; padding-left: 5px;"
            :to="{ path:'/userPageNew',query:{content:userContent}}"
            >
            {{ userTitle.name }}
            </b-link>
          </div>
        </b-col>
        <b-col cols="auto">
          <b-button :squared="true" variant="primary" @click="focuss" size="sm"><i :class="focus.icon"></i>{{ focus.text }}</b-button>
        </b-col>
       </b-row>
  </div>
</template>

<script>
export default {
    props:['info'],
  data() {
    return {
        focus: {
        is: false,
        text: '关注',
        icon: 'el-icon-plus'
      },
      userTitle:{
        avater:'',
        name:''
      },
      userContent:{
        userType:false,
        userInfo: {
          sentence: '初见乍惊欢，久处亦砰然。',
          address: '地球',
          industry: '学生',
          gender: '女',
          name: 'Tdiche',
          avatar:'http://q1.qlogo.cn/g?b=qq&nk=2278085683&s=100'
        },
        listInfot: [
        
      ],
      imgList:[],
      videoList:[],
      myCollect:{
        article:[
         
        ],
        img:[
            
        ],
        video:[],
        message:[]
      },
      userList:{
        my:[
            
        ],
        me:[
           
        ]
      },
      provisional:[
           
        ],
      },
      
    }
  },
methods: {
    focuss () {
      this.focus.is = !this.focus.is
      if (this.focus.is) {
        this.focus.icon = 'el-icon-check'
        this.focus.text = '已关注'
      } else {
        this.focus.icon = 'el-icon-plus'
        this.focus.text = '关注'
      }
    }
  },
mounted(){
    this.focus.is=this.info.is;
    this.userTitle.avater=this.info.avater;
    this.userTitle.name=this.info.name;
    if(this.focus.is){
        this.focus.text='已关注';
        this.focus.icon='el-icon-check';
    }
  },
created(){
    
}
}
</script>

<style scoped>
</style>
