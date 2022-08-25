import React from 'react'
import feedback from '../data/feedback'
import Feedbackitem from './Feedbackitem'
function FeedbackList({feed,handldelete}) {
console.log(feed)
if(!feed || feed.length === 0){
    return "no data found"
}
const deleteFeedback=(item)=>{


}
  return (
    <div className="feedback-list">
    {feed.map((item) =>(
      <div>
      
      <Feedbackitem key={item.id}
       item={item} 
       handldelete={handldelete} />
      </div>
    ))}


     </div>
  )
}

export default FeedbackList