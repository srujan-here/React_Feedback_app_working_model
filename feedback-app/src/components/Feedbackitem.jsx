import React,{useState} from 'react'
import Card from './shared/Card'


function Feedbackitem({item}) {
    const [rating,setrating]=useState(19)
    const [text,settext]=useState("hai srujan")
    const rate=()=>{
        setrating((prev)=>{
          return prev+1;
        })

    }
  return (
    <div>
     <Card children={item} reverse={true} />
    </div>
   
   
  )
}

export default Feedbackitem