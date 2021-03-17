<template>
    <div class="nav-wrapper">
        <div class="topbar">
            <div @click="$router.push('/signin')">회원가입</div>
            |
            <div @click="$router.push('/login')">로그인</div>
        </div>
        <div>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
            text-color=#687674
            active-text-color=#0076C0
            >
            <el-menu-item index="1" @click="$router.push('/')" style="border-bottom: transparent">
                <a >
                    <img class="logo" src="../assets/logo.png">
                </a>
            </el-menu-item>
            <el-menu-item id="problemset" index="2" @click="$router.push('/problemset')">
                문제집
            </el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
    data(){
        return {};
    },
    computed: {
        ...mapState(["user"]),
    },
    methods : {

    }
}
</script>

<style>
.logo {
    height: 60px;
}
.nav-wrapper {
    display:flex;
    flex-direction:column;
}
#problemset{
    padding: 9px 20px 9px 15px;
    font-size : 20px;
}
.topbar{
    position: absolute;
    z-index : 8;
    right : 15px;
    margin-right: 132px;
    color : #7c8082;
    font-size:11px;
    display:flex;
}
.topbar div {
    padding:0px 10px 0px 10px;
    cursor:pointer;
    
}
.topbar div:hover{
    text-decoration:underline;
}
</style>