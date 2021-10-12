<template>
  <v-container class="py-8">
    <v-row>
      <v-col align="center">
        <v-avatar size="200" color="white" elevation="7">
          <img :src="user.photoURL || 'https://i.pravatar.cc/200'" />
        </v-avatar>

        <h1 class="text-center text-h4 mb-4 font-weight-bold mt-4">
          {{ user.displayName }}
          <v-btn @click="dialog = true" id="edit" small fab dark color="success"
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
    <v-btn class="logout" color="error" icon dark @click="signout()">
      <v-icon dark>mdi-logout</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" max-width="500px" transition="dialog-transition">
      <v-card dark>
        <v-app-bar>
          <h3 class="text-h6">Cập Nhật Thông Tin</h3>
        </v-app-bar>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="4">
                <v-avatar size="70">
                  <img
                    :src="user.photoURL || url || 'https://i.pravatar.cc/200'"
                  />
                </v-avatar>
              </v-col>
              <v-col cols="8">
                <v-file-input
                  v-model="image"
                  label="File input"
                  prepend-icon="mdi-camera"
                  @change="uploadImg()"
                >
                  <template v-slot:selection="{ text }">
                    <v-chip small label color="primary">
                      {{ text }}
                    </v-chip>
                  </template>
                </v-file-input>
              </v-col>
            </v-row>
            <v-row>
              <v-text-field
                :placeholder="user.displayName"
                label="Username:"
                color="white"
                v-model="displayName"
              ></v-text-field>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="success" @click="update()">Update</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
  name: "User",
  data: () => ({
    dialog: false,
    user: null,
    url: null,
    image: null,
    displayName: null,
    numOfRelapse:0
  }),
  methods: {
    signout() {
      const auth = getAuth();
      signOut(auth);
      this.$router.push("/signin");
    },

    uploadImg() {
      this.url = URL.createObjectURL(this.image);
    },
    update() {
      if (this.image) {
        const storage = getStorage();
        const storageRef = ref(storage, this.user.uid + ".jpg");
        console.log(this.user);
        uploadBytes(storageRef, this.image).then(() => {
          const refe = ref(storage, this.user.uid + ".jpg");
          getDownloadURL(refe).then((url) => {
            const user = getAuth().currentUser;
            updateProfile(user, {
              photoURL: url,
              displayName: this.displayName || user.displayName,
            }).then((user) => {
              this.user = user;
              this.displayName = "";
              this.image = null;
              alert("Cập nhật thành công");
            });
          });
        });
      } else {
        const user = getAuth().currentUser;
        updateProfile(user, {
          displayName: this.displayName || user.displayName,
        }).then((user) => {
          this.user = user;
          this.displayName = "";
          this.image = null;
          alert("Cập nhật thành công");
        });
      }
      this.dialog = false;
    },
  },
  beforeMount() {
    onAuthStateChanged(getAuth(), (user) => {
      if (!user) this.$router.push("/signin");
      else this.user = getAuth().currentUser;
    });
  },
};
</script>

<style scoped>
.num {
  font-size: 2.5rem;
  padding: 10px 0;
}
.logout {
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px 10px;
}
</style>
