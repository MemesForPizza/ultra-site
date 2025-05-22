<template>
  <div class="ultrakill-section" style="--padding: var(--padding)">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.ultrakill-section {
  border-image-slice: 604 604 604 604;
  border-image-width: calc(1.5 * var(--padding, 1em)); 
  border-image-source: url("~/assets/images/ornaments/nut.png");
  border-style: solid;
  border-width: var(--padding, 1em);
  margin: 1em;
  width: calc(100% - 2 * var(--padding, 1em));
  background-color: var(--bgcol);
}
</style>