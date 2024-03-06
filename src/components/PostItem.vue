<template>
    <div class="postContainer">
        <div class='postText'>
            <p>{{ text }}</p>
        </div>
        <div v-if="Comments" class="CommentsContainer">
            <div class="addComment">
                <input type="text" v-model="newComment">
                <Button :text="'Добавить'" 
                        :width="117"
                        :height="43"
                        :color="'#216CFF'"
                        :function="commentHandler">
                </Button>
            </div>
            <div class="commentsList">
                <div class="comment" v-for="comment in props.comments">
                    <p>{{ comment }}</p>
                    <Button :text="'Удалить'" 
                        :width="107"
                        :height="43"
                        :color="'#FF218B'"
                        :function="()=> deleteCommentHandler(comment)"/>
                </div>
                
            </div>
            <Button :text="'Скрыть'" 
                        :width="107"
                        :height="43"
                        :color="'#216CFF'"
                        :function="showComments"/>
        </div>
        <div v-else class="noComments">
            <Button :text="'Комментарии'" 
                        :width="156"
                        :height="43"
                        :color="'#216CFF'"
                        :function="showComments"/>
            <p>Колличество Комментариев: {{ props.comments.length }}</p>
            <Button :text="'Изменить'" 
                        :width="121"
                        :height="43"
                        :color="'#216CFF'"
                        :function="showEditWindow"/>
            <Button :text="'удалить'" 
                        :width="121"
                        :height="43"
                        :color="'#FF218B'"
                        :function="deletePostHandler"/>
        </div>
        <EditPostModal v-if="showModal" :id = props.id
                                        :text="props.text"
                                        :toggle="showEditWindow"
                                         >
        </EditPostModal>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import Button from './UI/Button.vue';
import { usePostStore } from '@/stores/PostStore';
import EditPostModal from './UI/EditPostModal.vue'

const postStore = usePostStore()

const props = defineProps({
    id: Number,
    text: String,
    comments: Array
})

const Comments = ref(false)
const showModal = ref(false)

const newComment = ref('')

function showComments(){
    Comments.value = !Comments.value
}
function commentHandler(){
    postStore.addNewComment(props.id, newComment.value)
    newComment.value=''

}
function deletePostHandler(){
    postStore.deletePost(props.id)
}
function deleteCommentHandler(text){
    console.log('delete comment')
    postStore.deleteComment(props.id, text)
}
function showEditWindow(){
    showModal.value = !showModal.value
}

</script>

<style scoped>
.postContainer{
    width: 800px;
    min-height: 132px;

    background-color: white;

    color: black;

    border: 2px solid #0094FF;

    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-left: 21px;
    padding-right: 21px;
    margin-top: 37px;
}
.noComments{
    display: flex;
    height: fit-content;

    align-items: center;
    border-top: 1px solid gray;
    
    width: 100%;

    padding-top: 14px;
    margin-bottom: 19px;

    gap: 23px;

    background-color: white;

}
.noComments > p{
    width: 284px;
    background-color: white;
}
.postText{
    font-size: 24px;
    line-height: 29px;
    font-weight: 400;

    margin-bottom: 7px;
    margin-top: 16px;

    align-self: flex-start;
    
}
.postText > p {
    width: 100%;
    text-align: start;
    background-color: white;
}
.CommentsContainer{
    display: flex;
    flex-direction: column;
    height: fit-content;

    border-top: 1px solid grey;
    padding-top: 14px;
    padding-bottom: 29px;
    width: 100%;
    background-color: white;
}
.addComment{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
}
.addComment > input{
    width: 613px;
    padding-left: 20px;
    margin-right: 20px;

    border-radius: 15px;
    border: 1px solid black;
    background-color: white;
}
.comment{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    margin-top: 31px;
    min-height: 43px;

    background-color: white;


}
.comment > p {
    width: 613px;
    /* height: 100%; */
    border: 2px solid #0094FF;

    border-radius: 15px;

    display: flex;
    justify-content: start;
    /* align-items: center; */
    padding-left: 17px;
    padding-top: 11px;
    line-height: 20px;
    font-size: 16px;
    background-color: white;


}
.commentsList{
    margin-bottom: 31px;
    background-color: white;
}


</style>