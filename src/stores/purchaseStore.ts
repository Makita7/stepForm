import { ref } from 'vue';
import type { Ref } from 'vue';
import { defineStore } from 'pinia';
import arcade from '../assets/icon-arcade.svg';
import advanced from '../assets/icon-advanced.svg';
import pro from '../assets/icon-pro.svg';


export interface addOnsType {
    title: string;
    detail: string;
    monthly: number;
    yearly: number;
    id: number;
    added: boolean;
}

export const usePurchaseStore = defineStore('purchaseStore', () => {
    const yearPlan: Ref<boolean> = ref(false);

    const clientName: Ref<string> = ref('');

    const clientEmail: Ref<string | null> = ref(null);

    const clientNumber: Ref<number | null> = ref(null);

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

    const selected: Ref<string> = ref('');

    const selectPlan = (plan: string) => selected.value = plan;

    const addOnds: Ref<addOnsType[]> = ref([
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

    const SetaddOns = (copy: addOnsType[] ) => {
        addOnds.value = copy
    }

    function reset(){
        yearPlan.value = false;
        clientName.value = '';
        clientEmail.value = null;
        clientNumber.value = null;
        selected.value = '';
        addOnds.value.map(i => i.added = false);
    }


    return { yearPlan, clientName, clientEmail, clientNumber, Plans, selected, selectPlan, addOnds, SetaddOns, reset }
})
