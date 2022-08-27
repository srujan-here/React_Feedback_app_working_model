import React, { useState } from "react";

function RatingSelect() {
  const [rating, setrating] = useState(10);
  return <div>RatingSelect {rating}</div>;
}

export default RatingSelect;
