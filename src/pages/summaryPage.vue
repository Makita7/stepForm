
<script setup lang="ts">
    import { usePurchaseStore } from '@/stores/purchaseStore';
    import { onMounted, ref } from 'vue';

    const store = usePurchaseStore();
    const addOns = store.addOnds.filter(i => i.added);
    const plan = store.Plans.filter(i => i.title === store.selected)
    let total: ref<number> = ref(0);
    let dialog: boolean = ref(false);

    function sumTotal(){
        addOns.forEach(el => {
            store.yearPlan ? total.value += el.yearly : total.value += el.monthly;
        });

        store.yearPlan ? total.value += plan[0].yearly :total.value += plan[0].monthly;
    }

    onMounted(() => sumTotal());

</script>

<template>
    <h1 class="titles">Summary</h1>
    <p class="detail mb-6">Double-check everything looks OK before confirming.</p>

    <v-card class="sumC elevation-0 roundm" width="90%">
        <div class="d-flex align-center h pt-4">
            <v-col class="ml-3">
                <p class="titles plan">{{ plan[0].title }} ({{ store.yearPlan ? 'Yearly' : 'Monthly'}})</p>
                <router-link to="/" class="detail">Change</router-link>
            </v-col>
            <v-spacer/>
            <p v-if="!store.yearPlan" class="pDetail mr-6 font-weight-bold plan">${{ plan[0].monthly }}/mo</p>
            <p v-if="store.yearPlan" class="pDetail mr-6 font-weight-bold plan">${{ plan[0].yearly }}/yr</p>
        </div>
        <v-divider class="mx-8 mt-4"/>
        <v-col class="ml-3 pb-0">
            <div class="d-flex">
                <p class="detail">Name: <b class="blue">{{ store.clientName }}</b></p>
                <v-spacer/>
                <p class="mr-6 detail">Phone: <b class="blue">{{ store.clientNumber }}</b></p>
            </div>
            <p class="detail">Email: <b class="blue">{{ store.clientEmail }}</b></p>
        </v-col>
        <v-divider class="mx-8 mt-4"/>
        <div v-for="ons in addOns" :key="ons.id" class="d-flex align-center pl-3 h">
            <p class="detail ml-3">{{ ons.title }}</p>
            <v-spacer/>
            <p v-if="!store.yearPlan" class="pDetail mr-6">${{ ons.monthly }}/mo</p>
            <p v-if="store.yearPlan" class="pDetail mr-6">${{ ons.yearly }}/yr</p>
        </div>
    </v-card>
    <div class="d-flex total align-center h pl-3">
        <p class="detail ml-3">Total (per {{ store.yearPlan ? 'year' : 'month'}})</p>
        <v-spacer/>
        <p class="title mr-6">+${{ total }}/{{ store.yearPlan ? 'yr' : 'mo'}}</p>
    </div>

    <div class="d-flex mx-2">
        <router-link to="/add-ons">
            <v-btn class="align b l" variant="text">Go Back</v-btn>
        </router-link>
        <v-btn @click="dialog = true" class="align elevation-0 b r w" color="var(--purplish-blue)" size="large">Confirm</v-btn>
    </div>
    <v-dialog v-model="dialog" width="20rem">
        <v-card title="Are you sure?">
            <div class="d-flex justify-space-evenly w-100 mb-4 mt-4">
                <v-btn @click="dialog = false" color="var(--purplish-blue)" variant="text" class="elevation-0">No</v-btn>
                <router-link to="/thank-you">
                    <v-btn color="var(--purplish-blue)" variant="text" class="elevation-0">Yes</v-btn>
                </router-link>
            </div>
        </v-card>
    </v-dialog>
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
    .blue{
        color: var(--marineblue);
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