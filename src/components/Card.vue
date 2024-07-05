<template>
  <div class="card">
    <div class="card-header">
      <slot name="cardHeader"></slot>
    </div>
    <div class="card-body">
      <slot name="cardBody"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComp",
};
</script>

<style>
.card {
  width: 18rem;
  box-shadow: 5px 5px 20px darkgray;
  background: linear-gradient(to bottom right,#FFFF, #003459);
  /* overflow: hidden; */
}
</style>
