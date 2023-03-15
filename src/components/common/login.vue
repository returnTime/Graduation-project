<template>
  <div v-if="this.global.isPop">
    <div class="am-mask p-3">
      <div class="am-content-wrapper">
        <div>
          <b-container class="p-0">
          <b-card no-body class="overflow-hidden " style="max-width: 1000px;" v-if="!jump">
            <!-- 关闭按钮 -->
            <el-button icon="el-icon-close" circle style="position:absolute; right:0; top:0; z-index:9999" size="mini" @click="isPopLogIn"></el-button>
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img :src="imgCover" class="rounded-0"></b-card-img>
                <h3 style="position:absolute; top:10%; left:50%; transform: translateX(-50%); color:white">请登录</h3>
              </b-col>
              <b-col md="6">
                <b-card-body title="">
                  <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
                    <el-tab-pane label="登录" name="first">
                      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px"  class="demo-ruleForm">
                        <el-form-item  label="账号" prop="name">
                          <el-input 
                          placeholder="请输入账号"
                           v-model="ruleForm.name" 
                           maxlength="16" 
                           :show-word-limit="true"
                           clearable></el-input>
                        </el-form-item>

                        <el-form-item  label="密码" prop="password" >
                          <el-input 
                          placeholder="请输入密码" 
                          v-model="ruleForm.password" 
                          show-password
                          clearable></el-input>
                        </el-form-item>

                        <el-form-item>
                          <el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
                          <el-button @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                      </el-form>
                    </el-tab-pane>
                    <el-tab-pane label="注册" name="second">
                        <el-form :model="ruleFormE" status-icon :rules="rules" ref="ruleFormE" label-width="80px" class="demo-ruleForm" size="small">
                          <el-form-item label="账号" prop="age">
                            <el-input v-model="ruleFormE.age"></el-input>
                          </el-form-item>
                            <el-form-item label="密码" prop="pass">
                              <el-input type="password" v-model="ruleFormE.pass" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="确认密码" prop="checkPass">
                              <el-input type="password" v-model="ruleFormE.checkPass" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item>
                              <el-button type="primary" @click="submitFormE('ruleFormE')">提交</el-button>
                              <el-button @click="resetFormE('ruleFormE')">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </el-tab-pane>
                  </el-tabs>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <el-result icon="success" title="登录成功" subTitle="欢迎回来" v-if="jump" style="width:729px; height:365px">
            <i class="el-icon-loading" slot="extra"></i>
          </el-result>
        </b-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
const token = 'asdfewsdf42304523hkjhi2345gi234gjase234';
const logIn = true;
const avatar = 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';
export default {
  name: "sendMask",
  // props:{
  //   visible: {
  //       type: Boolean,
  //       default: false
  //     }
  // },
  data() {
    
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleFormE.checkPass !== '') {
            this.$refs.ruleFormE.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleFormE.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

    return {
      activeName: 'first',
      ruleForm: {
          name: '',
          password:'',
          
        },
      ruleFormE:{
        pass: '',
        checkPass: '',
        age: ''
      },
        rules: {
          name: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' }
          ],
          pass: [
            {required: true, validator: validatePass, trigger: 'blur' },
            { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' }
          ],
          checkPass: [
            {required: true, validator: validatePass2, trigger: 'blur' },
            { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' }
          ],
          age: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ]
        },
        jump:false,
        imgCover:require('../../assets/img/lofInCover.jpg')
    }
  },
  computed: {
      
    },
methods: {
  handleClick(tab, event) {  
      },
  submitForm(formName) {
    this.$refs[formName].validate((valid) => {
      if (valid) {
        this.tempVerify();
      } else {
          console.log('error submit!!');
          return false;
        }
        });
    },
    resetForm(formName) {
        this.$refs[formName].resetFields();
    },
    tempVerify(){                   //表单确认后事件
    if(this.ruleForm.name == '123456789' && this.ruleForm.password == '123456789'){
      localStorage.setItem('token',token);
      localStorage.setItem('isLogIn',logIn);
      localStorage.setItem('avatar',avatar);
      this.jump = true;
      this.$router.go(0);
      setTimeout(() => {  
        isPopLogIn();
    }, 1500);
    }else{
      alert('账号或密码错误！');
    }
  },
  // close() {
  //       this.$emit('update:visible', false) // 传递关闭事件
  //     },
  isPopLogIn(){
    this.global.revisePop();
    this.$forceUpdate();
  },

  //注册
  submitFormE(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetFormE(formName) {
        this.$refs[formName].resetFields();
      }
},
 
  
mounted(){
  
  
  },

created() {

  
},
watch:{
  
}
}

</script>

<style scoped>
.am-mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}
  .am-content-wrapper {
   
    background-color: #fff;
    
  }

</style>
