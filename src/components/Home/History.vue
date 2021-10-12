<template>
  <v-card dark rounded="xl" max-width="500px" class="mx-auto">
    <v-card-title><h3 class="mx-auto">Thống Kê</h3></v-card-title>

    <v-card-text>
      <div id="boxx">
        <v-sparkline
          :value="history"
          smooth="10"
          line-width="2"
          stroke-linecap="round"
          type="trend"
          auto-draw
          color="white"
          padding="20"
          auto-draw-durations="2000"
          label-size="8"
          height="150"
        >
          <template v-slot:label="item">
            {{ item.value }}D
          </template>
        </v-sparkline>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { doc, getFirestore, onSnapshot } from "@firebase/firestore";
export default {
  data: () => {
    return {
      history: [],
    };
  },

  mounted() {
    //const auth = getAuth()
    //const user = auth.currentUser
    onAuthStateChanged(getAuth(), (user) => {
      //console.log("get data ",user.uid);
      if (user) {
        const db = getFirestore();
        const docRef = doc(db, "users", user.uid);
        onSnapshot(docRef, (snap) => {
          this.history = snap.data().chart.slice(-10);
          //console.log(snap.data().chart)
        });
      }
    });
  },
};
</script>

<style scoped>
#boxx {
  height: 30vh;
  display: flex;
  align-items: flex-end;
}
</style>
