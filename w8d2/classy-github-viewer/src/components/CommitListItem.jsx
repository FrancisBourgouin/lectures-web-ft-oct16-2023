export default function CommitListItem(props) {
  const url = props.html_url;
  const message = props.commit.message;
  const date = props.commit.author.date;
  const name = props.commit.author.name;

  return (
    <li className="CommitListItem">
      <h1>
        <a href={url} target="_blank">
          {message}
        </a>
      </h1>
      <h2>
        By {name} - On {date}
      </h2>
    </li>
  );
}
