<template>
  <main class="tareas-container">
    <h2>Lista de Tareas</h2>

    <form class="input-group" @submit.prevent="agregarTarea">
      <input 
        v-model="nuevaTarea" 
        placeholder="Agregar tarea" 
        @keyup.enter="agregarTarea"
        @input="manejarEdicion"
      />
      <button @click="agregarTarea">+</button>
    </form>

    <ul class="tareas-list">
      <li v-for="(tarea, index) in tareas" :key="index">
        {{ tarea }}
      </li>
    </ul>

    <AlertaComponent 
      v-if="alerta.mostrar"
      :tipo="alerta.tipo" 
      :mensaje="alerta.mensaje" 
    />
  </main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import AlertaComponent from '../components/AlertaComponent.vue';

// Estados de la aplicación
const tareas = ref<string[]>(['correr', 'caminar']);
const nuevaTarea = ref('');
const alerta = ref({
  tipo: 'sin-editar',
  mensaje: 'Lista sin modificaciones',
  mostrar: true
});

// Estados para controlar los cambios
const estadoAnterior = ref(tareas.value.length);
const estaEditando = ref(false);

// Función para agregar tarea
const agregarTarea = () => {
  if (nuevaTarea.value.trim()) {
    tareas.value.push(nuevaTarea.value.trim());
    nuevaTarea.value = '';
    estaEditando.value = false;
  }
};

// Función para manejar cuando el usuario está editando
const manejarEdicion = () => {
  if (nuevaTarea.value.trim() && !estaEditando.value) {
    estaEditando.value = true;
    alerta.value = {
      tipo: 'editando',
      mensaje: 'Escribiendo nueva tarea...',
      mostrar: true
    };
  } else if (!nuevaTarea.value.trim() && estaEditando.value) {
    estaEditando.value = false;
    alerta.value = {
      tipo: 'sin-editar',
      mensaje: 'Lista sin modificaciones',
      mostrar: true
    };
  }
};

// Watcher para detectar cambios en la lista de tareas
watch(
  tareas,
  (nuevasTareas) => {
    if (nuevasTareas.length > estadoAnterior.value) {
      alerta.value = {
        tipo: 'modificado',
        mensaje: `Tarea agregada exitosamente. Total: ${nuevasTareas.length} tareas`,
        mostrar: true
      };
      estadoAnterior.value = nuevasTareas.length;
      
      // Ocultar la alerta después de 3 segundos
      setTimeout(() => {
        if (alerta.value.tipo === 'modificado') {
          alerta.value = {
            tipo: 'sin-editar',
            mensaje: 'Lista sin modificaciones',
            mostrar: true
          };
        }
      }, 3000);
    }
  },
  { deep: true }
);

// Watcher para el input de nueva tarea
watch(
  nuevaTarea,
  (nuevoValor) => {
    if (nuevoValor.trim() === '' && estaEditando.value) {
      estaEditando.value = false;
      alerta.value = {
        tipo: 'sin-editar',
        mensaje: 'Lista sin modificaciones',
        mostrar: true
      };
    }
  }
);
</script>

<style scoped>
.tareas-container {
  max-width: 600px;
  margin: 40px auto;
  padding: 32px;
  background: #fefefe;
  border-radius: 20px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
  font-family: 'Segoe UI', sans-serif;
  transition: all 0.3s ease;
  border: 1px solid #e3e3e3;
}

h2 {
  text-align: center;
  color: #222;
  margin-bottom: 24px;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
}

.input-group input {
  flex: 1;
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  background-color: #fafafa;
}

.input-group input:focus {
  border-color: #007bff;
  box-shadow: 0 0 6px rgba(0, 123, 255, 0.2);
  background-color: #fff;
}

.input-group button {
  padding: 0 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.input-group button:hover {
  background-color: #218838;
  transform: scale(1.05);
}

.input-group button:active {
  transform: scale(0.95);
}

.tareas-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.tareas-list li {
  padding: 14px 18px;
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
  transition: transform 0.2s ease, background-color 0.3s ease;
  animation: fadeIn 0.3s ease-out;
}

.tareas-list li:hover {
  background-color: #f4f9ff;
  transform: translateX(5px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 480px) {
  .tareas-container {
    padding: 20px;
    margin: 20px;
  }

  .input-group {
    flex-direction: column;
  }

  .input-group button {
    width: 100%;
    margin-top: 10px;
    font-size: 20px;
  }
}
</style>