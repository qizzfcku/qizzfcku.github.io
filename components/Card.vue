<script setup lang="ts">
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

const getPriceWithoutDecimal = (price: number | null): number | null => {
  if (price !== null) {
    return Math.floor(price);
  }
  return null;
};

</script>

<template>
  <div class="card_container">
    <div class="discount_container" v-if="price.old_price">
        <span>Скидка</span>
    </div>
    <img class="item_image" :src="image" :alt="id"/>
    <span class="code" v-if="code">
        {{ code }}
      </span>
    <span>
        {{ title }}
      </span>
    <div class="price_and_icons">
      <div>
          <span class="old_price" v-if="price.old_price">
            {{ getPriceWithoutDecimal(price.old_price) }}₽
          </span>
        <span>
            {{ getPriceWithoutDecimal(price.current_price) }}₽
          </span>
      </div>
      <div>
        <img class="icon_cart" src="/assets/icons/cart.svg" alt="cart"/>
        <img class="icon_heart" src="/assets/icons/heart.svg" alt="heart"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card_container{
  position: relative;
}

.discount_container{
  position: absolute;
  background: #EB5757;
  color: #FFFFFF;
  padding: 3px 15px;
  left: 0;
  top: 10px;
}

.code{
  font-size: 0.75rem;
  line-height: 1rem;
  color: #888888;
}
.price_and_icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.old_price{
  color: #888888;
  text-decoration: line-through;
  margin-right: 5px;
}

.icon_cart {
  margin-right: 30px;
}
.icon_cart:hover {
  transition: ease-in-out;
  transition-duration: 150ms;
  scale: 125%;
}

.icon_heart:hover {
  transition: ease-in-out;
  transition-duration: 150ms;
  scale: 125%;
}

.item_image {
  display: flex;
  margin: 0 auto ;
  width: 80%;
  height: auto;
}
</style>