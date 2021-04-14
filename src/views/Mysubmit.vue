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
                name : '문제',
                url : "",
                active : false
            },
            {
                id : 1,
                name : '제출',
                url : "",
                active : false
            },
            {
                id : 2,
                name : '내 제출',
                url : "",
                active : true
            }   
      ],
      heads : [
        {
          name : '문제',
          width : '10%'
        },
        {
          name : '결과',
          width : '50%'
        },
        {
          name : '언어',
          width : '20%'
        },
        {
          name : '제출시간',
          width : '7%'
        }
      ],
      contents : [
        [
          {
            data:1000,
            type:'l',
            url:'',
          },
          {
            data:'업데이트중',
            type:'l',
            url:'',
          },
          {
            data:'C++',
            type:'d',
            url:'',
          },
          {
            data:'1일 전',
            type:'d',
            url:'',
          }
        ]
      ]
    }
  },
  methods:{
    
  },
  async mounted(){
    this.id = this.$route.params.id;
    var result = require('../problems/'+this.id+'.json');
    this.problem = result;
    this.menu[0].name = result.id+"번";
    this.contents[0][0].url = "/problem/" + String(this.problem.id);
    this.menu[0].url = "/problem/" + String(this.problem.id);
    this.menu[1].url = "/submit/"+String(this.problem.id);
    this.menu[2].url = "/mysubmit/"+String(this.problem.id);

    const data = await problemAPI.status();
    console.log(data);
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