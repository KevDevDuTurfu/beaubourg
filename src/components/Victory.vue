<template>
 <transition name="modal">
      <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <p> VICTOIRE!! </p>
          </div>

          <div class="modal-body">
            <slot name="body">
               <p>Tu as réussi le premier niveau</p>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
           
              <button  class="modal-default-button fermer" @click="$emit('close')">
                Niveau Suivant
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
  name: 'victory'
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
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: 'Play' sans-serif;
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

.btn:hover {
   background: #1761b0;
  background-image: -webkit-linear-gradient(top, #1761b0, #9421c2);
  background-image: -moz-linear-gradient(top, #1761b0, #9421c2);
  background-image: -ms-linear-gradient(top, #1761b0, #9421c2);
  background-image: -o-linear-gradient(top, #1761b0, #9421c2);
  background-image: linear-gradient(to bottom, #1761b0, #9421c2);
  text-decoration: none;
}
</style>
