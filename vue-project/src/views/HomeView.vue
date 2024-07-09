<script>
import flash from '@/mixins/flash.js'

export default {
  mixins: [flash]
}
</script>

<template>
  <main>
    <button type="button" @click="flashMessage('Error!', 'You did it in home view using mixins!', 'error')">
      CLICK ME
    </button>
  </main>
</template>
