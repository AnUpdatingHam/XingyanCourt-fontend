<template>

  <div class="find">
    <div class="select">
      <p>筛选科目</p>
      <div class="select-opt" :class="{'active':active===-1}" @click=switchActive2()>全部</div>
      <div class="select-opt" v-for="(opt,index) in options" :key="index" :class="{'active':active===index}" @click="switchActive(index)">
        {{ opt }}
      </div>
    </div>
    <div class="search">
      <input type="text" placeholder="搜索" v-model="state.searchValue">
      <img src="../assets/search.png">
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th>试卷名</th>
        <th>科目</th>
        <th>年级</th>
        <th>考试类型</th>
        <th>页数</th>
        <th>题数</th>
        <th>参考答案</th>
        <th>生成时间</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in displayData" :key="item.id" @click="goToPaper">
        <td>{{ item.name }}</td>
        <td>{{ item.subject }}</td>
        <td>{{ item.grade }}</td>
        <td>{{ item.type }}</td>
        <td>{{ item.pageCount }}</td>
        <td>{{ item.questionCount }}</td>
        <td>{{ item.containAnswer ? '有': '无' }}</td>
        <td>{{ toTime(item.createTime) }}</td>
      </tr>
    </tbody>
  </table>

  <el-pagination 
    :hide-on-single-page="false" 
    v-model:current-page="state.pageNum" 
    :page-sizes="[10]"
    v-model:page-size="state.pageSize" 
    layout="total, sizes, prev, pager, next, jumper" 
    :total="state.total"
    @size-change="handleSizeChange" 
    @current-change="handleCurrentChange" 
    style="float:right">
  </el-pagination>

</template>

<script>
// 引入 Axios 库
import axios from 'axios';

export default{
  data(){
    return{
      userId: 1,
      options: ["语文","数学","英语"],
      active: -1,
      state:{
        pageNum: 1,
        pageSize: 10,
        createTimeEnd: "",
        createTimeStart: "",
        searchValue: "",
        total: 0,    //n
      },
      historyData:[
        // { id: 1, user_id: 0, name: "未命名22", subject: '语文',  grade: '高三', type: '高考', pageCount: 3, questionCount: 34, containAnswer: true, path: "rrr", createTime: [2024,5,6,10,0]},
        // { id: 2, user_id: 0, name: "未命名21", subject: '英语',  grade: '初二', type: '中考', pageCount: 5, questionCount: 44, containAnswer: false, path: "www", createTime: [2024,5,1,8,31]},
      ],
    }
  },
  methods:{
    handleSizeChange(){
      console.log("The size of page changed")
    },
    handleCurrentChange(){
      console.log("The current page changed")
    },
    goToPaper(){
      this.$router.push({name: 'home'})
    },
    switchActive(idx){
      this.active=idx
    },
    switchActive2(){
      this.active=-1
    },
    // 定义一个异步函数来发送 GET 请求
    async getUser() {
      try {
        // 使用 Axios 发送 GET 请求
        //测试获取id为1的用户数据
        const response = await axios.get('http://localhost:8080/user/user/1');
        // 请求成功，'response' 包含了请求的结果
        console.log(response.data); // 打印请求返回的数据
        this.historyData=response.data.data.records
        this.total=response.data.data.total

      } catch (error) {
        // 请求失败，捕获并处理错误
        console.error('Error fetching data:', error);
      }
    },

    //获取历史记录
    async getHistoryItems() {
      try {
        //get请求中特殊的query参数，拼接在路径里
        
        const response = await axios.get('http://localhost:8080/user/user/page', {params: this.queryParams});
        // 请求成功，'response' 包含了请求的结果
        console.log(response.data); // 打印请求返回的数据
        this.historyData=response.data.data.records
        this.total=response.data.data.total

      } catch (error) {
        // 请求失败，捕获并处理错误
        console.error('Error fetching data:', error);
      }
    },

    toTime(array){
      const date=`${array[0]}-${array[1].toString().padStart(2,'0')}-${array[2].toString().padStart(2,'0')}`
      const time=`${array[3].toString().padStart(2,'0')}:${array[4].toString().padStart(2,'0')}`
      return date+' '+time
    },

    // test(){
    //   console.log(this.queryParams)
    // },
  },
  computed:{
    displayData(){
      return this.historyData
    },
    queryParams(){
      return {
        userId: this.userId,
        keyword: this.state.searchValue,
        subject: this.active===-1 ? '' : this.options[this.active],
        page: this.state.pageNum,
        pageSize: this.state.pageSize,
      }
    }
  },
  mounted(){
    //this.getUser()
    this.getHistoryItems()
  }
}
</script>

<style>

.find{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 70px;
  margin-bottom:10px;
}

.find .select{
  display: flex;
}

.find .select p{
  font-size:18px;
}

.select-opt{
  font-size:18px;
  height:33px;
  margin-left:20px;
  border: 1px solid grey;
  border-radius: 5px;
  padding-left:10px;
  padding-right:10px;
}

.select-opt:hover{
  background-color: #E1E1E1;
  transition: 0.3s;
}

.active{
  background-color: #409EFF;
  color:#fff;
}

.active:hover{
  background-color: #1D91E8; 
}

.search{
  display: flex;
  align-items: center;
  margin-right:240px;
}

.search input{
  font-size: 18px;
  padding: 10px;
  padding-left:40px;
  width: 250px;
  border: 2px solid white;
  border-radius: 30px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-right: -240px;
}

.search img{
  width: 30px;
}

table{
  margin: 70px;
  margin-bottom: 20px;
  margin-top: 20px;
}

table th{
  font-size: 20px;
  background-color: #F4F6F8;
  height: 60px;
}

table td{
  font-size: 18px;
  text-align: center;
  height: 40px;
}

table tr:hover{
  background-color: #F6F6F6;
}

.el-pagination {
  margin: auto;
  margin-top: 20px;
}

</style>