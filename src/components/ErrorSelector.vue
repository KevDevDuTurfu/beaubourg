<template>
 <transition name="errorSelect">
      <div class="errorSelect-mask">
      <div class="errorSelect-wrapper">
        <div class="errorSelect-container">

          <div class="errorSelect-header">
            <slot name="header">
            Attention!
            </slot>
          </div>

          <div class="errorSelect-body">
            <slot name="body">
               <p>Il ne faut pas oublier de sélectionner un élément de l'oeuvre:</p>
               <p>il suffit juste d'appuyer sur l'un des éléments, et il va se rapprocher de vous.</p>
            </slot>
          </div>

          <div class="errorSelect-footer">
            <slot name="footer">
           
              <button  class="errorSelect-default-button fermer" @click="$emit('close')">
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
  name: 'errorSelect'
}
</script>
<style>
.errorSelect-mask {
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

.errorSelect-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.errorSelect-container {
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

.errorSelect-header h3 {
  margin-top: 0;
  color: #42b983;
}

.errorSelect-body {
  margin: 20px 0;
}

/*
 * The following styles are auto-applied to elements with
 * transition="errorSelect" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the errorSelect transition by editing
 * these styles.
 */

.errorSelect-enter {
  opacity: 0;
}

.errorSelect-leave-active {
  opacity: 0;
}

.errorSelect-enter .errorSelect-container,
.errorSelect-leave-active .errorSelect-container {
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
