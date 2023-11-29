export default function Question(props) {
  const { authorName, authorProfile, question } = props;

  return (
    <section className="Question">
      <h1>{question}</h1>
      <h2>
        <div className="image" style={{ backgroundImage: `url(${authorProfile})` }}></div>
        <span>By : {authorName}</span>
      </h2>
    </section>
  );
}
