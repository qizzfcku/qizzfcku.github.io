<script setup lang="ts">

</script>

<template>
  <form>
    <select id="Select" class="select">
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
  width: 200px;
}
</style>