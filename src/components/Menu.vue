<!-- src/components/TheMenu.vue -->
<template>
  <nav class="menu">
    <router-link to="/home" class="menu-item">Accueil</router-link>
    <router-link to="/Classement" class="menu-item">Classement</router-link>
    <router-link to="/Suggestion" class="menu-item">Suggestion</router-link>
    <router-link to="/Recherche" class="menu-item">Recherche</router-link>
  </nav>
</template>

<script>
export default {
  name: 'TheMenu'
};
</script>

<style>
.menu {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: #f8f8f8;
}
.menu-item {
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
.menu-item:hover {
  color: #0275d8;
}
</style>
