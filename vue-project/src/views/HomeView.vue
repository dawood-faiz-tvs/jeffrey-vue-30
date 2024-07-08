<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { ref } from 'vue'

let message = ref('HELLO THERE...')

let changeValue = () => {
  message.value = 'HELLO WORLD!'
}
</script>

<template>
  <main>
    {{ message }}
    <button type="button" @click="changeValue">CLICK ME</button>
    <TheWelcome />
  </main>
</template>
