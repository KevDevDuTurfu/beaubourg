<template>
 <transition name="modal">
      <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
            <p>{{t('A reproduire dans ce niveau :')}}</p>
             <p>{{t('L\'artiste')}} : {{nom}}</p>
             <p>{{t('L\'oeuvre')}} : {{titre}}</p>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
               <img v-bind:src="source" />
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">

              <button  class="modal-default-button fermer" @click="$emit('close')">
                {{t('Fermer')}}
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
  name: 'modal',
  props:['source', 'nom', 'titre'],
  locales: {
      en_UK: {
        "A reproduire dans ce niveau :":"To reconstruct in this level :",
        "L\'artiste":"Artist",
        "L\'oeuvre":"Artwork",
        "Fermer":"Close"
      },
      fr_FR: {
        "To reconstruct in this level :":"A reproduire dans ce niveau :",
        "Artist":"L\'artiste",
        "Artwork":"L\'oeuvre",
        "Close":"Fermer"
      }
  }
}
</script>
<style>
.modal-mask {
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

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
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

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
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
