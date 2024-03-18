
<script setup lang="ts">
    import { usePurchaseStore } from '@/stores/purchaseStore';
    import { ref } from 'vue';

    const store = usePurchaseStore();
    let completed: ref<boolean> = ref(false);
    const erMsg: ref<string> = ref('Field is obligatory');

    //rules
    const isText = (value:string) => value  ? true : erMsg.value;
    const isEmail = (value:string) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || `Invalid email, please try again...`;
    }
    const isNumber = (value:number) =>{
        return String(value).length === 10 || 'Invalid phone number, please try again...';
    }


</script>

// TODO: add validations to make sure all the information has been completed...

<template>
    <h1 class="titles">personal info</h1>
    <p class="detail mb-8">Please provide your name, email address, and phone number.</p>

    <v-form v-model="completed">
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
        <div class="d-flex">
            <v-spacer/>
            <router-link to="select-plan">
                <v-btn :disabled="!completed" class="align elevation-0 b r" color="#02295a">Next</v-btn>
            </router-link>
        </div>
    </v-form>
</template>

<style lang="scss" scoped>

</style>