
<template>
  <div class="menu">
    <h1><img id="title_logo" src="../assets/images/logo_titre.png"/></h1>

    <div class="border">

    </div>
    <router-link to="/niveau"><span id="play">&#9655;</span></router-link>

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
  /*animation: Rotate 5s linear 2s infinite ;
 -webkit-animation:Rotate 5s linear 2s infinite ;
  -moz-animation: Rotate 5s linear 2s infinite ;
  -ms-animation: Rotate 5s linear 2s infinite;*/
  -webkit-animation: neonbox 15s linear  infinite ;
  -moz-animation: neonbox 15s linear  infinite ;
  -ms-animation: neonbox 15s linear  infinite ;
  animation: neonbox 15s linear  infinite ;

}
@keyframes Rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes Rotate {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-moz-keyframes Rotate {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
@-ms-keyframes Rotate {
  from {
    -ms-transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
  }
}
@keyframes neon1 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de;
  }
}
@-webkit-keyframes neon1 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de;
  }
}
@-ms-keyframes neon1 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de;
  }
}
@keyframes neonbox {
  from {
    transform: rotate(0deg);
    box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
  }
  to {
    transform: rotate(360deg);
    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de;
  }
}
@-webkit-keyframes neonbox {
  from {
    transform: rotate(0deg);
    box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
  }
  to {
    transform: rotate(360deg);
    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de;
  }
}
@-ms-keyframes neonbox {
  from {
     transform: rotate(0deg);
    box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
  }
  to {
     transform: rotate(360deg);
    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de;
  }
}
</style>
