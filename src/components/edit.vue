<template>
  <div>
    <nav-top></nav-top>
    <b-container class="p-0">
        <b-card img-src="https://fastly.picsum.photos/id/324/1200/260.jpg?hmac=CbrkBNaKH6d2E5HuC21ZpXLCrFq897fyrteRXLh-R7A" 
          img-alt="Card image" img-top class="mt-2 card-shadow">
          <b-button variant="outline-secondary" size="sm" class="edit-img" to="./upCover"><i class="el-icon-camera"></i> 编辑封面图片</b-button>
            <b-card-text>
                <b-row no-gutters>
                    <!-- 头像 -->
                    <b-col sm="2">
                    <!-- <el-avatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" fit="cover"></el-avatar> -->
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                        >
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        
                        <div v-else :style="'background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('+currentUrl+');'" class="cur-avatar">
                            <i  class="el-icon-camera-solid avatar-uploader-icon"></i>
                            <p style="font-size: 12px; color:white">修改我的头像</p>
                        </div>
                    </el-upload>
                    </b-col>
                    <b-col sm="10">
                        <!-- 用户名 -->
                        <b-row no-gutters>
                            <b-col sm="6" class="b">
                                <div v-show="disEdit" style="width:100%">
                                    <span class="userName">{{ form.user }}</span>
                                    <el-button type="text" class="pl-3" @click="disEdit= false"><i class="el-icon-edit"></i>修改</el-button>
                                </div>
                                <el-form :inline="true" :model="form" class="demo-form-inline mt-1" v-show="!disEdit">
                                    <el-form-item label="用户名" size="mini" class="mb-1">
                                      <el-input v-model="form.user" placeholder="修改我的用户名" maxlength="16" show-word-limit clearable autocomplete="off"></el-input>
                                    </el-form-item>
                                    <el-form-item size="mini">
                                      <el-button type="primary" @click="disEdit=true;onSubmit();" size="mini">确认</el-button>
                                      <el-button plain @click="disEdit=true;" size="mini">取消</el-button>
                                    </el-form-item>
                                </el-form>
                            </b-col>
                            <b-col sm="6" class="b" style="align-items:flex-start;">
                                <div style="width:100%; text-align: right;">
                                    <el-button type="text" class="info-color p-0" @click="returnClick">返回我的主页 <i class="el-icon-arrow-right"></i></el-button>
                                </div>
                            </b-col>
                        </b-row>
                        <div class="mt-5">
                            <div>
                                <!-- 个人资料修改 -->
                                <el-form ref="form" :model="form"  >
                                  <!-- 性别 -->
                                  <el-form-item label="性别：" class="border-bottom">
                                    <div v-show="disGender"><span class="pl-3 pr-3">{{ form.gender }}</span> <el-button type="text" @click="disGender=false"><i class="el-icon-edit">修改</i></el-button></div>
                                    <el-radio-group v-model="form.gender" v-show="!disGender">
                                      <el-radio label="男" class="mb-0" ></el-radio>
                                      <el-radio label="女" class="mb-0" ></el-radio>
                                    </el-radio-group>
                                    <el-form-item size="mini" v-show="!disGender">
                                      <el-button type="primary" @click="disGender=true;onSubmit();" size="mini">确认</el-button>
                                      <el-button plain @click="disGender=true;" size="mini">取消</el-button>
                                    </el-form-item>
                                  </el-form-item>
                                  <!-- 一句话介绍 -->
                                  <el-form-item label="一句话介绍：" class="border-bottom">
                                    <div v-show="disSentence"><span class="pl-3 pr-3">{{ form.sentence }}</span> <el-button type="text" @click="disSentence=false"><i class="el-icon-edit">修改</i></el-button></div>
                                    <el-input v-model="form.sentence" v-show="!disSentence" size="small" maxlength="50" show-word-limit></el-input>
                                    <el-form-item size="mini" v-show="!disSentence">
                                      <el-button type="primary" @click="disSentence=true;onSubmit();" size="mini">确认</el-button>
                                      <el-button plain @click="disSentence=true;" size="mini">取消</el-button>
                                    </el-form-item>
                                  </el-form-item>
                                  <!-- 居住地 -->
                                  <el-form-item label="居住地：" class="border-bottom " >
                                    <div v-show="disAddress"><span class="pl-3 pr-3">{{ form.address }}</span> <el-button type="text" @click="disAddress=false"><i class="el-icon-edit">修改</i></el-button></div>
                                    <el-input v-model="form.address" v-show="!disAddress" size="mini" maxlength="20" show-word-limit style="max-width:200px"></el-input>
                                    <el-form-item size="mini" v-show="!disAddress">
                                      <el-button type="primary" @click="disAddress=true;onSubmit();" size="mini">确认</el-button>
                                      <el-button plain @click="disAddress=true;" size="mini">取消</el-button>
                                    </el-form-item>
                                  </el-form-item>

                                  <el-form-item label="职业：" class="border-bottom " >
                                    <div v-show="disIndustry"><span class="pl-3 pr-3">{{ form.industry }}</span> <el-button type="text" @click="disIndustry=false"><i class="el-icon-edit">修改</i></el-button></div>
                                    <el-input v-model="form.industry" v-show="!disIndustry" size="mini" maxlength="20" show-word-limit style="max-width:200px"></el-input>
                                    <el-form-item size="mini" v-show="!disIndustry">
                                      <el-button type="primary" @click="disIndustry=true;onSubmit();" size="mini">确认</el-button>
                                      <el-button plain @click="disIndustry=true;" size="mini">取消</el-button>
                                    </el-form-item>
                                  </el-form-item>
                                </el-form>
                            </div>
                        </div>
                    </b-col>
                </b-row>
                <b-row>
                    
                </b-row>
            </b-card-text>
          </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
        imageUrl: '',
        currentUrl:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        disEdit:true,
        disGender:true,
        disSentence:true,
        disAddress:true,
        disIndustry:true,
        form: {
          sentence: '愿以至诚之心，领岁月之教诲。 愿存少年之志，无畏时之流逝',
          address: '地球',
          industry: '学生',
          gender: '男',
          user: 'User Name'
        }
    }
  },
methods: {
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      onSubmit() {
        console.log('submit!');
      },
      returnClick(){
        this.$router.back()
      }
  },
mounted(){
  }
}
</script>

<style scoped>
.article-date {
    font-size: 15px;
    color: #999999;
    
  }
.userName{
    font-size: 24px;
    font-weight: 600;
}
.b{
    display: flex;
    align-items:center;
}

.info-text{
    font-size: 14px;
}
.key-info{
    font-weight: 600;
}
.card-shadow{
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
.edit-img{
    position: absolute;
    top: 10px;
    right:10px;
}



.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color:white;
    text-align: center;
    padding-top: 20px;
  }
  .cur-avatar{
    width: 80px;
    height: 80px;
    background-size: 80px;
  }
  .avatar {
    width: 80px;
    height: 80px;
    display: block;
  }
  .info-color{
    color: #909399;
  }
</style>
