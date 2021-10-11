import react from "react";
import { Link } from "react-router-dom";

function Nav({display,setDisplay}){
    return(
        <div className="nav">
            <Link to="/"  
             onClick={() => {
                 setDisplay(!display)
             }}>
                Top Headlines
            </Link>
            <Link to="/Everyheadline" 
             onClick={() => {
                 setDisplay(!display)
             }}>
               Headlines
            </Link>
            <Link to="/About" 
             onClick={() => {
                 setDisplay(!display)
             }}>
               About
            </Link>

        </div>
    )
}
export default Nav;