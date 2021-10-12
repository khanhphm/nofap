<template>
  <v-card class="mx-auto" dark max-width="500px" rounded="xl" elevation="4">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="text-center day">{{ days }} <span>DAY</span></h1>
          <h3 class="text-center hour mb-6">
            {{ hours }}h {{ mins }}m {{ secs }}s
          </h3>
          <div align="center" class="mb-3">
            <v-btn
              id="relapse"
              @click="()=>{relapseDialog = !relapseDialog; reason = ''}"
              width="65%"
              elevation="1"
              dark
              color="rgb(255, 126, 115)"
            >
              RELAPSE
            </v-btn>
          </div>

          <v-dialog
            v-model="relapseDialog"
            max-width="500px"
            transition="dialog-transition"
          >
            <v-card dark>
              <v-app-bar>
                <h2>Bạn đã Relapse ??</h2>
              </v-app-bar>

              <v-card-text class="py-2">
                <v-textarea
                  class="mt-6"
                  auto-grow
                  color="rgb(255, 126, 115)"
                  placeholder="Khi Relapse, bạn cần phải tìm ra nguyên nhân khiến bạn Relapse"
                  v-model="reason"
                ></v-textarea>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="rgb(255, 126, 115)" @click="relapse()" text
                  >Relapse</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import {
  arrayUnion,
  doc,
  getFirestore,
  increment,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
//import { getAuth, onAuthStateChanged } from "@firebase/auth";
//import { getAuth } from '@firebase/auth';
export default {
  data: () => {
    return {
      relapseDialog: false,
      days: 0,
      hours: 0,
      mins: 0,
      secs: 0,
      reason: "",
      lastRelapse: 0,
    };
  },
  mounted() {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        const db = getFirestore();
        onSnapshot(doc(db, "users", user.uid), (snap) => {
          console.log("snap");
          this.lastRelapse = snap.data().lastRelapse;
        });

        setInterval(() => {
          // yyyy-MM-dd HH:mm:ss

          let past = new Date(this.lastRelapse).getTime();
          let now = new Date();
          let diff = now - past;

          this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
          let hours = Math.floor(diff / (1000 * 60 * 60));
          let mins = Math.floor(diff / (1000 * 60));
          let secs = Math.floor(diff / 1000);

          this.hours = hours - this.days * 24;
          this.mins = mins - hours * 60;
          this.secs = secs - mins * 60;
        }, 1000);
      }
    });
  },
  methods: {
    relapse() {
      if (this.reason == "") this.reason = "Không rõ nguyên nhân";
      const db = getFirestore();
      const date = new Date()
      updateDoc(doc(db, "users", getAuth().currentUser.uid), {
        history: arrayUnion({
          long: this.secs,
          reason: this.reason,
          date: date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
        }),
        lastRelapse: new Date().getTime(),
        chart: arrayUnion(this.secs),
        numOfRelapse: increment(1)
      }).then((err) => {
        if (err) alert(err.message);
        else {
          this.relapseDialog = false;
          this.reason = "";
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
v-container {
  max-width: 500px;
}
.day {
  margin-top: 10px;
  font-size: 3.25rem;
}
span {
  color: rgb(255, 126, 115);
}

.hour {
  word-spacing: 0.5em;
  letter-spacing: 0.1em;
}
#relapse {
  letter-spacing: 1em;
}
</style>
