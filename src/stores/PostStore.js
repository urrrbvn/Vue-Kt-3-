import {defineStore} from "pinia"
import { ref } from "vue"

export const usePostStore = defineStore('postStore', ()=>{

    let posts = ref([])

    const addNewPost = (text) =>{
        let newPost = {
            id: posts.value.length+1,
            text: text,
            comments: []
        }
        return posts.value.push(newPost)
    }

    const addNewComment = (id, text) =>{
        return posts.value.map(post =>{
            if(post.id == id){
               return post.comments.push(text)
            }else{
                return post
            }
        })
    }
    const deletePost = (id) => {
        
        return posts.value = posts.value.filter(elem => elem.id !== id)
    }
    const deleteComment = (id, text) =>{
        return posts.value.map(post => {
            if(post.id == id){
                post.comments = post.comments.filter(comment => comment !== text)
                
            }else{
                return post
            }
        })
    }
    const editPost = (id, text) => {
        return posts.value.map(post => {
            if(post.id == id){
                post.text = text
            }
        })
    }

    return{
        posts,
        addNewPost,
        addNewComment,
        deletePost,
        deleteComment,
        editPost
    }
})