<script setup>

</script>

<template>
  <div class="body">
    <div class="card_cover">
      <img src="/assets/pic/pic1.png" alt="asd"/>
      <span>
        L422WH
      </span>
      <span>
        Ручка дверная
      </span>
      <div class="price_and_icons">
        <span>
          422$
        </span>
        <div>
          <img src="/assets/icons/cart.svg" alt="cart"/>
          <img src="/assets/icons/heart.svg" alt="heart"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  margin: 0;
  padding: 0;
}

.card_cover {
  padding: 10px;
  border: 1px solid slategray;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  border-radius: 26px;
}
.price_and_icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>