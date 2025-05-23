<script setup lang="ts">
import { NuxtLink } from '#components';

</script>

<template>
  <div>
    <SectionContent>
      <UltraKillGuide to="./guides/basics">
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
    </SectionContent>
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