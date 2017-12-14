<script>
import Menu from '@/components/Menu'
export default {
  name: 'app'
}

</script>

<template>
  <div id="app">
      <Menu/>
      <router-view class="view"></router-view>
  </div>
</template>


<style>

*{
  margin:0;
  padding:0;

  background-image: url("assets/images/background-menu.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>
