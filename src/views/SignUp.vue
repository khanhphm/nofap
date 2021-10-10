<template>
  <v-container>
    <v-container class="">
      <v-row>
        <v-col>
          <v-card class="mx-auto" elevation="0" max-width="300px">
            <v-card-title class="justify-center">
              <v-chip dark><h2>Sign Up</h2></v-chip>
            </v-card-title>
            <v-card-text>
              <v-text-field color="black" label="User Name" v-model="displayName"></v-text-field>
              <v-text-field
                color="black"
                label="Email"
                :rules="[rules.email]"
                v-model="email"
              ></v-text-field>
              <v-text-field
                type="password"
                color="black"
                label="Password"
                v-model="password"
              ></v-text-field>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn @click="signup()" dark color="black">Sign Up</v-btn>
            </v-card-actions>

            <p class="text-center text-caption mt-2">
              Have an account?? <router-link to="/signin">Sign In</router-link>
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import {getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from 'firebase/auth'

export default {
  data: () => ({
    rules: {
      counter: (value) => value.length <= 20 || "Max 20 characters",
      email: (value) => { //Nhớ thêm lại cái value vào đây
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    },

    email:'',
    displayName:'',
    password:''

  }),
  methods:{
      signup(){
          const auth = getAuth()
          createUserWithEmailAndPassword(auth, this.email, this.password).then(()=>{
              updateProfile(auth.currentUser,{
                  displayName:this.displayName
              })
              this.$router.push("/")
          }).catch((err)=>{
              alert(err.message)
          })
      }
  },
  beforeMount(){
      onAuthStateChanged(getAuth(),(user)=>{
          if(user) this.$router.push('/')
      })
  }
};
</script>

<style lang="scss" scoped></style>
