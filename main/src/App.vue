<script setup>
import { ref } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { NAV_LIST } from './const/nav'
import { loading, header, nav } from './store/index'

const router = useRouter()
const route = useRoute()
const { loadingStatus } = loading
const currentRoute = ref(0)

const { headerStatus } = header
const { navStatus } = nav

watch(
  route,
  val => {
    NAV_LIST.forEach(item => {
      if (val.fullPath.includes(item.url)) {
        currentRoute.value = item.value
      }
    })
  },
  { deep: true }
)

const changeRoute = item => {
  currentRoute.value = item.value
  router.push(item.url)
}
</script>

<template>
  <div>
    <header v-show="headerStatus">
      <div class="wrapper">
        <HelloWorld msg="Main App" />
      </div>
    </header>

    <nav v-show="navStatus">
      <!-- <RouterLink v-for="item in NAV_LIST" v-bind:key="item.name" :to="item.url">{{ item.name }}</RouterLink> -->
      <a
        v-for="item in NAV_LIST"
        v-bind:key="item.name"
        :class="{ 'router-link-exact-active': currentRoute == item.value }"
        @click="changeRoute(item)"
      >
        {{ item.name }}
      </a>
    </nav>

    <div v-show="loadingStatus">Loading...</div>
    <div v-show="!loadingStatus" id="main-container">Child App</div>

    <!-- <RouterView /> -->
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  padding: 1rem 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  cursor: pointer;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
