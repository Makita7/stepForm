
<script setup lang="ts">
import { ref } from 'vue';


const addOnds = ref([
    {
        title: 'Online service',
        detail: 'Access to multiplayer games',
        price: '1',
        id: 1,
        added: false,
    },
    {
        title: 'Larger storage',
        detail: 'Extr 1TB of cloud save',
        price: '2',
        id: 2,
        added: false,
    },
    {
        title: 'Customizable profile',
        detail: 'Custom theme on your profile',
        price: '2',
        id: 3,
        added: false,
    },
])

</script>

<template>
    <h1 class="titles">Pick add-ons</h1>
    <p class="detail mb-8">Add-ons help enhance your gaming experience.</p>

    <v-card @click="ons.added = !ons.added" v-for="ons in addOnds" :key="ons.id" class="d-flex align-center mt-4 pa-4" variant="outlined">
        <input type="checkbox" v-model="ons.added"></input>
        <div>
            <p>{{ ons.title }}</p>
            <p>{{ ons.detail }}</p>
        </div>
        <v-spacer/>
        <p>+${{ ons.price }} /mo</p>
    </v-card>

    <div class="d-flex">
        <v-btn class="align b l" variant="text">Go Back</v-btn>
        <v-btn class="align elevation-0 b r" color="#02295a">Next Step</v-btn>
    </div>
</template>

<style lang="scss" scoped>
</style>