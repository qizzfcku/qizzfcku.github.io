<script setup lang="ts">
import { computed } from 'vue';
import useCartAndFavorites from "~/composables/useCartAndFavorites";

interface Price {
  old_price: number | null;
  current_price: number;
}

const props = defineProps<{
  id: string;
  image: string;
  code: string | null;
  title: string;
  price: Price;
}>();

const { toggleItemInCart, toggleItemInFavorites, isInCart, isInFavorites } = useCartAndFavorites();

const getPriceWithoutDecimal = (price: number | null): number | null => {
  if (price !== null) {
    return Math.floor(price);
  }
  return null;
};

const cartIcon = computed(() => (isInCart(props.id) ? '/icons/checkmark.svg' : '/icons/cart.svg'));
const favoriteIcon = computed(() => (isInFavorites(props.id) ? '/icons/redheart.svg' : '/icons/heart.svg'));
</script>

<template>
  <div class="card_container">
    <div class="discount_container" v-if="price.old_price">
      <span>Скидка</span>
    </div>
    <img class="item_image" :src="image" :alt="id"/>
    <span class="code" v-if="code">{{ code }}</span>
    <span>{{ title }}</span>
    <div class="price_and_icons">
      <div>
        <span class="old_price" v-if="price.old_price">
          {{ getPriceWithoutDecimal(price.old_price) }}₽
        </span>
        <span>{{ getPriceWithoutDecimal(price.current_price) }}₽</span>
      </div>
      <div>
        <img class="icon_cart" :src="cartIcon" alt="cart" @click="toggleItemInCart(props.id)"/>
        <img class="icon_heart" :src="favoriteIcon" alt="heart" @click="toggleItemInFavorites(props.id)"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card_container {
  position: relative;
}

.discount_container {
  position: absolute;
  background: #EB5757;
  color: #FFFFFF;
  padding: 3px 15px;
  left: 0;
  top: 10px;
}

.code {
  font-size: 0.75rem;
  line-height: 1rem;
  color: #888888;
}

.price_and_icons {
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;
}

.old_price {
  color: #888888;
  text-decoration: line-through;
  margin-right: 5px;
}

.icon_cart, .icon_heart {
  margin-right: 30px;
  cursor: pointer;
}

.icon_cart:hover, .icon_heart:hover {
  transition: ease-in-out;
  transition-duration: 150ms;
  transform: scale(1.25);
}

.item_image {
  display: flex;
  margin: 0 auto;
  width: 80%;
  height: auto;
}
</style>
