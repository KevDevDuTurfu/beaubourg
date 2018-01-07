<script>

export default {
  name: 'app'
}

</script>

<template>
  <div id="app">
      <router-view class="view"></router-view>
  </div>
</template>


<style>

*{
  margin:0;
  padding:0;
}

body{
 background: royalblue;
  background-image: -webkit-linear-gradient(top, #4313b2, deepskyblue); /* For Chrome 25 and Safari 6, iOS 6.1, Android 4.3 */
  background-image:    -moz-linear-gradient(top, #4313b2, deepskyblue); /* For Firefox (3.6 to 15) */
  background-image:      -o-linear-gradient(top, #4313b2, deepskyblue); /* For old Opera (11.1 to 12.0) */ 
  background-image:         linear-gradient(to bottom, #4313b2, deepskyblue);/* Standard syntax; must be last*/

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>
