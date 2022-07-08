import React, {useState} from 'react';
import video from '../data/video';

function ThreeButtons({toggler, setToggler}) {

    const [upvote, setUpvote]= useState(video.upvotes)
    const [downvote, setDownvote]= useState(video.downvotes);

    const [hide, setHide]= useState("Hide Comments")
    // const [isHidden, setIsHidden]= useState(false);

    function changeButton(){
        hide==="Hide Comments" ? setHide("Show Comments"): setHide("Hide Comments");
        hideComments()
    }

    function hideComments(){
        setToggler(prev=> !prev);
        console.log(toggler)
    }


  return (
    <div>
        <div>
            <button onClick={()=> setUpvote(p=>p+1)}>{upvote}👍</button>
            <button onClick={()=> setDownvote(p=>p-1)}>{downvote}👎</button>
        </div><br></br>

        <button onClick={()=>changeButton()}>{hide}</button>
        <hr></hr>
    </div>
  )
}

export default ThreeButtons