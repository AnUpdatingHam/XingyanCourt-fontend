<template>

  <el-row style="width: 100%;height: 700px;background-image: url('src/assets/bg.svg');background-repeat: no-repeat;">
    <el-col :span="12"  style="width: 50%; display: flex;flex-direction: column;justify-content: center;align-items: center;">
      <h2 style="font-size:60px;font-weight:1000;margin-bottom: 20px;">星焱文卷庭</h2>
      <p style="margin-bottom:40px;font-size: 18px;font-weight: 400;">更有温度的试卷生成服务</p>
      <div>
        <el-button type="primary" round style="border-radius: 40px;width: 128px;height: 52px;background-color: #0608E3;font-size: 18px;font-weight: 400;" @click="goToPaper">创建试卷</el-button>
        <!-- <el-button @click="loginAppear=true" round style="border-radius: 40px;width: 88px;height: 52px;font-size: 18px;font-weight: 400;">登录</el-button> -->
      </div>
    </el-col>
    <el-col :span="12" style="width: 50%; display: flex;align-items: center;justify-content: center;">
      <img src="src/assets/logo.svg">
    </el-col>
  </el-row>
  

  <!-- <div class="dream-job">
    <div class="job-text">
      <h2>寻找理想工作</h2>
      <p>让你的求职之路更加高效、轻松。</p>
    </div>
    <div class="job-buttons">
      <router-link style="text-decoration: none;" to="/user/job">
        <el-button round @click="scrollToTop" style="width: 128px;height: 52px;border-radius: 40px;font-size: 18px;font-weight: 400;">浏览职位</el-button>
      </router-link>
      <el-button round style="width: 220px;height: 52px;opacity: 1;border-radius: 40px; background-color: #0000FF; color:white;font-size: 18px;font-weight: 400;">3分钟在线创建简历</el-button>
    </div>
  </div>

  <div class="job-platform">
    <div class="platform-top">
      <h3>无障碍求职平台</h3>
      <p>我们致力于为广大用户及特殊群体提供无障碍求职服务。</p>
    </div>
    <img src="/images/IndexView2.png">
    <div class="platform-bottom">
      <div class="bottom-left">
        <h3>职位搜索</h3>
        <p>提供多种筛选条件，快速定位合适的职位。</p>
      </div>
      <div class="bottom-right">
        <el-button round style="width: 128px;height: 52px; border-radius: 40px;font-size: 18px;font-weight: 400;">了解更多</el-button>
      </div>
    </div>
  </div>

  <div class="success-cases">
    <h2>我们的成功案例</h2>
    <div class="cases-grid">
      <div class="case-item" v-for="(caseItem, index) in cases" :key="index">
        <img :src="caseItem.image" :alt="caseItem.title" class="case-image">
        <div class="case-content">
          <h3>{{ caseItem.title }}</h3>
          <p>{{ caseItem.description }}</p>
          <div class="tags">
            <span v-for="tag in caseItem.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="login-back" v-if="loginAppear">
    <div class="login-content">
      <img src="/images/logo 1.svg">
      <div class="close-button" @click="loginAppear=false">X</div>
      <h3>登录</h3>
      <input v-model="username" class="username" type="text" placeholder="请输入账号" @keyup.enter="login">
      <input v-model="password" class="password" type="password" placeholder="请输入密码" @keyup.enter="login">
      <div class="login-button">
      <el-button @click="login" type="primary" round style="border-radius: 40px;width: 200px;height: 40px;background-color: #0608E3;font-size: 15px;font-weight: 400;margin-top:30px;">登录</el-button>
        <el-button type="primary" round style="border-radius: 40px;width: 128px;height: 40px;background-color: #0608E3;font-size: 15px;font-weight: 400;">注册</el-button>
        <p>忘记密码</p>
      </div> 
    </div>
  </div> -->

</template>

<script>
export default {
  name: 'SuccessCases',
  data() {
    return {
      loginAppear: false,
      username: '',
      password: '',
      rightUsername: 'elm1122',
      rightPassword: '123456',
      cases: [
        {
          image: '/images/IndexView3.png',
          title: '听障人士的职场逆袭',
          description: '通过提供适合的工作环境和支持，听障人士也能在职场中大展拳脚。',
          tags: ['特殊支持', '职业评估', '就业保障']
        },
        {
          image: '/images/IndexView4.png',
          title: '大龄就业再出发',
          description: '通过精准的职业评估和就业指导，大龄人士也能重新找到适合的工作岗位。',
          tags: ['就业指导', '在线培训', '再就业']
        },
        {
          image: '/images/IndexView5.png',
          title: '孤独症患者的职场融入',
          description: '通过特殊的职业评估和适应性工作环境，孤独症患者也能找到合适的工作。',
          tags: ['职业评估', '就业指导', '适应环境']
        },
        {
          image: '/images/IndexView6.png',
          title: '退伍军人的职场转型',
          description: '为退伍军人提供专业的职业评估和就业指导，帮助他们顺利转型。',
          tags: ['退伍军人', '职业评估', '就业保障']
        },
        {
          image: '/images/IndexView7.png',
          title: '社交障碍的职场适应',
          description: '对有社交障碍的职场人士提供特殊的职业评估和就业支持。',
          tags: ['社交障碍', '职业评估', '就业支持']
        },
        {
          image: '/images/IndexView8.png',
          title: '长期失业者的职场回归',
          description: '通过提供全面的就业支持，帮助长期失业者重新融入职场。',
          tags: ['就业支持', '再就业', '长期失业']
        }
      ]
    };
  },
  methods:{
    scrollToTop(){
      window.scrollTo({
        top:0,
      })
    },
    login(){
      if(this.username===this.rightUsername && this.password===this.rightPassword){
        alert('登录成功')
        this.loginAppear=false
      }
      else{
        alert('用户名或密码错误')
      }
    },
    goToPaper(){
      this.$router.push({name: 'paper'})
    },
  },

};
</script>

<style scoped lang="less">

/deep/ .el-row {
    position: static;
}

.dream-job{
  width: 1280px;
  display: flex;
  justify-content: center;
  margin: 80px;
  margin-top:200px;
  margin-bottom:200px;
}

.job-text{
  width: 836px;
}

.job-text h2{
  margin:0;
  font-size: 48px;
  font-weight: 700;
}

.job-text p{
  font-size: 18px;
  font-weight: 400; 
}

.job-buttons{
  width: 364px;
  height: 99px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.job-platform{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.platform-top h3{
  display: flex;
  justify-content: center;
  font-size: 48px;
  font-weight: 700;
  margin:20px;
}

.platform-top p{
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 400;
  margin-bottom:60px;
}

.job-platform img{
  width:1200px
}

.platform-bottom{
  display: flex;
  justify-content: space-between;
}

.platform-bottom .bottom-left{
  margin-right: 700px;
}

.bottom-left h3{
  font-size: 32px;
  font-weight: 700;
}

.bottom-left p{
  font-size: 16px;
  font-weight: 400;
  color: rgba(134, 144, 156, 1);
}

.bottom-right{
  display: flex;
  align-items: center;
}

.success-cases {
  text-align: center;
  padding: 50px 80px;
}

.success-cases h2 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 50px;
}

.cases-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.case-item {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: calc(33.333% - 20px);
  display: flex;
  flex-direction: column;
  text-align: left;
}

.case-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.case-content {
  padding: 15px;
  flex-grow: 1;
}

.case-content h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.case-content p {
  font-size: 14px;
  margin-bottom: 10px;
  color: #555;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  background: #007bff;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
}

.login-back {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-content {
  background: #fff;
  width: 600px;
  height: 400px;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-content img{
  position: absolute;
  top:60px;
  height: 60px;
  /* left:15px; */
}

.close-button {
  position: absolute;
  font-size: 20px;
  top: 15px; /* 距离顶部 10px */
  right: 15px; /* 距离右侧 10px */
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.close-button:hover {
  background-color: red;
  color:white;
  transition: 0.3s;
}

.login-content h3{
  width: 450px;
  font-size: 30px;
  margin-left: 20px;
}

.login-content input{
  width: 400px;
  height: 25px;
  border-radius: 40px;
  font-size: 18px;
  padding:10px;
  padding-left:20px;
}

.username{
  margin-top: 100px;
  margin-bottom: 20px;
}

.login-button{
  margin: 40px;
  width: 400px;
  /* padding-left:50px;
  padding-right:50px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.login-button p{
  font-size:13px;
  margin-bottom: 5px;
}

</style>