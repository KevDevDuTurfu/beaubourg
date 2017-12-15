<template>
  <div class="lvl1">
     <div class="tips">
     <p>Bravo! Maintenant, il ne reste plus qu’à ajouter la propriété
color (couleur) et border (bordure) de la même manière...</p>
     </div>
    <div class="artwork">
      <div class="artwork1">
      </div>
    </div>
    <div class="command">
      <div class="btn btn1">Background</div>
      <div class="value">
        <div class="color">
          <h2 class="titleCss">Gradient</h2>
          <div class="col colorGradient1"><div class="codeColor"></div><p class="option">top</p></div>
          <div class="col colorGradient2"><div class="codeColor"></div><p class="option">bottom</p></div>
        </div>
      </div>
      <div class="btn btn2">Border</div>
      <div class="value">
        <div class="style"><h2 class="titleCss">Style</h2>
          <div class="sty style1"></div>
          <div class="sty style2"></div>
        </div>
        <div class="color"> 
          <h2 class="titleCss">Color</h2>
          <div class="col color1"><div class="codeColor"></div></div>
          <div class="col color2"><div class="codeColor"></div></div>
          <div class="col color3"><div class="codeColor"></div></div>
        </div>
        <div class="width">
          <h2 class="titleCss">Width</h2></div>
          <div class="rangeValue">
            <input id="valueBorder" type="range" min="1" max="10" step="1">
          </div>
      </div>
    </div>
  </div>
  
</template>
<script>
export default {
  name: 'Level1',
  data () {
    return {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lvl1{
  background-image: url("../assets/images/img_stack.png"), linear-gradient(#eb01a5, #d13531);;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  text-align: center;
}

.artwork{
  height: 100vh;
  width:70%;
}
.artwork, .command
{
  display:inline-block;
}
.artwork1{
  margin: 8% 5% 8% 7%;
  height:70vh;
  background:white;
  border: 5px solid white;
}
.command{
  width:30%;
  float:right;
  height: 100vh;
  background: -webkit-linear-gradient( left, #c667f5 , #4852c7);
  background:    -moz-linear-gradient( left, #c667f5, #4852c7);
  background:     -ms-linear-gradient( left, #c667f5, #4852c7);
  background:      -o-linear-gradient( left, #c667f5, #4852c7);
  background:         linear-gradient( to right, #c667f5,#4852c7);
  font-family: 'Play', sans-serif;
  font-weight: bold;

}
.value {
  margin-top: 4%;
}
.value h2{
  color:white;
}
.tips p{
  position: absolute;
  bottom:0;
  width:50%;
  padding:2%;
  margin-left:6%;
  background: #66858e;
  font-family: 'Play', sans-serif;
  border-radius:15px;
  color:white;
}

.btn {
  padding:3%;
  text-align: center;
  margin:10%;
  border:5px solid white;
  border-radius:15px;
  font-size: 36px;
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
.colorGradient1>.codeColor{
  background-color:#288e99;
}
.colorGradient2>.codeColor{
  background-color:#18545e;
}
.color1 .codeColor{
  background-color:#18545e;
}
.color2>.codeColor{
  background-color:royalblue;
}
.color3>.codeColor{
  background-color:yellowgreen;
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
.style1{
  border:4px solid white;
  }
.style2{
  border:4px dashed white;
  }
  .rangeValue{
    margin-top: 10%;
  }  

</style>