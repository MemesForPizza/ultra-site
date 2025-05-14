<template>
  <UltraKillSection class="guide_entry" style="--bgcol: #4a2a2aff;">
    <SectionSpreaded class="guide_entry_body">
      <div class="guide_entry_icon">
        <slot name="preview"></slot>
      </div>
      <div class="guide_entry_title">
        <slot/>
      </div>
    </SectionSpreaded>
  </UltraKillSection>
</template>

<style scoped lang="scss">
.guide_entry_body {
  display: flex;
  justify-content: center;
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
