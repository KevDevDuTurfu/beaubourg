<template>
  <div id="app">
  
  
  
    <div class="settings" @click="showOptions=true"><i class="fa fa-cog" aria-hidden="true"></i></div>
  
  
  
    <settings v-if="showOptions" @close="showOptions=false"></settings>
  
  
  
    <router-view class="view"></router-view>
  
  
  
  </div>
</template>

<script>
  import Settings from './components/Settings.vue';
  
  export default {
  
    name: 'app',
  
    data() {
      return {
        showOptions: false
  
    }
    },components: { 'settings': Settings }
}
</script>

<style>
  * {
  
    margin: 0;
  
    padding: 0;
  
  }
  
  
  
  body {
  
    overflow: hidden;
  
  }
  
  
  
  .selected {
  
    transform: scale(1.1);
  
  }
  
  
  
  .labelArrow {
  
    font-size: 0.8em;
  
    font-family: 'Barlow Condensed', sans-serif;
  
    padding-bottom: 1%;
  
  }
  
  
  
  .textField {
  
    background-color: transparent;
  
    color: white;
  
    width: 70%;
  
    height: 50px;
  
    font-size: 1.3em;
  
    font-family: 'Play', sans-serif;
  
    border: 3px solid rgb(231, 241, 255);
  
    border-radius: 25px;
  
    -webkit-transition: box-shadow .35s ease-in-out;
  
    transition: box-shadow .35s ease-in-out;
  
    text-align: center;
  
    margin-top: 5%;
  
  }
  
  
  
  .textField[type=text]:focus {
  
    border: 3px solid rgb(255, 255, 255);
  
    box-shadow: 0 0 30px rgb(255, 255, 255);
  
  }
  
  
  
   ::placeholder {
  
    /* Chrome, Firefox, Opera, Safari 10.1+ */
  
    color: rgb(242, 209, 248);
  
    opacity: 1;
  
    /* Firefox */
  
    font-family: 'Play', sans-serif;
  
  }
  
  
  
   :-ms-input-placeholder {
  
    /* Internet Explorer 10-11 */
  
    color: rgb(242, 209, 248);
  
    font-family: 'Play', sans-serif;
  
  }
  
  
  
   ::-ms-input-placeholder {
  
    /* Microsoft Edge */
  
    color: rgb(242, 209, 248);
  
    font-family: 'Play', sans-serif;
  
  }
  
  
  
  @media (max-height:770px) {
  
    .btn {
  
      font-size: 30px!important;
  
    }
  
  }
  
  
  
  .settings {
  
    position: absolute;
  
    top: 0;
  
    right: 0;
  
    color: #ffffff;
  
    text-decoration: none;
  
    line-height: 12px;
  
    padding: 0.25em;
  
    font-size: 45px;
  
    text-shadow: 0 0 20px #fff;
  
  }
  
  
  
  body {
  
    background: royalblue;
  
    background-image: -webkit-linear-gradient(270deg, mediumslateblue, royalblue, deepskyblue);
  
    /* For Chrome 25 and Safari 6, iOS 6.1, Android 4.3 */
  
    background-image: -moz-linear-gradient(270deg, mediumslateblue, royalblue, deepskyblue);
  
    /* For Firefox (3.6 to 15) */
  
    background-image: -o-linear-gradient(270deg, mediumslateblue, royalblue, deepskyblue);
  
    /* For old Opera (11.1 to 12.0) */
  
    background-image: linear-gradient(270deg, mediumslateblue, royalblue, deepskyblue);
  
    /* Standard syntax; must be last*/
  
    background-repeat: no-repeat;
  
    background-attachment: fixed;
  
    background-position: center;
  
    background-size: cover;
  
  }
  
  
  
  .btn-command {
  
    color: white;
  
    font-size: 45px;
  
    text-shadow: 0 0 10px white;
  
  }
  
  
  
  fade-enter-active,
  
  .fade-leave-active {
  
    transition: opacity .2s
  
  }
  
  
  
  .fade-enter,
  
  .fade-leave-to
  
  /* .fade-leave-active below version 2.1.8 */
  
  
  
  {
  
    opacity: 0
  
  }
  
  .help {
  
    cursor: pointer;
  
    position: absolute;
  
    bottom: 0;
  
    right: 40px;
  
    padding: 10px;
  
    font-size: 25px;
  
    border-radius: 50%;
  
    margin-bottom: 2%;
  
    margin-left: 1%;
  
    width: 20px;
  
    height: 20px;
  
    color: #ffffff;
  
    text-decoration: none;
  
    line-height: 12px;
  
    padding: 0.25em;
  
    font-size: 45px;
  
    text-shadow: 0 0 20px #fff;
  
  }
  
  
  .bubble {
  
    cursor: pointer;
  
    position: absolute;
  
    bottom: 0;
  
    left: 0;
  
    padding: 10px;
  
    font-size: 25px;
  
    border-radius: 50%;
  
    margin-bottom: 2%;
  
    margin-left: 1%;
  
    width: 20px;
  
    height: 20px;
  
    color: #ffffff;
  
    text-decoration: none;
  
    line-height: 12px;
  
    padding: 0.25em;
  
    font-size: 45px;
  
    text-shadow: 0 0 20px #fff;
  
  }
  
  
  
  .command {
  
    width: 30%;
  
    float: right;
  
    height: 100vh;
  
    min-height: 100%;
  
    background: #fc00ff;
  
    /* fallback for old browsers */
  
    background: -webkit-linear-gradient(to right, #cb58f8, #0098de);
  
    /* Chrome 10-25, Safari 5.1-6 */
  
    background: linear-gradient(to right, #cb58f8, #0098de);
  
    font-family: 'Play', sans-serif;
  
    font-weight: bold;
  
    box-shadow: 0 0 40px rgb(84, 27, 99);
  
  }
  
  
  
  .value {
  
    margin-top: 4%;
  
    color: white;
  
  }
  
  
  
  .artwork,
  
  .command {
  
    display: inline-block;
  
  }
  
  
  
  .tips p {
  
    position: absolute;
  
    bottom: 0;
  
    width: 50%;
  
    padding: 2%;
  
    margin-left: 10%;
  
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  
    margin-bottom: 1%;
  
    font-family: 'Play', sans-serif;
  
    border-radius: 15px;
  
    color: white;
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-box-shadow: 0px 6px 29px 5px rgba(82,55,82,1);
-moz-box-shadow: 0px 6px 29px 5px rgba(82,55,82,1);
box-shadow: 0px 6px 29px 5px rgba(82,55,82,1);
  }
  
  
  
  .titleCss {
  
    margin: 5%;
  
  }
  
  
  
  .codeColor {
  
    width: 50px;
  
    height: 50px;
  
    border-radius: 50px;
  
  }
  
  
  
  .col {
  
    background-image: none;
  
    display: inline-block;
  
    font-size: 70px;
  
    margin: 1%;
  
  }
  
  
  
  .option {
  
    font-size: 24px;
  
    color: white;
  
    font-family: 'Barlow Condensed', sans-serif;
  
    font-weight: lighter;
  
  }
  
  
  
  .sty {
  
    width: 50px;
  
    height: 50px;
  
    display: inline-block;
  
    margin: 3%;
  
  }
  
  
  
  .btn {
  
    cursor: pointer;
  
    padding: 2%;
  
    text-align: center;
  
    margin: 10%;
  
    border: 5px solid white;
  
    border-radius: 15px;
  
    font-size: 36px;
  
    color: white;
  
    background: linear-gradient(transparent, transparent);
  
    box-shadow: 0 0 10px rgb(255, 255, 255), inset 0 0 5px #fff;
  
  }
  .introjs-hint-dot {
    top: -18px;
    left: -20px;
    border: 10px solid rgba(255, 249, 249, 0.9);
  }
  .introjs-hint-pulse {
    width: 20px;
    height: 20px;
    border: 5px solid rgba(255, 255, 255, 0.5);
  }
  .introjs-tooltip {
      box-shadow: 0px 30px 40px rgba(0,0,0,.1);
       background: -webkit-linear-gradient( left, mediumpurple , cornflowerblue);
  background:    -moz-linear-gradient( left, mediumpurple, cornflowerblue);
  background:     -ms-linear-gradient( left, mediumpurple, cornflowerblue);
  background:      -o-linear-gradient( left, mediumpurple, cornflowerblue);
  background:         linear-gradient( to right, mediumpurple,cornflowerblue);
  color:white;
  font-family:  'Play', Arial, Helvetica, sans-serif;
  font-size: 1.5em;
  }
  .introjs-helperNumberLayer {
    background: #000046;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #1CB5E0, #000046);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #1CB5E0, #000046); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
font-size: 20px;
    width: 25px;
    line-height: 27px;
    height: 25px;
  }
  .introjs-button {
    font-size: 20px;
    background: #03001e;  /* fallback for old browsers */
background: #56CCF2;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #2F80ED, #56CCF2);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #2F80ED, #56CCF2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
text-shadow:none;
color:rgb(243, 234, 234);
  }
  .introjs-bullets ul li a {
        width: 27px;
    height: 7px;
  }
  .introjs-bullets ul li a.active {
    background-color: #47bef5;
  }
  .introjs-disabled, .introjs-disabled:hover, .introjs-disabled:focus {
   background: #667db6;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #667db6, #0082c8, #0082c8, #667db6);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #667db6, #0082c8, #0082c8, #667db6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

color:#e0dcdc;
  }
</style>
