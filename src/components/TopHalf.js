import React, {useState} from "react";
import video from "../data/video";
import ThreeButtons from "./ThreeButtons";

function TopHalf({toggler, setToggler}){
   
    return(
        <div>
            <h2>{video.title}</h2>
            <h4>{video.views} Views | Uploaded {video.createdAt}</h4>
            <ThreeButtons toggler={toggler} setToggler={setToggler}/>
        </div>
    )
}

export default TopHalf;