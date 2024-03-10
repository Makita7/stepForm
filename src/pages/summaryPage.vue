
<script setup lang="ts">
import { ref } from 'vue';

let ex4 =ref(true)
</script>

<template>
    <v-checkbox
            v-model="ex4"
            color="red-darken-3"
            label="red-darken-3"
            value="red-darken-3"
            hide-details
          ></v-checkbox>
    <h1 class="titles">Summary</h1>
    <p class="detail mb-8">Double-check everything looks OK before confirming.</p>

    <v-card class="sumC elevation-0 roundm" width="90%">
        <div class="d-flex align-center h pt-4">
            <v-col class="ml-3">
                <p class="titles plan">Arcade (Monthly)</p>
                <router-link to="/" class="detail">Change</router-link>
            </v-col>
            <v-spacer/>
            <p class="pDetail mr-6 font-weight-bold plan">$9/mo</p>
        </div>
        <v-divider class="mx-8 mt-4"/>
        <!-- TODO: this element should have a v-for for each element in add ons -->
        <div class="d-flex align-center pl-3 h">
            <p class="detail ml-3">Online service</p>
            <v-spacer/>
            <p class="pDetail mr-6">$1/mo</p>
        </div>
    </v-card>
    <div class="d-flex total align-center h pl-3">
        <p class="detail ml-3">Total (per month)</p>
        <v-spacer/>
        <p class="title mr-6">+$12/mo</p>
    </div>

    <div class="d-flex mx-2">
        <router-link to="/add-ons">
            <v-btn class="align b l" variant="text">Go Back</v-btn>
        </router-link>
        <v-btn class="align elevation-0 b r w" color="var(--purplish-blue)" size="large">Confirm</v-btn>
    </div>
</template>

<style lang="scss" scoped>
    .sumC{
        background-color: var(--selected-blue);
        margin-left: 5%;
        .pDetail{
            color: var(--marineblue);
        }
        .plan{
            font-size: 1.1rem;
        }
    }
    .h{
        height: 4rem;
    }
    .total{
        width: 90%;
        margin-left: 5%;
        .title{
            color: var(--purplish-blue);
            font-size: 1.5rem;
            font-weight: bold;
        }
    }

    :deep(){
        .w{
            color: white;
            span{
                font-weight: bolder !important;
            }
        }
    }
</style>