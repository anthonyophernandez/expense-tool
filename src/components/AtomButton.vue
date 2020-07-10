<template>
  <button @click="buttonFunction" class="text-gray-500 h-8 w-10">{{ content }}</button>
</template>

<script>
export default {
  name: 'AtomButton',
  props: ['content', 'buttonFunction']
}
</script>

<style>

</style>
