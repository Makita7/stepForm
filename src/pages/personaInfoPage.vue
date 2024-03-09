
<script setup lang="ts">

</script>

<template>
    <h1 class="titles">personal info</h1>
    <p class="detail mb-8">Please provide your name, email address, and phone number.</p>
    <v-text-field
        label="Name"
        placeholder="e.g. Stephen King"
        variant="outlined"
        type="text"
        class="mt-2"
    />
    <v-text-field
        label="Email Address"
        placeholder="e.g. stephenking@lorem.com"
        variant="outlined"
        class="mt-2"
    />
    <v-text-field
        label="Phone Number"
        placeholder="e.g. +1 234 567 890"
        variant="outlined"
        type="number"
        class="mt-2"
    />
    <div class="d-flex">
        <v-spacer/>
        <v-btn class="align elevation-0 b r" color="#02295a">Next</v-btn>
    </div>
</template>

<style lang="scss" scoped>

</style>