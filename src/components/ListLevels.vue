<script>
export default {
  name: 'Menu',
  data () {
    return {
      title: '< Choisissez votre niveau />',
      image1: "src/assets/images/miniaturelvl1.png",
      image2: "src/assets/images/miniaturelvl2.png",
      image3: "src/assets/images/miniaturelvl3.png",
      image4: "src/assets/images/miniaturelvl4.png",
      image5: "src/assets/images/miniaturelvl5.png",
      counter: 1,
    }
  },
  methods: {
    compteurplus: function (counter, event) {
        counter = this.counter
        if (counter != 5) {
          this.counter = counter++
        }
        else {
          this.counter = 1
        }
        this.counter = counter
    },
    compteurmoins: function (counter, event) {
        counter = this.counter
        if (counter != 1) {
          this.counter = counter--
        }
        else {
          this.counter = 5
        }
        this.counter = counter
    },
    compteurreinit1: function (counter, event) {
        counter = 1
        this.counter = counter
    },
    compteurreinit5: function (counter, event) {
        counter = 5
        this.counter = counter
    },

  }
}

</script>
<template>
  <div class="menu">
    <h1>{{ title }}</h1>

      <div class="lvlslider">

        <div class="itemmini" v-if="counter === 1">
          <router-link to="/">
            <div class="bordermini">
              <img class="imgmini" v-bind:src="image5">
            </div>
            <span class="caption"><h2>Niveau 5</h2></span>
          </router-link>
        </div>
        <div class="itemmini" v-else>
          <router-link to="/">
            <div class="bordercentre" v-if="counter === 2">
              <img class="imgcentre" v-bind:src="image1">
            </div>
            <div class="bordercentre" v-else-if="counter === 3">
              <img class="imgcentre" v-bind:src="image2">
            </div>
            <div class="bordercentre" v-else-if="counter === 4">
              <img class="imgcentre" v-bind:src="image3">
            </div>
            <div class="bordercentre" v-else-if="counter === 5">
              <img class="imgcentre" v-bind:src="image4">
            </div>
            <span class="caption"><h2>Niveau {{ counter -1}}</h2></span>
          </router-link>
        </div>

          <div class="itemmini" v-if="counter === 1">
            <span class="arrow" v-on:click="compteurreinit5">&#9664;</span>
          </div>
          <div class="itemmini" v-else>
            <span class="arrow" v-on:click="compteurmoins">&#9664;</span>
          </div>


        <div class="itemcentre">
          <router-link to="/">
            <div class="bordercentre" v-if="counter === 1">
              <img class="imgcentre" v-bind:src="image1">
            </div>
            <div class="bordercentre" v-else-if="counter === 2">
              <img class="imgcentre" v-bind:src="image2">
            </div>
            <div class="bordercentre" v-else-if="counter === 3">
              <img class="imgcentre" v-bind:src="image3">
            </div>
            <div class="bordercentre" v-else-if="counter === 4">
              <img class="imgcentre" v-bind:src="image4">
            </div>
            <div class="bordercentre" v-else-if="counter === 5">
              <img class="imgcentre" v-bind:src="image5">
            </div>
            <span class="caption"><h2>Niveau {{ counter }}</h2></span>
          </router-link>
        </div>

        <div class="itemmini" v-if="counter === 5">
          <span class="arrow" v-on:click="compteurreinit1">&#9654;</span>
        </div>
        <div class="itemmini" v-else>
          <span class="arrow" v-on:click="compteurplus">&#9654;</span>
        </div>

        <div class="itemmini" v-if="counter === 5">
          <router-link to="/">
            <div class="bordermini">
              <img class="imgmini" v-bind:src="image1">
            </div>
            <span class="caption"><h2>Niveau 1</h2></span>
          </router-link>
        </div>
        <div class="itemmini" v-else>
          <router-link to="/">
            <div class="bordercentre" v-if="counter === 1">
              <img class="imgcentre" v-bind:src="image2">
            </div>
            <div class="bordercentre" v-else-if="counter === 2">
              <img class="imgcentre" v-bind:src="image3">
            </div>
            <div class="bordercentre" v-else-if="counter === 3">
              <img class="imgcentre" v-bind:src="image4">
            </div>
            <div class="bordercentre" v-else-if="counter === 4">
              <img class="imgcentre" v-bind:src="image5">
            </div>
            <span class="caption"><h2>Niveau {{ counter + 1}}</h2></span>
          </router-link>
        </div>

      </div>
    </div>


</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  width:100%;
  text-align: center!important;
  font-weight: normal;
  font-family: 'Play', sans-serif;
  color: white;
}

h3 {
  width:100%;
  font-weight: normal;
  font-family: 'Play', sans-serif;
  color: white;
  display: block;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: white;
}

.lvlslider
{
  display: flex;
  margin: 15% 2% 0 2%;
}

.arrow
{
  color: white;
  font-size:4em;
  vertical-align: middle;
  padding-top: 2.5em;
}

div.itemcentre {
    vertical-align: middle;
    display: inline-block;
    text-align: center;
    width: 400px;
}

div.itemmini {
    vertical-align: middle;
    display: inline-block;
    text-align: center;
    width: 200px;
    position: static;
    padding-top: 7em;
}

.imgcentre {
    width: 100%;
    height: 100%;
    background: transparent;
}

.imgmini {
    width: 100%;
    height: 100%;
    background: transparent;
}

.caption {
    display: block;
    margin-top: 10%;
}

.bordercentre {
  border-radius: 50%;
  border: 12px dashed white;
  padding: 15% 15% 15% 15%;
  background: skyblue;
  /*animation: Rotate 5s linear 2s infinite ;
 -webkit-animation:Rotate 5s linear 2s infinite ;
  -moz-animation: Rotate 5s linear 2s infinite ;
  -ms-animation: Rotate 5s linear 2s infinite;*/
  -webkit-animation: neonbox 15000000000000000000000000000000000000000000s linear  infinite ;
  -moz-animation: neonbox 1500000000000000000000000000000000000000000000000000s linear  infinite ;
  -ms-animation: neonbox 1500000000000000000000000000000000000000000000000000000s linear  infinite ;
  animation: neonbox 150000000000000000000000000000000000000000000000000000s linear  infinite ;
}

.bordermini {
  border-radius: 100%;
  border: 12px dashed white;
  padding: 15% 15% 15% 15%;
  background: skyblue;
  /*animation: Rotate 5s linear 2s infinite ;
 -webkit-animation:Rotate 5s linear 2s infinite ;
  -moz-animation: Rotate 5s linear 2s infinite ;
  -ms-animation: Rotate 5s linear 2s infinite;*/
  -webkit-animation: neonbox 100000000000000000000000000000s linear  infinite ;
  -moz-animation: neonbox 100000000000000000000000000000000s linear  infinite ;
  -ms-animation: neonbox 1000000000000000000000000s linear  infinite ;
  animation: neonbox 100000000000000000000000000s linear  infinite ;
}

@keyframes Rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes Rotate {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-moz-keyframes Rotate {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
@-ms-keyframes Rotate {
  from {
    -ms-transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
  }
}
@keyframes neon1 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de;
  }
}
@-webkit-keyframes neon1 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de;
  }
}
@-ms-keyframes neon1 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de;
  }
}
@keyframes neonbox {
  from {
    transform: rotate(0deg);
    box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
  }
  to {
    transform: rotate(360deg);
    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de;
  }
}
@-webkit-keyframes neonbox {
  from {
    transform: rotate(0deg);
    box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
  }
  to {
    transform: rotate(360deg);
    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de;
  }
}
@-ms-keyframes neonbox {
  from {
     transform: rotate(0deg);
    box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
  }
  to {
     transform: rotate(360deg);
    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de;
  }
}


</style>
