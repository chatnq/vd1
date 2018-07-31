const initialState = {
    usern: 1,
 //   password:'',
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USERNAME_CHANGE':
            return { ...state, usern: state.usern+2 };
   //     case 'PASSWORD_CHANGE':
    //        return { ...state, password: state.password };
        default:
            return state;
    }
};

export default LoginReducer;