import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import Feedbackdata from "./data/feedback";
import FeedbackStats from "./components/FeedbackStats";
import Feedbackform from "./components/Feedbackform";

function App() {
  const [feedback, setfeedback] = useState(Feedbackdata);

  const deletefeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setfeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addfeedback = (item) => {
    item.id = uuidv4();
    setfeedback([item, ...feedback]);
  };
  return (
    <div>
      <Header />
      <Feedbackform handleadd={addfeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feed={feedback} handldelete={deletefeedback} />
    </div>
  );
}

export default App;
