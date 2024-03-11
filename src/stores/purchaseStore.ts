import { ref } from 'vue';
import { defineStore } from 'pinia';
import arcade from '../assets/icon-arcade.svg';
import advanced from '../assets/icon-advanced.svg';
import pro from '../assets/icon-pro.svg';

export const usePurchaseStore = defineStore('purchaseStore', () => {
    let yearPlan: ref<boolean> = ref(true);

    let clientName: Ref<string> = ref('');

    let clientEmail: Ref<string> = ref(null);

    let clientNumber: Ref<number | null> = ref('');

    const Plans = ref([
        {
            id: 1,
            img: arcade,
            title: 'Arcade',
            monthly: 9,
            yearly: 90,
            discount: 2,
        },
        {
            id: 2,
            img: advanced,
            title: 'Advanced',
            monthly: 12,
            yearly: 120,
            discount: 2,
        },
        {
            id: 3,
            img: pro,
            title: 'Pro',
            monthly: 15,
            yearly: 150,
            discount: 2,
        },
    ]);

    let selected: Ref<String> = ref('');

    const selectPlan = (plan: string) => selected.value = plan;

    const addOnds = ref([
        {
            title: 'Online service',
            detail: 'Access to multiplayer games',
            monthly: 1,
            yearly: 10,
            id: 1,
            added: false,
        },
        {
            title: 'Larger storage',
            detail: 'Extr 1TB of cloud save',
            monthly: 2,
            yearly: 20,
            id: 2,
            added: false,
        },
        {
            title: 'Customizable profile',
            detail: 'Custom theme on your profile',
            monthly: 2,
            yearly: 20,
            id: 3,
            added: false,
        },
    ]);

    const SetaddOns = (copy) =>{
        addOnds.value = copy
    }


    return { yearPlan, clientName, clientEmail, clientNumber, Plans, selected, selectPlan, addOnds, SetaddOns,  }
})
