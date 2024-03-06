<template>
    <div>
        <PostItem v-for="elem in postStore.posts" :id = elem.id
                                        :text = elem.text
                                        :comments = elem.comments />
    </div>
</template>

<script setup>
import { usePostStore } from '@/stores/PostStore';
import PostItem from './PostItem.vue';
import { watch } from 'vue';

const postStore = usePostStore()

console.log(postStore.posts);

watch(postStore.posts, ()=>{
        console.log(postStore.posts)
    })


</script>

<style>

</style>