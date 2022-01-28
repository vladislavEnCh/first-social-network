const initialState = {
    items:[
        {
            postText : 'Toodaty is tooday',
            postTittle:'newTittle',
            id:1
        }
       
    ],
    
 }

 const addPost = (state = initialState, action) => {
  switch (action.type) {
      case 'ADD_POST':
               state.items.push(action.payload)
           
          return {
              ...state,
              items:state.items

          }
         case 'CLOSE_POST' :
            //  let newArr = state.items.filter(id => id !== action.payload)
                console.log(action.payload)
             return {
                ...state,
                items:state.items.filter(x => x.id !== action.payload)
             }
 
      default:
          return state;
  }
     
 }
 
 export default addPost;