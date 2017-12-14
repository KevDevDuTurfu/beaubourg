<script>
export default {
  name: 'Menu',
  data () {
    return {
      title: '< Choisissez votre niveau />',
    }
  },

}
</script>
<template>
  <div class="menu">
    <h1>{{ title }}</h1>
    <h2>{{subtitle}}</h2>
    <div class="block_lvl"> 
      <div class="link_lvl lvl1"> <router-link to="/">Niveau 1</router-link></div>
      <div class="link_lvl lvl2"> <router-link to="/">Niveau 2</router-link></div>
      <div class="link_lvl lvl3"> <router-link to="/">Niveau 3</router-link></div>
    </div>
  </div>

</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  width:100%;
  text-align: center!important;
  font-weight: normal;
  font-family: 'Play', sans-serif;
  color: white;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: white;
}
.block_lvl
{
  width: 100%;
  text-align: center;
}
.link_lvl
{
  display:inline-block;
}
.link_lvl lvl1
{
  height:200px;
}
.link_lvl lvl2
{

}
.link_lvl lvl3
{

}
</style>
