import React,{useState} from "react";
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import Feedbackdata from "./data/feedback";

function App() {
    const [feedback,setfeedback]=useState(Feedbackdata)

    const deletefeedback = (id) => {
      if(window.confirm('Are you sure you want to delete')){
        setfeedback(feedback.filter((item)=>
        item.id!==id
        ))
      }
      
    }
  return (
    <div >
     <Header />
     <FeedbackList feed={feedback} handldelete={deletefeedback} />
    </div>
  );
}

export default App;
