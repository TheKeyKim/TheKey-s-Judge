<template>
  <div>
      <table class="table table-bordered">
            <thead>
                <tr>
                    <th class="tableContents" v-for='head in heads' :key='head.name' :style="{width:head.width}">{{head.name}}</th>
                </tr>
            </thead>
            <tbody> 
                <tr v-for="p in column" :key='p.id'>
                    <td class="tableContents" style="" v-for="c in p" :key='c.data'>
                        <div v-bind:style="{color:c.color}" v-bind:class="{ bolder : c.bolder }">
                        <div v-if="c.type == 'd'">
                            {{c.data}}
                        </div>
                        <div class="tablelink" v-if="c.type == 'l'" @click="$router.push(c.url)">
                            {{c.data}}
                        </div>
                        </div>
                    </td>
                </tr>
            </tbody>
      </table>
  </div>
</template>

<script>
export default {
    props : ['heads', 'column'],
    data() {
        return {};
    }
}
</script>

<style>
.table{
    width:100%;
    border : 1px solid #ddd;
    border-collapse: collapse;
}
.table > tbody > tr:nth-child(2n+1){
    background-color : #f9f9f9;
}
.table-bordered > thead > tr > th {
    border : 1px solid #ddd;
}
.table-bordered > tbody > tr > td {
    border : 1px solid #ddd;
}
.tablelink{
    color :#0076C0
}
.tablelink:hover{
    cursor : pointer;
    text-decoration :underline;
}
th{
    color : #333333;
    font-size :13px;
}
td{
    color : black;
    font-size :14px;
}
.tableContents{
    padding : 8px;
    text-align : left;
}
.bolder{font-weight:bold}
</style>