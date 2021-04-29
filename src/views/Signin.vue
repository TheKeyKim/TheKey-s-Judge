<template>
  <div class="signin-wrapper">
    <div class = "header-wrapper">
      <div class="container">
        <h1 class="pull-left"> 회원가입 </h1>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="signin-box-wrapper">
        <div class="signin-box">
          <form class="signin-form" :model="form" onsubmit="return false;">
            <div class="signin-header">
              <h2 class="h2-signin">회원가입</h2>
            </div>
            <div style="width:100%; text-align:left">
              아이디
            </div>
            <div class="input-style">
              <input v-model="form.user_id" type="text" class="input-string2">
            </div>
            <div style="width:100%; text-align:left">
              비밀번호
            </div>
            <div class="input-style">
              <input v-model="form.password"  type="password" class="input-string2">
            </div>
            <div style="width:100%; text-align:left">
              이메일
            </div>
            <div class="input-style">
              <input v-model="form.user_email" type="email" class="input-string2">
            </div>
            <div style="width:100%; text-align:left">
              이름
            </div>
            <div class="input-style">
              <input v-model="form.user_name" type="text" class="input-string2">
            </div>
            <div class="row" style="float:right">
              <button @click="signin" type="submit" class="btn_signin" style="cursor:pointer">회원가입</button>
            </div>
          </form>
            <div class="signin-footer">
              비밀번호는 암호화되어 저장됩니다.
              <div v-if="status" class="footer-content" style="color:#E74C3C;">
                {{status}}
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState, mapMutations} from "vuex"
import router from "../router/index";
import {userAPI} from "../utils/axios";

export default {
  data(){
    return{
      status : "",
      form : {
        "user_id" : "",
        "password" : "",
        "user_name" : "",
        "user_email" : "",
      }
    }
  },
  computed: {
    ...mapState(["user"])
  },
  methods:{
    ...mapMutations(["SET_USER"]), 
    async signin(){
      const {user_id, password, user_name, user_email } = this.form;
      const iddup = await userAPI.idDuplicate(user_id);
      const emaildup = await userAPI.emailDuplicate(user_email);
      this.status = "";
      if(iddup['data'].data) {
        this.status = "이미 존재하는 ID입니다."
        return 0;
      }
      else if(emaildup['data'].data) {
        this.status += "이미 존재하는 email입니다."
        return 0;
      }
      else{
        const ret = await userAPI.register(user_name, user_email, password, user_id);
        if(ret['data'].status == "OK"){
          alert("회원가입 되었습니다!");
          router.push("/");
        }
      }
    }
  },
  mounted(){
    if(this.user.name) router.push("/");
    console.log(this.user);
  }
}
</script>

<style>
.header-wrapper{
  overflow: hidden;
  border-bottom: solid 1px #eee;
  background: url("../assets/breadcrumbs.png") repeat;
  padding : 10px 15px 10px 15px;
}
.signin-wrapper{
  display:flex;
  flex-direction:column;
}
.signin-header{
  margin-bottom: 35px;
  border-bottom: solid 1px #eee;
}
.content-wrapper{
  display:flex;
  justify-content:center;
  border-top: 1px solid #eee;
  padding-bottom: 40px;
}
.container{
    padding-right: auto;
    padding-left: auto;
    margin-right: auto;
    margin-left: auto;
}
.pull-left{
  float : left;
  font-size:22px;
  color:#666;
  margin-top:8px;
  font-weight: normal;
  margin-left : 30px;
}
.signin-box-wrapper{
  margin-top:40px;
  width: 360px;
  border:1px solid #eee;
  box-shadow: 0 0 3px #eee;
}
.signin-box{
  padding : 30px;
}
.h2-signin{
  color:#585f69;
  font-weight: normal;
}
.input-style{
  width : 100%;
  display:flex;
  flex-direction:row;
  margin-bottom: 20px;
}
.input-image{
  border:1px solid #ccc;
  width: 46px;
  height: 32px;
  display:flex;
  justify-content:center;
  align-items: center;
}
.input-image  img{
  width : 13px;
  height : 14px;
}
.input-string2{
  width:100%;
  border :1px solid #ccc;
  padding : 6px 12px;
  font-size : 15px;
}
.input-string:focus{
  outline : 1px solid rgb(173, 170, 170);
  box-shadow: 0 0 5px rgb(182, 182, 182);
}
.row{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.btn_signin{
  width :63px;
  height : 34px;
  background-color : #0076C0;
  color : white;
  border : 0px;
  font-weight:bold;
  font-size: 14px;
}
.chk{
  font-size : 12px;
}
.signin-footer{
  display:flex;
  flex-direction:column;
  justify-self: flex-start;
  align-items: flex-start;
  margin-top : 70px;
  border-top:1px solid #ccc;
  padding-top : 20px;
  font-size : 14px;
}
.footer-content{
  margin-bottom: 10px;
}
.footer-content a{
  text-decoration : none;
  color : #0076C0;
}
@media(min-width: 1200px){
  .container{
    width:1170px;
  }
}
</style>