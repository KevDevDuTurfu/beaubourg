<!--ici html du code-->
<template>
  <div class="lvl1"><!-- contenu du niveau 1-->
    <div class="bubble"  @click="showModal = true">?</div><!--contenu de la bulle info-->
    <!-- modal=popup ici pop up de la bulle info ainsi que ses caractéristiques -->
        <modal :nom="artist" :titre="titre" :source="oeuvre" v-if="showModal" @close="showModal = false"></modal>
    <!--fin du modal -->
    <!--condition de victoire pas encore présente-->
        <victory  v-if="showVictory" @close="showVictory=false"> </victory>
        <!--debut de l'aide en bas de page-->
     <div class="tips">
     <p>Bravo! Maintenant, il ne reste plus qu’à ajouter la propriété
color (couleur) et border (bordure) de la même manière...</p>
     </div><!--fin de l'aide -->
     <!--contenu de l'oeuvre à composer-->
    <div class="artwork" ref="artwork">
      <!-- oeuvre en lui même -->
      <div class="artwork1" id="artwork1" ref="artwork1">
      </div>
    </div>
    <!--debut du contenu des commandes (barre à droite) -->
    <div class="command">
      <div id="position1"><!-- emplacement du bouton permettant de la remettre à sa place-->
      <!--le bouton "draggable" apres v-draggable on met les valeurs qui se changent dynamiquement par les options en bas -->
        <div class="btn btn1 " ref="btn1"  v-draggable="{color1:couleur,color2:couleur2 }">Background</div>
      </div><!--les options -->
      <div class="value"  v-if="show"><!--contenu de valeurs-->
        <div class="color"><!--si les valeurs sont des couleurs=>utilisez class color-->
          <h2 class="titleCss">Gradient</h2><!--titre de la valeur-->
          <!--couleur 1=> valur bind par gradientTop, quand on clique dessus on utilise une fonction pour la récupérer-->
          <div class="col colorGradient1"><div v-bind:style="{ 'background-color':gradientTop }"  class="codeColor" @click="getColorGradientTop(gradientTop)"></div><p class="option">top</p></div>
          <!--pareil pour la couleur 2 -->
          <div class="col colorGradient2"><div v-bind:style="{ 'background-color':gradientBottom }" class="codeColor" @click="getColorGradientBottom(gradientBottom)"></div><p class="option">bottom</p></div>
        </div>
      </div>
      <div class="btn btn2" ref ="btn2"  v-draggable="{victory:showVictory,color:borderColor,width:borderWidth,style:borderStyle}">Border</div>
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
              <input id="valueBorder" type="range" min="1" max="7" step="1" @touchstart="getWidthBorder()">
              
            </div>
        </div>
    </div>
  </div>
  
</template>
<script>
import Modal from './Modal.vue';
import Victory from './Victory.vue';
export default {
  name: 'Level1',
  data () {
    return {
      oeuvre: 'src/assets/images/oeuvre1.png',
      showVictory:false,
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
      borderWidth:10,
      borderStyle:'solid'
    }
  }, 
  components: {
          'modal':  Modal,
          'victory': Victory
        },
  methods:{
    victory: function(){
      this.showVictory=true;

    },
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
      var touch=event.touches[0];
      var dx = touch.pageX - initialMouseX;
      var dy = touch.pageY - initialMouseY;
      el.style.top = startY + dy + 'px';
      el.style.left = startX + dx + 'px';
      return false;
    }

    function mouseup() {
      el.style.left=initialBoxX;
      el.style.top=initialBoxY;
      el.style='relative';
      let borderArt=parseInt(binding.value.width)*10;
      document.removeEventListener('touchmove', mousemove);
      document.removeEventListener('touchend', mouseup);
     // this.$refs.artwork1.style.background='linear-gradient('+this.couleur+','+this.couleur2+')';
      console.log(el.classList.contains('btn1'));
      if (el.classList.contains('btn1')){
          document.getElementById("artwork1").style.background='linear-gradient('+binding.value.color1+','+binding.value.color2+')';
      }
      else {
         document.getElementById("artwork1").style.border=borderArt+'px '+binding.value.style+' '+binding.value.color;
      }
      this.showVictory=true;

    }

    el.addEventListener('touchstart', function(e) {
      
      var touch=event.touches[0];
      el.style.position = 'absolute';
      el.style.margin=0;
      startX = el.offsetLeft;
      startY = el.offsetTop;
      initialBoxX=startX;
      initialBoxY=startY;
      initialMouseX = touch.pageX;
      initialMouseY = touch.pageY;
      document.addEventListener('touchmove', mousemove);
      document.addEventListener('touchend', mouseup);
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
body{
  overflow:hidden;
}
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