<template>
  <div>
    <h2>Dimensiones de la Ventana</h2>
    <p>Ancho: {{ width }} px</p>
    <p>Alto: {{ height }} px</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const width = ref(window.innerWidth)
const height = ref(window.innerHeight)

const actualizarDimensiones = () => {
  width.value = window.innerWidth
  height.value = window.innerHeight
}

onMounted(() => {
  window.addEventListener('resize', actualizarDimensiones)
})

onUnmounted(() => {
  window.removeEventListener('resize', actualizarDimensiones)
})
</script>
<style scoped>
div {
  max-width: 400px;
  margin: 40px auto;
  padding: 24px;
  background: linear-gradient(to bottom right, #f8f9fa, #e9ecef);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
  transition: all 0.3s ease;
}

h2 {
  font-size: 24px;
  margin-bottom: 16px;
  color: #333;
}

p {
  font-size: 18px;
  color: #555;
  margin: 8px 0;
  transition: color 0.2s ease;
}

@media (max-width: 480px) {
  div {
    padding: 16px;
    margin: 20px;
  }

  h2 {
    font-size: 20px;
  }

  p {
    font-size: 16px;
  }
}
</style>

