<template>
  <div class="section">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.section {
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: calc(100% - 2 * var(--padding, 1em));
  padding: var(--padding, 1em);
  background-color: var(--bgcol);
}
</style>