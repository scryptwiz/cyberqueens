const defaultState = {
    heroSection: [],
    aboutSection: [],
    traitSection: [],
    nftsSection: [],
    roadmapSection: [],
    ourTeamSection: [],
    blogSection: [],
    newsLetterSection: [],
    socialMedia: [],
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
    } else if (action.type === "SET_NFT_SECTION") {
        let newState = {...state, nftsSection:action.payload}
        return newState;
    } else if (action.type === "SET_ROADMAP_SECTION") {
        let newState = {...state, roadmapSection:action.payload}
        return newState;
    } else if (action.type === "SET_OURTEAM_SECTION") {
        let newState = {...state, ourTeamSection:action.payload}
        return newState;
    } else if (action.type === "SET_BLOG_SECTION") {
        let newState = {...state, blogSection:action.payload}
        return newState;
    } else if (action.type === "SET_NEWS_SECTION") {
        let newState = {...state, newsLetterSection:action.payload}
        return newState;
    } else if (action.type === "SET_MEDIA_SECTION") {
        let newState = {...state, socialMedia:action.payload}
        return newState;
    }
    return state
}

export default pageReducer;