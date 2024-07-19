<template>
  <div class="container">
    <div class="parameters">
      <!-- 参数调节区域，根据需要添加表单元素 -->
      <form @submit.prevent="submitParameters">

        <!-- 选项 -->
        <div class="select">
          <div class="select-item" v-for="(item,index) in items" :key="index">
            <div class="select-row">
              <p>{{ item.name }}</p>
              <div class="select-opt" v-for="(opt,optionIndex) in item.opts" :key="optionIndex" :class="{'active':actives[index]===optionIndex}" @click="switchActive(index,optionIndex)">
                {{ opt }}
              </div>
            </div>
          </div>
        </div>

        <!-- 自定义参数 -->
        <div class="defines">
          <div class="define">
            <label for="pageNumber">页数:</label>
            <input type="text" id="pageNumber" v-model="store.paper.pageCount">
          </div>
          <div class="define">
            <label for="problemNumber">题数:</label>
            <input type="text" id="problemNumber" v-model="store.paper.questionCount">
          </div>
        </div>
        <div class="answer-attach">
          <label for="answer">是否附带参考答案：</label>
          <input type="checkbox" id="answer" v-model="store.paper.containAnswer">
        </div>
        <div class="supplement">
          <label for="supplement">自定义补充词条:</label>
          <input type="text" id="supplement" v-model="store.paper.supplement">
        </div>

        <!-- 命名 -->
        <div class="name">
          <label for="name">给试卷命名</label>
          <input type="text" id="name" v-model="store.paper.name">
        </div>

        <!-- 词条预览 -->
        <div class="entry-preview">
          词条预览
          <textarea type="text" disabled v-model="entryPreview"></textarea>
        </div>

        <button class="submit" type="submit" @click="generatePaper">生成</button>
      </form>
    </div>

    <div class="preview">
      <h3>在线预览</h3> 
      <iframe :src="`./src/rear-end/user_pdfs/${store.paper.filepath}`"></iframe>
<!--      src/assets/preview2.pdf-->
      <!-- <img src="src/assets/a11.jpeg" > -->
    </div>
    
  </div>
</template>

<!-- <script src="pdf.js"></script>
<script src="pdf.worker.js"></script> -->
<!-- <script src="node_modules/pdfjs-dist/build/pdf.min.js"></script> -->
<script>

// import pdf from "https://mozilla.github.io/pdf.js/build/pdf.js"

import {store} from "@/stores/store";
import {ref, watch} from "vue";
import axios from "axios";
import {ElMessage} from "element-plus";
import {constant} from "@/stores/constant";

//保存用户信息到cookie
const setCookies = () => {
  Object.keys(store.paper).forEach((key) => $cookies.set(key, store.paper[key]))
}
//监听登录信息，修改cookies
watch(() => store.paper, () => {
  setCookies()
}, {deep: true})

export default {
  data() {
    return {
      items:[
        {name: '科目', opts:['语文','数学','英语','物理','历史','化学','生物','地理','政治']},
        {name: '年级', opts:['一','二','三','四','五','六']},
        {name: '学习阶段', opts:['小学','初中','高中','大学','研究生','CET4考试','CET6考试']}
      ],
      actives: [-1,-1,-1],
      size: '',
      // 其他参数
    };
  },
  methods: {
    submitParameters() {
      // 处理参数提交逻辑
      console.log('Parameters submitted:', this.parameter1, this.parameter2);
      // 这里可以添加代码将参数发送到服务器或其他逻辑
    },
    switchActive(idx,idx2){
      if(this.actives[idx]!==idx2)
        this.actives[idx]=idx2
      else 
        this.actives[idx]=-1
    },
    async generatePaper(){
      try {
        const bodyParams = {
          userId: store.user.id,
          name: store.paper.name,
          subject: this.items[0].opts[this.actives[0]],
          grade: this.items[1].opts[this.actives[1]],
          type: this.items[2].opts[this.actives[2]],
          containAnswer: store.paper.containAnswer,
          pageCount: store.paper.pageCount,
          questionCount: store.paper.questionCount,
          supplement: store.paper.supplement,
          instruction: this.entryPreview,
        }
        // 使用 Axios 发送 POST 请求，并包含 JSON 数据
        const response = await axios.post(`${constant.host}/user/AI/PDF/create`,
            bodyParams,
            {
              // 设置请求头，指明内容类型为 JSON
              headers: {
                'Content-Type': 'application/json'
              }
            });
        if(response.data.code===1){
          ElMessage.success("生成成功")
          console.log("ret = " + JSON.stringify(response))
          store.paper.filepath = response.data.data.filepath
        }
        else{
          ElMessage.error(response.data.msg)
        }
      } catch (error) {
        // 请求失败，捕获并处理错误
        console.error('Error update user:', error);
      }
    }
  },
  computed:{
    store() {
      return store
    },
    entryPreview(){
      let subject=this.items[0].opts[this.actives[0]]
      let grade=this.items[1].opts[this.actives[1]]
      let level=this.items[2].opts[this.actives[2]]
      let ret=''
      if(level && subject){
        ret+='请你严格按照'+level+'考试的格式，帮我生成一份名为' + store.paper.name + '的'+subject+'学科的'+level+grade+'年级试卷'
        if(store.paper.pageCount)
          ret+='，页数为：'+store.paper.pageCount
        if(store.paper.questionCount)
          ret+='，题数为：'+store.paper.questionCount
        if(store.paper.containAnswer)
          ret+='，生成一张试题卷后附带生成一张答案卷'
        else
          ret+='，不附带答案'
        if(store.paper.supplement)
          ret+='，另外，'+store.paper.supplement
      }
      return ret
    }
  },
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 200%;
}

.preview {
  width: 50%;
  padding: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.preview h3{
  font-size: 25px;
  font-weight: 1000;
}

.preview iframe{
  margin-top: 20px;
  height: 600px;
}

.preview img{
  padding:30px;
}

.parameters {
  width: 50%;
  padding: 20px;
  box-sizing: border-box;
}

form {
  padding:50px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
}

.select-row{
  display: flex;
  margin-bottom: 20px;
}

.select-opt{
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

.submit {
  margin-top: 20px;
  background-color: #409EFF;
  border:none;
  color:#fff;
  font-size: 18px;
  border-radius: 20px;
  height: 40px;
}

.submit:hover {
  background-color: #1D91E8; 
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
}

.defines{
  display: flex;
  margin-bottom:20px;
}

.define{
  margin-right:37px;
}

.define input{
  margin-left:10px;
  height: 30px;
  font-size:18px;
  width: 70px;
}

.answer-attach{
  display: flex;
  gap:20px;
  margin-bottom: 20px;
}

.answer-attach input{
  width: 25px;
}

.name input{
  margin-left:10px;
  height: 30px;
  font-size:18px;
  width: 500px;
}

.supplement{
  margin-bottom: 20px;
}

.supplement input{
  margin-left:10px;
  height: 30px;
  font-size:18px;
  width: 500px;
}

.supplement input{
  margin-left:10px;
  height: 30px;
  font-size:18px;
  width: 500px;
}

.entry-preview{
  margin-top:20px;
  display: flex;
  flex-direction: column;
}

.entry-preview textarea{
  font-size:16px;
  padding:15px;
  margin-top:10px;
  width: 500px;
  height: 120px;
  text-indent:18px;
}
</style>