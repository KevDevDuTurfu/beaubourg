<!--ici html du code-->
<template>

  <div class="lvl lvl1"><!-- contenu du niveau 1-->
    <div v-intro-hint-position="'top'"   class="bubble"  @click="showModal=true"><i class="fa fa-info-circle  " aria-hidden="true"></i></div><!--contenu de la bulle info-->
     
    <!-- modal=popup ici pop up de la bulle info ainsi que ses caractéristiques -->
        <modal :nom="artist" :titre="titre" :source="oeuvre" v-if="showModal" @close="showModal = false"></modal>
    <!--fin du modal -->
    <!--condition de victoire pas encore présente-->
        <victory  :niveau="niveauSuivant" v-if="showVictory" @close="showVictory=false"> </victory>
        <!--debut de l'aide en bas de page-->
        <div class="tips" >
     <p>{{t('Code CSS:')}} <br>
     <code>{background-color: 'linear-gradient( '{{couleur}}','{{couleur2}}')} {border: {{borderWidth*10}}px {{borderStyle}} {{borderColor}}}</code>  </p>
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
        <div  v-intro-hint-position="'left'"  class="btn btn1 " id="btn1" ref="btn1"  v-bind:style="{ backgroundImage: 'linear-gradient( ' + couleur + ', ' + couleur2 + ')'}"  v-draggable="{color1:couleur,color2:couleur2 }">Background</div>
      </div><!--les options -->
      <div class="value"  v-if="show"><!--contenu de valeurs-->
        <div class="color"><!--si les valeurs sont des couleurs=>utilisez class color-->
          <h2 class="titleCss">Gradient</h2><!--titre de la valeur-->
          <!--couleur 1=> valur bind par gradientTop, quand on clique dessus on utilise une fonction pour la récupérer-->
          <div class="col colorGradient1" v-intro-hint-position="'left'" ><div v-bind:style="{ 'background-color':gradientTop }"  class="codeColor" @click="getColorGradientTop(gradientTop)"></div><p class="option">top</p></div>
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
              <p>Value: {{borderWidth*10}}</p>
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
            intro: this.t("Bonjour et bienvenue dans Visuart Code !<br><br> Ce petit tutoriel est là pour t'expliquer les bases du jeu.")
          },
          {
            intro: this.t("Ton objectif dans chaque niveau est de reconstituer une oeuvre du musée à son état d'origine.<br><br>Pour ce faire, tu vas devoir manipuler quelques propriétés CSS.<br>Pas de panique, c'est très simple !")
          },
          {
            intro: this.t("Le CSS est un langage de programmation permettant de styliser l'affichage d'une page web.<br>Son utilisation est indispensable dans la conception de n'importe quelle application ou site internet !<br><br>Maintenant, voyons comment s'organise l'interface du jeu.")
          },
          {
            element:document.querySelector("#artwork1"),
            intro: this.t("Voici le plan de travail. Sur cet écran, tu peux voir le résultat visuel des propriétés CSS que tu as appliqué.<br><br>Pour remporter la partie, ce qui est affiché ici doit ressembler le plus possible à l'oeuvre originale, que tu peux visionner à tout moment en touchant la bulle d'info (i) un peu plus bas.<br><br>Près de la bulle d'info, tu trouveras également une transcription littérale du code utilisé."),
            position:'top'
          },
          {
            element: document.querySelector("#command"),
            intro: this.t("Voici l'interface de jeu. C'est ici que la magie prend forme !<br><br>Cette zone contient tous les éléments de CSS dont tu as besoin pour reconstituer l'oeuvre et compléter le niveau.<br><br>Chaque bouton correspond à une propriété, dont les valeurs des attributs peuvent être modifiées juste en dessous.<br><br>Un peu perdu(e) ? Examinons tout ça plus en détail :"),
            position: "left"
          },
          {
            element: document.querySelector("#btn1"),
            intro: this.t("Voici un bouton. Comme nous l'avons vu précédemment, chaque bouton porte le nom d'une propriété CSS dont les valeurs d'attributs sont définies juste en dessous.<br><br>Par exemple ici, 'Background' permet de définir l'arrière plan de l'oeuvre.<br><br> Mais comment fonctionne-t'il, ce bouton 'Background' ? C'est très simple, jettes donc un oeil un peu plus bas."),
            position: "left"
          },
          {
            element: document.querySelectorAll(".codeColor")[0],
            intro: this.t("Pour la propriété 'Background', nous n'avons qu'à paramétrer un seul attribut : 'Gradient', dont les sous-attributs sont 'top' et 'bottom'.<br><br>Pour faciliter les choses dans ce premier exemple, il n'y a qu'une seule valeur de couleur possible pour 'top' et pour 'bottom', donc impossible de se tromper !<br><br>Touchons donc les cercles de couleur au dessus de 'top' et de 'bottom' pour sélectionner les valeurs."),
            position: "bottom"
          },
          {
            element: document.querySelector("#btn1"),
            intro: this.t("Lorsqu'une valeur d'attribut a correctement été affectée, le bouton de la propriété correspondante s'anime en conséquence, afin de donner un aperçu du résultat.<br><br>Tout ce qu'il nous reste maintenant à faire est de maintenir le doigt enfoncé sur le bouton 'Background' et de le faire glisser sur le plan de travail.<br><br>Abracadabra ! La couleur de fond a changé !"),
            position: "left"
          },
          {
            intro: this.t("Ce tutoriel est désormais terminé ! C'est maintenant à toi de jouer !<br><br>Parviendras-tu à relever le challenge et à compléter les quatre niveaux ?<br><br>Bonne chance !")
          },
        ]
      });

    this.intro.start();



  },
   locales: {

    	en_UK: {

          "Code CSS:":"CSS code",
          "Bonjour et bienvenue dans Visuart Code !<br><br> Ce petit tutoriel est là pour t'expliquer les bases du jeu.":"Hi there ! Welcome to Visuart Code !<br><br>This short tutorial will explain you the basics of the game.",
          "Ton objectif dans chaque niveau est de reconstituer une oeuvre du musée à son état d'origine.<br><br>Pour ce faire, tu vas devoir manipuler quelques propriétés CSS.<br>Pas de panique, c'est très simple !":"Your objective in every level is to reconstruct an artwork from the museum as precisely as possible to its original state.<br><br>To do so, you will have to play around with CSS properties.<br> Don't creep out, it is actually not that hard !",
          "Le CSS est un langage de programmation permettant de styliser l'affichage d'une page web.<br>Son utilisation est indispensable dans la conception de n'importe quelle application ou site internet !<br><br>Maintenant, voyons comment s'organise l'interface du jeu.":" CSS is a programming language used to define styles for web pages.<br>Using this technology is mandatory in the developping process of any application or website !<br><br>Now, let's see how this game works.",
           "Voici le plan de travail. Sur cet écran, tu peux voir le résultat visuel des propriétés CSS que tu as appliqué.<br><br>Pour remporter la partie, ce qui est affiché ici doit ressembler le plus possible à l'oeuvre originale, que tu peux visionner à tout moment en touchant la bulle d'info (i) un peu plus bas.<br><br>Près de la bulle d'info, tu trouveras également une transcription littérale du code utilisé.": "This is the workbench. On this screen, you can check the visual render of all CSS properties you applied.<br><br>To win the game, what is displayed here must look as close as possible to the original artwork, which you can view at any moment by touching the bio icon (i) below.<br><br>Next to the bio icon, you will also find the litteral transcription of the code you used.",
           "Voici l'interface de jeu. C'est ici que la magie prend forme !<br><br>Cette zone contient tous les éléments de CSS dont tu as besoin pour reconstituer l'oeuvre et compléter le niveau.<br><br>Chaque bouton correspond à une propriété, dont les valeurs des attributs peuvent être modifiées juste en dessous.<br><br>Un peu perdu(e) ? Examinons tout ça plus en détail :":"This is the game's dashboard. That is where the magic happens !<br><br>This section contains all CSS elements you need to reconstruct the artwork and complete the level.<br><br>Each button assimilates to a property, with attribute's values that can be edited just down below.<br><br>A bit confused ? Let's take a more detailed look.",
           "Voici un bouton. Comme nous l'avons vu précédemment, chaque bouton porte le nom d'une propriété CSS dont les valeurs d'attributs sont définies juste en dessous.<br><br>Par exemple ici, 'Background' permet de définir l'arrière plan de l'oeuvre.<br><br> Mais comment fonctionne-t'il, ce bouton 'Background' ? C'est très simple, jettes donc un oeil un peu plus bas.":"This a button. As stated previously, each button bears the name of a CSS property which attribute's values can be edited just down below.<br><br>Here for instance, 'Background' allows you to define the background of the artwork.<br><br>But how exactly can you use this button ? Well, let's see how it works.",
           "Pour la propriété 'Background', nous n'avons qu'à paramétrer un seul attribut : 'Gradient', dont les sous-attributs sont 'top' et 'bottom'.<br><br>Pour faciliter les choses dans ce premier exemple, il n'y a qu'une seule valeur de couleur possible pour 'top' et pour 'bottom', donc impossible de se tromper !<br><br>Touchons donc les cercles de couleur au dessus de 'top' et de 'bottom' pour sélectionner les valeurs.": "First step : Pick a value of a property's attribute.<br><br>In the case of the'Background' property, we only get one attribute to look at : 'Gradient',  which has two sub-attributes, 'top' and 'bottom'.<br><br>To make things easier as it is a first example, there is only one possible value for both 'top' and 'bottom', so you can't get it wrong !<br><br>Anyway, let's touch the colored circles above 'top' and 'bottom' to select the values.",
           "Lorsqu'une valeur d'attribut a correctement été affectée, le bouton de la propriété correspondante s'anime en conséquence, afin de donner un aperçu du résultat.<br><br>Tout ce qu'il nous reste maintenant à faire est de maintenir le doigt enfoncé sur le bouton 'Background' et de le faire glisser sur le plan de travail.<br><br>Abracadabra ! La couleur de fond a changé !":"When a value has been successfully applied, the corresponding property's button animates itself accordingly, giving you a glimpse of the result.<br><br>All that we have left to do now is to drag and drop the 'Background' button on the workbench.<br><br>Hocus Pocus ! The background's color changed !",
           "Ce tutoriel est désormais terminé ! C'est maintenant à toi de jouer !<br><br>Parviendras-tu à relever le challenge et à compléter les quatre niveaux ?<br><br>Bonne chance !":"This tutorial is now over ! Everything is up to you now !<br><br>Will you be up to the challenge and succeed to get through all four levels ?<br><br>Good luck !"
        },
        fr_FR: {

          "CSS code:":"Code CSS:",
          "Hi there ! Welcome to Visuart Code !<br><br>This short tutorial will explain you the basics of the game.":"Bonjour et bienvenue dans Visuart Code !<br><br> Ce petit tutoriel est là pour t'expliquer les bases du jeu.",
          "Your objective in every level is to reconstruct an artwork from the museum as precisely as possible to its original state.<br><br>To do so, you will have to play around with CSS properties.<br> Don't creep out, it is actually not that hard !":"Ton objectif dans chaque niveau est de reconstituer une oeuvre du musée à son état d'origine.<br><br>Pour ce faire, tu vas devoir manipuler quelques propriétés CSS.<br>Pas de panique, c'est très simple !",
           "CSS is a programming language used to define styles for web pages.<br>Using this technology is mandatory in the developping process of any application or website !<br><br>Now, let's see how this game works.":"Le CSS est un langage de programmation permettant de styliser l'affichage d'une page web.<br>Son utilisation est indispensable dans la conception de n'importe quelle application ou site internet !<br><br>Maintenant, voyons comment s'organise l'interface du jeu.",
          "This is the workbench. On this screen, you can check the visual render of all CSS properties you applied.<br><br>To win the game, what is displayed here must look as close as possible to the original artwork, which you can view at any moment by touching the bio icon (i) below.<br><br>Next to the bio icon, you will also find the litteral transcription of the code you used.":"Voici le plan de travail. Sur cet écran, tu peux voir le résultat visuel des propriétés CSS que tu as appliqué.<br><br>Pour remporter la partie, ce qui est affiché ici doit ressembler le plus possible à l'oeuvre originale, que tu peux visionner à tout moment en touchant la bulle d'info (i) un peu plus bas.<br><br>Près de la bulle d'info, tu trouveras également une transcription littérale du code utilisé.",
          "This is the game's dashboard. That is where the magic happens !<br><br>This section contains all CSS elements you need to reconstruct the artwork and complete the level.<br><br>Each button assimilates to a property, with attribute's values that can be edited just down below.<br><br>A bit confused ? Let's take a more detailed look.":"Voici l'interface de jeu. C'est ici que la magie prend forme !<br><br>Cette zone contient tous les éléments de CSS dont tu as besoin pour reconstituer l'oeuvre et compléter le niveau.<br><br>Chaque bouton correspond à une propriété, dont les valeurs des attributs peuvent être modifiées juste en dessous.<br><br>Un peu perdu(e) ? Examinons tout ça plus en détail :",
          "This a button. As stated previously, each button bears the name of a CSS property which attribute's values can be edited just down below.<br><br>Here for instance, 'Background' allows you to define the background of the artwork.<br><br>But how exactly can you use this button ? Well, let's see how it works.":"Voici un bouton. Comme nous l'avons vu précédemment, chaque bouton porte le nom d'une propriété CSS dont les valeurs d'attributs sont définies juste en dessous.<br><br>Par exemple ici, 'Background' permet de définir l'arrière plan de l'oeuvre.<br><br> Mais comment fonctionne-t'il, ce bouton 'Background' ? C'est très simple, jettes donc un oeil un peu plus bas.",
          "First step : Pick a value of a property's attribute.<br><br>In the case of the'Background' property, we only get one attribute to look at : 'Gradient',  which has two sub-attributes, 'top' and 'bottom'.<br><br>To make things easier as it is a first example, there is only one possible value for both 'top' and 'bottom', so you can't get it wrong !<br><br>Anyway, let's touch the colored circles above 'top' and 'bottom' to select the value.":"Pour la propriété 'Background', nous n'avons qu'à paramétrer un seul attribut : 'Gradient', dont les sous-attributs sont 'top' et 'bottom'.<br><br>Pour faciliter les choses dans ce premier exemple, il n'y a qu'une seule valeur de couleur possible pour 'top' et pour 'bottom', donc impossible de se tromper !<br><br>Touchons donc le cercles de couleur au dessus de 'top' et de 'bottom' pour sélectionner la valeur.",
          "When a value has been successfully applied, the corresponding property's button animates itself accordingly, giving you a glimpse of the result.<br><br>All that we have left to do now is to drag and drop the 'Background' button on the workbench.<br><br>Hocus Pocus ! The background's color changed !":"Lorsqu'une valeur d'attribut a correctement été affectée, le bouton de la propriété correspondante s'anime en conséquence, afin de donner un aperçu du résultat.<br><br>Tout ce qu'il nous reste maintenant à faire est de maintenir le doigt enfoncé sur le bouton 'Background' et de le faire glisser sur le plan de travail.<br><br>Abracadabra ! La couleur de fond a changé !",
          "This tutorial is now over ! Everything is up to you now !<br><br>Will you be up to the challenge and succeed to get through all four levels ?<br><br>Good luck !":  "Ce tutoriel est désormais terminé ! C'est maintenant à toi de jouer !<br><br>Parviendras-tu à relever le challenge et à compléter les quatre niveaux ?<br><br>Bonne chance !"
        }

    },
  methods:{
    changeLang(langue) {
        this.hey_lang=langue;
    },

    getColorGradientTop: function(value){
    this.couleur=value;
    },
    getColorGradientBottom: function(value){
    this.couleur2=value;

    },

    getBorderColor: function(value) {

      this.borderColor = value;

    },

    getBorderStyle: function(value) {

      this.borderStyle = value;

    },

    // showHint: function() {
    //   this.intro.showHints();

    // },

    victory: function() {

      if (((document.getElementById("artwork1").style.background=='linear-gradient(rgb(40, 142, 153), rgb(24, 84, 94))') )&& (
       (document.getElementById("artwork1").style.border=='50px solid rgb(24, 84, 94)')
      || (document.getElementById("artwork1").style.border=='60px solid rgb(24, 84, 94)')
      || (document.getElementById("artwork1").style.border=='70px solid rgb(24, 84, 94)')
      || (document.getElementById("artwork1").style.border=='40px solid rgb(24, 84, 94)'))) {
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
      var touch=e.touches[0];
      var dx = touch.pageX - initialMouseX;
      var dy = touch.pageY - initialMouseY;
      el.style.top = startY + dy + 'px';
      el.style.left = startX + dx + 'px';
      return false;
    }

    function mouseup(event) {
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
      var touch=e.touches[0];
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
