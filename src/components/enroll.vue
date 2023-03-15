<template>
    <div class="login">

        <div class="container from-size ">
            <div class="logo container"><img src="../assets/img/logo.png" alt="">   </div>
            <h3 class="mb-4">注册</h3>
            <div class="mb-3">
                <b-form  @submit.stop.prevent>
                  <label for="feedback-user">用户名</label>
                  <b-input v-model="userId" :state="validation" id="feedback-user"></b-input>
                  <b-form-invalid-feedback :state="validation">
                      您的用户 ID 长度必须为 5-12 个字符。
                  </b-form-invalid-feedback>
                  <b-form-valid-feedback :state="validation">
                    OK
                  </b-form-valid-feedback>
                 </b-form>
              </div>

              <div>
                  <b-form @submit.stop.prevent>
                    <label for="text-password">密码</label>
                    <b-input type="password" id="text-password" aria-describedby="password-help-block"></b-input>
                    <b-form-text id="password-help-block">
                      您的密码长度必须为 8-20 个字符，包含字母和数字，并且不含空格、特殊字符或表情符号
                    </b-form-text>
                   </b-form>
                </div>

                <div>
                    <b-button block variant="primary" class="my-4">注册</b-button>
                  </div>
                  <p>已有账号？/ <a href="">立即登录</a></p>
          </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      userId: ''
    }
  },
  computed: {
    validation () {
      return this.userId.length > 4 && this.userId.length < 13
    }
  }
}
</script>

<style scoped>
.from-size{
    padding:10px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    background-color: aliceblue;
    text-align: center;
}
.login{
    height: 100vh;
    background: linear-gradient(to right, #fabebd 0%,#fabebd 50%,#c3e6e0 50%,#c3e6e0 100%);
    background-size: cover;
    padding-left: 10px;
    padding-right: 10px;
}
.logo{
    text-align: center;
    position: absolute;
    top: -70px;
    left: 50%;
    transform: translateX(-50%);
    background-image: url(../assets/img/星空.jpg);
    background-size: cover;
    padding: 5px 0;
}
</style>
