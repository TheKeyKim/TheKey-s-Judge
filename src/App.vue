<template>
  <div id="app">
    <div id="nav">
      <NavMenu></NavMenu>
    </div>
    <router-view class="view" />
    <Footer></Footer>
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu.vue";
import Footer from "./components/Footer.vue";
export default{
  components : {
    NavMenu,
    Footer
  },
  beforeMount(){
    document.title = "TheKey's Judge"
  }
}
</script>

<style>
#app {
  font-family: 'Open Sans', 'Apple SD Gothic Neo', 'Noto Sans CJK KR', 'Noto Sans KR', '나눔바른고딕', '나눔고딕', '맑은고딕', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1, h2, h3, h4, h5, h6 {
    color: #585f69;
    margin-top: 5px;
    text-shadow: none;
    font-weight: normal;
    font-family: 'Open Sans', sans-serif;
}

#nav {
  flex:direction;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.view{
  min-height: 80vh;
}
</style>
