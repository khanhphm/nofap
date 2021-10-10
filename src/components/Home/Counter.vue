<template>
  <v-card class="mx-auto" dark max-width="500px" rounded="xl" elevation="4">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="text-center day">11111 <span>DAY</span></h1>
          <h3 class="text-center hour mb-6">16:32:48</h3>
          <div align="center" class="mb-3">
            <v-btn
              id="relapse"
              @click="relapse = !relapse"
              width="65%"
              elevation="1"
              dark
              color="rgb(255, 126, 115)"
            >
              RELAPSE
            </v-btn>
          </div>

          <v-dialog
            v-model="relapse"
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
                ></v-textarea>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="rgb(255, 126, 115)" text>Relapse</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => {
    return {
      relapse: false,
    };
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
  letter-spacing: 0.5em;
}
#relapse {
  letter-spacing: 1em;
}
</style>
