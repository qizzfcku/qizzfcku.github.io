<script setup lang="ts">

defineProps( {
  id: String,
  image: {
    type: String,
    required: true,
  },
  code: {
    type: String || null,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Object,
    required: true,
    default: 0
  },

})

const getPriceWithoutDecimal = (num) => {
  if(num){
    num = Math.floor(parseFloat(num));
  }
  return num;
};

</script>

<template>
  <div>
    <img class="img_container" :src="image" :alt="id"/>
    <span class="code">
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

.img_container {
  width: 100%;
  height: auto;
}
</style>