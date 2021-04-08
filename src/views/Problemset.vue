<template>
  <div>
    <div class="problem-container">
      <Category :menu="menu"></Category>
    </div>
  </div>
</template>

<script>
import {userAPI} from "../utils/axios";
import Category from "../components/Category.vue";
export default {
  components : {
    Category
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
    }
  },
  methods:{
    
  },
  async mounted(){

  }
}
</script>

<style>
.problem-container{
  margin-left: auto;
  margin-right: auto;
  padding : 40px 15px 40px 15px;
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
    width: 1170px;
  }
}
</style>