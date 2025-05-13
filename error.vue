<script setup lang="ts">
import type { NuxtError } from '#app';
import * as Errors from "~/utils/Errors";

const props = defineProps({
  error: Object as () => NuxtError
});
const error = props.error;
const errorDescription = `${Errors.Descriptions[
  error?.statusCode as Errors.HTTPStatusCodes] ??
  Errors.Descriptions[Errors.HTTPStatusCodes.InternalServerError]
  }`;
</script>

<template>
  <div>
    <Navbar />
    <NuxtLayout>
      <div class="errorContainer">
        <div class="errorStatusCode">{{ error?.statusCode }}</div>
        {{ errorDescription }}
        <NuxtLink to="/" class="back">
          <div>return back home?</div>
        </NuxtLink>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped lang="scss">
.errorContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1em;
  font-size: 2em;

  .errorStatusCode {
    font-size: 5em;
  }

  :link, :visited {
    color: #fff;
    text-decoration: none;
  }

  .back {
    margin-top: 1em;
    padding: 0.4em;
    font-size: 0.8em;
    border: solid 2px #fff;
    background-color: #fff0;
    transition: 0.2s;
  }
  .back:hover {
    background-color: #fff4;
  }
}
</style>