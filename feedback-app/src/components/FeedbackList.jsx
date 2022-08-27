import {motion,AnimatePresence} from 'framer-motion'
import React from 'react'
import feedback from '../data/feedback'
import Feedbackitem from './Feedbackitem'



function FeedbackList({feed,handldelete}) {
console.log(feed)
if(!feed || feed.length === 0){
    return "no data found"
}

  return (
    <div className="feedback-list">

    <AnimatePresence>
    {feed.map((item) =>(
     
      <motion.div
      key={item.id}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
      <Feedbackitem key={item.id}
       item={item} 
       handldelete={handldelete} />

       
      </motion.div>
    ))}
    

</AnimatePresence>
     </div>
  )
}

export default FeedbackList