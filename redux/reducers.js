export default reducers = (state = {
    loggedIn: false,
    cards: [],
    user: {
        id: '',
        photoUrl: '',
        name: '',
        aboutMe: '',
        chats: '',
        geocode: '',
        images: [],
        notifications: false,
        show: false,
        report: false,
        swipes: [],
        token: '',
    }
},   action) => {
    switch (action.type) {
        case 'LOGIN': {
            return {...state, user: action.user, loggedIn: action.loggedIn }
        }
        case 'UPLOAD_IMAGES' : {
            console.log("HELLOOO");
            return {...state, user:{...state.user, images: action.payload}}
        }
        case 'LOGOUT' : {
            return {...state, loggedIn: action.loggedIn }
        }
        case 'UPDATE_ABOUT' : {
            return {...state, user:{...state.user, aboutMe: action.aboutMe}}
        }
        case 'GET_CARDS' : {
            return { ...state, cards: action.payload }
        }
        case 'GET_LOCATION' : {
            return { ...state, user:{...state.user, geocode: action.payload}}
        }
        case 'ALLOW_NOTIFICATIONS' : {
            return {...state, user:{...state.user, token: action.payload}}
        }

    }
    return state;
}