<template>
  <v-container class="py-8">
    <v-row>
      <v-col align="center">
        <v-avatar size="200" color="white" elevation="7">
          <img src="https://i.pravatar.cc/200" />
        </v-avatar>

        <h1 class="text-center text-h4 mb-4 font-weight-bold mt-4">
          Lorem Ipsum
          <v-btn  id="edit" small fab dark color="success"
            ><v-icon dark>mdi-account-edit</v-icon></v-btn
          >
        </h1>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col>
        <v-card class="mt-2 mx-auto" max-width="250px">
          <v-card-title class="justify-center">
            <v-chip color="warning"><h6>Kỷ Lục</h6></v-chip>
          </v-card-title>
          <v-card-text>
            <h1 class="num text-center">123</h1>
          </v-card-text>
        </v-card>
        <v-card class="mt-2 mx-auto" max-width="250px">
          <v-card-title class="justify-center">
            <v-chip color="error"><h6>Số Lần Relapse</h6></v-chip>
          </v-card-title>
          <v-card-text>
            <h1 class="num text-center">123</h1>
          </v-card-text>
        </v-card>
        <v-card class="mt-2 mx-auto" max-width="250px">
          <v-card-title class="justify-center">
            <v-chip color="success"><h6>Xếp Hạng</h6></v-chip>
          </v-card-title>
          <v-card-text>
            <h1 class="num text-center">123</h1>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-btn class="logout" color="error" fab dark @click="signout()"> <v-icon dark>mdi-logout</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import {getAuth,signOut,onAuthStateChanged} from 'firebase/auth'

export default {
  name: "User",
  methods:{
      signout(){
          const auth = getAuth()
          signOut(auth)
          this.$router.push("/signin")
          
      }
  },
  beforeMount(){
      onAuthStateChanged(getAuth(),(user)=>{
          if(!user) this.$router.push('/signin')
      })
  }
};
</script>

<style scoped>
.num {
  font-size: 2.5rem;
  padding: 10px 0;
}
.logout{
    position: absolute;
    top:0;
    right: 0;
    margin: 10px 10px;
}
</style>
