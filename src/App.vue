<template>
  <nav id="nav">
    <h1>Todos</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </nav>
  <router-view />
</template>

<style>
:root {
  --black: #2c3e50;
  --primary-color: #42b983;
  --primary-contrast: var(--black);
  font-size: 20px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-weight: 300;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--black);
}

#nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
}

#nav h1 {
  font-size: 2.5rem;
}

#nav a {
  font-weight: 300;
  color: var(--black);
  text-decoration: none;
  font-size: 1.2rem;
}

#nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 10px;
}

#nav li {
  display: inline-block;
  margin: 0 10px;
}

#nav a.router-link-exact-active {
  color: var(--primary-color);
}
</style>
