<template>
  <el-row style="width: 100%;height: 700px;background-image: url('@/assets/bg.svg');background-repeat: no-repeat;">
    <el-col :span="12"  style="width: 50%; display: flex;flex-direction: column;justify-content: center;align-items: center;">
      <h2 style="font-size:60px;font-weight:1000;margin-bottom: 20px;" >星焱文卷庭</h2>
      <p style="margin-bottom:40px;font-size: 18px;font-weight: 400;">更加智能的试卷生成服务</p>
      <div>
        <el-button type="primary" round style="border-radius: 40px;width: 128px;height: 52px;background-color: #0608E3;font-size: 18px;font-weight: 400;" @click="goToPaper">创建试卷</el-button>
      </div>
    </el-col>
    <el-col :span="12" style="width: 50%; display: flex;align-items: center;justify-content: center;">
      <img class="image1" src="@/assets/test1.jpeg">
      <img class="image2" src="@/assets/test2.jpg">
      <img class="image3" src="@/assets/test3.jpg">
    </el-col>
  </el-row>

</template>

<script>

export default {
  methods:{
    goToPaper(){
      this.$router.push({name: 'paper'})
    },
  },
  computed:{
  }

};
</script>

<style scoped>

.el-row {
    position: static;
}

img{
  border-radius: 40px;
  border: 10px solid #ffffff;
  position: absolute;
}

.image1{
  width:500px;
  margin-top:250px;
  margin-right:250px;
}

.image2{
  width:400px;
  margin-bottom:280px;
}

.image3{
  width:450px;
  margin-top:220px;
  margin-left:230px;
}


</style>