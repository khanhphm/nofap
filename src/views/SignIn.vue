<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="mx-auto" elevation="0" max-width="300px">
          <v-card-title class="justify-center">
            <v-chip dark><h2>Sign In</h2></v-chip>
          </v-card-title>
          <v-card-text>
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
            <v-btn dark color="black" @click="signin()">Sign In</v-btn>
          </v-card-actions>

          <p class="text-center text-caption mt-2">
            Need an account?? <router-link to="/signup">Sign Up</router-link>
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
export default {
  data: () => ({
    rules: {
      counter: (value) => value.length <= 20 || "Max 20 characters",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    },
    email:'',
    password:''
  }),
  beforeMount(){
    onAuthStateChanged(getAuth(),(user)=>{
          if(user) this.$router.push('/')
      })
  },
  methods:{
    signin(){
      signInWithEmailAndPassword(getAuth(),this.email, this.password).then(()=>{
        alert("Đăng Nhập Thành Công")
      }).catch((err)=>{
        alert(err.message)
      })
    }
  }
};
</script>

<style lang="scss" scoped></style>
