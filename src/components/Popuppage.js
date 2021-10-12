import react from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Categoryaction } from "../actions/Newsaction";

function Popuppage({popupvalue,setpopupvalue}){
    const dispatch=useDispatch();
    return(
        <div className="popupcontainer">
        <div className="popup-content">
        <div className="HEADER">
        <div className="fatimesicon">
              <FontAwesomeIcon 
              icon={faTimes}
              onClick={() => setpopupvalue(!popupvalue)}
              title="Click here to close"
              />
           </div>
           <div className="category">
               Categorys
           </div>
        </div>
        <div className="sources"   onClick={() => setpopupvalue(!popupvalue)}>
            <div onClick={() => {
               dispatch(Categoryaction("business"))
            }}> Business News</div>
             <div onClick={() => {
                dispatch(Categoryaction("technology"))
            }}>Technology News</div>
             <div onClick={() => {
                dispatch(Categoryaction("science"))
            }}>Science News</div>
             <div onClick={() => {
                dispatch(Categoryaction("entertainment"))
            }}>Entertainment News</div>
             <div onClick={() => {
                dispatch(Categoryaction("world"))
            }}>World News</div>
             <div onClick={() => {
                dispatch(Categoryaction("sports"))
            }}>Sports News</div>
             <div  onClick={() => {
                dispatch(Categoryaction("health"))
            }}>Health News</div>
            <div onClick={() => {
               dispatch(Categoryaction("science"))
            }}> Science News</div>
             <div onClick={() => {
                dispatch(Categoryaction("breaking-news"))
            }}>Breaking News</div>
             <div onClick={() => {
                dispatch(Categoryaction("nation"))
            }}>Nation News</div>
        </div>
        </div>
         
        </div>
    )
}
export default Popuppage;