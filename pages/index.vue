<template>
  <div class="container">
    <div>
      <h1 class="wetherTitle">気になる市の天気を調べてみよう</h1>
      <div class="searchWether">
        <div class="view" v-for="elem in items" :key="elem.label">
          <nuxt-link
            class="linkStyle"
            v-bind:to="{ name: 'city-name', params: { name: elem.label } }"
          >
            {{ elem.label }}の天気を見る</nuxt-link
          >
        </div>
        <!-- </div> -->
        <input
          class="wetherAdd"
          type="text"
          v-model="tmp"
          placeholder="yokohama"
        />
        <button class="wetherAddBt" @click="wetherAdd">検索</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["error"],
  data() {
    return {
      tmp: null,
    };
  },
  computed: {
    ...mapState({
      items: (state) => state.items,
    }),
  },
  methods: {
    wetherAdd() {
      this.$store.commit("wetherAdd", this.tmp);
      this.tmp = null;
    },
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
}

.wetherTitle {
  font-size: 3vw;
  margin-top: 4vw;
}

.searchWether {
  margin-top: 12vw;
}

.view {
  margin: 3vw auto;
}

.linkStyle {
  text-decoration: none;
  color: #51b0d1;
  font-size: 2vw;
}

.wetherAdd {
  width: 20%;
  padding: 0.4vw;
}

.wetherAddBt {
  border: solid 2px rgba(156, 156, 156, 0);
  background-color: #51b0d1;
  color: #fff;
}
</style>
