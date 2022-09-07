import React, { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function Feedbackform({ handleadd }) {
  const [text, settext] = useState("");
  const [buttondisable, setbuttondisable] = useState(true);
  const [message, setmessage] = useState("hello");
  const [rating, setrating] = useState(10);

  const handletext = (e) => {
    if (text === "") {
      setbuttondisable(true);
    } else if (text !== "" && text.trim().length <= 10) {
      setbuttondisable(true);
      setmessage("enter atleast 10 characters");
    } else {
      setbuttondisable(false);
      setmessage(text);
    }
    settext(e.target.value);
  };

  //submit button
  const cliclhandle = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const obj = {
        text,
        rating,
      };
      handleadd(obj);
      settext("");
    }
  };

  return (
    <div>
      <Card reverse={false}>
        <form onSubmit={cliclhandle}>
          <h2>How Would u rate our Services?</h2>
          <RatingSelect select={setrating} selected={rating}/>
          <div class="input-group">
            <input
              type="text"
              onChange={handletext}
              placeholder="Write a Review"
              value={text}
            />
            <Button
              type="submit"
              version="secondary"
              isDisabled={buttondisable}
            >
              Submit
            </Button>
          </div>

          {message && <div className="message">{message}</div>}
        </form>
      </Card>
    </div>
  );
}

export default Feedbackform;
