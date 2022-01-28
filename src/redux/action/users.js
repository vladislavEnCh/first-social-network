export let usersFollow = (userId) => ({
    type:'FOLLOW',
     userId,
})
export const usersUnFollow = (userId) =>({
    type: 'UNFOLLOW',
    userId,

})

export const setUsersProfile = (profile) =>({
    type: 'SET_USERS_PROFILE',
    profile,

})

export const setUsers = (users) =>({
    type: 'SET_USERS',
    users,

})

export const loader = (bool) =>({
    type: 'LOADER',
    bool,

})

