<template>
  <div class="login-container">
    <div class="login-container-content">
      <div class="title">登陆页</div>
      <div>
        <el-input v-model="userName"></el-input>
      </div>
      <div>
        <el-input v-model="pwd"></el-input>
      </div>
      <div class="login-container-btn">
        <el-button @click="login">登录</el-button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      userName: '',
      pwd: ''
    }
  },
  componetns: {

  },
  mounted() {

  },
  methods: {
    login() {
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style>
.login-container{
  width: 100%;
  height: 100%;
}

.login-container-content{
  width: 300px;
  margin: 100px auto;
}

.login-container-content .title{
  text-align: center;
}

.login-container-content > div{
  margin-bottom: 10px;
}

.login-container-btn{
  display: flex;
  justify-content: center;
}
</style>
