import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setfeedback] = useState([
    {
        id: 1,
        rating: 10,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
      },
      {
        id: 2,
        rating: 9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
      },
      {
        id: 3,
        rating: 8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
      },
  ])

  const deletefeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setfeedback(feedback.filter((item) => item.id !== id));
    }
  }

  const addfeedback = (item) => {
    item.id = uuidv4();
    setfeedback([item,...feedback]);
  };


  return (
    <FeedbackContext.Provider value={{feedback,deletefeedback,addfeedback,}}>
    {children}
    </FeedbackContext.Provider>
  );
};


export default FeedbackContext