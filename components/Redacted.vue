<template>
  <span class="redacted">
    <slot>[REDACTED]</slot>
  </span>
</template>

<style scoped lang="scss">
.redacted {
  background-color: currentColor;
}

.redacted::selection{
  background-color: #f00;
}
</style>