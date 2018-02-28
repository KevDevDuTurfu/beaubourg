<template>
 <transition name="settings">
      <div class="settings-mask">
      <div class="settings-wrapper">
        <div class="settings-container">

          <div class="settings-header">
            <p> Options </p>
          </div>

          <div class="settings-body">
            <slot name="body">
                <div class="block">
            <div class="labelIcones">Reprendre le jeu-----</div>
            <div class="icones"><span class="icone" @click="$emit('close')"><i class="fa fa-play" aria-hidden="true"></i></span></div>
               </div>
               <div class="block">
            <div class="labelIcones">Menu-----</div>
            <div class="icones"><router-link   to="/niveau"><span @click="$emit('close')" class="icone"><i class="fa fa-home" aria-hidden="true"></i></span></router-link></div>
            </div>
               <div class="block">
            <div class="labelIcones">Langues-</div>
            <div class="icones"><span class="icone" @click="emitMethodEn ()"><img style="width:40px;height:20px;margin-top:15px;" class="flag" src="src/assets/images/britain.png" alt=""> </span></div>
               </div>
               <div class="block">
            <div class="labelIcones">Langues-</div>
            <div class="icones"><span class="icone" @click="emitMethodFr ()"><img style="width:40px;height:20px;margin-top:15px;" class="flag" src="src/assets/images/france.png" alt=""> </span></div>
               </div>
               <div class="block">
            <div class="labelIcones">Sons-----</div>
            <div class="icones"><span class="icone"><i class="fa fa-volume-up" aria-hidden="true"></i></span></div>
            </div>
            </slot>
          </div>

          <div class="settings-footer">
            <slot name="footer">
              </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import Bus from './Bus.js'
export default {
  name: 'settings',
  props:['niveau'],
  data(){
     return{
      langen:'en_UK',
      langfr:'fr_FR'
  }
  },
    created () {
        
    },
    methods: {
     
    emitMethodEn () {
      Bus.$emit('click', this.langen);
      this.$emit('close');
    },
    emitMethodFr () {
      Bus.$emit('click', this.langfr);
      this.$emit('close');
    }
  }
}
</script>
<style>
.block {
    text-align: right;
    margin-bottom: 3%;
}
.labelIcones, .icones {
  display:inline-block;
}
.icones a{
  color:#ffffff;
  text-decoration: none;
  padding-left: 10px;
   text-shadow: 0 0 20px #fff;
   

}
i{
       padding-top: 10px;
}
.icones {
  border: 5px dashed white;
  border-radius: 50px;
  font-size:30px;
  vertical-align: middle;
  width: 50px;
  height:50px;
  text-align: center;
  text-shadow: 0 0 20px #fff;
  box-shadow: 0 0 10px rgb(255, 255, 255);  
} 
.icones .fa-home {
    margin-right:8px;
}

.settings-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
  
}

.settings-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.settings-container {
  width: 600px;
  margin: 0px auto;
  padding: 20px 30px;  background: -webkit-linear-gradient( left, mediumpurple , cornflowerblue);
  background:    -moz-linear-gradient( left, mediumpurple, cornflowerblue);
  background:     -ms-linear-gradient( left, mediumpurple, cornflowerblue);
  background:      -o-linear-gradient( left, mediumpurple, cornflowerblue);
  background:         linear-gradient( to right, mediumpurple,cornflowerblue);
  border-radius: 2px;
  box-shadow: 0px 30px 40px rgba(0,0,0,.1);
  transition: all .3s ease;
  font-family: 'Play', Arial, Helvetica, sans-serif;
  color:#ffffff;
  font-size: 28px;
}

.settings-header h3 {
  margin-top: 0;
  color: #42b983;
}

.settings-body {
  margin: 20px 0;
}

/*
 * The following styles are auto-applied to elements with
 * transition="settings" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the settings transition by editing
 * these styles.
 */

.settings-enter {
  opacity: 0;
}

.settings-leave-active {
  opacity: 0;
}

.settings-enter .settings-container,
.settings-leave-active .settings-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.fermer {
cursor: pointer;
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: 'Play';
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
   background: #5ebcf7;

}

</style>
