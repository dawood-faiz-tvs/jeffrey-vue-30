<script>
import { useFlash } from '@/composables/useFlash.js'

export default {
  setup() {
    let { flashMessage } = useFlash()

    return { flashMessage }
  }
}
</script>

<template>
  <div>
    <button
      type="button"
      @click="
        flashMessage('Success!', 'You did it in about view using composables & setup method!')
      "
    >
      CLICK ME
    </button>
  </div>
</template>
