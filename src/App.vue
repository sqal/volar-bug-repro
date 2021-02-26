<template>
  <Icon id="foo" />
  <Icon :id="1" />
  <IconVue id="foo" />
  <IconVue />
  <IconVue :id="1" />
</template>

<script setup lang="ts">
  import Icon from './Icon'
  import IconVue from './IconVue.vue'
</script>
