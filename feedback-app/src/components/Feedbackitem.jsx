import React,{useState} from 'react'

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
    <div className="card">
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
    </div>
   
    </div>
  )
}

export default Feedbackitem