
<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
    num: Number,
    title: String,
    path: String,
    current: String,
    cell: Boolean,
})

</script>


<template>
    <div v-if="!cell" class="d-flex mb-4" :class="current === path ? 'active' : ''">
        <div class="circle">{{num}}</div>
        <div class="detail ml-2">
            <p class="step">step {{ num }}</p>
            <p class="title">{{title}}</p>
        </div>
    </div>
    <div v-else :class="current === path ? 'active' : ''">
        <div class="circleCell">{{num}}</div>
    </div>

</template>


<style lang="scss" scoped>

.circle{
    border: 2px var(--light-blue) solid;
    border-radius: 5rem;
    height: 2rem;
    width: 2rem;
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin: 0.3rem;
    background-color: rgba(255, 255, 255, 0);
    color: white;
}
.circleCell{
    border: 2px var(--light-blue) solid;
    border-radius: 5rem;
    height: 3rem;
    width: 3rem;
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin: 0.5rem;
    background-color: rgba(255, 255, 255, 0);
    color: white;
}
.detail{
    color: white;
    text-transform: uppercase;
    .step{
        color: rgba(255, 255, 255, 0.493);
    }
    .title{
        font-weight: bold;
        margin-top: -0.4rem;
    }
}
.active{
    .circle{
        color: black;
        background-color: var(--light-blue);
    }
    .circleCell{
        color: black;
        background-color: var(--light-blue);
    }
}
a{
    text-decoration: none;
}

</style>