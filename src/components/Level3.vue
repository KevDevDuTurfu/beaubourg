<!--ici html du code-->
<template>
  <div class="lvl3"><!-- contenu du niveau 2-->
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
      <div class="artwork3h" id="artwork3hd" ref="artwork3h">
          
      </div>
      <div class="artwork3v" id="artwork3vh" ref="artwork3v">
          
      </div>
      <div class="artwork3h" id="artwork3hg" ref="artwork3h">
          
      </div>
      <div class="artwork3v" id="artwork3vb" ref="artwork3v">
          
      </div>
    </div>
    <!--debut du contenu des commandes (barre à droite) -->
    <div class="command">
        <div class='btn-command'>
           <!-- <i class="fa fa-caret-left" aria-hidden="true" v-on:click="show1"></i><i class="fa fa-caret-right" aria-hidden="true" v-on:click=" !show1"></i>
        --></div>
       
            <div class="page1-cmd" style="display:none" >
                <div id="position1"><!-- emplacement du bouton permettant de la remettre à sa place-->
                <!--le bouton "draggable" apres v-draggable on met les valeurs qui se changent dynamiquement par les options en bas -->
                    <div class="btn btn1 " ref="btn1"  v-draggable="{color:couleur}">Background</div>
                </div><!--les options -->
                <div class="value"  v-if="show"><!--contenu de valeurs-->
                    <div class="color"><!--si les valeurs sont des couleurs=>utilisez class color-->
                    <!--couleur 1=>  quand on clique dessus on utilise une fonction pour récupérer couleur-->
                        <div class="col colorBackground1"><div  class="codeColor" @click="getColorBackground('#fbff18')"></div>
                        </div>
                        <!--pareil pour la couleur 2 -->
                        <div class="col colorBackground2"><div class="codeColor" @click="getColorBackground('#252d33')"></div></div>
                    
                        <div class="col colorBackground3"><div class="codeColor" @click="getColorBackground('#476cef')"></div></div>
                        <div class="col colorBackground4"><div class="codeColor" @click="getColorBackground('#d3093c')"></div></div>
                    </div>
                    </div>
                    <div class="btn btn2" ref ="btn2" >Box-shadow</div>
                        <div class="value" v-if="show2">
                        <div class="color"> 
                            <h2 class="titleCss">Color</h2>
                            <div class="col color1"><div class="codeColor" @click="getBorderColor('#fbff18')"></div></div>
                            <div class="col color2"><div class="codeColor" @click="getBorderColor('#476cef')"></div></div>
                            <div class="col color3"><div class="codeColor" @click="getBorderColor('#d3093c')"></div></div>
                        </div>
                        <div class="width">
                            <div class="rangeValue">
                                <h2 class="titleCss">Offset-y</h2>
                            <input id="valueBorder" type="range" min="1" max="7" step="1" @touchstart="getWidthBorder()">
                            </div>
                            <div class="rangeValue">
                                <h2 class="titleCss">Offset-y</h2>
                            <input id="valueBorder" type="range" min="1" max="7" step="1" @touchstart="getWidthBorder()">
                            </div>
                            <div class="rangeValue">
                                <h2 class="titleCss">Blur-radius</h2>
                            <input id="valueBorder" type="range" min="1" max="7" step="1" @touchstart="getWidthBorder()">
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page2-cmd" >
                  <div id="position1"><!-- emplacement du bouton permettant de la remettre à sa place-->
                  <!--le bouton "draggable" apres v-draggable on met les valeurs qui se changent dynamiquement par les options en bas -->
                    <div class="btn btn1 " ref="btn1" >Animation</div>
                    </div><!--les options -->
                      <div class="value" ><!--contenu de valeurs-->
                        <h2 class="titleCss">Animation-duration</h2>
                        <div class="select">
                        <select id="animation-duration" >
                          <option value="1s">1 sec</option> 
                          <option value="3s" selected>3 sec</option>
                          <option value="5s">5 sec</option>
                        </select> 
                        </div>
                        <h2 class="titleCss">Animation-timing-function</h2>
                        <div class="select">
                        <select id="animation-timing">
                          <option value="linear">linear</option> 
                          <option value="ease" selected>ease</option>
                          <option value="ease-in">ease-in</option>
                          <option value="ease-out">ease-out</option>
                          <option value="ease-in-out">ease-in-out</option>
                        </select> 
                        </div>
                        <h2 class="titleCss">Animation-iteration-count</h2>
                        <div class="select">
                        <select id="animation-iteration" >
                          <option value="1s">1 sec</option> 
                          <option value="3s" selected>3 sec</option>
                          <option value="10s">10 sec</option>
                          <option value="infinite">infinite</option>
                        </select> 
                        </div>
                        <h2 class="titleCss">Animation-direction</h2>
                        <div class="select">
                        <select id="animation-direction">
                          <option value="normal">normal</option> 
                          <option value="reverse" selected>reverse</option>
                          <option value="alternate">alternate</option>
                          <option value="alternate-reverse">alternate-reverse</option>
                        </select> 
                        </div>
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
            document.getElementsByClassName("artwork3")[i].style.background=binding.value.color;
        }
         
      }
      else {
          for (var i=0;i<4;i++){
            document.getElementsByClassName("artwork3")[i].style.border=borderArt+'px '+binding.value.style+' '+binding.value.color;
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
.select {
    position: relative;
    display: inline-block;
    margin-bottom: 15px;
    width: 100%;
}    .select select {
        display: inline-block;
        width: 50%;
        cursor: pointer;
        padding: 10px 15px;
        outline: 0;
        border: 0px solid #000000;
        border-radius: 0px;
        background: rgb(235, 231, 255);
        color: rgb(23, 24, 34);
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
    }
        .select select::-ms-expand {
            display: none;
        }
        .select select:hover,
        .select select:focus {
            color: #000000;
            background: rgb(227, 217, 255);
        }
        .select select:disabled {
            opacity: 0.5;
            pointer-events: none;
        }
.select_arrow {
    position: absolute;
    top: 16px;
    right: 15px;
    width: 0;
    height: 0;
    pointer-events: none;
    border-style: solid;
    border-width: 8px 5px 0px 5px;
    border-color: #7B7B7B transparent transparent transparent;
}
.select select:hover ~ .select_arrow,
.select select:focus ~ .select_arrow {
    border-top-color: #000000;
}
.select select:disabled ~ .select_arrow {
    border-top-color: #CCCCCC;
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
.lvl3{
  
  background-image: url("../assets/images/img_stack.png"), linear-gradient(#eb01a5, #d13531);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  text-align: center;
}

.artwork{
  height: 95vh;
  width:50%;
  margin-top:45px;
  
}
.artwork, .command{
  display:inline-block;
}

 .artwork3v {
    background-color:#fbff18;
    width:65vh;
    height:5vh;
    margin-top: 0vh;
}
.artwork3v:last-child {
    background-color: #fbff18;
    width:65vh;
    height:5vh;
    margin-top: 60vh;
    animation: neon 1s linear infinite alternate;
} 
@keyframes neon {
  from {
    box-shadow: 0px 0px 50px yellow;
  }
  to {
    box-shadow: 0px 0px 10px yellow;
  }
}
 .artwork3h {
    background-color: #252d33;
    width:5vh;
    height:60vh;
    position: absolute;
    z-index: 5;
    margin-top: 0vh;
} 
.artwork3h:nth-child(1) {
    background-color: #252d33;
    width:5vh;
    height:60vh;
    margin-left: 60vh;
    margin-top: 5vh;
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
    background:#fbff18;
}
.colorBackground2 .codeColor{
    background:#252d33;
}
.colorBackground3 .codeColor{
    background:#476cef;
}
.colorBackground4 .codeColor{
    background:#d3093c;
}
.color1 .codeColor{
  background-color:#fbff18;
}
.color2>.codeColor{
  background-color:#476cef;
}
.color3>.codeColor{
  background-color:#d3093c;
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