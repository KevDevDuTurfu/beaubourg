<template>
  <div class="lvl1">
    <div class="bubble"  @click="showModal = true">?</div>
    
        <modal :nom="artist" :titre="titre" :source="oeuvre" v-if="showModal" @close="showModal = false"></modal>
        <victory class="showVictory"> </victory>
     <div class="tips">
     <p>Bravo! Maintenant, il ne reste plus qu’à ajouter la propriété
color (couleur) et border (bordure) de la même manière...</p>
     </div>
    <div class="artwork" ref="artwork">
      <div class="artwork1" id="artwork1" ref="artwork1">
      </div>
    </div>
    <div class="command">
      <div id="position1">
        <div class="btn btn1 " ref="btn1"  v-draggable="{color1:couleur,color2:couleur2 }">Background</div>
      </div>
      <div class="value"  v-if="show">
        <div class="color">
          <h2 class="titleCss">Gradient</h2>
          <div class="col colorGradient1"><div v-bind:style="{ 'background-color':gradientTop }"  class="codeColor" @click="getColorGradientTop(gradientTop)"></div><p class="option">top</p></div>
          <div class="col colorGradient2"><div v-bind:style="{ 'background-color':gradientBottom }" class="codeColor" @click="getColorGradientBottom(gradientBottom)"></div><p class="option">bottom</p></div>
        </div>
      </div>
      <div class="btn btn2" ref ="btn2"  v-draggable="{color:borderColor,width:borderWidth,style:borderStyle}">Border</div>
        <div class="value" v-if="show2">
          <div class="style"><h2 class="titleCss">Style</h2>
            <div class="sty style1" @click="getBorderStyle('solid')"></div>
            <div class="sty style2" @click="getBorderStyle('dashed')"></div>
          </div>
          <div class="color"> 
            <h2 class="titleCss">Color</h2>
            <div class="col color1"><div class="codeColor" @click="getBorderColor('#18545e')"></div></div>
            <div class="col color2"><div class="codeColor" @click="getBorderColor('royalblue')"></div></div>
            <div class="col color3"><div class="codeColor" @click="getBorderColor('yellowgreen')"></div></div>
          </div>
          <div class="width">
            <h2 class="titleCss">Width</h2></div>
            <div class="rangeValue">
              <input id="valueBorder" type="range" min="10" max="60" step="5" @click="getWidthBorder()">
              
            </div>
        </div>
    </div>
  </div>
  
</template>
<script>
import Modal from './Modal.vue'
export default {
  name: 'Level1',
  data () {
    return {
      oeuvre: 'src/assets/images/oeuvre1.png',
      artist:'Louis CANE',
      titre: 'Sol-Mur',
      showModal: false,
      show: true,
      show2: true,
      gradientTop:'#288e99',
      gradientBottom:'#18545e',
      couleur:'transparent',
      couleur2:'transparent',
      couleur3:'red',
      borderColor:'white',
      borderWidth:1,
      borderStyle:'solid'
    }
  }, 
  components: {
          'modal':  Modal
        },
  methods:{
    getColorGradientTop: function(value){
    this.couleur=value;
    this.gradient();
    },
    getColorGradientBottom: function(value){
    this.couleur2=value;
    this.gradient();
    },
    getBorderColor: function(value){
        this.borderColor=value;
        this.border();
    },
    getBorderStyle: function (value){
      this.borderStyle=value;
      this.border();
    },
    getWidthBorder: function (){
      this.borderWidth=document.getElementById('valueBorder').value;
      console.log(document.getElementById('valueBorder').value  )
      this.border();
    },
    border:function(){
      console.log(this.borderWidth+'px '+this.borderStyle+' '+this.borderColor);
       this.$refs.btn2.style.border=this.borderWidth+'px '+this.borderStyle+' '+this.borderColor;
    },
    gradient:function(){
       this.$refs.btn1.style.background='linear-gradient('+this.couleur+','+this.couleur2+')';
       
    }
  },

  directives: {
   draggable: function (el, binding) {
    
    var startX, startY, initialMouseX, initialMouseY, initialBoxX,initialBoxY;

    function mousemove(e) {
      var dx = e.clientX - initialMouseX;
      var dy = e.clientY - initialMouseY;
      el.style.top = startY + dy + 'px';
      el.style.left = startX + dx + 'px';
      return false;
    }

    function mouseup() {
      el.style.left=initialBoxX;
      el.style.top=initialBoxY;
      el.style='relative';
      document.removeEventListener('mousemove', mousemove);
      document.removeEventListener('mouseup', mouseup);
     // this.$refs.artwork1.style.background='linear-gradient('+this.couleur+','+this.couleur2+')';
      console.log(el.classList.contains('btn1'));
      if (el.classList.contains('btn1')){
          document.getElementById("artwork1").style.background='linear-gradient('+binding.value.color1+','+binding.value.color2+')';
      }
      else {
         document.getElementById("artwork1").style.border=binding.value.width+'px '+binding.value.style+' '+binding.value.color;
      }
      

    }

    el.addEventListener('mousedown', function(e) {
      el.style.position = 'absolute';
      el.style.margin=0;
      startX = el.offsetLeft;
      startY = el.offsetTop;
      initialBoxX=startX;
      initialBoxY=startY;
      initialMouseX = e.clientX;
      initialMouseY = e.clientY;
      document.addEventListener('mousemove', mousemove);
      document.addEventListener('mouseup', mouseup);
      return false;
    });
  }
  
},
  created:function(){
  },
  mounted: function(){
    this.gradient();
    this.border();
  },
  beforeUpdate: function(){
    this.gradient();
    this.border();
  },
  updated: function(){
    this.gradient();
    this.border();
  }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bubble{
  cursor: pointer;
  position : absolute;
  bottom: 0;
  left: 0;
  padding:10px;
  font-size: 25px;
  color:white;
  background: #1761b0;
  background-image: -webkit-linear-gradient(top, #1761b0, #9421c2);
  background-image: -moz-linear-gradient(top, #1761b0, #9421c2);
  background-image: -ms-linear-gradient(top, #1761b0, #9421c2);
  background-image: -o-linear-gradient(top, #1761b0, #9421c2);
  background-image: linear-gradient(to bottom, #1761b0, #9421c2);
  font-family: 'Play', sans-serif;
  border-radius: 50%;
  margin:1%;
}
.lvl1{
  background-image: url("../assets/images/img_stack.png"), linear-gradient(#eb01a5, #d13531);
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
.artwork, .command{
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
  color:white;
}

.tips p{
  position: absolute;
  bottom:0;
  width:50%;
  padding:2%;
  margin-left:6%;
  background: #544674;
  font-family: 'Play', sans-serif;
  border-radius:15px;
  color:white;
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