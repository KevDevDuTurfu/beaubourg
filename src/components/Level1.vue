<template>
  <div class="lvl1">
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
        <div class="btn " ref="btn1"  @click="show = !show" v-draggable="{color1:couleur,color2:couleur2 }">Background</div>
      </div>
      <transition name="slide-fade">
      <div class="value"  v-if="show">
        <div class="color">
          <h2 class="titleCss">Gradient</h2>
          <div class="col colorGradient1"><div v-bind:style="{ 'background-color':gradientTop }"  class="codeColor" @click="getColorGradientTop()"></div><p class="option">top</p></div>
          <div class="col colorGradient2"><div v-bind:style="{ 'background-color':gradientBottom }" class="codeColor" @click="getColorGradientBottom()"></div><p class="option">bottom</p></div>
        </div>
      </div>
      </transition>
      <div class="btn btn2" v-on:click="show2 = !show2">Border</div>
       <transition name="slide-fade">
        <div class="value" v-if="show2">
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
       </transition>
    </div>
  </div>
  
</template>
<script>

export default {
  name: 'Level1',
  data () {
    return {
      show: true,
      show2: true,
      gradientTop:'#288e99',
      gradientBottom:'#18545e',
      couleur:'transparent',
      couleur2:'transparent'
      
    }
  }, 
  methods:{
    getColorGradientTop: function(){
      //console.log(event.target) 
    this.couleur=this.gradientTop;
    this.$refs.btn1.style.background='linear-gradient('+this.couleur+','+this.couleur2+')';
        return this.couleur;
      
        
    },
    getColorGradientBottom: function(){
      this.couleur2=this.gradientBottom;
      this.$refs.btn1.style.background='linear-gradient('+this.couleur+','+this.couleur2+')';
        return this.couleur2;
    },
    gradient:function(){
      //console.log(  this.getColorGradientTop());
      
       this.$refs.btn1.style.background='linear-gradient('+this.couleur+','+this.couleur2+')';
      //this.$forceUpdate()
        
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
      console.log(binding.value.color1);
     // this.$refs.artwork1.style.background='linear-gradient('+this.couleur+','+this.couleur2+')';
      document.getElementById("artwork1").style.background='linear-gradient('+binding.value.color1+','+binding.value.color2+')'

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
  console.log('coucou'+this.$refs.btn1);
  },
  mounted: function(){
    console.log(this.$refs.btn1);
    this.gradient();
  },
  beforeUpdate: function(){
    this.gradient();
  },
  updated: function(){
    this.gradient();
  }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s ease;
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateY(-10px);
  opacity: 0;
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
  background: #66858e;
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