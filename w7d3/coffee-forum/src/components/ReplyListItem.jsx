export default function ReplyListItem(props) {
  const { authorProfile, authorName, content } = props;

  return (
    <li className="ReplyListItem">
      <div
        className="image big"
        style={{ backgroundImage: `url(${authorProfile})` }}
      ></div>
      <p>{authorName}</p>
      <p>{content}</p>
    </li>
  );
}
