<template>
  <div>
      <div class="problem-container" style="text-align:left;">
        <Category :menu="menu"></Category>
        <div class="problem-header">
            <span style="font-size:28px; color:#585f69;">
            {{problem.title}}
            </span>
        </div>
        <div class="problem-info">
            <table class="info-table">
                <thead>
                    <tr>
                        <th>시간 제한</th>
                        <th>메모리 제한</th>
                        <th>제출</th>
                        <th>정답</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{problem.info.tl}}</td>
                        <td>{{problem.info.ml}}</td>
                        <td>{{problem.info.submit}}</td>
                        <td>{{problem.info.answer}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="problem-contents">
            <div class="headline">
                <h2>문제</h2>
            </div>
            <div class="description">
              <p>{{ problem.data.contents }} </p> 
            </div>
        </div>
        <div class="problem-contents">
            <div class="headline">
                <h2>입력</h2>
            </div>
            <div class="description">
              <p>{{ problem.data.input }} </p> 
            </div>
        </div>
        <div class="problem-contents">
            <div class="headline">
                <h2>출력</h2>
            </div>
            <div class="description">
              <p>{{ problem.data.output }} </p> 
            </div>
        </div>
        <div class="problem-example">
            <div class="ex-console">
                <div class="headline">
                    <h2>예제 입력 1</h2>
                </div>
                <div class="text-console">
                    {{ problem.example[0].input}}
                </div>
            </div>
            <div class="ex-console">
                <div class="headline">
                    <h2>예제 출력 1</h2>
                </div>
                <div class="text-console">
                    {{ problem.example[0].output}}
                </div>
            </div>
        </div>
        <div class="problem-contents">
            <div class="headline">
                <h2>출처</h2>
            </div>
            <div class="description">
              <a :href="problem/reference">{{ problem.reference }} </a> 
            </div>
        </div>
        <div class="problem-reference"></div>
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
            problem :{

            },
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
        var result = require('../problems/1000.json');
        console.log(result);
        this.problem = result;
        this.menu[0].name = result.id+"번";
    }
}
</script>

<style>
.problem-header{
    margin:40px 0px 20px;
    padding-bottom:10px;
    border-bottom:1px solid #ddd;
}
.info-table{
    width:100%;
    margin-bottom:20px;
}
.info-table > thead > tr > th {
    padding : 8px;
    border-bottom: 1px solid #ddd;
}
.info-table > tbody > tr > td {
    padding : 8px;
}
.headline{
    margin: 10px 0px 25px;
    border-bottom: 1px dotted #e4e9f0;
}
.headline > h2{
    font-size: 22px;
    color:#585f69;
    padding:5px;
    margin-bottom: -2px;
    border-bottom: 2px solid #0076C0;
    display:inline-block;
}
.problem-example{
    display: flex;
}
.problem-example > div{
    width:50%;
    padding-right : 15px;
}
.text-console{
    padding:8px;
    background-color:#f7f7f9;
    border : 1px solid #e1e1e8;
    font-size : 18px;
    color : #333333;
}
.description > a {
    text-decoration : none;
    color: #0076C0;
}
@media(max-width: 970px){
    .problem-example{
        display: flex;
        flex-direction: column;
    }
    .problem-example > div{
        width:70%;
        padding-right : 15px;
    }
}
</style>