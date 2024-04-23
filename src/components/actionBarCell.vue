<script setup lang="ts">
    import { useNavStore } from '@/stores/NavStore';
    import { ref, onMounted, watch } from 'vue';
    import type { Ref } from 'vue';
    import { usePurchaseStore } from '@/stores/purchaseStore';
    import type { addOnsType } from '@/stores/purchaseStore';

    const navStore = useNavStore();
    const store = usePurchaseStore();
    let completed = ref(false);
    const addOnsCopy: Ref<addOnsType[]> = ref([]);
    let dialog = ref(false);

    onMounted(() => [
        completed.value = navStore.personalComplete,
        addOnsCopy.value = store.addOnds,
    ]);

    watch(() => navStore.personalComplete, async (newValue:boolean, oldValue:boolean) => {
        if(newValue !== oldValue){
            completed.value = navStore.personalComplete;
        }
    })

</script>

<template>
    <div class="callNav" v-if="navStore.route.path !== '/thank-you'">
        <div v-if="navStore.route.path === navStore.links[0].path" class="d-flex">
            <v-spacer/>
            <v-btn :disabled="!navStore.personalComplete" class="align elevation-0 b r" color="#02295a">
                <router-link to="select-plan" @click="navStore.setPersonalComplete(completed)">
                    Next
                </router-link>
            </v-btn>
        </div>

        <div v-if="navStore.route.path === navStore.links[1].path" class="d-flex">
            <router-link to="/">
                <v-btn class="align b l" variant="text">Go Back</v-btn>
            </router-link>
            <v-spacer/>
            <v-btn :disabled="!store.selected" class="align elevation-0 b r" color="#02295a">
                <router-link to="/add-ons">
                    Next Step
                </router-link>
            </v-btn>
        </div>

        <div v-if="navStore.route.path === navStore.links[2].path" class="d-flex">
            <router-link to="/select-plan" @click="store.SetaddOns(addOnsCopy)">
                <v-btn class="align b l" variant="text">Go Back</v-btn>
            </router-link>
            <v-spacer/>
            <router-link to="/summary" @click="store.SetaddOns(addOnsCopy)">
                <v-btn class="align elevation-0 b r" color="#02295a">Next Step</v-btn>
            </router-link>
        </div>

        <div v-if="navStore.route.path === navStore.links[3].path" class="d-flex">
            <router-link to="/add-ons">
                <v-btn class="align b l" variant="text">Go Back</v-btn>
            </router-link>
            <v-spacer/>
            <v-btn @click="dialog = true" class="align elevation-0 b r w" color="var(--purplish-blue)" size="large">Confirm</v-btn>

            <v-dialog v-model="dialog" width="20rem">
                <v-card title="Are you sure?" class="text-center">
                    <div class="d-flex justify-space-evenly w-100 mb-4 mt-4">
                        <v-btn @click="dialog = false" color="var(--purplish-blue)" variant="text" class="elevation-0">No</v-btn>
                        <router-link to="/thank-you">
                            <v-btn color="var(--purplish-blue)" variant="text" class="elevation-0">Yes</v-btn>
                        </router-link>
                    </div>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .callNav{
        background-color: white;
        padding: 12px 16px;
        bottom: 0;
        position: sticky;
        width: 100%;
    }
    a {
        color: white;
        text-decoration: none;
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