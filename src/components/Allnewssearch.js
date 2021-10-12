import react,{useState} from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Searcheverynewsaction } from "../actions/Newsaction";

function Allnewssearch(){
    const dispatch=useDispatch()
    const[value,setValue]=useState("")
    const handleChange=(e) => {
        setValue(e.target.value);
    }
    const handleClick=() => {
        dispatch(Searcheverynewsaction(value))
        setValue("")
    }
    return(
        <div className="allnewssearch">
            <div className="advsearch">
            <input type="text"
              value={value}
              onChange={handleChange}
        />
            <FontAwesomeIcon 
          icon={faSearch} 
          onClick={handleClick}
          className="allnewsicon"
           title="click to search"/>
            </div>
        </div>
    )
}

export default Allnewssearch;