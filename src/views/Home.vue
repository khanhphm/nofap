<template>
  <v-container >
    <v-row>
      <v-col class="justify-center">
        <div class="d-flex justify-center mb-3">
          <v-chip dark><h2>STREAKS</h2></v-chip>
        </div>
        <Counter/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          <History />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Counter from "../components/Home/Counter.vue";
import History from "../components/Home/History.vue";
import {getAuth, onAuthStateChanged} from 'firebase/auth'

export default {
  name: "Home",

  components: {
    Counter,
    History
  },
  beforeMount(){
    const auth = getAuth()
    onAuthStateChanged(auth,(user)=>{
      if(!user){
        this.$router.push('/signin')
      }
    })
  }
};
</script>

<style scoped>

</style>
