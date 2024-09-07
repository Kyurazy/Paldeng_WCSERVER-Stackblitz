<template>
  <div id="app">
    <header>
      <img alt="Hau logo" class="logo" src="./assets/logo.png" width="125" height="125" />
      <div class="wrapper">
        <HelloWorld msg="Profile Information" />
      </div>
    </header>

    <main>
      <Profile />
      <Education />
      <Skills />
    </main>

    <button class="fab">+</button>
  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Profile from './components/Profile.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'
</script>

<style scoped>
header {
  line-height: 1.5;
  background: #282c34;
  color: #fff;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.fab {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
}
</style>
