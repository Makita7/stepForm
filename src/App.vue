<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>

<template>
  <div class="d-flex justify-center mt-15">
    <v-card width="70rem" min-height="30rem" class="roundm pa-3">
      <div class="d-flex">
        <v-col cols="4" class="roundm cardNav" >img</v-col>
        <RouterView/>
      </div>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
  :deep(){
    .roundm{
      border-radius: 2rem !important;
    }
  }

  .cardNav{
    height: 35rem;
    background-image: url('./assets/bg-sidebar-desktop.svg');
    background-size: cover;
  }
</style>
