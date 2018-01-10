<script>
import Settings from './components/Settings.vue';
export default {
  name: 'app',
  data(){
    return {
      showOptions:false
    }
  },
  components: {
    'settings': Settings
  }
}

</script>

<template>
  <div id="app">
      <div class="settings"  @click="showOptions=true"><i class="fa fa-cog" aria-hidden="true"></i></div>
      
        <settings v-if="showOptions" @close="showOptions=false"></settings>

      <router-view class="view"></router-view>
  </div>
</template>


<style>

*{
  margin:0;
  padding:0;
}
.settings {
  position: absolute;
  top:0;
  right:0;
color:#ffffff;
  text-decoration: none;
  line-height: 12px;
  padding: 0.25em;
  font-size:45px;
   text-shadow: 0 0 20px #fff;
}
body{
 background: royalblue;
  background-image: -webkit-linear-gradient(270deg, mediumslateblue,royalblue, deepskyblue); /* For Chrome 25 and Safari 6, iOS 6.1, Android 4.3 */
  background-image:    -moz-linear-gradient(270deg, mediumslateblue,royalblue, deepskyblue); /* For Firefox (3.6 to 15) */
  background-image:      -o-linear-gradient(270deg, mediumslateblue,royalblue, deepskyblue); /* For old Opera (11.1 to 12.0) */ 
  background-image:         linear-gradient(270deg, mediumslateblue,royalblue, deepskyblue);/* Standard syntax; must be last*/

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}

.btn-command{
    color:white;
    font-size: 45px;
    text-shadow: 0 0 10px white;
}
fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
.bubble{
  cursor: pointer;
  position : absolute;
  bottom: 0;
  left: 0;
  padding:10px;
  font-size: 25px;
  border-radius: 50%;
  margin:1%;
  width: 20px;
  height:20px;
  font-family: 'Play';
  color: #ffffff;
  font-size: 20px;
  text-decoration: none;
   background: rgb(37, 36, 49);
  
   text-shadow: 0 0 40px #fff;
  box-shadow: 0 5px 10px rgb(85, 81, 81);
}

.command{
  width:30%;
  float:right;
  height: 100vh;
  min-height: 100%;
 background: #fc00ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #cb58f8, #0098de); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #cb58f8, #0098de);
  font-family: 'Play', sans-serif;
  font-weight: bold;
  box-shadow: 0 0 40px rgb(84, 27, 99);

}
.value {
  margin-top: 4%;
  color:white;
}

.artwork, .command{
  display:inline-block;
}
.tips p{
  position: absolute;
  bottom:0;
  width:50%;
  padding:2%;
  margin-left:6%;
  background: #1F1C2C;  /* fallback for old browsers */
background: #606c88;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #3f4c6b, #606c88);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #3f4c6b, #606c88); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  margin-bottom: 1%;
  font-family: 'Play', sans-serif;
  border-radius:15px;
  color:white;
}

.titleCss{
  margin: 5%;
}
.codeColor{
  width: 50px;
  height: 50px;
  border-radius: 50px;
 }
.col{
 background-image: none;
 display: inline-block;
 font-size: 70px;
 margin:1%;
}

.option{
  font-size:24px;
  color:white;
  font-family: 'Barlow Condensed',sans-serif;
  font-weight: lighter;
}
.sty{
  width:50px;
  height: 50px;
  display: inline-block;
  margin:3%;
}
.btn {
  cursor: pointer;
  padding:2%;
  text-align: center;
  margin:10%;
  border:5px solid white;
  border-radius:15px;
  font-size: 36px;
  color:white;
  background:linear-gradient(transparent,transparent);
  box-shadow: 0 0 10px rgb(255, 255, 255), inset 0 0 5px #fff;
}
</style>
