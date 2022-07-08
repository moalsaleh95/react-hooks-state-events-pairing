import BottomHalf from "../data/BottomHalf.js";
import video from "../data/video.js";
import TopHalf from "./TopHalf";
import react, {useState} from "react";

function App() {
  const [toggler, setToggler]= useState(false)

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <TopHalf toggler={toggler} setToggler={setToggler}/>
      <BottomHalf toggler={toggler}/>
    </div>
  );
}

export default App;
