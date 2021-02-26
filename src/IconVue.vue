<template>
  <svg :class="`icon icon-${id}`">
    <use :xlink:href="`#${id}`"></use>
  </svg>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'

  defineProps({
    id: {
      type: String,
      required: true
    }
  })
</script>
