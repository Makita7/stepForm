
<script setup lang="ts">
    import { usePurchaseStore } from '@/stores/purchaseStore';
    import { onMounted, ref } from 'vue';
    import type { Ref } from 'vue';
    import { useNavStore } from '@/stores/NavStore';

    const store = usePurchaseStore();
    const erMsg: Ref<string> = ref('Field is obligatory');
    const navStore = useNavStore();
    let completed: Ref<boolean> = ref(false);

    //rules
    const isText = (value: string | boolean) => value  ? true : erMsg.value;
    const isEmail = (value: any) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || `Invalid email, please try again...`;
    }
    const isNumber = (value:number) =>{
        return String(value).length === 10 || 'Invalid phone number, please try again...';
    }

    onMounted(() => [
        completed.value = navStore.personalComplete
    ])

</script>

<template>
    <h1 class="titles">personal info</h1>
    <p class="detail mb-8">Please provide your name, email address, and phone number.</p>
    <v-form v-model="navStore.personalComplete">
        <v-text-field
            v-model="store.clientName"
            label="Name *"
            placeholder="e.g. Stephen King"
            variant="outlined"
            type="text"
            class="mt-2"
            :rules="[isText]"
        />
        <v-text-field
            v-model="store.clientEmail"
            label="Email Address *"
            placeholder="e.g. stephenking@lorem.com"
            variant="outlined"
            class="mt-2"
            type="email"
            :rules="[isText, isEmail]"
        />
        <v-text-field
            v-model="store.clientNumber"
            label="Phone Number *"
            placeholder="e.g. +1 234 567 890"
            variant="outlined"
            type="number"
            class="mt-2"
            :rules="[isText, isNumber]"
        />
        <div v-if="navStore.width> 400" class="d-flex">
            <v-spacer/>
            <router-link to="select-plan">
                <v-btn :disabled="!navStore.personalComplete" class="align elevation-0 b r" color="#02295a">Next</v-btn>
            </router-link>
        </div>
    </v-form>
</template>

<style lang="scss" scoped>

</style>