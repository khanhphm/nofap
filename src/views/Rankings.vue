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
                    <v-divider
                      vertical
                    ></v-divider>
                <v-col cols="9">
                  <span class="text-subtitle-2">{{ item.displayName }}</span>
                  <h1>{{ item.streak }} DAY</h1>
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
export default {
  data: () => ({
    rankings: [
      {
        avt: "https://i.pravatar.cc/50",
        displayName: "Lorem Ipsum",
        streak: 561,
        relapseTime: 30,
      },
      {
        avt: "https://i.pravatar.cc/50",
        displayName: "Lorem Ipsum",
        streak: 424,
        relapseTime: 30,
      },
      {
        avt: "https://i.pravatar.cc/50",
        displayName: "Lorem Ipsum",
        streak: 83,
        relapseTime: 30,
      },
      {
        avt: "https://i.pravatar.cc/50",
        displayName: "Lorem Ipsum",
        streak: 43,
        relapseTime: 30,
      },
      {
        avt: "https://i.pravatar.cc/50",
        displayName: "Lorem Ipsum",
        streak: 41,
        relapseTime: 30,
      },
      {
        avt: "https://i.pravatar.cc/50",
        displayName: "Lorem Ipsum",
        streak: 37,
        relapseTime: 30,
      },
      {
        avt: "https://i.pravatar.cc/50",
        displayName: "Lorem Ipsum",
        streak: 32,
        relapseTime: 30,
      },
    ],
  }),
};

</script>

<style scoped></style>
