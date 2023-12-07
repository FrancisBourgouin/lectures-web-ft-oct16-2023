import { Component } from "react";
import "./App.css";
import CommitList from "./components/CommitList";
import Header from "./components/Header";
import RepoForm from "./components/RepoForm";
import axios from "axios";

// function App() {
//   return (
//     <>
//       <Header />
//       <main>
//         <RepoForm />
//         <CommitList />
//       </main>
//     </>
//   );
// }

// export default App;

export default class App extends Component {
  constructor() {
    super();

    this.state = { commits: undefined };
  }

  fetchCommits = (formData) => {
    const url = `https://api.github.com/repos/${formData.owner}/${formData.repo}/commits`;

    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => this.setState({ ...this.state, commits: data }))
      .catch((err) => {
        console.log(err);
        this.setState({ ...this.state, commits: undefined });
      });
  };

  render() {
    return (
      <>
        <Header />
        <main>
          <RepoForm onSubmit={this.fetchCommits} />
          {this.state.commits && <CommitList commits={this.state.commits} />}
        </main>
      </>
    );
  }
}
