<template>
  <div>
    <div class="problem-container">
      <Category :menu="menu"></Category>
      <Table :heads="heads" :column="contents"></Table>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from "vuex"
import {userAPI, problemAPI} from "../utils/axios";
import Category from "../components/Category.vue";
import Table from "../components/Table.vue";
import router from "../router/index";

function parseDate(s){
  var ret = ""
  ret += s.substring(2, s.indexOf('T'))
  return ret
}

export default {
  components : {
    Category,
    Table
  },
  computed: {
      ...mapState(["user"])
  },
  data(){
    return {
      intervalid1:'',
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
          name : '제출번호',
          width : '10%'
        },
        {
          name : '문제',
          width : '10%'
        },
        {
          name : '결과',
          width : '40%'
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
            data:1000,
            type:'l',
            url:'',
          },
          {
            data:'업데이트중',
            type:'d',
            url:'',
            color:''
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
  beforeDestroy () {
    clearInterval(this.intervalid1);
  },
  methods:{
    async update(){
      const stat = ['대기 중', '채점 중', '맞았습니다!', '런타임 에러', '시간 초과', '틀렸습니다', '컴파일 에러']
      const color_arr = ['#A49E9E', '#E67E22', '#009874', '#5F4B8B', '#FA2768', '#DD4124', '#0f4781']
      const lang = ['C++', 'Java', 'Python3']
      var data = await problemAPI.status(this.problem.id);
      data = data['data']['data']
      const tmp = []
      for(let i=0; i< data.length ; i++){
        const {submit_id, problem_id, language, status, createdAt} = data[i];
        const color = color_arr[status];
        var bolder = false;
        if(status == 2) bolder = true;
        tmp.push([
            {
              data:submit_id,
              type:'l',
              url:'',
            },
            {
              data:problem_id,
              type:'l',
              url:'',
            },
            {
              data:stat[status],
              type:'d',
              url:'',
              color:color,
              bolder:bolder
            },
            {
              data:lang[language],
              type:'d',
              url:'',
            },
            {
              data: parseDate(createdAt),
              type:'d',
              url:'',
            }
        ]);
      }
      this.contents = tmp;
    },
    todo : function(){
      const self = this;
      this.intervalid1 = setInterval(function(){
        self.update();
      }, 1000);
    },
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

    if( ! this.user.name){
        alert("로그인이 필요합니다.");
        router.push(this.menu[0].url);
        return 0;
    }
    this.todo();
  },
  created(){
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