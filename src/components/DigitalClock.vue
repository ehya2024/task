<template>
    <div>
        <p :style="{fontWeight:'bold'}">{{ currentTime.toLocaleTimeString() }}</p>
        <p :style="{fontWeight:'bold'}">{{ currentTime.toLocaleDateString() }}</p>
    </div>
</template>

<script setup>
import { useCurrentTime } from "../useCurrentTime.js";

const { currentTime } = useCurrentTime();
</script>

<style>
p:first-of-type {
    border-radius: 5px;
    padding: 5px;
    box-sizing: border-box;
    background-color: rgb(37, 37, 37);
    color: violet;
}
</style>