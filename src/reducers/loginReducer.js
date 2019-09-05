


export default (state = {}, action) => {
  
    
    switch(action.type) {
        
        case 'LOGIN':  console.log('m in');
            return {

                loggedIn: true,
               user: action.payload
            }
            default:
                return state;

    }
}