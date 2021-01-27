<template>
  <!-- <div class="container">
    <h1>{{ error.statusCode }}</h1>
    <h1 v-if="error.statusCode === 404">ページが見つかりません</h1>
  </div> -->
  <p v-if="statusCode === 404" class="description">
    <a v-if="typeof $route === 'undefined'" class="error-link" href="/"></a>
    <NuxtLink v-else class="error-link" to="/">Back to the home page</NuxtLink>
  </p>
</template>

<script>
export default {
  props: {
    error: {
      default: null,
    },
  },
};
</script>
