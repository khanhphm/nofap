<template>
  <v-app
    v-touch="{
      right: () => {
        drawer = true;
      },
      left: () => {
        drawer = false;
      },
    }"
  >
    <div id="btn" @click="drawer = true">
      <v-btn dark rounded class="pl-14">
        <v-icon color="success">mdi-account-arrow-right</v-icon>
      </v-btn>
    </div>

    <v-app-bar class="d-flex justify-center" dark app>
      <v-app-bar-title class="d-flex justify-center text-logo">
        NO<span>FAP</span></v-app-bar-title
      >
      <v-navigation-drawer temporary width="500" app v-model="drawer">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora a
        minima, soluta maiores reiciendis, explicabo illum voluptatibus quos eum
        id odio nostrum dolor, unde fuga neque quaerat dolorum. Assumenda,
        temporibus.
      </v-navigation-drawer>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-bottom-navigation
      shift
      :value="$router.currentRoute.meta.val"
      glow
      color="error"
      dark
      app
    >
      <v-btn icon width="100%" @click="$router.push('/')">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn icon width="100%" @click="$router.push('/history')">
        <span>History</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>
      <v-btn icon width="100%">
        <span>Rankings</span>
        <v-icon>mdi-format-list-numbered</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({ drawer: false }),
};
</script>

<style scoped>
.text-logo {
  font-family: tahoma;
  font-size: 2rem;
  letter-spacing: 1.25rem;
  font-weight: 700;
}
.text-logo span {
  color: rgb(255, 126, 115);
}
#btn {
  z-index: 5;
  position: absolute;
  top: 50%;
  left: -40px;
}

@media screen and (max-width: 650px) {
  #btn {
    display: none;
    position: absolute;
    top: 50%;
    left: -40px;
  }
}
</style>
