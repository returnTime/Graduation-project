<template>
  <div>
    <nav-top :curC="true"></nav-top>
    <b-container class="p-0">
        <div>
            <b-jumbotron header="我的创作" lead="" class="mb-3" style="background:url('https://fastly.picsum.photos/id/1068/1200/300.jpg?hmac=33OG-pXTDwdaPpktCAY0bFM0KPPJziTEozvuXdD1F4w')">
              <p>已发布的创作</p>
              <b-button variant="primary" to="./myOpus">查看我的作品</b-button>
            </b-jumbotron>
          </div>
          <div>
            <!-- <h2 class="pl-4">开始你的创作</h2> -->
            <div class="card bg-dark text-white mb-2">
                <img class="card-img" src="https://fastly.picsum.photos/id/324/1200/260.jpg?hmac=CbrkBNaKH6d2E5HuC21ZpXLCrFq897fyrteRXLh-R7A" alt="Card image">
                <div class="card-img-overlay">
                  <h5 class="card-title">请开始你的创作</h5>
                  
                </div>
              </div>
            <b-card title="创作" no-body>
                <b-tabs content-class="mt-3" justified>
                  <b-tab title="文章">
                    <h5 class="" style="text-align: center; font-size: 14px; color:gray">发布文章</h5>
                    <wang-edit></wang-edit>
                  </b-tab>
                  <b-tab title="图片">
                      <h5 class="" style="text-align: center; font-size: 14px; color:gray">发布图像内容</h5>
                      <div class="upload-image  mt-3 p-3 d-flex justify-content-center mt-3">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
                            <el-form-item label="图像标题" prop="name">
                                <el-input v-model="ruleForm.name" style="width:100%" maxlength="20" show-word-limit ></el-input>
                            </el-form-item>
                            <el-form-item label="上传图片" ref="uploadElement" prop="imageUrl">
                                <el-input v-model="ruleForm.imageUrl" v-if="false"></el-input>
                                <el-upload
                                        class="avatar-uploader"
                                        ref="upload"
                                        :show-file-list="false"
                                        action="/index/upload"
                                        :before-upload="beforeUpload"
                                        :on-change="handleChange"
                                        :auto-upload="false"
                                        :data="ruleForm">
                                    <img v-if="ruleForm.imageUrl" :src="ruleForm.imageUrl" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过10MB</div>
                                </el-upload>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('ruleForm')">立即发布</el-button>
                                <el-button @click="resetForm('ruleForm')">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </div>

                  </b-tab>
                  <b-tab title="视频">
                    <h5 class="" style="text-align: center; font-size: 14px; color:gray">发布视频内容</h5>
                    <div class="upload-image d-flex justify-content-center mt-3">
                        <el-form :model="videoForm" :rules="rulesV" ref="videoForm" label-width="100px">
                            <el-form-item label="视频标题" prop="title">
                                <el-input v-model="videoForm.title" style="max-width: 300px"></el-input>
                            </el-form-item>
                            <el-form-item label="上传视频" ref="uploadElement" prop="videoUrl">
                                <el-input v-model="videoForm.videoUrl" v-if="false"></el-input>
                                <el-upload
                                        class="avatar-uploader"
                                        ref="upload"
                                        :show-file-list="false"
                                        action="/index/upload"
                                        :before-upload="beforeUploadVideo"
                                        :on-change="handleChangeV"
                                        :auto-upload="false"
                                        :data="videoForm">
                                    <!-- <img v-if="videoForm.videoUrl" :src="videoForm.videoUrl" class="avatar"> -->
                                    <video v-if="videoForm.videoUrl" :src="videoForm.videoUrl" class="avatar"></video>
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    <div slot="tip" class="el-upload__tip">只能上传视频文件，且不超过100MB</div>
                                </el-upload>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitFormV('videoForm')">立即发布</el-button>
                                <el-button @click="resstFormV('videoForm')">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                  </b-tab>
                  <b-tab title="留言">
                    <div class="upload-image">
                        <h5 class="" style="text-align: center; font-size: 14px; color:gray">发布留言卡</h5>
                        <el-form :model="messageForm" :rules="rulesM" ref="messageForm" label-width="100px">
                            <el-form-item label="上传图片" ref="uploadElement" prop="imageUrl" class="p-3">
                                <el-input v-model="messageForm.imageUrl" v-if="false"></el-input>
                                <el-upload
                                        class="avatar-uploader"
                                        ref="upload"
                                        :show-file-list="false"
                                        action="/index/upload"
                                        :before-upload="beforeUpload"
                                        :on-change="handleChangeM"
                                        :auto-upload="false"
                                        :data="messageForm">
                                    <img v-if="messageForm.imageUrl" :src="messageForm.imageUrl" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                            </el-form-item>
                            <el-form-item label="文本内容" prop="text" class="p-3">
                                <el-input
                                clearable
                                maxlength="100"
                                type="textarea"
                                :autosize="{ minRows: 2, maxRows: 4}"
                                placeholder="请输入内容"
                                v-model="messageForm.text">
                                </el-input>
                            </el-form-item>
                            
                            <el-form-item>
                                <el-button type="primary" @click="submitFormM('messageForm')">立即发布</el-button>
                                <el-button @click="resetFormM('messageForm')">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                  </b-tab>
                </b-tabs>
              </b-card>
          </div>
          
    </b-container>
  </div>
</template>

<script>
import wangEdit from './common/wangEdit.vue';
export default {
    components:{wangEdit},
  data() {
    return {
        sizeForm: {
          title: '',
          briefly: '',
          imgUrl:''
        },
        ruleForm: {
            name: '',
            imageUrl: '',
            },
        rules: {
            name: [
                {required: true, message: '请输入标题', trigger: 'blur'},
            ],
            imageUrl: [
                {required: true, message: '请上传图片', trigger: 'blur'},
            ],
            },

            videoForm: {
                title: '',
                videoUrl: '',
            },
            rulesV: {
                title: [
                    {required: true, message: '请输入标题', trigger: 'blur'},
                ],
                videoUrl: [
                    {required: true, message: '请上传视频', trigger: 'blur'},
                ],
            },

            messageForm: {
                text: '',
                imageUrl: '',
            },
            rulesM: {
                text: [
                    {required: true, message: '请输入文字内容', trigger: 'blur'},
                ],
                imageUrl: [
                    {required: true, message: '请上传图片', trigger: 'blur'},
                ],
            },
           
           
    }
  },
methods: {
    onSubmit() {
        console.log('submit!');
      },
    submitUpload() {
        console.log('...');
      },
      submitForm(formName) {
                let vm = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        vm.$refs.upload.submit();
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
                this.ruleForm.imageUrl = '';
            },
           
            handleChange (file, fileList) {
                this.ruleForm.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeUpload(file) {
                this.loading = true
                const isJPG = file.type === 'image/jpeg';
                const isPNG = file.type === 'image/png';
                const isLt10M = file.size / 1024 / 1024 < 10;
                if (!isJPG && !isPNG) {
                    this.$message.error('上传图片只能是 JPG 或者 PNG 格式!');
                }
                if (!isLt10M) {
                    this.$message.error('上传图片大小不能超过 10MB!');
                }
                return (isJPG || isPNG) && isLt10M;
            },
            submitFormV(formtitle) {
                let vm = this;
                this.$refs[formtitle].validate((valid) => {
                    if (valid) {
                        vm.$refs.upload.submit();
                    } else {
                        return false;
                    }
                });
            },
            resstFormV(formtitle) {
                this.$refs[formtitle].resetFields();
                this.videoForm.videoUrl = '';
            },
 
            handleChangeV (file, fileList) {
                this.videoForm.videoUrl = URL.createObjectURL(file.raw);
            },
            beforeUploadVideo(file) {
                const isLt100M = file.size / 1024 / 1024  < 100;
                if (['video/mp4', 'video/ogg', 'video/flv','video/avi','video/wmv','video/rmvb'].indexOf(file.type) == -1) {
                    this.$message.error('请上传正确的视频格式');
                    return false;
                }
                if (!isLt100M) {
                    this.$message.error('上传视频大小不能超过100MB哦!');
                    return false;
                }
            },

            submitFormM(formtext) {
                let vm = this;
                this.$refs[formtext].validate((valid) => {
                    if (valid) {
                        vm.$refs.upload.submit();
                    } else {
                        return false;
                    }
                });
            },
            resetFormM(formtext) {
                this.$refs[formtext].resetFields();
                this.messageForm.imageUrl = '';
            },
 
            handleChangeM (file, fileList) {
                this.messageForm.imageUrl = URL.createObjectURL(file.raw);
            },
         
  },
mounted(){
    
  },
  beforeDestroy() {
        
    }
}
</script>

<style  scoped>
input[type="file"] {
    display: none;
}

.avatar-uploader .avatar-uploader-icon {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .avatar-uploader-icon:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
}

.avatar {
    width: 120px;
    height: 120px;
    display: block;
}

</style>
