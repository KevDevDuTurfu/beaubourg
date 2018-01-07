<!--ici html du code-->
<template>
  <div class="lvl2"><!-- contenu du niveau 2-->
    <div class="bubble"  @click="showModal = true">?</div><!--contenu de la bulle info-->
    <!-- modal=popup ici pop up de la bulle info ainsi que ses caractéristiques -->
        <modal :nom="artist" :titre="titre" :source="oeuvre" v-if="showModal" @close="showModal = false"></modal>
    <!--fin du modal -->
    <!--condition de victoire pas encore présente-->
        <victory  v-if="showVictory"> </victory>
        <!--debut de l'aide en bas de page-->
     <div class="tips">
     <p>Bravo! Maintenant, il ne reste plus qu’à ajouter la propriété
color (couleur) et border (bordure) de la même manière...</p>
     </div><!--fin de l'aide -->
     <!--contenu de l'oeuvre à composer-->
    <div class="artwork" ref="artwork">
      <!-- oeuvre en lui même -->
      <div class="artwork2" id="artwork2" ref="artwork2">
          
      </div>
      <div class="artwork2" id="artwork2" ref="artwork2">
          
      </div>
      <div class="artwork2" id="artwork2" ref="artwork2">
          
      </div>
      <div class="artwork2" id="artwork2" ref="artwork2">
          
      </div>
    </div>
    <!--debut du contenu des commandes (barre à droite) -->
    <div class="command">
        <div class='btn-command'>
           <!-- <i class="fa fa-caret-left" aria-hidden="true" v-on:click="show1"></i><i class="fa fa-caret-right" aria-hidden="true" v-on:click=" !show1"></i>
        --></div>
       
            <div class="page1-cmd" >
                <div id="position1"><!-- emplacement du bouton permettant de la remettre à sa place-->
                <!--le bouton "draggable" apres v-draggable on met les valeurs qui se changent dynamiquement par les options en bas -->
                    <div class="btn btn1 " ref="btn1"  v-draggable="{color:couleur}">Background</div>
                </div><!--les options -->
                <div class="value"  v-if="show"><!--contenu de valeurs-->
                    <div class="color"><!--si les valeurs sont des couleurs=>utilisez class color-->
                    <h2 class="titleCss">Background-Color</h2><!--titre de la valeur-->
                    <!--couleur 1=>  quand on clique dessus on utilise une fonction pour récupérer couleur-->
                    <div class="col colorBackground1"><div  class="codeColor" @click="getColorBackground('#f40e3c')"></div></div>
                    <!--pareil pour la couleur 2 -->
                    <div class="col colorBackground2"><div class="codeColor" @click="getColorBackground('#59a0f2')"></div></div>
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
                        <div class="col color1"><div class="codeColor" @click="getBorderColor('black')"></div></div>
                        <div class="col color2"><div class="codeColor" @click="getBorderColor('rgb(167, 7, 42)')"></div></div>
                        <div class="col color3"><div class="codeColor" @click="getBorderColor('rgb(50, 156, 205)')"></div></div>
                    </div>
                    <div class="width">
                        <h2 class="titleCss">Width</h2></div>
                        <div class="rangeValue">
                        <input id="valueBorder" type="range" min="1" max="7" step="1" @touchstart="getWidthBorder()">
                        
                        </div>
                    </div>
                </div>
                <div  class="page2-cmd" style="display:none">
                <div id="position3"><!-- emplacement du bouton permettant de la remettre à sa place-->
            <!--le bouton "draggable" apres v-draggable on met les valeurs qui se changent dynamiquement par les options en bas -->
                <div class="btn btn3 " ref="btn3"  >Transform</div>
                </div><!--les options -->
                <div class="value"  ><!--contenu de valeurs-->
                    <ul class="list-value">
                        <li>
                            <input type='radio' value='translate' class='value-transform' name='translate' id='radio1'/>
                            <label for='radio1'>Translate</label>
                        </li>
                        <li>
                            <input type='radio' value='rotate' class='value-transform' name='rotate'  id='radio2'/>
                            <label for='radio2'>Rotate</label>
                        </li>
                        <li>
                            <input type='radio' value='scale' class='value-transform' name='scale'  id='radio3'/>
                            <label for='radio3'>Scale</label>
                        </li>
                    </ul>
                </div>
                <div class="btn btn4" ref ="btn4">Duration</div>
                <div class="value"  ><!--contenu de valeurs-->
                    <ul class="list-value">
                            <li>
                                <input type='radio' value='infinite' class='value-duration' name='infinite' id='radio4'/>
                                <label for='radio1'>Infinite</label>
                            </li>
                            <li>
                                <input type='radio' value='1' class='value-duration' name='secone'  id='radio5'/>
                                <label for='radio2'>1 sec</label>
                            </li>
                            <li>
                                <input type='radio' value='3' class='value-duration' name='secthree'  id='radio6'/>
                                <label for='radio3'>3 sec</label>
                            </li>
                            <li>
                                <input type='radio' value='10' class='value-duration' name='secten'  id='radio7'/>
                                <label for='radio3'>10 sec</label>
                            </li>
                        </ul>
                </div>
                </div>
    </div>
    
  </div>
  
  
</template>
<script>
import Modal from './Modal.vue';
import Victory from './Victory.vue'
export default {
  name: 'Level2',
  data () {
    return {
      oeuvre: 'src/assets/images/oeuvre2.png',
      showVictory:false,
      artist:'Louis CANE',
      titre: 'Sol-Mur',
      showModal: false,
      show: true,
      show2: true,
      couleur:'transparent',
      borderColor:'white',
      borderWidth:10,
      borderStyle:'solid'
    }
  }, 
  components: {
          'modal':  Modal
        },
  methods:{
    victory: function(){
      this.showVictory=true;

    },
    getColorBackground: function(value){
    this.couleur=value;
    this.backgroundColor();
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
      this.border();
    },
    border:function(){
       this.$refs.btn2.style.border=this.borderWidth+'px '+this.borderStyle+' '+this.borderColor;
    },
    backgroundColor:function(){
       this.$refs.btn1.style.background=this.couleur;
       
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
      let borderArt=parseInt(binding.value.width)*2;
      document.removeEventListener('touchmove', mousemove);
      document.removeEventListener('touchend', mouseup);
      console.log(el.classList.contains('btn1'));
      if (el.classList.contains('btn1')){
        for (var i=0;i<4;i++){
            document.getElementsByClassName("artwork2")[i].style.background=binding.value.color;
        }
         
      }
      else {
          for (var i=0;i<4;i++){
            document.getElementsByClassName("artwork2")[i].style.border=borderArt+'px '+binding.value.style+' '+binding.value.color;
        }
         
      }
      this.showVictory=true;

    }

    el.addEventListener('touchstart', function(e) {
      el.style.position = 'absolute';
      el.style.margin=0;
      startX = el.offsetLeft;
      startY = el.offsetTop;
      initialBoxX=startX;
      initialBoxY=startY;
      initialMouseX = e.clientX;
      initialMouseY = e.clientY;
      document.addEventListener('touchmove', mousemove);
      document.addEventListener('touchend', mouseup);
      return false;
    });
  }
  
},
  created:function(){
  },
  mounted: function(){
    if (document.getElementsByClassName('page-cmd1').style!='none'){
        this.backgroundColor();
        this.border();
    }

  },
  beforeUpdate: function(){
    if (document.getElementsByClassName('page-cmd1').style!='none'){
        this.backgroundColor();
        this.border();
    }
  },
  updated: function(){
    if (document.getElementsByClassName('page-cmd1').style!='none'){
        this.backgroundColor();
        this.border();
    }
  }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  overflow:hidden;
}

ul {
    list-style: none;
}
li {
    margin-bottom:4%;
}
input.value-duration, input.value-transform {
    visibility:hidden;
}
label {
    cursor: pointer;
    font-size:29px;
}

.btn-command{
    color:white;
    font-size: 45px;
}
.btn-command i{
    padding: 2%;
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
.lvl2{
  
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
.artwork2{
  margin: 2% 5% 8% 7%;
  height:10vh;
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
  background:transparent;
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
.colorBackground1 .codeColor{
    background:#f40e3c;
}
.colorBackground2 .codeColor{
    background:#59a0f2;
}
.color1 .codeColor{
  background-color:#000000;
}
.color2>.codeColor{
  background-color:rgb(167, 7, 42);
}
.color3>.codeColor{
  background-color:rgb(50, 156, 205);
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