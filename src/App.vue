<script setup lang="ts">
import { RouterView } from 'vue-router';
import navbarItems from './components/navbarItems.vue';
import { ref } from 'vue'

const links = ref([
  { num: 1, title: 'your info', path: '/'},
  { num: 2, title: 'select plan', path: '/select-plan' },
  { num: 3, title: 'addons', path: '/add-ons' },
  { num: 4, title: 'summary', path: '/summary' },
]);

</script>

<template>
  <div class="d-flex justify-center mt-15">
    <v-card width="70rem" min-height="30rem" class="roundm pa-3">
      <div class="d-flex">
        <v-col cols="4" class="roundm cardNav pa-10" >
          <navbarItems
            v-for="l in links"
            :key="l.num"
            :num="l.num"
            :title="l.title"
            :path="l.path"
          />
        </v-col>
        <v-col class="ma-6 pl-12">
          <RouterView/>
        </v-col>
      </div>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
  :deep(){
    .roundm{
      border-radius: 1rem !important;
    }
    .v-btn{
      text-transform: capitalize;
    }
  }

  .cardNav{
    height: 35rem;
    background-image: url('./assets/bg-sidebar-desktop.svg');
    background-size: cover;
  }
</style>

<style lang="scss">

.titles{
  color: var(--marineblue);
  text-transform: capitalize;
  font-weight: bold;
}

.detail{
  color: var(--cool-gray);
}

</style>