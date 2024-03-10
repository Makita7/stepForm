
<script setup lang="ts">
</script>

<template>
    <h1 class="titles">Summary</h1>
    <p class="detail mb-8">Double-check everything looks OK before confirming.</p>

    <v-card class="sumC elevation-0 roundm" width="90%">
        <div class="d-flex align-center">
            <v-col>
                <p class="titles">Arcade (Monthly)</p>
                <router-link to="/" class="detail">Change</router-link>
            </v-col>
            <v-spacer/>
            <p class="pDetail">$9/mo</p>
        </div>
        <!-- TODO: this element should have a v-for for each element in add ons -->
        <div class="d-flex align-center pl-3">
            <p class="detail">Online service</p>
            <v-spacer/>
            <p class="pDetail">$1/mo</p>
        </div>
    </v-card>
    <div class="d-flex total align-center">
        <p class="detail">Total (per month)</p>
        <v-spacer/>
        <p class="">+$12/mo</p>
    </div>
</template>

<style lang="scss" scoped>
    .sumC{
        background-color: var(--selected-blue);
        margin-left: 5%;
        min-height: 100%;
    }
    .total{
        width: 90%;
        margin-left: 5%;
    }
</style>