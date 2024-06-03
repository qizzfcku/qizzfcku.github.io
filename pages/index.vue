<script setup lang="ts">
import MySelect from "~/components/UI/MySelect.vue";
</script>

<template>
  <div class="catalog">
    <h2>Комплекты стеллажных систем</h2>
    <div class="select">
      <div>
        <label for='price_select' class="label_select">Сортировка по:</label>
        <my-select id="price_select">
          <option value="ascending" selected>Цена по возрастанию</option>
          <option value="descending">Цена по убыванию</option>
        </my-select>
      </div>
      <div>
        <label for="material_select" class="label_select">Материал:</label>
        <my-select id="material_select">
          <option value="metal" selected>Металл</option>
          <option value="wood">Дерево</option>
        </my-select>
      </div>
    </div>
    <CatalogList/>
  </div>
</template>

<style scoped>
.catalog {
  margin: 80px 100px;
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