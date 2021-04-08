!<template>
    <div class="category">
      <ul class="classifier">
        <li v-for="m in menu" :key="m.id" >
            <a @click="$router.push(m.url)" :class="{isActive : m.active}">
            {{m.name}}
            </a>  
        </li>
    </ul>

    </div>
</template>

<script>
export default {
    props : ["menu"]
}
</script>

<style>
.category{
    position: relative;
    min-height: 1px;
    /* padding-right: 15px;
    padding-left: 15px; */
}
.classifier{
  margin-top:20px;
  display: flex;
  list-style : none;
  padding-left: 0px;
}
.isActive{
    background-color : #428bca !important;
    color : white !important;
    font-weight : bold !important;
}
.classifier > li > a {
  text-decoration : none;
  padding : 10px 15px 10px 15px;
  font-size : 14px;
  color : black;
  cursor: pointer;
}
.classifier > li > a:hover{
    background-color : rgb(241, 241, 241);
    color : #428bca;
}
</style>