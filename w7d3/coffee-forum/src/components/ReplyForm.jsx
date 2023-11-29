import { useState } from "react";

// Getter / Setter

export default function ReplyForm(props) {
  const [reply, setReply] = useState("");

  let replyText = "";

  const handleChange = (event) => {
    const { value } = event.target;

    setReply(value);
    replyText += value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(reply);
  };

  console.log("State value", reply);
  console.log("Normal variable", replyText);

  return (
    <form className="ReplyForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="reply"
        placeholder="Enter your reply"
        onChange={handleChange}
        value={reply}
      />
      <button>Add</button>
    </form>
  );
}
