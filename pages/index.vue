<script setup lang="ts">
import MySelect from "~/components/UI/MySelect.vue";
import CatalogList from "~/components/CatalogList.vue";
import useMaterials from "~/composables/useMaterials";
import {onMounted} from "vue";

const sortByPrice = ref('');
const sortByMaterial = ref('')

const { materials, fetchMaterials} = useMaterials();

onMounted(() => {
  fetchMaterials();
});
const changeSelectPrice = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  sortByPrice.value = target.value;
}
const changeSelectMaterial = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  sortByMaterial.value = target.value;
}
</script>

<template>
  <div class="catalog">
    <h2>Комплекты стеллажных систем</h2>
    <div class="select">
      <div>
        <label for='price_select' class="label_select">Сортировка по:</label>
        <my-select id="price_select" @change="changeSelectPrice">
          <option value="" selected></option>
          <option value="ascending">Цена по возрастанию</option>
          <option value="descending">Цена по убыванию</option>
        </my-select>
      </div>
      <div>
        <label for="material_select" class="label_select">Материал:</label>
        <my-select id="material_select" @change="changeSelectMaterial">
          <option value="" selected></option>
          <option
              v-for="material in materials"
              :key="material.id"
              :value="material.id"
          >
            {{ material.name }}
          </option>
        </my-select>
      </div>
    </div>
    <CatalogList :priceSort="sortByPrice" :materialSort="sortByMaterial"/>
  </div>
</template>

<style scoped>
.catalog {
  margin: 50px 150px;
}
.label_select{
  padding: 10px;
  color: #4F4F4F;
  font-size: 0.80rem;
  line-height: 1rem;
}

.select {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 20px;
}
</style>