
<script setup lang="ts">
import { ref } from 'vue';

//TODO: this variable should be in pinia so the data is shared
let yearPlan = ref(false);

const addOnds = ref([
    {
        title: 'Online service',
        detail: 'Access to multiplayer games',
        monthly: 1,
        yearly: 10,
        id: 1,
        added: false,
    },
    {
        title: 'Larger storage',
        detail: 'Extr 1TB of cloud save',
        monthly: 2,
        yearly: 20,
        id: 2,
        added: false,
    },
    {
        title: 'Customizable profile',
        detail: 'Custom theme on your profile',
        monthly: 2,
        yearly: 20,
        id: 3,
        added: false,
    },
]);

// let addOnsCopy = [];

// TODO: make a copy of the addOns and save the original list in pinia to you can have a copy before saving the list

</script>

<template>
    <h1 class="titles">Pick add-ons</h1>
    <p class="detail mb-8">Add-ons help enhance your gaming experience.</p>

    <v-card
        v-for="ons in addOnds"
        :key="ons.id"
        @click="ons.added = !ons.added"
        class="d-flex align-center mt-4 pa-4 ons"
        :class="ons.added ? 'active' : 'no'"
        variant="outlined"
    >
        <input type="checkbox" v-model="ons.added" class="mr-4" />
        <div>
            <p class="onsTitle">{{ ons.title }}</p>
            <p class="detail">{{ ons.detail }}</p>
        </div>
        <v-spacer/>
        <p class="price mr-2" v-if="!yearPlan">+${{ ons.monthly }}/mo</p>
        <p class="price mr-2" v-if="yearPlan">+${{ ons.yearly }}/yr</p>
    </v-card>

    <div class="d-flex">
        <v-btn class="align b l" variant="text">Go Back</v-btn>
        <v-btn class="align elevation-0 b r" color="#02295a">Next Step</v-btn>
    </div>
</template>

<style lang="scss" scoped>
    .ons{
        border-color: var(--light-gray);
        .onsTitle{
            color: var(--marineblue);
            font-weight: bold;
            font-size: 1.1rem;
        }
        .price{
            color: var(--cool-gray);
            font-weight: 500;
        }
    }
    .ons.active{
        border-color: var(--marineblue) !important;
        background-color: var(--selected-blue);
    }
</style>