<!--ici html du code-->
<template>
  <div class="lvl4"><!-- contenu du niveau 2-->
    <div class="bubble"  @click="showModal = true"><i class="fa fa-question-circle" aria-hidden="true"></i></div><!--contenu de la bulle info-->
    <!-- modal=popup ici pop up de la bulle info ainsi que ses caractéristiques -->
        <modal :nom="artist" :titre="titre" :source="oeuvre" v-if="showModal" @close="showModal = false"></modal>
    <!--fin du modal -->
    <!--condition de victoire pas encore présente-->
        <victory  :niveau="niveauSuivant" v-if="showVictory" @close="showVictory=false"> </victory>
        <!--debut de l'aide en bas de page-->
     <div class="tips">
     <p>Bravo! Maintenant, il ne reste plus qu’à ajouter la propriété
color (backImg) et border (bordure) de la même manière...</p>
     </div><!--fin de l'aide -->
     <!--contenu de l'oeuvre à composer-->
    <div class="artwork" ref="artwork">
      <!-- oeuvre en lui même -->
      <div id="img-block">
            <div class="artwork4img" id="artwork4img1"  ref="artwork4img1">
            </div>
            <div class="artwork4img" id="artwork4img2" ref="artwork4img2">
            </div>
      </div>
      <div id="desc-block">
        <div class="artwork4desc" id="artwork4desc1" ref="artwork4desc1">
            <p>En 1984, le ministère des Affaires étrangères m’a accordé une bourse d’étude de trois mois au Japon.</p>
            <p>Je suis partie le 25 octobre 1984 sans savoir que cette date marquait le début d’un compte à rebours de 92 jours qui allait aboutir à une rupture, banale, mais que j’ai vécue alors comme le moment le plus douloureux de ma vie.</p>
            <p>J’en ai tenu ce voyage pour responsable. De retour en France, le 28 janvier 1985, j’ai choisi, par conjuration, de raconter ma souffrance plutôt que mon périple.</p>

        </div>
        <div class="artwork4desc" id="artwork4desc2" ref="artwork4desc2">
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
            <div class="page1-cmd" v-if="!cmd" >
               <div class='btn-command'>
                <i class="fa fa-caret-right" aria-hidden="true" v-on:click="cmd = !cmd" ></i>
                </div>
                    <div id="position1"><!-- emplacement du bouton permettant de la remettre à sa place-->
                    <!--le bouton "draggable" apres v-draggable on met les valeurs qui se changent dynamiquement par les options en bas -->
                        <div class="btn btn1 " ref="btn1"  v-draggable="{image:backImg}">Background</div>
                    </div><!--les options -->
                    <div class="value"      ><!--contenu de valeurs-->
                        <div class="color"><!--si les valeurs sont des backImgs=>utilisez class color-->
                        <!--backImg 1=>  quand on clique dessus on utilise une fonction pour récupérer backImg-->
                        <div class="col imgBackground1"><div  class="codeImage" @click="getImgBackground('imagedroite.png')"></div></div>
                        <!--pareil pour la backImg 2 -->
                        <div class="col imgBackground2"><div class="codeImage" @click="getImgBackground('imagegauche.png')"></div></div>
                        </div>
                        <div class="col imgBackground3"><div  class="codeImage" @click="getImgBackground('imagefake1.png')"></div></div>
                        <!--pareil pour la backImg 2 -->
                        <div class="col imgBackground4"><div class="codeImage" @click="getImgBackground('imagefake2.png')"></div></div>
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
                            <div class="col color2"><div class="codeColor" @click="getBorderColor('grey')"></div></div>
                            <div class="col color3"><div class="codeColor" @click="getBorderColor('rgb(50, 156, 205)')"></div></div>
                        </div>
                        <div class="width">
                            <h2 class="titleCss">Width</h2>
                            <div class="rangeValue">
                            <input id="valueBorder" type="range" min="1" max="7" step="1" @touchstart="getWidthBorder()">
                            
                            </div>
                        </div>
                        
                        </div>
                    </div>
        </transition>
        <transition name="fade">
                <div  class="page2-cmd" v-if="cmd"  >
                  <div class='btn-command'>
                <i class="fa fa-caret-left" aria-hidden="true" v-on:click="cmd = !cmd" ></i>
                </div>
                <div id="position3"><!-- emplacement du bouton permettant de la remettre à sa place-->
            <!--le bouton "draggable" apres v-draggable on met les valeurs qui se changent dynamiquement par les options en bas -->
                <div class="btn btn3 " ref="btn3"  v-draggable="{color:couleur}">Background</div>
                </div><!--les options -->
                <div class="value" ><!--contenu de valeurs-->
                    <div class="color"><!--si les valeurs sont des couleurs=>utilisez class color-->
                    <h2 class="titleCss">Background-Color</h2><!--titre de la valeur-->
                    <!--couleur 1=>  quand on clique dessus on utilise une fonction pour récupérer couleur-->
                    <div class="col colorBackground1"><div  class="codeColor" @click="getColorBackground('#f40e3c')"></div></div>
                    <!--pareil pour la couleur 2 -->
                    <div class="col colorBackground2"><div class="codeColor" @click="getColorBackground('#59a0f2')"></div></div>
                    </div>
                </div>
                <div class="btn btn4" ref ="btn4">Font-size</div>
                <div class="value"  ><!--contenu de valeurs-->
                   <div class="rangeValue">
                        <input id="valueBorder" type="range" min="1" max="7" step="1" @touchstart="getWidthBorder()">        
                    </div>
                </div>
                <div class="btn btn5" ref ="btn5">Font-family</div>
                <div class="value"  ><!--contenu de valeurs-->
                   <ul class="list-value">
                            <li>
                                <input type='radio' value='infinite' class='value-duration' name='infinite' id='radio4'/>
                                <label for='radio1'>Times New Roman</label>
                            </li>
                            <li>
                                <input type='radio' value='1' class='value-duration' name='secone'  id='radio5'/>
                                <label for='radio2'>Arial</label>
                            </li>
                            <li>
                                <input type='radio' value='3' class='value-duration' name='secthree'  id='radio6'/>
                                <label for='radio3'>Lucida</label>
                            </li>
                            
                        </ul>
                </div>
                <div class="btn btn6" ref ="btn6" >Color</div>
                        <div class="value" v-if="show2">
                        <div class="color"> 
                            <h2 class="titleCss">Color</h2>
                            <div class="col color1"><div class="codeColor" @click="getBorderColor('black')"></div></div>
                            <div class="col color2"><div class="codeColor" @click="getBorderColor('grey')"></div></div>
                            <div class="col color3"><div class="codeColor" @click="getBorderColor('rgb(50, 156, 205)')"></div></div>
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
  name: 'Level4',
  data () {
    return {
      niveauSuivant:'niveau1',
      oeuvre: 'src/assets/images/sophiecale.png',
      showVictory:false,
      artist:'Sophie CALLE',
      titre: 'Douleur exquise',
      showModal: false,
      show: true,
      show2: true,
      backImg:'transparent',
      borderColor:'white',
      borderWidth:10,
      borderStyle:'solid',
       couleur:'transparent',
       cmd:false
    }
  }, 
  components: {
          'modal':  Modal
        },
  methods:{
    victory: function(){
      this.showVictory=true;

    },
    getImgBackground: function(value){
    this.backImg=value;
    this.backgroundImage();
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
       
    },
    backgroundImage:function(){
       this.$refs.btn1.style.backgroundImage='url(src/assets/images/'+this.backImg+')';
       
    }
  },

  directives: {
   draggable: function (el, binding) {
    
    var startX, startY, initialMouseX, initialMouseY, initialBoxX,initialBoxY;

    function mousemove(e) { var touch=event.touches[0];
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
      console.log(el.classList.contains('btn1'));
      if (el.classList.contains('btn1')){
        for (var i=0;i<4;i++){
            document.getElementsByClassName("artwork4img")[i].style.backgroundImage='url(src/assets/images/'+binding.value.image+')';
        }
      }
      else {
          for (var i=0;i<4;i++){
            document.getElementsByClassName("artwork4img")[i].style.border=borderArt+'px '+binding.value.style+' '+binding.value.color;
            document.getElementsByClassName("artwork4desc")[i].style.border=borderArt+'px '+binding.value.style+' '+binding.value.color;
        }
         
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
    if (!document.getElementsByClassName('page-cmd1')){
        this.backgroundImage();
        this.border();
    }

  },
  beforeUpdate: function(){
    if (!document.getElementsByClassName('page-cmd1')){
        this.backgroundImage();
        this.border();
    }
  },
  updated: function(){
    if (!document.getElementsByClassName('page-cmd1')){
        this.backgroundImage();
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
.value {
  margin-top: -6%;
  color:white;
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

.colorBackground1 .codeColor{
    background:#f40e3c;
}
.colorBackground2 .codeColor{
    background:#59a0f2;
}
.img-block, .desc-block
{
    display:block;
}
.artwork4desc, .artwork4img{
    display:inline-block;
}

.btn-command{
    color:white;
    font-size: 45px;
}
.btn-command i{
    padding: 2%;
}
.lvl4{
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
.artwork, .command{
  display:inline-block;
}
.artwork4desc{
  margin:3%;
  height:50vh;
  width:30vh;
  background:white;
  border: 5px solid white;
  vertical-align: bottom;
}
.artwork4img{
  margin:3%;
  margin-bottom: 3%;
  width: 30vh;
  height:20vh;
  background:white;
  border: 5px solid white;
}

.titleCss{
  margin: 2%;
}
.codeImage{
  width: 100px;
  height: 100px;
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
.imgBackground1 .codeImage{
    background-image:url('../assets/images/imagedroite.png');
        background-size:contain;
    background-repeat: no-repeat;
}
.imgBackground2 .codeImage{
   background-image:url('../assets/images/imagegauche.png');
    background-size:contain;
    background-repeat: no-repeat;
}
.imgBackground3 .codeImage{
    background-image:url('../assets/images/imagefake1.png');
        background-size:contain;
    background-repeat: no-repeat;
}
.imgBackground4 .codeImage{
   background-image:url('../assets/images/imagefake2.png');
    background-size:contain;
    background-repeat: no-repeat;
}
.color1 .codeColor{
  background-color:#000000;
}
.color2>.codeColor{
  background-color:grey;
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