<template>
<div class="modalWrapper">
    <div class="modalWindow">
        <!-- <input type="text" v-model="editText"> -->
        <textarea rows="1" v-model="editText"></textarea>
        <div class="btnCont">
            <Button :text="'Подтвердить'" 
                            :width="154"
                            :height="43"
                            :color="'#216CFF'"
                            :function="editHandler"/>
            <Button :text="'Закрыть'" 
                            :width="121"
                            :height="43"
                            :color="'#FF218B'"
                            :function="props.toggle"/>
        </div>
    </div>
</div>
</template>

<script setup>
import Button from './Button.vue';
import { defineProps, ref } from 'vue';
import { usePostStore } from '@/stores/PostStore';


const props = defineProps({
    id: Number,
    text: String,
    toggle: Function
})

const store = usePostStore()
const editText = ref(props.text)

function editHandler(){
    store.editPost(props.id, editText)
    props.toggle()
}

</script>

<style>

.modalWrapper{
    position: fixed;
    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color:#6C9EFF96;
    
;
}

.modalWindow{
    width: 800px;
    height: fit-content;

    border: 1px solid black;
    border-radius: 15px;

    top: 50px;

    background-color: white;

    padding: 18px 21px;

    display: flex;
    flex-direction: column;
    gap: 16px;
}
textarea{
    resize: vertical;
    overflow-x: visible;
    font-size: 24px;
    background-color: white;
    height: fit-content;
    border: 1px solid black;
    border-radius: 15px;

    font-size: 24px;
    padding-left: 18px;
    padding-top: 9px;
    padding-bottom: 9px;
}
input{
    background-color: white;
    width: 100%;
    min-height: 43px;
    border: 1px solid black;
    border-radius: 15px;

    font-size: 24px;
    padding-left: 18px;

}
.btnCont{
    background-color: white;
    display: flex;
    gap: 26px;
    align-items: center;
    justify-content: end;
}

</style>