<template>
  <v-card dark rounded="xl" max-width="500px" class="mx-auto">
    <v-card-title><h3 class="mx-auto">Thống Kê</h3></v-card-title>

    <v-card-text>
      <div id="boxx">
          <v-sparkline
        :value="history"
        smooth="10"
        line-width="2"
        stroke-linecap="round"
        type="trend"
        auto-draw
        color="white"
        padding="20"
        auto-draw-durations="2000"
        label-size="8"
        height="150"
      >
        <template class="text-h4" v-slot:label="item">
          {{ item.value }} DAY
        </template>
      </v-sparkline>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => {
    return {
      history: [5, 2, 4, 6, 2, 1, 3],
    };
  },
};
</script>

<style scoped>
#boxx{
  height: 30vh;
  display: flex;
  align-items: flex-end;
}


</style>
