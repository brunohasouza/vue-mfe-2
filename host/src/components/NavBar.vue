<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Home</router-link>
      <router-link to="/remote">Remote</router-link>
      <router-link to="/parcel">Parcel Webpack</router-link>
      <router-link to="/parcel-2">Parcel Vite</router-link>
    </nav>
  </header>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  header {
    width: 100%;
    background-color: darkslateblue;
    height: 4rem;
  }

  nav {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  a {
    text-decoration: none;
    color: white;
    display: inline-block;
    padding: .5rem 1.5rem;
    border-radius: .25rem;
    font-size: 1.25rem;
    line-height: 1.25rem;
  }

  a:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
</style>