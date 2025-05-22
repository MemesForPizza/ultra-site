<template>
  <div id="page">
    <div id="content">
      <UltraKillGuide>
        <template #preview><img src="~/assets/images/guides/basics.png"></template>
        BASICS
      </UltraKillGuide>
      <UltraKillGuide>
        <template #preview><img src="~/assets/images/guides/advanced.png"></template>
        ADVANCED
      </UltraKillGuide>
      <UltraKillGuide>
        <template #preview><img src="~/assets/images/guides/enemies.png"></template>
        ENEMIES
      </UltraKillGuide>
      <UltraKillGuide>
        <template #preview><img src="~/assets/images/guides/levels.png"></template>
        LEVELS
      </UltraKillGuide>
      <UltraKillGuide>
        <template #preview><img src="~/assets/images/guides/wiki.png"></template>
        WIKI
      </UltraKillGuide>
    </div>
  </div>
</template>

<style scoped lang="scss">
#page {
  display: flex;
  justify-content: center;
  padding-left: 1em;
  padding-right: 1em;
  width: calc(100% - 2em);

  #content {
    width: 100%;
    max-width: 1000px;
  }
}
</style>