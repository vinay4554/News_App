const initialstate={
    topheadlines:[],
}

const Newsreducer=(state=initialstate,action) => {
    switch(action.type){
        case "FETCH_NEWS":
            return {...state,
                topheadlines:action.information.topheadlines,}

        default:
            return {...state}
    }
}

export default Newsreducer;