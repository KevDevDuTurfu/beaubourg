<template>
 <transition name="victory">
      <div class="victory-mask">
      <div class="victory-wrapper">
        <div class="victory-container">

          <div class="victory-header">
            <p>{{t('Bravo !')}}</p>
          </div>

          <div class="victory-body">
            <slot name="body">
               <p>{{t('Niveau complété ! Bien joué ;)')}}</p>
            </slot>
          </div>

          <div class="victory-footer">
            <slot name="footer">
              <div class="lvlNext">{{t('Niveau suivant -----')}}</div>
              <div class="closeNext"><router-link v-bind:to="niveau" @click="$emit('close')"><span id="play">&#9655;</span></router-link></div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>

export default {
  name: 'victory',
  props:['niveau'],
  locales: {
      en_UK: {
        'Bravo !':'Congrats !',
        'Niveau complété ! Bien joué ;)':'Level completed ! Well done ;)',
        'Niveau suivant -----':'Next level -----'
      },
      fr_FR: {
        'Congrats !':'Bravo !',
        'Level completed ! Well done ;)':'Niveau complété ! Bien joué ;)',
        'Next level -----':'Niveau suivant -----'
      }
  }
}
</script>
<style>
.lvlNext, .closeNext {
  display:inline-block;
}
.closeNext a{
  color:#ffffff;
  text-decoration: none;
  line-height: 12px;
  padding-left: 10px;
   text-shadow: 0 0 20px #fff;
}
.closeNext {
  border: 5px dashed white;
  border-radius: 50px;
  font-size:45px;
  vertical-align: middle;
  width: 50px;
  height:50px;
  text-align: center;

  box-shadow: 0 0 10px rgb(255, 255, 255);
}
.victory-mask {
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

.victory-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.victory-container {
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

.victory-header h3 {
  margin-top: 0;
  color: #42b983;
}

.victory-body {
  margin: 20px 0;
}

/*
 * The following styles are auto-applied to elements with
 * transition="victory" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the victory transition by editing
 * these styles.
 */

.victory-enter {
  opacity: 0;
}

.victory-leave-active {
  opacity: 0;
}

.victory-enter .victory-container,
.victory-leave-active .victory-container {
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
