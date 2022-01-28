export let addPost = (post) =>({
    type: 'ADD_POST',
    payload: post,

})

export const closePost = (id) =>({
    type: 'CLOSE_POST',
    payload: id,

})
