<script setup>
import { useLocalStorage } from '@/composables/useLocalStorage.js'

let username = useLocalStorage('username', 'John Doe')
let age = useLocalStorage('age', 63)
</script>

<template>
  <main>
    <p>
      What is your name?
      <input type="text" v-model="username" />
    </p>
    <p>What is your age? <input type="text" v-model="age" /></p>
  </main>
</template>
