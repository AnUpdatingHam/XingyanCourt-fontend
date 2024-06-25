<template>
  <table>
    <thead>
      <tr>
        <th>科目</th>
        <th>年级</th>
        <th>考试类型</th>
        <th>页数</th>
        <th>题数</th>
        <th>参考答案</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in displayData" :key="item.index" @click="goToPaper">
        <td>{{ item.subject }}</td>
        <td>{{ item.grade }}</td>
        <td>{{ item.exam }}</td>
        <td>{{ item.pageNumber }}</td>
        <td>{{ item.problemNumber }}</td>
        <td>{{ item.answer }}</td>
      </tr>
    </tbody>
  </table>

  <!--  -->
  <el-pagination 
    :hide-on-single-page="false" 
    v-model:current-page="state.pageNum" 
    :page-sizes="[10]"
    v-model:page-size="state.pageSize" 
    layout="total, sizes, prev, pager, next, jumper" 
    :total="state.totalnumber"
    @size-change="handleSizeChange" 
    @current-change="handleCurrentChange" 
    style="float:right">
  </el-pagination>
</template>

<script>
export default{
  data(){
    return{
      state:{
        pageNum: 1,
        pageSize: 10,
        createTimeEnd: "",
        createTimeStart: "",
        searchValue: "",
        totalnumber: 24,    //n
      },
      historyData:[         //n组数据
        { subject: '语文',  grade: '初三', exam: '中考', pageNumber: 3, problemNumber: 30, answer: '有', },
        { subject: '英语',  grade: '初二', exam: '中考', pageNumber: 5, problemNumber: 44, answer: '无', },
        { subject: '数学',  grade: '高一', exam: '高考', pageNumber: 2, problemNumber: 12, answer: '有', },
        { subject: '语文',  grade: '初三', exam: '中考', pageNumber: 3, problemNumber: 30, answer: '有', },
        { subject: '英语',  grade: '初二', exam: '中考', pageNumber: 5, problemNumber: 44, answer: '无', },
        { subject: '数学',  grade: '高一', exam: '高考', pageNumber: 2, problemNumber: 12, answer: '有', },
        { subject: '语文',  grade: '初三', exam: '中考', pageNumber: 3, problemNumber: 30, answer: '有', },
        { subject: '英语',  grade: '初二', exam: '中考', pageNumber: 5, problemNumber: 44, answer: '无', },
        { subject: '数学',  grade: '高一', exam: '高考', pageNumber: 2, problemNumber: 12, answer: '有', },
        { subject: '语文',  grade: '初三', exam: '中考', pageNumber: 3, problemNumber: 30, answer: '有', },
        { subject: '英语',  grade: '初二', exam: '中考', pageNumber: 5, problemNumber: 44, answer: '无', },
        { subject: '数学',  grade: '高一', exam: '高考', pageNumber: 2, problemNumber: 12, answer: '有', },
        { subject: '语文',  grade: '初三', exam: '中考', pageNumber: 3, problemNumber: 30, answer: '有', },
        { subject: '英语',  grade: '初二', exam: '中考', pageNumber: 5, problemNumber: 44, answer: '无', },
        { subject: '数学',  grade: '高一', exam: '高考', pageNumber: 2, problemNumber: 12, answer: '有', },
        { subject: '语文',  grade: '初三', exam: '中考', pageNumber: 3, problemNumber: 30, answer: '有', },
        { subject: '英语',  grade: '初二', exam: '中考', pageNumber: 5, problemNumber: 44, answer: '无', },
        { subject: '数学',  grade: '高一', exam: '高考', pageNumber: 2, problemNumber: 12, answer: '有', },
        { subject: '语文',  grade: '初三', exam: '中考', pageNumber: 3, problemNumber: 30, answer: '有', },
        { subject: '英语',  grade: '初二', exam: '中考', pageNumber: 5, problemNumber: 44, answer: '无', },
        { subject: '数学',  grade: '高一', exam: '高考', pageNumber: 2, problemNumber: 12, answer: '有', },
        { subject: '语文',  grade: '初三', exam: '中考', pageNumber: 3, problemNumber: 30, answer: '有', },
        { subject: '英语',  grade: '初二', exam: '中考', pageNumber: 5, problemNumber: 44, answer: '无', },
        { subject: '数学',  grade: '高一', exam: '高考', pageNumber: 2, problemNumber: 12, answer: '有', },
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
    }
  },
  computed:{
    displayData(){
      return this.historyData.slice((this.state.pageNum-1)*this.state.pageSize , this.state.pageNum*this.state.pageSize)
    }
  }
}
</script>

<style>

table{
  padding: 70px;
  padding-bottom: 0px;
}

table th{
  font-size: 22px;
  background-color: #F4F6F8;
  height: 80px;
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
}

</style>