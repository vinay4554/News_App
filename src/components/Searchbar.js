import react, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import Popuppage from "./Popuppage";
import { Searchaction } from "../actions/Newsaction";

function Searchbar(){
    const[popupvalue,setpopupvalue]=useState(false)
    const dispatch=useDispatch();
    const[value,setValue]=useState("")
    const handleChange=(e) => {
        setValue(e.target.value);
    }
    const handleClick=() => {
        dispatch(Searchaction(value))
        setValue("")
    }
    const handleSearch=(e) => {
        if (e.key === 'Enter') {
            dispatch(Searchaction(value))
           setValue("")
          }
    }
    return(
        <div className="searchbar">
        {popupvalue && <Popuppage popupvalue={popupvalue} setpopupvalue={setpopupvalue}/>}
        <div className="input">
        <FontAwesomeIcon 
        icon={faChevronCircleDown}  
         className="pluscircle" 
         title="Click here to See more"
         onClick={() => setpopupvalue(!popupvalue)}
        />
        <input type="text"
              value={value}
              onChange={handleChange}
              onKeyDown={handleSearch}
        />
         <FontAwesomeIcon 
      icon={faSearch} 
      onClick={handleClick}
      className="searchicon"
      title="click to search"/>
        </div>
        </div>
    )
}
export default Searchbar;