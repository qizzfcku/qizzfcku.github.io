<script setup lang="ts">

const emit = defineEmits(['change']);

const emitChange = (event: Event) => {
  emit('change', event);
}
</script>

<template>
  <form>
    <select id="Select" class="select" @change="emitChange" v-bind="$attrs">
      <slot>

      </slot>
    </select>
  </form>
</template>

<style scoped>
.select {
  background-color: #F2F2F2;
  border: 1px solid #EEEEEE;
  padding: 10px 5px;
  width: 100%;
}
@media (min-width:800px) {
  .select {
    width: 250px;
  }
}
</style>