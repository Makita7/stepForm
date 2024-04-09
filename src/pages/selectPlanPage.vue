
<script setup lang="ts">
    import { usePurchaseStore } from '@/stores/purchaseStore';
    import { useNavStore } from '@/stores/NavStore';

    const store = usePurchaseStore();
    const navStore = useNavStore();

</script>

<template>
    <h1 class="titles">select your plan</h1>
    <p class="detail mb-8">You have the option of monthly or yearly billing.</p>

    <div class="d-flex justify-space-between" :class="navStore.width < 400 ? 'cell' : ''">
        <v-card
            @click="store.selectPlan(p.title)"
            v-for="p in store.Plans"
            :key="p.id"
            variant="outlined"
            :width="navStore.width < 400 ? '100%' : '30%'"
            class="roundm pa-4 planCards"
            :class="p.title == store.selected ? 'activeC' : ''"
        >
            <div :class="navStore.width < 400 ? 'd-flex' : ''">
                <img :alt="p.title" :src="p.img" />
                <div :class="navStore.width < 400 ? 'ml-4' : ''">
                    <p class="title" :class="navStore.width < 400 ? '' : 'mt-4'">{{ p.title }}</p>
                    <p class="pDetail" v-if="store.yearPlan">{{ p.yearly }} /yr</p>
                    <p class="pDetail" v-if="store.yearPlan">{{ p.discount }} months free</p>
                    <p class="pDetail" v-else>{{ p.monthly }} /mo</p>
                </div>
            </div>
        </v-card>
    </div>
    <div class="d-flex align-center switchDiv mt-8">
        <v-spacer/>
        <p class="font-weight-bold" :class="!store.yearPlan ? 'active' : 'inactive'">Monthly</p>
        <v-switch color="var(--marineblue)" class="mx-2" v-model="store.yearPlan" hide-details/>
        <p class="font-weight-bold" :class="store.yearPlan ? 'active' : 'inactive'">Yearly</p>
        <v-spacer/>
    </div>
    <div class="d-flex" v-if="navStore.width > 400">
        <router-link to="/">
            <v-btn class="align b l" variant="text">Go Back</v-btn>
        </router-link>
        <router-link to="/add-ons">
            <v-btn :disabled="!store.selected" class="align elevation-0 b r" color="#02295a">Next Step</v-btn>
        </router-link>
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
    .d-flex.justify-space-between.cell {
        flex-direction: column !important;
        margin-bottom: 1rem;
    }
    .cell .roundm{
        margin-bottom: 1rem;
    }
</style>