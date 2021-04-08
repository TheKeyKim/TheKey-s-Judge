!<template>
    <div>
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
.classifier{
  margin-top:20px;
  width: 83.3333%;
  display: flex;
  list-style : none;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
.isActive{
    background-color : #428bca !important;
    color : white !important;
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