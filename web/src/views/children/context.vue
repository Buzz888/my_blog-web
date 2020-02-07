<template>
  <div class="context" v-html="mdinfo"></div>
</template>
<script>
export default {
  async serverRequest(store) {
    return await store.dispatch("getmd");
  },
  computed: {
    mdinfo() {
      return this.$store.state.md;
    }
  },
  async mounted() {
    await this.$store.dispatch("getmd");
    this.$highlightCode();
  },
  updated() {
    this.$highlightCode();
  },
  watch: {
    $route(to, from) {
      if (to.params.id !== from.params.id) {
        this.$store.dispatch("getmd");
      }
    }
  }
};
</script>