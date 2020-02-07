<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>
import NProgress from "nprogress";
import "./plugin/nprogress.css";
export default {
  computed:{
    loading(){
      return this.$store.state.loading
    }
  },
  watch:{
    loading(val){
      val? NProgress.start():NProgress.done()
  }
  }
};
</script>

