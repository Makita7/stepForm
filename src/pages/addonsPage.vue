
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Ref } from 'vue';
import { usePurchaseStore } from '../stores/purchaseStore';
import { useNavStore } from '@/stores/NavStore';

const addOnsCopy: Ref<addOns[]> = ref([]);
const store = usePurchaseStore();
const navStore = useNavStore();

interface addOns {
    title: string,
    detail: string,
    monthly: number,
    yearly: number,
    id: number,
    added: boolean,
}

onMounted(() => {
    addOnsCopy.value = store.addOnds;
});

</script>

<template>
    <h1 class="titles">Pick add-ons</h1>
    <p class="detail mb-8">Add-ons help enhance your gaming experience.</p>
    <v-card
        v-for="ons in addOnsCopy"
        :key="ons.id"
        @click="ons.added = !ons.added"
        class="d-flex align-center mt-4 pa-1 pa-lg-3 ons"
        :class="ons.added ? 'active' : 'no'"
        variant="outlined"
    >
        <input color="red" type="checkbox" v-model="ons.added" class="ma-2 mr-4" />
        <div>
            <p class="onsTitle">{{ ons.title }}</p>
            <p class="detail">{{ ons.detail }}</p>
        </div>
        <v-spacer/>
        <p class="price mr-2" v-if="!store.yearPlan">+${{ ons.monthly }}/mo</p>
        <p class="price mr-2" v-if="store.yearPlan">+${{ ons.yearly }}/yr</p>
    </v-card>

    <div class="d-flex" v-if="navStore.width > 400">
        <router-link to="/select-plan" @click="store.SetaddOns(addOnsCopy)">
            <v-btn class="align b l" variant="text">Go Back</v-btn>
        </router-link>
        <router-link to="/summary" @click="store.SetaddOns(addOnsCopy)">
            <v-btn class="align elevation-0 b r" color="#02295a">Next Step</v-btn>
        </router-link>
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
            color: var(--purplish-blue);
            font-weight: 500;
        }
    }
    .ons.active{
        border-color: var(--marineblue) !important;
        background-color: var(--selected-blue);
    }
    @media(max-width: 400px){
        .detail{
            font-size: 14px;
        }
        .ons{
            padding: 0.5rem !important;
        }
    }
    input[type=checkbox] {
        transform: scale(1.3);
    }
    input[type=checkbox]:checked {
        accent-color:  var(--purplish-blue) !important;
        color: #ffffff !important;
    }
</style>