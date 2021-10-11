const initialstate={
    dailynews:[]
}

const Everynewsreducer=(state=initialstate,action) => {
    switch(action.type){
        case "DAILY_NEWS":
            return {...state,dailynews:action.information.dailynews}

        default:
            return {...state}
    }
}

export default Everynewsreducer;