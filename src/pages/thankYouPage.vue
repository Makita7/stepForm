
<script setup lang="ts">
</script>

<template>
    <div class="d-flex mx-4 thx">
        <img class="mx-auto" src="../assets/icon-thank-you.svg" alt="thank-you" />
        <p class="title">Thank You!</p>
        <p class="detail">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
    </div>
</template>

<style lang="scss" scoped>
    .thx{
        min-height: 100%;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        img{
            max-width: 5rem;
        }
        .title{
            color: var(--marineblue);
            font-weight: bold;
            font-size: 2rem;
        }
    }
</style>