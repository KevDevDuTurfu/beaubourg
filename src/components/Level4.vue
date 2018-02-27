<!--ici html du code-->
<template>
  <div class="lvl4">
  
    <!-- contenu du niveau 2-->

    <div class="bubble" @click="showModal = true">
      <i class="fa fa-question-circle" aria-hidden="true"></i></div>
  
    <!--contenu de la bulle info-->
  
    <!-- modal=popup ici pop up de la bulle info ainsi que ses caractéristiques -->
     <errorselector v-if="showErrorSelect" @close="showErrorSelect = false"></errorselector>
    <modal :nom="artist" :titre="titre" :source="oeuvre" v-if="showModal" @close="showModal = false"></modal>
  
    <!--fin du modal -->
  
    <!--condition de victoire pas encore présente-->
  
    <victory :niveau="niveauSuivant" v-if="showVictory" @close="showVictory=false"> </victory>
  
    <!--debut de l'aide en bas de page-->
  
    <div class="tips">
  
      <p>Bravo! Maintenant, il ne reste plus qu’à ajouter la propriété color (backImg) et border (bordure) de la même manière...</p>
  
    </div>
  
    <!--fin de l'aide -->
  
    <!--contenu de l'oeuvre à composer-->
  
    <div class="artwork" ref="artwork">
  
      <!-- oeuvre en lui même -->
  
      <div id="img-block">
  
        <div :class="['artwork4','artwork4img', { selected: imageOneSelected }]" id="artwork4img1" ref="artwork4img1"  @click="selectedTrigger('imgOne')">
  
        </div>
  
        <div :class="['artwork4','artwork4img', { selected: imageTwoSelected }]" id="artwork4img2" ref="artwork4img2"  @click="selectedTrigger('imgTwo')">
  
        </div>
  
      </div>
  
      <div id="desc-block">
  
        <div :class="['artwork4','artwork4desc', { selected: descOneSelected }]" id="artwork4desc1" ref="artwork4desc1"  @click="selectedTrigger('descOne')">
  
          <p>Il y a douze jours, l'homme que j'aime m'a quittée.
Le 25 janvier 1985, à deux heures du matin, dans la chambre 261 de l'hôtel Impérial, à  New Delhi.</p>
  
          <p>C'était un ami de mon père, il était très beau, j'avais rêvé de lui durant toute mon enfance, puis je l'avais perdu de vue.
Un jour, alors que je souffrais d'une séparation douloureuse et que je marchais tristement au hasard des rues, j'ai joué à imaginer quel serait celui qui me ferait oublier cette rupture.
Mastroianni ? Non. Cohn-Bendit ? Non.</p>
            <p>Personne ne me venait à l'esprit. Ce n'est qu'après avoir invoqué le nom de M. qu'il s'est imposé.
Je me suis aussitôt procuré son numéro de téléphone.
Il se souvenait de moi. Il habitait à plusieurs centaines de kilomètres de Paris, il me rendait visite lors d'un prochain déplacement.
Il est venu. Comme il repartait dans sa campagne le lendemain, je l'ai prié de m'emmener. Il ne préférait pas.
Puisque j'insistais, il m'a communiqué, à contrecoeur, l'heure de son départ.</p>
          <p>Je l'ai rejoint dans le train. Il a toléré, en silence, ma présence.
Je n'avais emporté qu'une robe de mariée. Je l'avais mise pour notre première nuit ensemble. Et je suis restée.
C'est cet homme que j'ai pris le risque de perdre en acceptant une bourse au Japon, alors qu'il m'avait prévenue qu'il n'admettrait pas une telle absence.
</p>
         </div>
  
        <div :class="['artwork4','artwork4desc', { selected: descTwoSelected }]" id="artwork4desc2" ref="artwork4desc2" @click="selectedTrigger('descTwo')">
  
         <p>C'était durant l'hiver 1976. En novembre. J'avais vingt-cinq ans. Je répétais une pièce au théatre de Nanterre.
L'après-midi, durant la répétition, j'ai soudain éprouvé une sensation d'angoisse, une inquiétude étrange.
J'ai quitté le plateau pour joindre, au téléphone, l'homme que j'aimais.</p>
<p>Dans le foyer toujours désert, il y avait une moquette rouge et je portais, ce jour-là, un costume rouge vif.
J'ai composé, depuis la cabine téléphonique, le numéro du bureau où travaillait ce garçon, j'ai demandé à lui parler.
La standardiste a répondu qu'elle était désolée, que ce n'était pas possible.
"Pourquoi ?" ai-je questionné. Elle a dit : "M. R. est décédé."
Mon français était alors approximatif, j'ai insisté :  "Je ne comprends pas ce mot, mademoiselle."</p>
<p>Silence. Je m'obstinais, elle a clarifié : "Cette personne vient de mourir."
J'ai d'abord cru à un malentendu, puis tout ce rouge m'est tombé dessus.
J'ai compris qu'il s'était suicidé, que j'étais responsable. J'ai raccroché sans rien dire.
Je me souviens aujourd'hui de la toute petite voix d'une jeune fille que j'ai forcée à m'expliquer le mot "décédé".
La cabine n'existe plus. Le rouge non plus, tout est blanc maintenant. 
</p>
        </div>
  
      </div>
  
    </div>
  
    <!--debut du contenu des commandes (barre à droite) -->
  
    <div class="command">
  
      <transition name="fade">
  
        <div class="page1-cmd" v-if="!cmd">
  
          <div class='btn-command'>
  
            <i class="fa fa-caret-right" aria-hidden="true" v-on:click="cmd = !cmd">
               <span class="labelArrow">Blocs textes</span>
            </i>
  
          </div>
  
          <div id="position1">
  
            <!-- emplacement du bouton permettant de la remettre à sa place-->
  
            <!--le bouton "draggable" apres v-draggable on met les valeurs qui se changent dynamiquement par les options en bas -->
  
            <div class="btn btn1 " ref="btn1" v-draggable="{image:backImg}">Background</div>
  
          </div>
  
          <!--les options -->
  
          <div class="value">
  
            <!--contenu de valeurs-->
  
            <div class="color">
  
              <!--si les valeurs sont des backImgs=>utilisez class color-->
  
              <!--backImg 1=>  quand on clique dessus on utilise une fonction pour récupérer backImg-->
  
              <div class="col imgBackground1">
  
                <div class="codeImage" @click="getImgBackground('imagedroite.png')"></div>
  
              </div>
  
              <!--pareil pour la backImg 2 -->
  
              <div class="col imgBackground2">
  
                <div class="codeImage" @click="getImgBackground('imagegauche.png')"></div>
  
              </div>
  
            </div>
  
            <div class="col imgBackground3">
  
              <div class="codeImage" @click="getImgBackground('imagefake1.png')"></div>
  
            </div>
  
            <!--pareil pour la backImg 2 -->
  
            <div class="col imgBackground4">
  
              <div class="codeImage" @click="getImgBackground('imagefake2.png')"></div>
  
            </div>
  
          </div>
          <div class="btn btn2" ref="btn2" :style="{border:btnStyleBorder}" v-draggable="{victory:showVictory,border:btnStyleBorder}">Border</div>
  
          <div class="value">
  
            <input type="text" class="textField" v-model="btnStyleBorder" placeholder="Entrez une valeur">
  
          </div>
  
        </div>
  
      </transition>
  
       <transition name="fade">
  
        <div class="page2-cmd" v-if="cmd"> 
          <div class='btn-command'>
  
            <i class="fa fa-caret-left" aria-hidden="true" v-on:click="cmd = !cmd">
              <span class="labelArrow">Blocs images</span>
              </i>
  
          </div> 
  
           <div id="position3">
  
            <div class="btn btn3 " ref="btn3" :style="{backgroundColor: btnStyleBack}" v-draggable="{backgroundColor:btnStyleBack}">Background</div>
  
          </div> 
  
          <!--les options -->
 
          <div class="value">
  
            <input type="text" class="textField" v-model="btnStyleBack"  placeholder="Entrez une valeur">
  
          </div> 
          <div id="position4">
            <div class="btn btn4" ref="btn4" :style="{btnStyleFontSize}" v-draggable="{fontSize: btnStyleFontSizeNumber}">Font-size</div>
          </div>
  
          <div class="value">
  
            <input type="text" class="textField" v-model="btnStyleFontSizeNumber" placeholder="Entrez une valeur">
  
          </div>
  
         <div id="position5">
            <div class="btn btn5" ref="btn5" :style="{fontFamily:btnStyleFontFamily}" v-draggable="{fontFamily: btnStyleFontFamily}">Font-family</div> 
         </div>
  
           <div class="value">
  
            <input type="text" class="textField" v-model="btnStyleFontFamily" placeholder="Entrez une valeur">
  
          </div>
  
          <div id="position6">
            <div class="btn btn6" ref="btn6" :style="{color:btnStyleColor}" v-draggable="{color:btnStyleColor}">Color</div>
          </div>
  
          <div class="value">
  
            <input type="text" class="textField" v-model="btnStyleColor" placeholder="Entrez une valeur">
          </div>
  
          </div> 
<!--    -->
      </transition>
      </div>
  
    </div>
</template>
<script>
  import Modal from './Modal.vue';
  import { introJs } from 'intro.js';
  import 'intro.js/introjs.css';
  import ErrorSelector from './ErrorSelector.vue';
  import Victory from './Victory.vue'
  
  export default {
  
    name: 'Level4',
  
    data() {
  
      return {
  
        niveauSuivant: 'niveau1',
  
        oeuvre: 'src/assets/images/sophiecale.png',
  
        showVictory: false,
  
        artist: 'Sophie CALLE',
  
        titre: 'Douleur exquise',

        showErrorSelect: false,
        showModal: false,
  
        show: true,
  
        show2: true,
  
        backImg: 'transparent',
  
        borderColor: 'white',
  
        borderWidth: 10,
  
        borderStyle: 'solid',
  
        couleur: 'transparent',
  
        cmd: false,
        
        btnStyleBorder:'',
        btnStyleBack:'',
        btnStyleFontSizeNumber:0,
        btnStyleFontFamily:'',
        btnStyleColor:'',
        selected:false,
        imageOneSelected:false,
        imageTwoSelected: false,
        descOneSelected:false,
        descTwoSelected: false,
        
      intro2 : introJs()
  
      }
  
    },
    computed: {
      btnStyleFontSize:function() {
          return 'font-size: '+this.btnStyleFontSizeNumber+'px'
      }
    },
  
    components: {
  
      'modal': Modal,
      'errorselector' : ErrorSelector
  
    },
  
    methods: {
  selectedTrigger(bar)  {
        switch(bar) {
          case 'imgOne':
              this.imageOneSelected=!this.imageOneSelected;
              this.imageTwoSelected=false;
              this.descOneSelected=false;
              this.descTwoSelected=false;
              break;
          case 'imgTwo':
              this.imageOneSelected=false;
              this.imageTwoSelected=!this.imageTwoSelected;
              this.descOneSelected=false;
              this.descTwoSelected=false;
              break;
          case 'descOne':
              this.imageOneSelected=false;
              this.imageTwoSelected=false;
              this.descOneSelected=!this.descOneSelected;
              this.descTwoSelected=false;
              break;
          case 'descTwo':
              this.imageOneSelected=false;
              this.imageTwoSelected=false;
              this.descOneSelected=false;
              this.descTwoSelected=!this.descTwoSelected;
              break;
          default:
              break;
      }
    },
      victory: function() {
        if((document.getElementById('artwork4img1').style.backgroundImage=='url("src/assets/images/imagegauche.png")')
        &&(document.getElementById('artwork4img2').style.backgroundImage=='url("src/assets/images/imagedroite.png")')
         &&((document.getElementById('artwork4img1').style.border=="7px solid black") || (document.getElementById('artwork4img1').style.border=="8px solid black") || (document.getElementById('artwork4img1').style.border=="9px solid black") || (document.getElementById('artwork4img1').style.border=="10px solid black") || (document.getElementById('artwork4img1').style.border=="11px solid black") || (document.getElementById('artwork4img1').style.border=="12px solid black") ||(document.getElementById('artwork4img1').style.border=="13px solid black"))
         &&((document.getElementById('artwork4img2').style.border=="7px solid black") || (document.getElementById('artwork4img2').style.border=="8px solid black") || (document.getElementById('artwork4img2').style.border=="9px solid black") || (document.getElementById('artwork4img2').style.border=="10px solid black") || (document.getElementById('artwork4img2').style.border=="11px solid black") || (document.getElementById('artwork4img2').style.border=="12px solid black") ||(document.getElementById('artwork4img2').style.border=="13px solid black"))
         &&((document.getElementById('artwork4desc1').style.border=="7px solid black") || (document.getElementById('artwork4desc1').style.border=="8px solid black") || (document.getElementById('artwork4desc1').style.border=="9px solid black") || (document.getElementById('artwork4desc1').style.border=="10px solid black") || (document.getElementById('artwork4desc1').style.border=="11px solid black") || (document.getElementById('artwork4desc1').style.border=="12px solid black") ||(document.getElementById('artwork4desc1').style.border=="13px solid black"))        
         &&((document.getElementById('artwork4desc2').style.border=="7px solid black") || (document.getElementById('artwork4desc2').style.border=="8px solid black") || (document.getElementById('artwork4desc2').style.border=="9px solid black") || (document.getElementById('artwork4desc2').style.border=="10px solid black") || (document.getElementById('artwork4desc2').style.border=="11px solid black") || (document.getElementById('artwork4desc2').style.border=="12px solid black") ||(document.getElementById('artwork4desc2').style.border=="13px solid black"))       
        ((document.getElementById('artwork4desc1').style.backgroundColor=="black") || document.getElementById('artwork4desc1').style.backgroundColor=="#000" || document.getElementById('artwork4desc1').style.backgroundColor=="rgb(0,0,0)")
        &&((document.getElementById('artwork4desc2').style.backgroundColor=="white") || document.getElementById('artwork4desc2').style.backgroundColor=="#fff" || document.getElementById('artwork4desc2').style.backgroundColor=="rgb(255,255,255)")
        &&((document.getElementById('artwork4desc1').style.fontSize=="10px") || (document.getElementById('artwork4desc1').style.fontSize=="11px") || (document.getElementById('artwork4desc1').style.fontSize=="12px"))
        &&((document.getElementById('artwork4desc2').style.fontSize=="10px") || (document.getElementById('artwork4desc2').style.fontSize=="11px") || (document.getElementById('artwork4desc2').style.fontSize=="12px"))
         &&((document.getElementById('artwork4desc2').style.color=="black") || (document.getElementById('artwork4desc2').style.color=="#000" )|| (document.getElementById('artwork4desc2').style.color=="rgb(0,0,0)"))
         &&((document.getElementById('artwork4desc1').style.color=="white") || (document.getElementById('artwork4desc1').style.color=="#fff") || (document.getElementById('artwork4desc1').style.color=="rgb(255,255,255)"))
        
        )
        {
             console.log('jai gagné ');
             
        }
        else {
          console.log(document.getElementById('artwork4desc1').style.fontFamily);
        }
        
    },
  
      getImgBackground: function(value) {
  
        this.backImg = value;
  
        this.backgroundImage();
  
      },
  
      backgroundImage: function() {
  
        this.$refs.btn1.style.backgroundImage = 'url(src/assets/images/' + this.backImg + ')';
    
      }
  
    },
  
  
  
    directives: {
  
      draggable: function(el, binding, vnode) {
  
        var startX, startY, initialMouseX, initialMouseY, initialBoxX, initialBoxY;
  
        function mousemove(e) {
  
          var touch = event.touches[0];
  
          var dx = touch.pageX - initialMouseX;
  
          var dy = touch.pageY - initialMouseY;
  
          el.style.top = startY + dy + 'px';
  
          el.style.left = startX + dx + 'px';
  
          return false;
  
        }
  
  
  
        function mouseup() {
  
          el.style.left = initialBoxX;
  
          el.style.top = initialBoxY;
  
          el.style = 'relative';
  
          document.removeEventListener('touchmove', mousemove);
  
          document.removeEventListener('touchend', mouseup);
           
              if ((!(document.getElementsByClassName('artwork4')[0].classList.contains('selected')) &&
                  (!(document.getElementsByClassName('artwork4')[1].classList.contains('selected'))) &&
                   (!(document.getElementsByClassName('artwork4')[2].classList.contains('selected'))) &&
                   (!(document.getElementsByClassName('artwork4')[3].classList.contains('selected'))))) {
                  vnode.context.showErrorSelect=true;
              }
              else {
                vnode.context.showErrorSelect=false;
                      if (el.classList.contains('btn1')) {
                  console.log(document.getElementsByClassName("selected")[0].classList.contains('artwork4img'))
                    document.getElementsByClassName("selected artwork4img")[0].style.backgroundImage = 'url(src/assets/images/' + binding.value.image + ')';
                  binding.value.image='';
                }
                else if (el.classList.contains('btn2')) {
                      document.getElementsByClassName("selected")[0].style.border = binding.value.border;
                      binding.value.border='';
                } else if (el.classList.contains('btn3')) {
                    document.getElementsByClassName("selected")[0].style.backgroundColor = binding.value.backgroundColor;
                    binding.value.backgroundColor='transparent';
                } else if (el.classList.contains('btn4')) {
                  document.getElementsByClassName("selected")[0].style.fontSize = binding.value.fontSize +'px';
                  binding.value.fontSize='0';
                } else if (el.classList.contains('btn5')) {
                  document.getElementsByClassName("selected")[0].style.fontFamily = binding.value.fontFamily;
                  binding.value.fontFamily='Play';
                } else {
                  document.getElementsByClassName("selected")[0].style.color = binding.value.color;
                  binding.value.color='black';
                }
  
              }
          vnode.context.victory();
        }
  
  
  
        el.addEventListener('touchstart', function(e) {
  
          var touch = event.touches[0];
  
          el.style.position = 'absolute';
  
          el.style.margin = 0;
  
          startX = el.offsetLeft;
  
          startY = el.offsetTop;
  
          initialBoxX = startX;
  
          initialBoxY = startY;
  
          initialMouseX = touch.pageX;
  
          initialMouseY = touch.pageY;
  
          document.addEventListener('touchmove', mousemove);
  
          document.addEventListener('touchend', mouseup);
  
          return false;
  
        });
  
      }
  
  
  
    },
  
   mounted: function() {

this.intro2.setOptions({
  steps: [
    {
      intro: "Astuce : Félicitations, tu es arrivé jusqu'au dernier niveau ! Celui-ci est un peu plus corsé...<br><br>As-tu été attentif à la syntaxe du CSS lors des niveaux précédents ? Ici, plus de choix multiples, c'est à toi d'entrer manuellement les valeurs des attributs !<br><br>Bon courage pour cette dernière épreuve !"
    }
  ]
  });
  this.intro2.start();

  }
  
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {
  
    overflow: hidden;
  
  }

  .labelArrow {
    margin-left: 12%;
    font-size: 0.5em;
  }
  .artwork4 {
    overflow:hidden;
  }
  
  .artwork4desc, .artwork4img {
  transition: transform 2s ease-out;
}
  .value {
  
    margin-top: -6%;
  
    color: white;
  
  }
  
  
  
  ul {
  
    list-style: none;
  
  }
  
  
  
  li {
  
    margin-bottom: 4%;
  
  }
  
  
  
  label {
  
    cursor: pointer;
  
    font-size: 29px;
  
  }
  
  
  
  .colorBackground1 .codeColor {
  
    background: #f40e3c;
  
  }
  
  
  
  .colorBackground2 .codeColor {
  
    background: #59a0f2;
  
  }
  
  
  
  .img-block,
  
  .desc-block {
  
    display: block;
  
  }
  
  
  
  .artwork4desc,
  
  .artwork4img {
  
    display: inline-block;
  
  }
  
  
  
  .btn-command {
  
    color: white;
  
    font-size: 45px;
  
  }
  
  
  
  .btn-command i {
    width: 50%;
    padding: 2%;
  
  }
  
  
  
  .lvl4 {
  
    background-image: url("../assets/images/img_stack.png");
  
    background-image: url("../assets/images/fondniveau.png"), url("../assets/images/img_stack.png");
  
    background-repeat: no-repeat;
  
    background-attachment: fixed;
  
    background-position: center;
  
    background-size: cover;
  
    text-align: center;
  
  }
  
  
  
  .artwork {
  
    height: 100vh;
  
    width: 70%;
  
  }
  
  
  
  .artwork,
  
  .command {
  
    display: inline-block;
  
  }
  
  
  
  .artwork4desc {
  
    margin: 3%;
  
    height: 50vh;
  
    width: 30vh;
  
    background: white;
  
    border: 5px solid white;
  
    vertical-align: bottom;

    font-family:'Play', Arial, sans-serif;

    font-size:13px; 
  
  }
  
  
  
  .artwork4img {
  
    margin: 3%;
  
    margin-bottom: 3%;
  
    width: 30vh;
  
    height: 20vh;
  
    background: white;
  
    border: 5px solid white;
  
  }
  
  
  
  .titleCss {
  
    margin: 2%;
  
  }
  
  
  
  .codeImage {
  
    width: 100px;
  
    height: 100px;
  
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
  
  
  
  .imgBackground1 .codeImage {
  
    background-image: url('../assets/images/imagedroite.png');
  
    background-size: contain;
  
    background-repeat: no-repeat;
  
  }
  
  
  
  .imgBackground2 .codeImage {
  
    background-image: url('../assets/images/imagegauche.png');
  
    background-size: contain;
  
    background-repeat: no-repeat;
  
  }
  
  
  
  .imgBackground3 .codeImage {
  
    background-image: url('../assets/images/imagefake1.png');
  
    background-size: contain;
  
    background-repeat: no-repeat;
  
  }
  
  
  
  .imgBackground4 .codeImage {
  
    background-image: url('../assets/images/imagefake2.png');
  
    background-size: contain;
  
    background-repeat: no-repeat;
  
  }
  
  
  
  .color1 .codeColor {
  
    background-color: #000000;
  
  }
  
  
  
  .color2>.codeColor {
  
    background-color: grey;
  
  }
  
  
  
  .color3>.codeColor {
  
    background-color: rgb(50, 156, 205);
  
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
  
  
  
  .style1 {
  
    border: 4px solid white;
  
  }
  
  
  
  .style2 {
  
    border: 4px dashed white;
  
  }
  
  
  
  .rangeValue {
  
    margin-top: 10%;
  
  }
</style>