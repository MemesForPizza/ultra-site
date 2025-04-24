<template>
  <div class="section">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.section {
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: calc(100% - 2em);
  padding: 1em;
}
</style>