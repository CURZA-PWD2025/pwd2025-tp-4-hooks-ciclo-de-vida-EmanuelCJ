<template>
    <main>
        <h1>Lista de Profesiones</h1>
        <ul>
            <li v-for="(profesion, index) in profesionesData" :key="index">
                {{ profesion.nombre }} - {{ profesion.descripcion }}
            </li>
        </ul>
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import {profesiones} from "../../resource/profesiones.ts";
import type { Profesion } from '../interfaces/Profesion';

let profesionesData = ref<Profesion[]>([{
    id: 0,
    nombre: 'Cargando...',
    descripcion: 'Cargando...'
}]);

onMounted(() => {
    // Simulando una llamada a una API
    setTimeout(() => {
        profesionesData.value = profesiones;
    }, 1000);
});

</script>

<style scoped>
main {
  max-width: 600px;
  margin: 40px auto;
  padding: 24px;
  background: linear-gradient(to bottom right, #f0f4f8, #ffffff);
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', sans-serif;
  transition: all 0.3s ease;
}

h1 {
  text-align: center;
  font-size: 28px;
  margin-bottom: 20px;
  color: #2c3e50;
  font-weight: 600;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  background-color: #ffffff;
  margin-bottom: 12px;
  padding: 16px;
  border-radius: 12px;
  border-left: 6px solid #007bff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s ease;
}

li:hover {
  background-color: #eef6ff;
}

li::before {
  content: "💼 ";
  margin-right: 8px;
  font-size: 18px;
}

@media (max-width: 480px) {
  main {
    padding: 16px;
    margin: 20px;
  }

  h1 {
    font-size: 22px;
  }

  li {
    padding: 12px;
    font-size: 14px;
  }
}
</style>
