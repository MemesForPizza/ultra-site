<template>
  <div class="section">
    <slot/>
  </div>
</template>

<style scoped lang="css">
.section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
</style>