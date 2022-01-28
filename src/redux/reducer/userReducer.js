const initialState = {
    users:[
      {"name": "AntonBuldygin",
      "id": 4,
      "uniqueUrlName": null,
      "photos": {
        "small": null,
        "large": null
      },
      "status": 'Я тут живу',
      "followed": false
    },
       
    ],
    isFetching:false,
    profile:{
      "aboutMe": "я круто чувак 1001%",
      "contacts": {
        "facebook": "facebook.com",
        "website": null,
        "vk": "vk.com/dimych",
        "twitter": "https://twitter.com/@sdf",
        "instagram": "instagra.com/sds",
        "youtube": null,
        "github": "github.com",
        "mainLink": null
      },
      "lookingForAJob": true,
      "lookingForAJobDescription": "не ищу, а дурачусь",
      "fullName": "samurai dimych",
      "userId": 2,
      "photos": {
        "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
        "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
      }
    }
    
 }

 const userReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'FOLLOW':

          return {
            ...state,
            users: state.users.map((obj) =>{
                if(obj.id === action.userId){
                    return {...obj, "followed" : true}
                }
                return obj;
            })

          }
         case 'UNFOLLOW' :
            return {
                ...state,
                users: state.users.map((obj) =>{
                    if(obj.id === action.userId){
                        return {...obj, "followed" : false}
                    }
                    return obj;
                })
    
              }
              case 'SET_USERS' :
                  return {
                        ...state,
                        users: [...state.users , ...action.users]
                  }
                  case 'LOADER' :
                  return {
                        ...state,
                        isFetching: action.bool
                  }
                  case 'SET_USERS_PROFILE' :
                    // console.log(action.profile)
                    return {
                          ...state,
                          profile: action.profile
                    }
 
      default:
          return state;
  }
     
 }
 
 export default userReducer;