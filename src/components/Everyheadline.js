import react, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Everynewsaction } from "../actions/Newsaction";
import Everyheadlinecard from "./Everyheadlinecard";
import Allnewssearch from "./Allnewssearch";
import { v4 as uuidv4 } from 'uuid';
function Everyheadline(){
     const dispatch=useDispatch()
     useEffect(() => {
     dispatch(Everynewsaction())
     },[])
     const everyheadline=useSelector((state) => state["everynews"].dailynews)
    return(
        <>
        <Allnewssearch/>
            <div className="cards">
        {everyheadline.length !==0 && 

        everyheadline.map(article => 
            <Everyheadlinecard article={article} key={uuidv4()} />)
        } 
        </div>
        </>
    )
}
export default Everyheadline;