<!--ici html du code-->
<template>
  <div class="lvl3"><!-- contenu du niveau 2-->

    <div class="bubble"  @click="showModal = true"><i class="fa fa-question-circle" aria-hidden="true"></i></div><!--contenu de la bulle info-->
    <!-- modal=popup ici pop up de la bulle info ainsi que ses caractéristiques -->
        <modal :nom="artist" :titre="titre" :source="oeuvre" v-if="showModal" @close="showModal = false"></modal>
    <!--fin du modal -->
    <!--condition de victoire pas encore présente-->
        <victory  :niveau="niveauSuivant" v-if="showVictory" @close="showVictory=false"> </victory>
        <!--debut de l'aide en bas de page-->
     <div class="tips">
     <p>Bravo! Maintenant, il ne reste plus qu’à ajouter la propriété
color (couleur) et border (bordure) de la même manière...</p>
     </div><!--fin de l'aide -->
     <!--contenu de l'oeuvre à composer-->

    <div class="artwork" ref="artwork">
      <!-- oeuvre en lui même -->
      <div :class="['artwork3h artwork3', { selected: rightBarSelected }, rightBarShadow]" id="artwork3hd" ref="artwork3h" @click="rightBarSelected = !rightBarSelected">
          
      </div>
      <div :class="['artwork3v artwork3', { selected: topBarSelected }, topBarShadow]"  id="artwork3vh" ref="artwork3v" @click="topBarSelected = !topBarSelected">
          
      </div>
      <div :class="['artwork3h artwork3', { selected: leftBarSelected }, leftBarShadow]" id="artwork3hg" ref="artwork3h" @click="leftBarSelected = !leftBarSelected">
          
      </div>
      <div :class="['artwork3v artwork3', { selected: bottomBarSelected }, bottomBarShadow]" id="artwork3vb" ref="artwork3v" @click="bottomBarSelected = !bottomBarSelected">
          
      </div>
    </div>
    <!--debut du contenu des commandes (barre à droite) -->
    <!-- <div class="overlay" ></div> -->
    <div class="command">
        
       <transition name="fade" >
            <div class="page1-cmd"  v-if="!cmd" >
              <div class='btn-command'>
                <i class="fa fa-caret-right" aria-hidden="true" v-on:click="cmd = !cmd" ></i>
                </div>
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
                    <div class="btn btn2" ref ="btn2" v-draggable="{shadow:shadowColor, offX:offsetX,offY:offsetY, b:blur}">Box-shadow</div>
                        <div class="value" v-if="show2">
                        <div class="color"> 
                            <h2 class="titleCss">Color</h2>
                            <div class="col color1"><div class="codeColor" @click="getShadowColor('#fbff18')"></div></div>
                            <div class="col color2"><div class="codeColor" @click="getShadowColor('#476cef')"></div></div>
                            <div class="col color3"><div class="codeColor" @click="getShadowColor('#d3093c')"></div></div>
                        </div>
                        <div class="width">
                            <div class="rangeValue">
                                <h2 class="titleCss">Offset-x</h2>
                            <input id="valueOffsetX" type="range" min="-20" max="20" step="2" @touchstart="getOffsetX()" @click="getOffsetX()">
                            </div>
                            <div class="rangeValue">
                                <h2 class="titleCss">Offset-y</h2>
                            <input id="valueOffsetY" type="range" min="-20" max="20" step="2" @touchstart="getOffsetY()" @click="getOffsetY()" >
                            </div>
                            <div class="rangeValue">
                                <h2 class="titleCss">Blur-radius</h2>
                            <input id="valueBlur" type="range" min="0" max="40" step="2" @touchstart="getBlurRadius()" @click="getBlurRadius()">
                            </div>
                        </div>
                    </div>
                </div>
                </transition>
                 <transition name="fade" mode="in-out">
                <div  class="page2-cmd" v-if="cmd"  >
                  <div class='btn-command'>
                <i class="fa fa-caret-left"  aria-hidden="true" v-on:click="cmd = !cmd" ></i>
                </div>
                <div id="position3"><!-- emplacement du bouton permettant de la remettre à sa place-->
            <!--le bouton "draggable" apres v-draggable on met les valeurs qui se changent dynamiquement par les options en bas -->
                <div class="btn btn3" ref="btn3"  v-draggable="{transform:valueTransform, duration:valueDuration}">Transform</div>
                </div><!--les options -->
                <div class="value"  ><!--contenu de valeurs-->
                <h2 class="titleCss">Choose timing:</h2>
                    <div class="tranform" >
                            <div  @click="getTransform('yellow')" style="color:yellow" class="valueTransform">Yellow</div>
                            <div  @click="getTransform('blue')" class="valueTransform" style="color:#3ab3ff">Blue</div>
                            <div  @click="getTransform('red')" class="valueTransform" style="color:red">Red</div>
                            <div  @click="getTransform('pink')" class="valueTransform" style="color:#f72297">Pink</div>
                            <div  @click="getTransform('purple')" class="valueTransform" style="color:#8139ce">Purple</div>
                    </div>
                </div>
                <div class="value"  ><!--contenu de valeurs-->
                 <h2 class="titleCss">Choose duration:</h2>
                     <div class="duree"  >
                                <div @click="getDuration('1')" class="valueDuration">1 sec</div>
                                <div @click="getDuration('3')" class="valueDuration">3 sec</div>
                                <div @click="getDuration('10')" class="valueDuration">10 sec</div>
                            </div>
                </div>
                </div>
          </transition>
                </div>
            </div>  
</template>
<script>
import Modal from './Modal.vue';
import Victory from './Victory.vue'
export default {
  name: 'Level3',
  data () {
    return {
      niveauSuivant:'niveau4',
      oeuvre: 'src/assets/images/danflavin.png',
      cmd:false,
      showVictory:false,
      artist:'Dan FLAVIN',
      titre: 'Untitled (to Donna)',
      showModal: false,
      show: true,
      show2: true,
      couleur:'transparent',
      shadowColor:'white',
      offsetX:10,
      offsetY:10,
      blur:5,
      valueTransform:'',
      valueDuration:'', 
      borderStyle:'solid',
      selected:false,
      rightBarSelected:false,
      rightBarShadow:'',
      topBarSelected:false,
      topBarShadow:'',
      leftBarSelected:false,
      leftBarShadow:'',
      bottomBarSelected:false,
      bottomBarShadow:''
    }
  }, 
  components: {
          'modal':  Modal
        },
  methods:{
    victory: function(){
      this.showVictory=true;

    },
    getTransform: function(value){
      this.valueTransform=value;

    },
    getDuration: function(value){
      this.valueDuration=value;
       
    },
    getColorBackground: function(value){
    this.couleur=value;
    this.backgroundColor();
    },
    
    getShadowColor: function(value){
        this.shadowColor=value;
        this.box();
    },
    getOffsetX: function (){
      this.offsetX=document.getElementById('valueOffsetX').value;
      this.box();
    },
    getOffsetY: function (){
      this.offsetY=document.getElementById('valueOffsetY').value;
      this.box();
    },
    getBlurRadius: function (){
      this.blur=document.getElementById('valueBlur').value;
      this.box();
    },
    box:function(){
       this.$refs.btn2.style.boxShadow=this.offsetX+'px '+this.offsetY+'px '+this.blur+'px '+this.shadowColor;
    },
    backgroundColor:function(){
       this.$refs.btn1.style.background=this.couleur;
    }
  },

  directives: {
   draggable: function (el, binding, vnode) {
    
    var startX, startY, initialMouseX, initialMouseY, initialBoxX,initialBoxY, lastClass;

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
      let borderArt=parseInt(binding.value.width)*2;
      document.removeEventListener('touchmove', mousemove);
      document.removeEventListener('touchend', mouseup);
      if (el.classList.contains('btn1')){
        document.getElementsByClassName("selected")[0].style.backgroundColor=binding.value.color;  
      }
      else if(el.classList.contains('btn2')) {
        document.getElementsByClassName("selected")[0].style.boxShadow=binding.value.offX+"px "+binding.value.offY+"px "+binding.value.b+"px "+binding.value.shadow;
      }
      else {
        if ( vnode.context.rightBarSelected) {
          vnode.context.rightBarShadow=binding.value.transform+binding.value.duration;
        }
        else if ( vnode.context.topBarSelected) {
          vnode.context.topBarShadow=binding.value.transform+binding.value.duration;
        }
        else if ( vnode.context.leftBarSelected) {
          vnode.context.leftBarShadow=binding.value.transform+binding.value.duration;
        }
        else {
          vnode.context.bottomBarShadow=binding.value.transform+binding.value.duration;
        }
        



      }
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
    if (!document.getElementsByClassName('page-cmd1')){
        this.backgroundColor();
        this.box();
    }

  },
  beforeUpdate: function(){
    if (!document.getElementsByClassName('page-cmd1')){
        this.backgroundColor();
        this.box();
    }
  },
  updated: function(){
    if (!document.getElementsByClassName('page-cmd1')){
        this.backgroundColor();
        this.box();
    }
  }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  overflow:hidden;
}

.lvl3{
  background-image: url("../assets/images/img_stack.png");
  background-image:url("../assets/images/fondniveau.png"), url("../assets/images/img_stack.png") ;
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
.artwork3 {
  transition: transform 2s ease-out;
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
    /*animation: neon 1s linear infinite alternate;*/
} 
.yellow1 {
  animation: neon 1s linear infinite alternate;
}
.yellow3 {
  animation: neon 3s linear infinite alternate;
}
.yellow10 {
  animation: neon 10s linear infinite alternate;
}
.blue1 {
  animation: neon1 1s linear infinite alternate;
}
.blue3 {
  animation: neon1 3s linear infinite alternate;
}
.blue10 {
  animation: neon1 10s linear infinite alternate;
}
.red1 {
  animation: neon2 1s linear infinite alternate;
}
.red3 {
  animation: neon2 3s linear infinite alternate;
}
.red10 {
  animation: neon2 10s linear infinite alternate;
}
.pink1 {
  animation: neon3 1s linear infinite alternate;
}
.pink3 {
  animation: neon3 3s linear infinite alternate;
}
.pink10 {
  animation: neon3 10s linear infinite alternate;
}
.purple1 {
  animation: neon4 1s linear infinite alternate;
}
.purple3 {
  animation: neon4 3s linear infinite alternate;
}
.purple10 {
  animation: neon4 10s linear infinite alternate;
}
@keyframes neon {
  from {
    box-shadow: 0px 0px 50px yellow;
  }
  to {
    box-shadow: 0px 0px 10px yellow;
  }
}
@keyframes neon1 {
  from {
    box-shadow: 0px 0px 50px blue;
  }
  to {
    box-shadow: 0px 0px 10px blue;
  }
}
@keyframes neon2 {
  from {
    box-shadow: 0px 0px 50px red;
  }
  to {
    box-shadow: 0px 0px 10px red;
  }
}
@keyframes neon3 {
  from {
    box-shadow: 0px 0px 50px rgb(255, 24, 132);
  }
  to {
    box-shadow: 0px 0px 10px rgb(255, 24, 132);
  }
}
@keyframes neon4 {
  from {
    box-shadow: 0px 0px 50px #8139ce;
  }
  to {
    box-shadow: 0px 0px 10px #8139ce;
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

.style1{
  border:4px solid white;
  }
.style2{
  border:4px dashed white;
  }
  .rangeValue{
    margin-top: 10%;
  }  
.valueTransform, .valueDuration {
  font-size:2em;
}
</style>