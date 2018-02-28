
<template>
  <div class="menu">
    <h1>{{t('Choix du niveau')}}</h1>
    <div class="carroussel">
      <div class="left-car" @click="counterPrev()"><transition name="fade" mode="out-in"><img :key="sourceMid" v-bind:src="sourceLeft" alt="" class="left-img"></transition></div>
      <div class="arrow-left arrow" @click="counterPrev()"><i class="fa fa-caret-left" aria-hidden="true"></i></div>
      <div class="middle-car"><a v-bind:href="'#/niveau'+counter"><transition name="fade" mode="out-in"><img :key="sourceMid" v-bind:src="sourceMid" alt="" class="mid-img"></transition><h2 class="title-mid">{{t('Niveau')}} {{counter}}</h2></a></div>
      <div class="arrow-right arrow"  @click="counterNext()"><i class="fa fa-caret-right" aria-hidden="true"></i></div>
      <div class="right-car" @click="counterNext()"><transition name="fade" mode="out-in"><img :key="sourceMid" v-bind:src="sourceRight" alt="" class="right-img"></transition></div>
    </div>
  </div>

</template>
<script>
export default {
  name: 'Menu',
  data () {
    return {

      sourceMid: "src/assets/images/miniaturelvl1.png",
      sourceLeft: "src/assets/images/miniaturelvl4.png",
      sourceRight: "src/assets/images/miniaturelvl2.png",

      counter: 1
    }
  },
  methods: {
    counterNext : function() {
      this.counter+=1;
      this.sourceChange();
    },
    counterPrev : function() {
      this.counter-=1;
      this.sourceChange();
    },
    sourceChange: function() {
      if(this.counter<=0){this.counter=4}
      if (this.counter>=5) {this.counter=1}
     let counterLeft=this.counter-1;
      let counterRight=this.counter+1;
      if(counterLeft<=0){counterLeft=4}
      if (counterRight>=5) {counterRight=1}
      this.sourceLeft= "src/assets/images/miniaturelvl"+counterLeft+".png";
      this.sourceMid= "src/assets/images/miniaturelvl"+this.counter+".png";
      this.sourceRight="src/assets/images/miniaturelvl"+counterRight+".png";
      console.log(this.counter)
    }

  },
  locales: {
    	en_UK: {
        'Choix du niveau':'Select a level',
        'Niveau':'Level'
      },
      fr_FR: {
        'Select a level':'Choix du niveau',
        'Level':'Niveau'
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
}
h1, h2 {
  width:100%;
  text-align: center!important;
  font-weight: normal;
  font-family: 'Play', sans-serif;
  color: white;
}
.carroussel {
  display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    text-align: center;
}
img {
   max-height: 100%;
  max-width: 100%;
}
.menu {
  margin-top: 10%;
  max-width: 100%;
}

.left-car, .right-car, .middle-car {
   border: 5px dashed white;
  border-radius: 420px;
  padding:4%;
 margin:1%;
  text-shadow: 0 0 20px #fff;
  box-shadow: 0 0 10px rgb(255, 255, 255);
}
.left-car, .right-car {
  width: 13%;


}
.middle-car {
  width: 27%;


}
.arrow {
  color: #ffffff;
    text-decoration: none;
    padding: 0.25em;
    font-size: 4em;
    text-shadow: 0 0 20px #fff;

}
</style>
