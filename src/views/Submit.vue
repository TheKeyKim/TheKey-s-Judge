<template>
  <div>
      <div class="problem-container" style="text-align:left;">
        <Category :menu="menu"></Category>
        <div class="problem-header">
            <span style="font-size:28px; color:#585f69;">
            {{problem.title}}
            </span>
        </div>
        <form action method="post">
            <input type="hidden" :value="problem.id" name="problem_id"/>
            <div class="form-group">
                <label class="submit-label">
                    언어
                </label>
                <div class="submit-content">
                    <select id="language" name="language" data-placeholder="언어를 선택해 주세요" class="language-select" data-no_results_text="없는 언어 입니다">
                        <option value="0"> C++ </option>
                        <option value="1"> JAVA </option>
                        <option value="2"> Python </option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label class="submit-label">
                    소스코드
                </label>
                <div class="submit-content">
                    <el-input
                    onkeydown="if(event.keyCode===9){var v=this.value,s=this.selectionStart,e=this.selectionEnd;this.value=v.substring(0, s)+'\t'+v.substring(e);this.selectionStart=this.selectionEnd=s+1;return false;}"
                    type="textarea"
                    :autosize="{ minRows: 20, maxRows: 30}"
                    placeholder="Code here"
                    v-model="code">
                    </el-input>
                </div>
            </div>
            <div class="form-group">
                <label class="submit-label">
                </label>
                <div class="submit-content">
                <button type="submit" class="btn_login" style="cursor:pointer">제출</button>
                </div>
            </div>
        </form>
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
            code : "",
            problem :{

            },
            id : 0,
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
                active : true
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
        var result = require('../problems/'+this.id+'.json');
        this.problem = result;
        this.menu[0].name = result.id+"번";
        this.menu[0].url = "/problem/" + String(this.problem.id);
        console.log(this.menu);
    }
}
</script>

<style>
.form-group {
    margin-bottom:15px;
    display:flex;
    flex-direction:column;
}
.submit-label {
    text-align: left;
    cursor : default;
    display : inline-block;
    padding : 7px 15px 0px;
    font-size :13px;
    color : #333333;
    font-weight : 700;
}
.submit-content{
    padding : 0px 15px;
    margin : 7px 0px 0px;
    width : 100%;
}
#language{
    width : 132px;
    padding : 0px 15px;
    height : 22px;
    border-radius: 0px;
}
.code{
    height : 350px;
    width : 100%;
    text-align: top;
}

@media(min-width: 992px){
    .form-group{
        flex-direction:row;
    }
    .submit-label {
        width : 16.667% !important;
        text-align: right;
    }
}
@media(min-width: 768px) {
    
}
</style>