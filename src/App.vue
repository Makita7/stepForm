<script setup lang="ts">
import { RouterView } from 'vue-router';
import navbarItems from './components/navbarItems.vue';
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import { useDisplay } from 'vuetify';

const route = useRoute();

const links = ref([
  { num: 1, title: 'your info', path: '/'},
  { num: 2, title: 'select plan', path: '/select-plan' },
  { num: 3, title: 'addons', path: '/add-ons' },
  { num: 4, title: 'summary', path: '/summary' },
]);

const { width } = useDisplay();

</script>

<template>
  <div class="d-flex justify-center mt-15">
  <div class="cardNavCell">
    <div class="d-flex justify-center">
      <navbarItems
        v-for="l in links"
        :cell="true"
        :key="l.num"
        :num="l.num"
        :title="l.title"
        :path="l.path"
        :current="route.path"
        style="margin-top: 6%;"
      />
    </div>
  </div>
  <!-- {{ width }} -->
    <v-card :width="width >= 1180 ? '70rem' : '90%'" min-height="30rem" class="roundm pa-3" :class="width <= 1180 ? 'marT' : ''">
      <div class="d-flex">
        <v-col cols="4" class="roundm cardNav pa-10" v-if="width >= 1180">
          <navbarItems
            v-for="l in links"
            :key="l.num"
            :num="l.num"
            :title="l.title"
            :path="l.path"
            :current="route.path"
          />
        </v-col>
        <v-col class="ma-6 pl-md-12 relative min-35">
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
    .v-btn--variant-text {
      color: var(--cool-gray);
      span{
        font-weight: bold;
      }
    }
  }

  .cardNav{
    min-height: 36rem;
    background-image: url('./assets/bg-sidebar-desktop.svg');
    background-size: cover;
  }

  .cardNavCell{
    min-height: 30%;
    width:100% !important;
    background-image: url('./assets/bg-sidebar-mobile.svg');
    background-size: cover;
    position: absolute;
    top: 0;
  }

  .min-35{
    min-height: 36rem;
  }

  .marT{
    margin-top: 6rem !important;
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
.relative{
  position: relative;
  .l{
    left: 0;
    position: absolute;
  }
  .r{
    right: 0;
    position: absolute;
  }
  .b{
    bottom: 0;
    position: absolute;
  }
}
.pDetail{
  color: var(--cool-gray);
  font-weight: 500;
}
</style>