<template>
 <transition name="finalVictorySelect">
      <div class="finalVictorySelect-mask">
      <div class="finalVictorySelect-wrapper">
        <div class="finalVictorySelect-container">

          <div class="finalVictorySelect-header">
            <slot name="header">
            {{t('salut')}}
            </slot>
          </div>

          <div class="finalVictorySelect-body">
            <slot name="body">
              {{t("Félicitations, tu es venu à bout de Visuart Code !<br><br>Toute l'équipe de NnT espère que tu as passé un bon moment, et surtout que notre application est parvenue à te faire découvrir (et peut-être à te faire aimer) le CSS !<br>br>Merci d'avoir joué ! ")}}
            </slot>
          </div>

          <div class="finalVictorySelect-footer">
            <slot name="footer">
           
              <button  class="finalVictorySelect-default-button fermer" @click="$emit('close')">
                Fermer
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>

export default {
  name: 'finalVictorySelect',
  locales: {
      en_UK: {
          "salut":"hello",
        "Félicitations, tu es venu à bout de Visuart Code !<br><br>Toute l'équipe de NnT espère que tu as passé un bon moment, et surtout que notre application est parvenue à te faire découvrir (et peut-être à te faire aimer) le CSS !<br>br>Merci d'avoir joué ! ":"Congratulations, you managed to complete Visuart Code !<br><br>The NnT Team hopes that you had fun, and more importantly that our app succeeded in making you discover (and maybe even enjoy) CSS !<br><br>Thanks for playing !"
      },
      fr_FR: {
          "hello":"salut",
       "Congratulations, you managed to complete Visuart Code !<br><br>The NnT Team hopes that you had fun, and more importantly that our app succeeded in making you discover (and maybe even enjoy) CSS !<br><br>Thanks for playing !":"Félicitations, tu es venu à bout de Visuart Code !<br><br>Toute l'équipe de NnT espère que tu as passé un bon moment, et surtout que notre application est parvenue à te faire découvrir (et peut-être à te faire aimer) le CSS !<br>br>Merci d'avoir joué ! "
      }
  }
}
</script>
<style>
.finalVictorySelect-mask {
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

.finalVictorySelect-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.finalVictorySelect-container {
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
  font-size: px;
}

.finalVictorySelect-header h3 {
  margin-top: 0;
  color: #42b983;
}

.finalVictorySelect-body {
  margin: 20px 0;
}

/*
 * The following styles are auto-applied to elements with
 * transition="finalVictorySelect" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the finalVictorySelect transition by editing
 * these styles.
 */

.finalVictorySelect-enter {
  opacity: 0;
}

.finalVictorySelect-leave-active {
  opacity: 0;
}

.finalVictorySelect-enter .finalVictorySelect-container,
.finalVictorySelect-leave-active .finalVictorySelect-container {
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
  background-image: -webkit-linear-gradient(top, #5ebcf7, #f748c8);
  background-image: -moz-linear-gradient(top, #5ebcf7, #f748c8);
  background-image: -ms-linear-gradient(top, #5ebcf7, #f748c8);
  background-image: -o-linear-gradient(top, #5ebcf7, #f748c8);
  background-image: linear-gradient(to bottom, #5ebcf7, #f748c8);
}


</style>
