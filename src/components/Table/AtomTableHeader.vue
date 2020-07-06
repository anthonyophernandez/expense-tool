<template>
  <th class="text-sm font-serif text-gray-500 hover:text-gray-900 cursor-pointer text-left px-4 py-1">{{ data }}</th>
</template>

<script>
export default {
  name: 'AtomTableHeader',
  props: ['data']
}
</script>
