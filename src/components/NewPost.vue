<template>
    <div class="inputConatainer">
        <input type="text" v-model="newText" >
        <!-- <button @click="handler(newText)" >Добавить</button> -->
        <Button :text="'Добавить'"
                :width="177"
                :height="51"
                :color="'#216CFF'"
                :function="handler"
                 >
        </Button>
    </div>
</template>

<script setup>
import { usePostStore } from '@/stores/PostStore';
import { watch, ref } from 'vue';
import Button from '../components/UI/Button.vue'
    
    const postStore = usePostStore()

    const newText = ref('')

    function handler (){
        if(newText.value !== ''){
            postStore.addNewPost(newText.value)
            newText.value = ''
            
        }else{
            console.log("пусто!")
        }
    }

    watch(postStore.posts, ()=>{
        console.log(postStore.posts)
    })


</script>

<style scoped>
.inputConatainer{
    width: 800px;
    height: 89px;
    display: flex;

    justify-content: center;
    align-items: center;

    border: 2px solid #0094FF;
    border-radius: 15px;

    box-shadow: 0px 4px 4px 0px #00000040;

    margin-top: 29px;
    margin-bottom: 22px;

    background-color: white;

}
.inputConatainer > input{
    width: 561px;
    height: 51px;
    padding-left: 10px;
    font-size: 24px;
    border: 1px solid #6E6E6E;
    border-radius: 15px;

    margin-right: 25px;

    background-color: white;
}
</style>