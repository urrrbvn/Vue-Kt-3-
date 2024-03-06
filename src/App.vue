<script setup>
import NewPost from './components/NewPost.vue'
import PostList from './components/PostList.vue';

</script>

<template>
  <div class="pageWrapper" >
    <NewPost></NewPost>
    <PostList></PostList>
  </div>
</template>

<style>
.pageWrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #E1F8FF;
}
</style>