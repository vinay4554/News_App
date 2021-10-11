import react from "react";
import { useSelector } from "react-redux";
import Searchbar from "./Searchbar";
import Topheadlinescard from "./Topheadlinescard";
import { v4 as uuidv4 } from 'uuid';
function Topheadlines(){
    const news=useSelector((state) => state["news"].topheadlines)
    return(
        <>
         <Searchbar />
        <div className="cards">
        {news.length !==0 && 

        news.map(article => 
            <Topheadlinescard article={article} key={uuidv4()}/>)
        } 
        </div>
        </>
    )
}
export default Topheadlines;