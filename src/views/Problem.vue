<template>
  <div>
      <div class="problem-container">
        <Category :menu="menu"></Category>
        problem
      </div>
  </div>
</template>

<script>
import Category from "../components/Category";

export default {
    components : {
        Category
    },
    data(){
        return {
            id : 0,
            menu : [
            {
                id : 0,
                name : '문제',
                url : "",
                active : true
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
                active : false
            }   
            ]
        };
    },
    mounted(){
        this.id = this.$route.params.id;
    }
}
</script>

<style>

</style>