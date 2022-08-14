const defaultState = {
    heroSection: [],
    aboutSection: [],
    traitSection: [],
}
const pageReducer = (state=defaultState, action ) =>{
    if(action.type === "SET_HERO_SECTION"){
        let newState = {...state, heroSection:action.payload}
        return newState;
    } else if (action.type === "SET_ABOUT_SECTION") {
        let newState = {...state, aboutSection:action.payload}
        return newState;
    } else if (action.type === "SET_TRAIT_SECTION") {
        let newState = {...state, traitSection:action.payload}
        return newState;
    }
    return state
}

export default pageReducer;