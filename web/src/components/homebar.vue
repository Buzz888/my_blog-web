<template>
  <ul class="title flex jc-center">
    <li v-for="item in title" :key="item.name">
      <transition name="slide-fade" mode="out-in">
        <router-link tag="span" :to="item.path">{{item.name}}</router-link>
      </transition>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      title: [
        { name: "前端", path: "/web" },
        { name: "后端", path: "/server" },
        { name: "算法数据", path: "/alg" },
        { name: "设计模式", path: "/home" },
        { name: "笔记", path: "/home" },
        { name: "MORE+", path: "/home" }
      ]
    };
  }
};
</script>
<style scoped>
@media (min-width: 650px) {
  .title {
    margin-top: 20px;
  }
}
.title {
  list-style: none;
}
.title li {
  text-decoration: none;
  margin-right: 2em;
}
span {
  font-size: 0.8rem;
  color: #767676;
  font-weight: 300;
}
span:hover {
  color: #00979d;
  cursor: pointer;
}
</style>