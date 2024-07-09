<script>
import flash from '@/mixins/flash.js'

export default {
  mixins: [flash]
}
</script>

<template>
  <main>
    <button type="button" @click="flashMessage('You did it in home view!')">CLICK ME</button>
  </main>
</template>
