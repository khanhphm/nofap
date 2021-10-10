<template>
  <v-container max-width="500px">
    <v-row>
      <v-col class="justify-center">
        <div class="d-flex justify-center">
          <v-chip class="mb-4" dark><h2>HISTORY</h2></v-chip>
        </div>
        <div v-for="item in history" :key="item.id">
          <v-card max-width="500px" dark class="mb-4 mx-auto">
            <v-container>
              <v-row>
                <v-col class="d-flex flex-column justify-center" cols="4">
                    <h4 class="text-center">STREAK</h4>
                    <h2 class="text-center">{{ item.streak }}D</h2>
                    <p class="text-center text-caption mb-0">{{ item.date }}</p>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col cols="8" class="pl-5 " >
                  <h4>Reason for relapse:</h4>
                  <span class="mb-0 text-body-2"> {{ item.reason }}</span>
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
import {getAuth, onAuthStateChanged} from 'firebase/auth'
export default {
  data: () => {
    return {
      history: [
        {
          streak: 3,
          date: "12/06/2021",
          reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        },
        {
          streak: 3,
          date: "12/06/2021",
          reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          streak: 3,
          date: "12/06/2021",
          reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          streak: 3,
          date: "12/06/2021",
          reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          streak: 3,
          date: "12/06/2021",
          reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          streak: 3,
          date: "12/06/2021",
          reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          streak: 3,
          date: "12/06/2021",
          reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          streak: 3,
          date: "12/06/2021",
          reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
    };
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

<style scoped></style>
