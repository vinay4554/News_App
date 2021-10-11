import { combineReducers } from "redux";
import Everynewsreducer from "./Everynewsreducer";
import Newsreducer from "./Newsreducer";

const rootreducer=combineReducers({
    news:Newsreducer,
    everynews:Everynewsreducer
})

export default rootreducer;