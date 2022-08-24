import React,{useState} from "react";
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import Feedbackdata from "./data/feedback";

function App() {
    const [feedback,setfeedback]=useState(Feedbackdata)
  return (
    <div >
     <Header />
     <FeedbackList feed={feedback} />
    </div>
  );
}

export default App;
