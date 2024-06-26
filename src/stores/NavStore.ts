import { ref } from "vue";
import type { Ref } from 'vue';
import { defineStore } from "pinia";
import { useDisplay } from 'vuetify';
import { useRoute } from 'vue-router';

export const useNavStore = defineStore('NavStore', () => {

    const route = useRoute();
    const { width } = useDisplay();

    const links = ref([
        { num: 1, title: 'your info', path: '/'},
        { num: 2, title: 'select plan', path: '/select-plan' },
        { num: 3, title: 'addons', path: '/add-ons' },
        { num: 4, title: 'summary', path: '/summary' },
    ]);

    const personalComplete: Ref<boolean> = ref(false);

    const setPersonalComplete = (val:boolean) => personalComplete.value = val;


    return { route, width, links, personalComplete, setPersonalComplete}
})