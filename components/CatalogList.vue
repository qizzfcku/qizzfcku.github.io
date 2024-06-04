<script setup>
import {onMounted, watch} from "vue";
import useItems from "~/composables/useItems.ts";

const props = defineProps({
  priceSort: {
    type: String,
    default: "",
  },
  materialSort: {
    type: String,
    default: "",
  },

})

const {items, fetchItems, pending} = useItems();

onMounted(() => {
  fetchItems(props.priceSort, props.materialSort);
});

watch([() => props.priceSort, () => props.materialSort], ([newPriceSort, newMaterialSort]) => {
  fetchItems(newPriceSort, newMaterialSort);
});
</script>

<template>
  <div class="body">
    <div v-if="pending">
      <span>Загрузка</span>
    </div>
    <Card
        v-else
        class="card_cover"
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :code="item.code"
        :title="item.name"
        :image="item.image.url"
        :price="item.price"
    />
  </div>
</template>

<style scoped>
.body {
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 35px;
}

.card_cover {
  padding: 12px;
  border: 1px solid #EEEEEE;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
</style>
