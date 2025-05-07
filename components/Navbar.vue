<template>
  <div class="navbar_root">
    <div class="navbar_logo_container">
      <img src="~/assets/images/logo/logo_full.svg">
    </div>
    <div class="navbar_contents">
      <NuxtLink to="/">home</NuxtLink>
      <NuxtLink class="navbar_link_unavailable">guides</NuxtLink>
      <NuxtLink class="navbar_link_unavailable">forum</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar_root {
  background-color: #511515;
  color: #fff;
  padding: 1em;
  display: flex;
  flex-direction: row;

  .navbar_logo_container {
    margin-left: 4em;
    margin-right: 5em;
    transform: scale(4);
    image-rendering: pixelated;
    display: flex;
    align-items: center;
    * {
      height: 1em;
    }
  }

  .navbar_contents {
    text-transform: uppercase;

    :deep(*),
    :deep(:visited),
    :deep(:link) {
      color: #fff;
      display: inline-block;
      padding: 0.5em;
      text-decoration: none;
    }

    .router-link-active {
      text-decoration: underline;
    }

    .navbar_link_unavailable {
      cursor: not-allowed;
    }

    *:hover {
      background-color: #ffffff40;
    }
  }
}
</style>