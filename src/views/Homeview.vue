<template>
    <header>
        <h1>TP 4 - Ciclo de Vida y Hooks</h1>
        <nav>
            <ul>
                <li><router-link to="/Lista">Lista</router-link></li>
                <li><router-link to="/Dimension">Dimension</router-link></li>
                <li><router-link to="/tareas">Tareas</router-link></li>
            </ul>
        </nav>
    </header>
    <main>
        <router-view />
    </main>
</template>

<script setup lang="ts">

</script>

<style scoped>
header {
  background: linear-gradient(to right, #007bff, #3399ff);
  padding: 20px;
  color: white;
  border-bottom: 4px solid #0056b3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  margin: 0;
  font-size: 26px;
  text-align: center;
  font-weight: 600;
}

nav {
  margin-top: 16px;
  display: flex;
  justify-content: center;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

nav li {
  margin: 0;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

nav a.router-link-exact-active {
  background-color: rgba(255, 255, 255, 0.3);
}

main {
  padding: 40px 20px;
  max-width: 900px;
  margin: auto;
}
</style>
