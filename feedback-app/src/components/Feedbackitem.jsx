import React, { useState } from "react";
import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

function Feedbackitem({ item, handldelete }) {
  const [rating, setrating] = useState(19);
  const [text, settext] = useState("hai srujan");
  const rate = () => {
    setrating((prev) => {
      return prev + 1;
    });
  };

  return (
    <div>
      <Card reverse={false}>
        <div className="num-display">{item.rating}</div>
        <button className="close" onClick={() => handldelete(item.id)}>
          <FaTimes color="red" />
        </button>
        <div className="text-display">{item.text}</div>
      </Card>
    </div>
  );
}

export default Feedbackitem;
