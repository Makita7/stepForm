<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>

<template>
  <div class="d-flex justify-center mt-15">
    <v-card width="70rem" min-height="30rem" class="roundm pa-6">
      <RouterView/>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
  :deep(){
    .roundm{
      border-radius: 20px !important;
    }
  }

</style>
