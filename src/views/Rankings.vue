<template>
  <v-container max-width="500px">
    <v-row>
      <v-col class="justify-center">
        <div class="d-flex justify-center">
          <v-chip class="mb-4" dark><h2>RANKINGS</h2></v-chip>
        </div>
        <div v-for="item in rankings" :key="item.id">
          <v-card max-width="500px" dark class="mb-4 mx-auto">
            <v-container>
              <v-row>
                <v-col class="justify-center align-center d-flex" cols="3">
                  <v-avatar size="65">
                    <img :src="item.avt" />
                  </v-avatar>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col cols="9">
                  <span class="text-subtitle-2">{{ item.displayName }}</span>
                  <h1>{{getDate(item.lastRelapse)}} DAY</h1>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
} from "@firebase/firestore";
export default {
  data: () => ({
    rankings: [],
  }),
  methods: {
    getDate(timestamp) {
      let past = new Date(timestamp).getTime();
      let now = new Date();
      let diff = now - past;

      return Math.floor(diff / (1000 * 60 * 60 * 24));
    },
  },
  beforeMount() {
    const db = getFirestore();
    const ref = collection(db, "users");
    const qer = query(ref, orderBy("lastRelapse", "desc"));
    onSnapshot(qer, (snap) => {
      this.rankings=[]
      snap.forEach((item) => {
        this.rankings.push(item.data());
      });
      console.log(this.rankings);
    });
  },
};
</script>

<style scoped></style>
