
<script setup lang="ts">
import { ref } from 'vue';
import arcade from '../assets/icon-arcade.svg';
import advanced from '../assets/icon-advanced.svg';
import pro from '../assets/icon-pro.svg'

let selected = ref('');
let yearPlan = ref(false);

const selectPlan = (plan: string) => selected.value = plan;

const Plans = ref([
    {
        id: 1,
        img: arcade,
        title: 'Arcade',
        monthly: 9,
        yearly: 90,
        discount: 2,
    },
    {
        id: 2,
        img: advanced,
        title: 'Advanced',
        monthly: 12,
        yearly: 120,
        discount: 2,
    },
    {
        id: 3,
        img: pro,
        title: 'Pro',
        monthly: 15,
        yearly: 150,
        discount: 2,
    },
]);

</script>

<template>
    <h1 class="titles">select your plan</h1>
    <p class="detail mb-8">You have the option of monthly or yearly billing.</p>

    <div class="d-flex justify-space-between">
        <v-card
            @click="selectPlan(p.title)"
            v-for="p in Plans"
            :key="p.id"
            variant="outlined"
            width="30%"
            class="roundm pa-4 planCards"
            :class="p.title == selected ? 'activeC' : ''"
        >
            <img :alt="p.title" :src="p.img" />
            <p class="mt-4 title">{{ p.title }}</p>
            <p class="pDetail" v-if="yearPlan">{{ p.yearly }} /yr</p>
            <p class="pDetail" v-if="yearPlan">{{ p.discount }} months free</p>
            <p class="pDetail" v-else>{{ p.monthly }} /mo</p>
        </v-card>
    </div>
    <div class="d-flex align-center switchDiv mt-8">
        <v-spacer/>
        <p class="font-weight-bold" :class="!yearPlan ? 'active' : 'inactive'">Monthly</p>
        <v-switch color="var(--marineblue)" class="mx-2" v-model="yearPlan" hide-details/>
        <p class="font-weight-bold" :class="yearPlan ? 'active' : 'inactive'">Yearly</p>
        <v-spacer/>
    </div>
    <div class="d-flex">
        <v-btn class="align b l" variant="text">Go Back</v-btn>
        <v-btn class="align elevation-0 b r" color="#02295a">Next Step</v-btn>
    </div>
</template>

<style lang="scss" scoped>

    .switchDiv{
        background-color: hsl(229, 24%, 87%, 0.5);
    }
    .active{
        color: var(--marineblue);
    }
    .inactive{
        color: var(--cool-gray);
    }
    .planCards{
        border-color: var(--cool-gray);
    }
    .activeC{
        border-color: var(--marineblue) !important;
        background-color: var(--selected-blue);
    }
    .title{
        color: var(--marineblue);
        font-weight: bold;
        font-size: 1.1rem;
    }
    .pDetail{
        color: var(--cool-gray);
        font-weight: 500;
    }

</style>