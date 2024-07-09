<script setup>
import { useFlash } from '@/composables/useFlash.js'

let { flashMessage } = useFlash()
</script>

<template>
  <div>
    <button
      type="button"
      @click="
        flashMessage(
          'Warning!',
          'You did it in contact view using composables & recommended short way!',
          'warning'
        )
      "
    >
      CLICK ME
    </button>
  </div>
</template>
