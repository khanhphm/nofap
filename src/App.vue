<template>
  <v-app dark
    v-touch="{
      right: () => {
        drawer = $router.currentRoute.meta.auth;
      },
      left: () => {
        drawer = false;
      },
    }"
  >
    <div v-show="$router.currentRoute.meta.auth"  id="btn" @click="drawer = $router.currentRoute.meta.auth">
      <v-btn dark rounded class="pl-14">
        <v-icon color="success">mdi-account-arrow-right</v-icon>
      </v-btn>
    </div>

    <v-app-bar class="d-flex justify-center" dark app>
      <v-app-bar-title class="d-flex justify-center text-logo">
        NO<span>FAP</span></v-app-bar-title
      >
       <v-navigation-drawer hide-overlay temporary dark width="500" app v-model="drawer">
      <User v-show="$router.currentRoute.meta.auth"/>
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
      <v-btn icon width="100%" @click="$router.push('/rankings')">
        <span>Rankings</span>
        <v-icon>mdi-format-list-numbered</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import User from "./components/User.vue";
export default {
  name: "App",
  components: { User },
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
  position: fixed;
  top: 50%;
  left: -40px;
}
v-navigation-drawer {
  z-index: 999999;
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
