import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

function Header({display,setDisplay}){
    return(
        <div className="header">
         <div className="logo">
             News App
         </div>
         <div className="icon">
         <FontAwesomeIcon 
         icon={faAlignJustify}  
             onClick={() => {
                 setDisplay(!display)
             }}
         />
         </div>
       
      </div>
    )
}
export default Header;