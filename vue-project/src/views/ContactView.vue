<script>
import flash from '@/mixins/flash.js'

export default {
  mixins: [flash]
}
</script>

<template>
  <div>
    <button type="button" @click="flashMessage('You did it in contact view!')">CLICK ME</button>
  </div>
</template>
