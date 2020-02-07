<template>
  <div class="leftbar">
    <div class="bar">
      <div>
        <ul class="contextul">
          <li v-for="(item,index) in menulist" :key="index">
            <div class="flex ai-center jc-sb">
              <div
                :style="flag == index ? 'color:#00979D;border-left: 5px solid #00979D':''"
                @click="flag=index"
                class="contexttitle"
              >{{item.title}}</div>
              <span
                style="font-size:.6rem;"
                class="iconfont icon-top"
                :class="flag === index ?'con-top':' con-left'"
              ></span>
            </div>
            <ul class="itemul" v-for="(it,i) in item.item" :key="i">
              <transition name="slide-fade">
                <router-link
                  active-class="it"
                  v-show="flag == index ? true : false"
                  class="color-gray contextitem"
                  tag="li"
                  :to="{path:it.path,query:{index:index,name:it.name}}"
                >{{it.name}}</router-link>
              </transition>
            </ul>
          </li>
        </ul>
      </div>
      <div class="scroll"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["propslist"],
  data() {
    return {
      flag: this.$route.query.index
    };
  },
  computed: {
    menulist() {
      return this.propslist;
    }
  },
  watch:{
    $route(to){
      if(to.params.id){
        document.title =`${to.query.name} | buz的个人博客`
      }
    }
  }
};
</script>
<style scoped>
@media (max-width: 650px) {
  .leftbar {
    top: 71px;
    left: 0%;
  }
}
@media (min-width: 650px) {
  .leftbar {
    left: 5%;
    top: 120px;
  }
}
.leftbar {
  background: white;
  width: 300px;
  position: fixed;
  z-index: 999;
}
.bar {
  width: 300px;
  padding-top: 20px;
  height: calc(100vh - 130px);
  overflow: auto;
}
ul {
  list-style: none;
  padding: 0;
  margin-right: 1em;
}
.contextul {
  line-height: 1.5em;
  margin-top: 5px;
}
.contexttitle {
  font-size: 0.9rem;
  padding-left: 3em;
  font-weight: 500;
  color: #767676;
  cursor: pointer;
}
.con-top {
  transition: all 0.3s ease;
  transform: rotate(180deg);
}
.con-left {
  transition: all 0.3s ease;
  transform: rotate(90deg);
}
.contextitem {
  font-size: 14px;
  cursor: pointer;
  padding-left: 2.5em;
}
.it {
  color: #00979d;
  font-weight: 500;
}
.itemul {
  padding-left: 1.5em;
  margin: 0.9em;
}
.scroll {
  position: absolute;
  background: white;
  height: 100%;
  width: 15px;
  z-index: 1000;
  top: 0;
  right: 0;
}
</style>

