<template>
  <div class="infoContainer">
    <h1 class="wetherInfoTitle">{{ item.name }}の天気情報</h1>
    <div class="infoList">
      <div class="wetherInfo">天気：{{ item.weather[0].main }}</div>
      <div class="wetherInfo">温度：{{ item.main.temp }}℃</div>
      <div class="wetherInfo">湿度：{{ item.main.humidity }}％</div>
      <div class="wetherInfo">風速：{{ item.wind.speed }}m</div>
    </div>
    <nuxt-link class="infoLink" to="/">検索画面に戻る</nuxt-link>
  </div>
</template>

<script>
export default {
  async asyncData({ route, $axios }) {
    const item = await $axios.$get(
      `https://api.openweathermap.org/data/2.5/weather?q=${route.params.name},jp&units=metric&appid=869cfd6da03f6b640663c3f95dcb021e`
    );
    return {
      item,
    };
  },
};
</script>
<style>
.infoContainer {
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
}

.wetherInfoTitle {
  font-size: 3vw;
  margin-bottom: 4vw;
}

.wetherInfo {
  margin: 2vw auto;
  font-weight: bold;
  font-size: 1.7vw;
}
.infoList {
  margin: 6vw auto 8vw auto;
}

.infoLink {
  text-decoration: none;
  color: #51b0d1;
}
</style>
