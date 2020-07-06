<template>
  <component :is="tag" class="font-serif">{{ content }}</component>
</template>

<script>
export default {
  name: 'AtomTitle',
  props: ['tag', 'content']
}
</script>
