<!--ici html du code-->
<template>
  <div class="lvl4">
  
    <!-- contenu du niveau 2-->
  
    <div class="bubble" @click="showModal = true">
      <i class="fa fa-question-circle" aria-hidden="true"></i></div>
  
    <!--contenu de la bulle info-->
  
    <!-- modal=popup ici pop up de la bulle info ainsi que ses caractéristiques -->
  
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
  
        <div :class="['artwork4img', { selected: imageOneSelected }]" id="artwork4img1" ref="artwork4img1"  @click="selectedTrigger('imgOne')">
  
        </div>
  
        <div :class="['artwork4img', { selected: imageTwoSelected }]" id="artwork4img2" ref="artwork4img2"  @click="selectedTrigger('imgTwo')">
  
        </div>
  
      </div>
  
      <div id="desc-block">
  
        <div :class="['artwork4desc', { selected: descOneSelected }]" id="artwork4desc1" ref="artwork4desc1"  @click="selectedTrigger('descOne')">
  
          <p>En 1984, le ministère des Affaires étrangères m’a accordé une bourse d’étude de trois mois au Japon.</p>
  
          <p>Je suis partie le 25 octobre 1984 sans savoir que cette date marquait le début d’un compte à rebours de 92 jours qui allait aboutir à une rupture, banale, mais que j’ai vécue alors comme le moment le plus douloureux de ma vie.</p>
  
          <p>J’en ai tenu ce voyage pour responsable. De retour en France, le 28 janvier 1985, j’ai choisi, par conjuration, de raconter ma souffrance plutôt que mon périple.</p>
    
        </div>
  
        <div :class="['artwork4desc', { selected: descTwoSelected }]" id="artwork4desc2" ref="artwork4desc2" @click="selectedTrigger('descTwo')">
  
          <p>En contrepartie, j’ai demandé à mes interlocuteurs, amis ou rencontres de fortune : « Quand avez-vous le plus souffert ? » </p>
  
          <p>Cet échange cesserait quand j’aurais épuisé ma propre histoire à force de la raconter, ou bien relativisé ma peine face à celle des autres.</p>
  
          <p>La méthode a été radicale : en trois mois, j’étais guérie. </p>
  
          <p>L’exorcisme réussi, dans la crainte d’une rechute, j’ai délaissé mon projet. Pour l’exhumer quinze ans plus tard </p>
  
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
  
      }
  
    },
    computed: {
      btnStyleFontSize:function() {
          return 'font-size: '+this.btnStyleFontSizeNumber+'px'
      }
    },
  
    components: {
  
      'modal': Modal
  
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
  
        this.showVictory = true;
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
  
      draggable: function(el, binding) {
  
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
  
    created: function() {},
  
    mounted: function() {
  
  
    },
  
    beforeUpdate: function() {
  
  
    },
  
    updated: function() {
  
    }
  
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {
  
    overflow: hidden;
  
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