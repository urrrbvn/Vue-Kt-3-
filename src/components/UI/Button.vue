<template>
    <div  @click="props.function" class="btn" :style="styleObj" >
        {{ props.text }}
    </div>
</template>

<script setup>
import { defineProps } from 'vue';


const props = defineProps({
    text: String,
    width: Number,
    height: Number,
    color: String,
    function: Function
})

const styleObj ={
    backgroundColor: props.color,
    width: props.width+'px',
    height: props.height+'px',
}

</script>

<style>
.btn{
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 16px;
    border-radius: 15px;
}
</style>