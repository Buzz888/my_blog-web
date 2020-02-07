<template>
  <div>
    <transition name="slide-fade">
      <leftmenu v-show="$store.state.menu" :propslist="info"></leftmenu>
    </transition>
    <router-view style="transition: all 200ms ease-in-out 0s" :style="flag?'opacity: 0.2':'opacity:1'"/>
  </div>
</template>

<script>
export default {
  computed: {
    info() {
      return this.$store.state['title'];
    },
    flag(){
      return this.$store.state['loading']
    }
  },
  async mounted() {
    await this.$store.dispatch('gettitle');
  },
  watch: {
    async $route(to, from) {
      if (to !== from && !to.params.id) {
        await this.$store.dispatch(`gettitle`);
        document.title = `${this.$route.name} | buz的个人博客`
      }
    }
  }
};
</script>

