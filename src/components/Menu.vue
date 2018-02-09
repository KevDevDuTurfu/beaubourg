
<template>
  <div class="menu">
    <h1><img id="title_logo" src="../assets/images/logo_titre.png"/></h1>
    <div>
      <div class="border">

      </div>
      <div class="border blur">

      </div>
      <router-link to="/niveau"><span id="play">&#9655;</span></router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  data () {
    return {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 #title_logo{
  min-width:600px;
  height: auto;
  width: 60%;
  position: absolute;
  top:10%;
  left:20%;
}
@media screen and (max-width:400px) {
  h1 #title_logo{
    min-width:300px;
    left:10%!important;
    }
  .border
  {
    left:24%!important;
    width: 9em;
    height:9em;
  }
  a{
    left:39%!important;
  }
}
@media screen and (min-width: 400px) and (max-width:1024px) {
  h1 #title_logo{
    left:15%!important;
     }
  .border
  {
   left:35%!important;
  }
  a{
    left:41%!important;
  }
}
h2 {
  font-weight: normal;
}
a{
  text-decoration: none;
  background: transparent;
  position: absolute;
  top:45%;
  left:49%;

}
#play{
  font-size:9em;
  color:white;
  background: transparent;
   -webkit-animation: neon1 1.5s linear  infinite alternate;
  -moz-animation: neon1 1.5s linear  infinite alternate;
  -ms-animation: neon1 1.5s linear  infinite alternate;
  animation: neon1 1.5s linear  infinite alternate;
}

.border {
  /* content: ''; */
  width: 12em;
  height:12em;
  position: absolute;
  top:45%;
  left:45%;
  background: transparent;
  border-radius: 50%;
  border: 12px dashed white;
}
.blur {
  width: 13em!important;
  height:13em!important;
  filter:blur(6px);
  top:44.25%;
  left:44.5%;
  margin-left:-7px;
}
@keyframes neon1 {
  from {
    text-shadow: 0 0 20px #fff;
  }
  to {
    text-shadow: 0 0 5px #fff;
  }
}
@-webkit-keyframes neon1 {
  from {
    text-shadow: 0 0 20px #fff;
  }
  to {
    text-shadow: 0 0 5px #fff;
  }
}
@-ms-keyframes neon1 {
 from {
    text-shadow: 0 0 20px #fff;
  }
  to {
    text-shadow: 0 0 5px #fff;
  }
}


</style>
