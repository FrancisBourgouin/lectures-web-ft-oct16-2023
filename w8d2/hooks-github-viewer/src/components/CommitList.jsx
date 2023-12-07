import { useEffect } from "react";
import CommitListItem from "./CommitListItem";

export default function CommitList(props) {
  const { commits } = props;

  const parsedCommits =
    commits && commits.map((commit) => <CommitListItem key={commit.sha} {...commit} />);

  // Handle / Manage side effects
  useEffect(() => {
    const report = (event) =>
      console.log(
        "User clicked after loading commits at position",
        event.clientX,
        event.clientY
      );

    document.addEventListener("click", report);

    return () => document.removeEventListener("click", report);
  });

  useEffect(() => {
    console.log("Loaded the component with those props", props);
  }, []);

  useEffect(() => {
    // ...
    // This is the equivalent of componentDidMount
    // If you need to do something on load, use this pattern
  }, []);

  // useEffect is dumb, because the behavior of the array should there by default

  return (
    <section className="CommitList">
      <h1>Commits for REPO by OWNER</h1>
      <ul>{parsedCommits}</ul>
    </section>
  );
}
