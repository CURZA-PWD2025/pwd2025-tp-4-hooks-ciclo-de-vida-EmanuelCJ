<template>
    <div :class="`alerta ${tipo}`">
        <p>{{ mensaje }}</p>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
defineProps<{
    tipo: 'sinCambios' | 'editando' | 'confirmado';
    mensaje: string;
}>();
</script>

<style scoped>
.alerta {
    padding: 10px;
    border-radius: 5px;
    margin: 10px 0;
    font-family: 'Segoe UI', sans-serif;
}
.alerta.sinCambios {
    display: none;
}
.alerta.editando {
    background-color: #fff3cd;
    color: #856404;
    border: 1px solid #ffeeba;
}
.alerta.confirmado {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
}
</style>
