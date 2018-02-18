<!--ici html du code-->
<template>

  <div class="lvl lvl1"><!-- contenu du niveau 1-->
    <div v-intro-hint-position="'top'" v-intro-hint="'Informations sur l\'oeuvre en question'" class="bubble"  @click="showModal=true"><i class="fa fa-info-circle  " aria-hidden="true"></i></div><!--contenu de la bulle info-->
     <div v-intro-hint-position="'top'" v-intro-hint="'Plus d\'informations sur le jeu'" class="help"  @click="showHint()"><i class="fa fa-question-circle" aria-hidden="true"></i></div>
    <!-- modal=popup ici pop up de la bulle info ainsi que ses caractéristiques -->
        <modal :nom="artist" :titre="titre" :source="oeuvre" v-if="showModal" @close="showModal = false"></modal>
    <!--fin du modal -->
    <!--condition de victoire pas encore présente-->
        <victory  :niveau="niveauSuivant" v-if="showVictory" @close="showVictory=false"> </victory>
        <!--debut de l'aide en bas de page-->
        <div class="tips" >
     <p v-intro-hint="'Le vrai code CSS qui se passe lorsqu\'on change les valeurs des propriétés'">Code css: <br>
     <code>{background-color: 'linear-gradient( '{{couleur}}','{{couleur2}}')} {border: {{borderWidth}}px {{borderStyle}} {{borderColor}}}</code>  </p>
     </div><!--fin de l'aide -->

     <!--contenu de l'oeuvre à composer-->
    <div class="artwork" ref="artwork">
      <!-- oeuvre en lui même -->
      <div class="artwork1" id="artwork1" ref="artwork1" >
      </div>
    </div>
    
    <!--debut du contenu des commandes (barre à droite) -->
    <div class="command" id="command">
      <div id="position1"><!-- emplacement du bouton permettant de la remettre à sa place-->
      <!--le bouton "draggable" apres v-draggable on met les valeurs qui se changent dynamiquement par les options en bas -->
        <div  v-intro-hint-position="'left'" v-intro-hint="'Propriété CSS à remplir, pour l\'utiliser, restez appuyer sur le bouton et déposez le bouton sur l\'oeuvre'" class="btn btn1 " id="btn1" ref="btn1"  v-bind:style="{ backgroundImage: 'linear-gradient( ' + couleur + ', ' + couleur2 + ')'}"  v-draggable="{color1:couleur,color2:couleur2 }">Background</div>
      </div><!--les options -->
      <div class="value"  v-if="show"><!--contenu de valeurs-->
        <div class="color"><!--si les valeurs sont des couleurs=>utilisez class color-->
          <h2 class="titleCss">Gradient</h2><!--titre de la valeur-->
          <!--couleur 1=> valur bind par gradientTop, quand on clique dessus on utilise une fonction pour la récupérer-->
          <div class="col colorGradient1" v-intro-hint-position="'left'" v-intro-hint="'valeur CSS à remplir en appuyant dessus'"><div v-bind:style="{ 'background-color':gradientTop }"  class="codeColor" @click="getColorGradientTop(gradientTop)"></div><p class="option">top</p></div>
          <!--pareil pour la couleur 2 -->
          <div class="col colorGradient2"><div v-bind:style="{ 'background-color':gradientBottom }" class="codeColor" @click="getColorGradientBottom(gradientBottom)"></div><p class="option">bottom</p></div>
        </div>
      </div>
      <div class="btn btn2" ref ="btn2" :style="btnStyle"  v-draggable="{victory:showVictory,color:borderColor,width:borderWidth,style:borderStyle}">Border</div>
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
              <input id="valueBorder" type="range" min="1" max="10" step="1" v-model="borderWidth">
            </div>
        </div>
    </div>

  </div>
</template>
<script>

import Modal from './Modal.vue';
import { introJs } from 'intro.js';
import 'intro.js/introjs.css';
import Victory from './Victory.vue';
export default {
  name: 'Level1',
  data () {
    return {
      introJs,
      oeuvre: 'src/assets/images/louiscane.png',
      showVictory:false,
      artist:'Louis CANE',
      titre: 'Sol-Mur',
      niveauSuivant:'niveau2',
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
      borderStyle:'solid',
      intro : introJs()
    }
  }, 
  components: {
          'modal':  Modal,
          'victory': Victory
        },
  mounted: function() {
     
      this.intro.setOptions({
        steps: [
          { 
            intro: "Bienvenue dans Visuart Code! Voici le tutoriel du jeu!"
          },
          { 
            intro: "Le but du jeu est de reconstruire des oeuvres à partir du code CSS, code qui permet de donner un style à un élément sur une page web"
          },
          {
            element:document.querySelector("#artwork1"),
            intro: "Voici l'oeuvre à reconstituer",
            
            position:'top'
          },
          { 
            element: document.querySelector("#command"),
            intro: "Voici la liste du code CSS à remplir",
            position: "left"
            
          },
          {
            element: document.querySelector("#btn1"),
            intro: "Voici un bouton qui est une propriété CSS 'background', permet de donner un fond à l'oeuvre",
            position: "left"
          },
          {
            element: document.querySelector("#btn1"),
            intro: "Le principe est que cette propriété ait des valeurs remplies se situant juste en dessous du bouton",
            position: "left"
          },
          {
            element: document.querySelectorAll(".codeColor")[0],
            intro: "Ces valeurs doivent être sélectionnées afin de remplir la propriété CSS 'Background', cela va permettre de reconstituer l'oeuvre",
            position: "left"
          },
          {
            element: document.querySelector("#btn1"),
            intro: "Première étape: attribuer des valeurs au background, il suffit de cliquer sur les valeurs",
          }
        ]
      });
    this.intro.start();
   
  },
  methods:{
   
    getColorGradientTop: function(value){
    this.couleur=value;
    // this.gradient();
    },
    getColorGradientBottom: function(value){
    this.couleur2=value;
    // this.gradient();
    },
  
    getBorderColor: function(value) {

      this.borderColor = value;

    },

    getBorderStyle: function(value) {

      this.borderStyle = value;

    },

    showHint: function() {
        this.intro.showHints();
    },
    // gradient:function(){
    //    this.$refs.btn1.style.background='linear-gradient('+this.couleur+','+this.couleur2+')';
       
    // },
    victory: function() {
      if ((document.getElementById("artwork1").style.background=='linear-gradient(rgb(40, 142, 153), rgb(24, 84, 94))')
      && (document.getElementById("artwork1").style.border=='70px solid rgb(24, 84, 94)')) {
        console.log('ok');
          this.showVictory=true;
      }
    }
  },
  computed: {
  
      btnStyle: function() {
  
        return 'border: ' + this.borderWidth + 'px ' + this.borderStyle + ' ' + this.borderColor;
  
      }
  },

  directives: {
    
   draggable: function (el, binding, vnode) {
    
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
      document.removeEventListener('touchmove', mousemove);
      document.removeEventListener('touchend', mouseup);
      let borderArt = parseInt(binding.value.width) * 10;
      if (el.classList.contains('btn1')){
          document.getElementById("artwork1").style.background='linear-gradient('+binding.value.color1+','+binding.value.color2+')';
          vnode.context.couleur='transparent';
          vnode.context.couleur2='transparent';
      }
      else {
         document.getElementById("artwork1").style.border= borderArt + 'px ' + binding.value.style + ' ' + binding.value.color;
      }
     vnode.context.victory();

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
  
  }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  overflow:hidden;
}
.lvl1 {
  background-image: url("../assets/images/img_stack.png");
  background-image:url("../assets/images/fondniveau.png"), url("../assets/images/img_stack.png") ;
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
.artwork1{
  margin: 8% 5% 8% 7%;
  height:70vh;
  background:rgb(211, 204, 204);
  border: 5px solid white;
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