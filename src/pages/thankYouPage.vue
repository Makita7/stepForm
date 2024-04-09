
<script setup lang="ts">
    import { usePurchaseStore } from '@/stores/purchaseStore';
    import { useNavStore } from '@/stores/NavStore';
    import { onMounted, ref } from 'vue';
    import { useDisplay } from 'vuetify';

    const store = usePurchaseStore();
    const navStore = useNavStore();
    let zoomIn: boolean = ref(false)
    let animateIn: boolean = ref(false)

    onMounted(() => {
        setTimeout(() => zoomIn.value = true, 1000)
        setTimeout(() => animateIn.value = true, 1100);
    })

    const { width } = useDisplay();

</script>

<template>
    <div class="d-flex mx-4 thx">
        <Transition name="zoomIn">
            <img v-if="zoomIn" class="mx-auto" src="../assets/icon-thank-you.svg" alt="thank-you" />
        </Transition>
        <Transition name="fadeIn">
            <div v-if="animateIn">
                <p class="title">Thank You!</p>
                <p class="detail" :class="width <= 1180 ? 'tablet mx-auto' : ''">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
            </div>
        </Transition>
    </div>
    <div class="d-flex">
        <router-link v-if="animateIn" :class="navStore.width > 400 ? 'ml-auto mr-0' : 'ml-auto mr-auto' " to="/" @click="store.reset()">
            <v-btn variant="text" color="var(--purplish-blue)">Restart</v-btn>
        </router-link>
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
        .tablet{
            width: 80% !important;
        }
    }

    .fadeIn-enter-active, .fadeIn-leave-active {
        transition: all 3s ease-out;
        opacity: 1;
    }

    .fadeIn-enter-from, .fadeIn-leave-to {
        opacity: 0;
    }

    .zoomIn-enter-active, .zoomIn-leave-active {
        transition: all 2s ease-out;
        opacity: 1;
        transform: scale(1);
    }

    .zoomIn-enter-from, .zoomIn-leave-to {
        opacity: 0;
        transform: scale(1.5);
    }
</style>