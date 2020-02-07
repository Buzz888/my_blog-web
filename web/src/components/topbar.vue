<template>
  <header class="topbar">
    <div class="bar flex jc-sa ai-center">
      <div class="menu" @click="$store.commit('setmenu')">
        <span class="iconfont icon-hanbao" style="font-size:1.8rem;"></span>
      </div>
      <div @click="$router.push('/')">
        <img src="../assets/logo.png" alt="logo" class="logo" />
      </div>
      <div class="git">
        <a href="https://github.com/Buzz888">
          <span class="iconfont icon-github" style="font-size:1.2rem;"></span>
        </a>
        <a href>
          <span class="iconfont icon-gitlab-line" style="font-size:1.2rem;"></span>
        </a>
      </div>
    </div>
    <div class="flex jc-center ai-center">
      <ul class="title flex">
        <li v-for="item in child" :key="item.name">
          <router-link active-class="span-item" tag="span" :to="item.path">{{item.name}}</router-link>
        </li>
        <li>
          <a href="https://github.com/Buzz888">
            <span>更多+</span>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
<style scoped>
@media (max-width: 650px) {
  .title {
    display: none;
  }
  .topbar {
    height: 70px;
  }
}
@media (min-width: 650px) {
  .topbar {
    height: 110px;
    width: 90%;
    margin-left: 5%;
  }
  .menu {
    display: none;
  }
}
.topbar {
  background: white;
  border-bottom: 1px solid #ececec;
  opacity: 0.98;
}
.logo {
  width: 100px;
}
.bar {
  margin-top: 15px;
  margin-bottom: 15px;
}
.title {
  list-style: none;
  box-sizing: border-box;
}
.title li {
  text-decoration: none;
  margin-right: 2em;
}
span {
  font-size: 0.7rem;
  color: #767676;
  font-weight: 300;
}
span:hover {
  color: #00979d;
  cursor: pointer;
}
.span-item {
  color: #00979d;
  font-weight: bold;
}
a {
  text-decoration: none;
}
</style>
<script>  
import {childrouter} from "../router";
export default {
  computed:{
    child(){
      return childrouter
    }
  }
};
</script>