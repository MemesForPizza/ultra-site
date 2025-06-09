<template>
  <NuxtLink :to="props.to">
    <UltraKillSection class="guide_entry" style="--bgcol: #4a2a2aff;">
      <div class="guide_entry_icon">
        <slot name="preview"></slot>
      </div>
      <div class="guide_entry_title">
        <slot />
      </div>
    </UltraKillSection>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  to?: string;
}>();
</script>

<style scoped lang="scss">
:link,
:visited {
  color: #fff;
  text-decoration: none;
}

.guide_entry {
  display: flex;
  flex-direction: row;

  * {
    display: flex;
    justify-content: center;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  .guide_entry_icon {
    margin-left: 1em;
    width: 300px;
    height: 200px;

    * {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .guide_entry_title {
    font-size: 5em;
    flex-grow: 1;
  }
}
</style>