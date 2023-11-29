import ReplyListItem from "./ReplyListItem";

export default function ReplyList(props) {
  const { replies } = props;

  const parsedReplies = replies.map((reply) => (
    <ReplyListItem key={reply.id} {...reply} />
  ));

  return (
    <section className="ReplyList">
      <h1>X replies to this question</h1>
      <ul>{parsedReplies}</ul>
    </section>
  );
}
