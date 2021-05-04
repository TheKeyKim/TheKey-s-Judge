<template>
  <div>
    <div class="problem-container">
      <Category :menu="menu"></Category>
      <Table :heads="heads" :column="contents"></Table>
    </div>
  </div>
</template>

<script>
import {userAPI, problemAPI} from "../utils/axios";
import Category from "../components/Category.vue";
import Table from "../components/Table.vue";
export default {
  components : {
    Category,
    Table
  },
  data(){
    return {
      name : "",
      login_id : "",
      password : "",
      email : "",
      menu : [
        {
          id : 0,
          name : '전체',
          url : "./problemset",
          active : true
        },
        {
          id : 1,
          name : '문제집',
          url : "./problemset",
          active : false
        }
      ],
      heads : [
        {
          name : '문제',
          width : '10%'
        },
        {
          name : '문제 제목',
          width : '50%'
        },
        {
          name : '정보',
          width : '20%'
        },
        {
          name : '맞은 사람',
          width : '7%'
        },
        {
          name : '제출',
          width : '5%'
        },
        {
          name : '정답 비율',
          width : '8%'
        },
      ],
      contents : [
        [
          {
            data:1000,
            type:'d',
            url:'',
          },
          {
            data:'A+B',
            type:'l',
            url:'./problem/1000',
          },
          {
            data:[],
            type:'a',
            url:'',
          },
          {
            data:120424,
            type:'l',
            url:'',
          },
          {
            data:389354,
            type:'l',
            url:'',
          },
          {
            data:'43.688%',
            type:'d',
            url:'',
          }
        ]
      ]
    }
  },
  methods:{
    async getProblemInfo(page){
      const result = await problemAPI.problemList(page);
      const arr = result.data.problemArray;
      const status = result.data.status;
      if(status == "OK"){
        this.contents = []
        for(let i=0; i<arr.length; i++){
        var tmp = [
          {
            data:arr[i]['problem_id'],
            type:'d',
            url:'',
          },
          {
            data:arr[i]['name'],
            type:'l',
            url:`./problem/${arr[i]['problem_id']}`,
          },
          {
            data:[],
            type:'a',
            url:'',
          },
          {
            data:120424,
            type:'l',
            url:'',
          },
          {
            data:389354,
            type:'l',
            url:'',
          },
          {
            data:'43.688%',
            type:'d',
            url:'',
          }
          ]
          this.contents.push(tmp)
        }
      }
    }
  },
  async mounted(){
    this.getProblemInfo(0);
  }
}
</script>

<style>
.problem-container{
  margin-left: auto;
  margin-right: auto;
  width: 83.3333%;
  padding : 40px 15px 70px 15px;
}
@media(min-width: 768px){
  .problem-container{
    width: 750px;
  }
}
@media(min-width: 992px){
  .problem-container{
    width: 970px;
  }
}
@media(min-width: 1200px){
  .problem-container{
    width: 1070px;
  }
}
</style>