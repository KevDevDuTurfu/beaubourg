<!--ici html du code-->
<template>
  <div class="lvl2">
  
    <!-- contenu du niveau 2-->
  
    <div class="bubble" @click="showModal = true"><i class="fa fa-question-circle" aria-hidden="true"></i> </div>
  
    <!--contenu de la bulle info-->
  
    <!-- modal=popup ici pop up de la bulle info ainsi que ses caractéristiques -->
  
    <modal :nom="artist" :titre="titre" :source="oeuvre" v-if="showModal" @close="showModal = false"></modal>
  
    <!--fin du modal -->
  
    <!--condition de victoire pas encore présente-->
  
    <victory :niveau="niveauSuivant" v-if="showVictory" @close="showVictory=false"> </victory>
  
    <!--debut de l'aide en bas de page-->
  
    <div class="tips">
  
      <p>Bravo! Maintenant, il ne reste plus qu’à ajouter la propriété color (couleur) et border (bordure) de la même manière...</p>
  
    </div>
  
    <!--fin de l'aide -->
  
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
  
  
  
      <transition name="fade" mode="in-out">
  
        <div class="page1-cmd" v-if="!cmd">
  
          <div class='btn-command'>
  
            <i class="fa fa-caret-right" aria-hidden="true" v-on:click="cmd = !cmd"></i>
  
          </div>
  
          <div id="position1">
  
            <!-- emplacement du bouton permettant de la remettre à sa place-->
  
            <!--le bouton "draggable" apres v-draggable on met les valeurs qui se changent dynamiquement par les options en bas -->
  
            <div class="btn btn1 " ref="btn1" v-draggable="{color:couleur}">Background</div>
  
          </div>
  
          <!--les options -->
  
          <div class="value" v-if="show">
  
            <!--contenu de valeurs-->
  
            <div class="color">
  
              <!--si les valeurs sont des couleurs=>utilisez class color-->
  
              <h2 class="titleCss">Background-Color</h2>
  
              <!--titre de la valeur-->
  
              <!--couleur 1=>  quand on clique dessus on utilise une fonction pour récupérer couleur-->
  
              <div class="col colorBackground1">
  
                <div class="codeColor" @click="getColorBackground('#f40e3c')"></div>
  
              </div>
  
              <!--pareil pour la couleur 2 -->
  
              <div class="col colorBackground2">
  
                <div class="codeColor" @click="getColorBackground('#59a0f2')"></div>
  
              </div>
  
            </div>
  
          </div>
  
          <div class="btn btn2" ref="btn2" :style="btnStyle" v-draggable="{victory:showVictory,color:borderColor,width:borderWidth,style:borderStyle}">Border</div>
  
          <div class="value" v-if="show2">
  
            <div class="style">
  
              <h2 class="titleCss">Style</h2>
  
              <div class="sty style1" @click="getBorderStyle('solid')"></div>
  
              <div class="sty style2" @click="getBorderStyle('dashed')"></div>
  
            </div>
  
            <div class="color">
  
              <h2 class="titleCss">Color</h2>
  
              <div class="col color1">
  
                <div class="codeColor" @click="getBorderColor('black')"></div>
  
              </div>
  
              <div class="col color2">
  
                <div class="codeColor" @click="getBorderColor('rgb(167, 7, 42)')"></div>
  
              </div>
  
              <div class="col color3">
  
                <div class="codeColor" @click="getBorderColor('rgb(50, 156, 205)')"></div>
  
              </div>
  
            </div>
  
            <div class="width">
  
              <h2 class="titleCss">Width</h2>
  
            </div>
  
            <div class="rangeValue">
  
              <input id="valueBorder" type="range" min="1" max="7" step="1" v-model="borderWidth">
  
  
  
            </div>
  
          </div>
  
        </div>
  
      </transition>
  
      <transition name="fade" mode="in-out">
  
        <div class="page2-cmd" v-if="cmd">
  
          <div class='btn-command'>
  
            <i class="fa fa-caret-left" aria-hidden="true" v-on:click="cmd = !cmd"></i>
  
          </div>
  
          <div id="position3">
  
            <!-- emplacement du bouton permettant de la remettre à sa place-->
  
            <!--le bouton "draggable" apres v-draggable on met les valeurs qui se changent dynamiquement par les options en bas -->
  
            <div class="btn btn3 " ref="btn3" v-draggable="{transform:valueTransform, duration:valueDuration}">Transform</div>
  
          </div>
  
          <!--les options -->
  
          <div class="value">
  
            <!--contenu de valeurs-->
  
            <h2 class="titleCss">Choose transform:</h2>
  
            <div class="tranform">
  
              <div @click="getTransform('translate')" class="valueTransform">Translate</div>
  
              <div @click="getTransform('rotate')" class="valueTransform">Rotate</div>
  
              <div @click="getTransform('scale')" class="valueTransform">Scale</div>
  
            </div>
  
          </div>
  
          <div class="value">
  
            <!--contenu de valeurs-->
  
            <h2 class="titleCss">Choose duration:</h2>
  
            <div class="duree">
  
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
  
    name: 'Level2',
  
    data() {
  
      return {
  
        oeuvre: 'src/assets/images/donaldjudd.png',
  
        showVictory: false,
  
        artist: 'Donald JUDD',
  
        titre: 'Stack',
  
        niveauSuivant: 'niveau3',
  
        showModal: false,
  
        show: true,
  
        show2: true,
  
        couleur: 'transparent',
  
        borderColor: 'white',
  
        borderWidth: 10,
  
        borderStyle: 'solid',
  
        valueTransform: '',
  
        valueDuration: '',
  
        cmd: false
  
      }
  
    },
  
    components: {
  
      'modal': Modal,
  
      'victory': Victory
  
    },
  
    computed: {
  
      btnStyle: function() {
  
        return 'border: ' + this.borderWidth + 'px ' + this.borderStyle + ' ' + this.borderColor;
  
      }
  
  
  
    },
  
  
  
    methods: {
  
      updateTextInput: function(val) {
  
        document.getElementById('textInput').value = val;
  
      },
  
      getTransform: function(value) {
  
        this.valueTransform = value;
  
  
  
      },
  
      getDuration: function(value) {
  
        this.valueDuration = value;
  
  
  
      },
  
      getColorBackground: function(value) {
  
        this.couleur = value;
  
        this.backgroundColor();
  
      },
  
  
  
      getBorderColor: function(value) {
  
        this.borderColor = value;
  
      },
  
      getBorderStyle: function(value) {
  
        this.borderStyle = value;
  
      },
  
      backgroundColor: function() {
  
        this.$refs.btn1.style.background = this.couleur;
  
      },
  
      victory: function() {
  
        if ((document.getElementById("artwork2").style.background == 'rgb(244, 14, 60)') &&
  
          (document.getElementById("artwork2").style.border == '20px solid black') &&
  
          (document.getElementsByClassName("artwork2")[0].classList.contains('translate10'))) {
  
          this.showVictory = true;
  
  
  
        }
  
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
  
          let borderArt = parseInt(binding.value.width) * 10;
  
          document.removeEventListener('touchmove', mousemove);
  
          document.removeEventListener('touchend', mouseup);
  
          if (el.classList.contains('btn1')) {
  
            for (var i = 0; i < 4; i++) {
  
              document.getElementsByClassName("artwork2")[i].style.background = binding.value.color;
  
            }
  
          } else if (el.classList.contains('btn3')) {

            for (var i = 0; i < 4; i++) {
  
              document.getElementsByClassName("artwork2")[i].className = 'artwork2';
  
              document.getElementsByClassName("artwork2")[i].className += " " + binding.value.transform + binding.value.duration;
  
            }
  
  
  
          } else {
  
            for (var i = 0; i < 4; i++) {
  
              document.getElementsByClassName("artwork2")[i].style.border = borderArt + 'px ' + binding.value.style + ' ' + binding.value.color;

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
  
    created: function() {},
  
    mounted: function() {},
  
    beforeUpdate: function() {
  
      if (!document.getElementsByClassName('page-cmd1')) {
  
        this.backgroundColor();
  
      }
  
    },
  
    updated: function() {
  
      if (!document.getElementsByClassName('page-cmd1')) {
  
        this.backgroundColor();
  
      }
  
  
  
    }
  
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .focus {
  
    background-color: aliceblue;
  
  }
  
  
  
  .lvl2 {
  
    background-image: url("../assets/images/img_stack.png");
  
    background-image: url("../assets/images/fondniveau.png"), url("../assets/images/img_stack.png");
  
    background-repeat: no-repeat;
  
    background-attachment: fixed;
  
    background-position: center;
  
    background-size: cover;
  
    text-align: center;
  
  }
  
  
  
  body {
  
    overflow: hidden;
  
  }
  
  
  
  .artwork {
  
    height: 100vh;
  
    width: 70%;
  
  }
  
  
  
  .artwork2 {
  
    margin: 2% 5% 8% 7%;
  
    height: 10vh;
  
    background: white;
  
    border: 5px solid white;
  
    /* animation: rotating 10s linear infinite alternate; */
  
  }
  
  
  
  .rotate1 {
  
    animation: rotating 1s linear infinite alternate;
  
  }
  
  
  
  .rotate3 {
  
    animation: rotating 3s linear infinite alternate;
  
  }
  
  
  
  .rotate10 {
  
    animation: rotating 10s linear infinite alternate;
  
  }
  
  
  
  .translate1 {
  
    animation: translate 1s linear infinite alternate;
  
  }
  
  
  
  .translate3 {
  
    animation: translate 3s linear infinite alternate;
  
  }
  
  
  
  .translate10 {
  
    animation: translate 10s linear infinite alternate;
  
  }
  
  
  
  .scale1 {
  
    animation: scale 1s linear infinite alternate;
  
  }
  
  
  
  .scale3 {
  
    animation: scale 3s linear infinite alternate;
  
  }
  
  
  
  .scale10 {
  
    animation: scale 10s linear infinite alternate;
  
  }
  
  
  
  @keyframes translate {
  
    from {
  
      transform: translateY(10px);
  
    }
  
    to {
  
      transform: translateY(200px);
  
    }
  
  }
  
  
  
  @keyframes rotating {
  
    from {
  
      transform: rotate(0deg);
  
    }
  
    to {
  
      transform: rotate(360deg);
  
    }
  
  }
  
  
  
  @keyframes scale {
  
    from {
  
      transform: scale(0.5);
  
    }
  
    to {
  
      transform: scale(1);
  
    }
  
  }
  
  
  
  .colorBackground1 .codeColor {
  
    background: #f40e3c;
  
  }
  
  
  
  .colorBackground2 .codeColor {
  
    background: #59a0f2;
  
  }
  
  
  
  .color1 .codeColor {
  
    background-color: #000000;
  
  }
  
  
  
  .color2>.codeColor {
  
    background-color: rgb(167, 7, 42);
  
  }
  
  
  
  .color3>.codeColor {
  
    background-color: rgb(50, 156, 205);
  
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
  
  
  
  .valueTransform,
  
  .valueDuration {
  
    font-size: 2em;
  
  }
</style>