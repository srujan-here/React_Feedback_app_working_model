import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import Feedbackdata from "./data/feedback";
import FeedbackStats from "./components/FeedbackStats";
import Feedbackform from "./components/Feedbackform";
import About from './Pages/About';
import AboutIconlink from './components/AboutIconlink';

function App() {
  const [feedback, setfeedback] = useState(Feedbackdata);

  const deletefeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setfeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addfeedback = (item) => {
    item.id = uuidv4();
    setfeedback([item,...feedback]);
  };
  return (
    <Router>
   
    
      <Header />

      <div className="container">
      <Routes>
      <Route exact path="/" element={
        <>
         <Feedbackform handleadd={addfeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feed={feedback} handldelete={deletefeedback} />
      

        </>
      }>
     
      {/* <About /> */}
      </Route>
      <Route path="/about" element={<About />} />
      </Routes>
      
    </div>
    <AboutIconlink />
    </Router>

  
   
  );
}

export default App;
