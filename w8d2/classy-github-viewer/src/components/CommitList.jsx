import { Component } from "react";
import CommitListItem from "./CommitListItem";

// export default function CommitList(props) {
//   const { commits } = props;

//   const parsedCommits =
//     commits && commits.map((commit) => <CommitListItem key={commit.sha} {...commit} />);

//   const report = (event) =>
//     console.log(
//       "User clicked after loading commits at position",
//       event.clientX,
//       event.clientY
//     );

//   document.addEventListener("click", report);

//   return (
//     <section className="CommitList">
//       <h1>Commits for REPO by OWNER</h1>
//       <ul>{parsedCommits}</ul>
//     </section>
//   );
// }

export default class CommitList extends Component {
  constructor(props) {
    super(props);
  }
  report = (event) =>
    console.log(
      "User clicked after loading commits at position",
      event.clientX,
      event.clientY
    );

  componentDidMount() {
    document.addEventListener("click", this.report);
    console.log("Component mounted with the following props", this.props);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.report);
  }

  render() {
    const { commits } = this.props;

    const parsedCommits =
      commits && commits.map((commit) => <CommitListItem key={commit.sha} {...commit} />);

    return (
      <section className="CommitList">
        <h1>Commits for REPO by OWNER</h1>
        <ul>{parsedCommits}</ul>
      </section>
    );
  }
}
