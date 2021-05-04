<template>
  <div>
      <div class="problem-container" style="text-align:left;">
        <Category :menu="menu"></Category>
        <div class="problem-header">
            <span style="font-size:28px; color:#585f69;">
            {{problem.title}}
            </span>
        </div>
        <div >
            <input type="hidden" :value="problem.id" name="problem_id"/>
            <div class="form-group">
                <label class="submit-label">
                    언어
                </label>
                <div class="submit-content">
                    <select v-model="form.language" id="language" name="language" data-placeholder="언어를 선택해 주세요" class="language-select" data-no_results_text="없는 언어 입니다">
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
                    spellcheck = "false" 
                    onkeydown="if(event.keyCode===9){var v=this.value,s=this.selectionStart,e=this.selectionEnd;this.value=v.substring(0, s)+'\t'+v.substring(e);this.selectionStart=this.selectionEnd=s+1;return false;}"
                    type="textarea"
                    :autosize="{ minRows: 20, maxRows: 30}"
                    placeholder="Code here"
                    v-model="form.code">
                    </el-input>
                </div>
            </div>
            <div class="form-group">
                <label class="submit-label">
                </label>
                <div class="submit-content">
                <button @click="submit_code" type="submit" class="btn_login" style="cursor:pointer">제출</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from "vuex"
import Category from "../components/Category";
import router from "../router/index";
import { problemAPI } from "../utils/axios";

export default {
    components : {
        Category
    },
    computed: {
        ...mapState(["user"])
    },
    data(){
        return {
            form : {
                code : "",
                language : "0",
                problem_id : "",
                submit_id : ""
            },
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
  methods:{
    async submit_code() {
        const {user_id, password} = this.form;
        //todo getting login information and do submit
        this.form.problem_id = this.id;
        this.form.submit_id = 0;
        var {problem_id, language, code} = this.form;
        const ret = await problemAPI.submit_id(problem_id);
        console.log(ret);
        const {status, submit_id} = ret.data;
        console.log(status, submit_id);
        code = code.replace(/\\/g, "\\\\\\");
        code = code.replace(/"/g, "\\\"");
        const result = await problemAPI.submit(submit_id, problem_id, language, code);

        router.push("/mysubmit/"+String(this.id));    
    }
    },
    mounted(){
        this.id = this.$route.params.id;
        const problem_id = this.id;

        this.menu[0].name = problem_id+"번";
        console.log(this.menu[0].name);
        this.menu[0].url = "/problem/" + String(problem_id);
        this.menu[1].url = "/submit/"+String(problem_id);
        this.menu[2].url = "/mysubmit/"+String(problem_id);

        if( ! this.user.name){
            alert("로그인이 필요합니다.")
            router.push(this.menu[0].url);
        }
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