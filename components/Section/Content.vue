<template>
  <div class="content-container">
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-container {
  display: flex;
  justify-content: center;
  padding-left: 1em;
  padding-right: 1em;
  width: calc(100% - 2em);

  .content {
    width: 100%;
    max-width: 1000px;
  }
}
</style>