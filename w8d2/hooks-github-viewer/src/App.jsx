import { useState } from "react";
import "./App.css";

import CommitList from "./components/CommitList";
import Header from "./components/Header";
import RepoForm from "./components/RepoForm";
import axios from "axios";

function App() {
  const [commits, setCommits] = useState(undefined);

  const fetchCommits = (formData) => {
    const url = `https://api.github.com/repos/${formData.owner}/${formData.repo}/commits`;

    axios
      .get(url)
      .then((res) => res.data)
      .then(setCommits)
      .catch((err) => {
        console.log(err);
        setCommits(undefined);
      });
  };

  return (
    <>
      <Header />
      <main>
        <RepoForm onSubmit={fetchCommits} />
        {commits && <CommitList commits={commits} />}
      </main>
    </>
  );
}

export default App;
