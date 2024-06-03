<script setup>
import useItems from "~/composables/useItems.ts";
import { onMounted} from "vue";

const {items, fetchItems} = useItems();

onMounted( ()=>{
  fetchItems();
});
</script>

<template>
  <div class="body">
    <Card
        class="card_cover"
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :code="item.code"
        :title="item.name"
        :image="item.image.url"
        :price="item.price"
    >
    </Card>
  </div>
</template>

<style scoped>
.body {
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.card_cover {
  padding: 12px;
  border: 1px solid #EEEEEE;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
</style>