import { Component } from "react";

// export default function RepoForm(props) {
//   return (
//     <form className="RepoForm">
//       <input type="text" name="owner" placeholder="Enter the owner" />
//       <input type="text" name="repo" placeholder="Enter the repo" />
//       <button>Fetch commits</button>
//     </form>
//   );
// }

export default class RepoForm extends Component {
  constructor(props) {
    super(props); // Calls the Component constructor

    this.initialValues = { owner: "", repo: "" };
    this.state = this.initialValues;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = function (event) {
    const { name, value } = event.target;

    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.setState(this.initialValues);
  };

  render() {
    return (
      <form className="RepoForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="owner"
          placeholder="Enter the owner"
          value={this.state.owner}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="repo"
          placeholder="Enter the repo"
          value={this.state.repo}
          onChange={this.handleChange}
        />
        <button>Fetch commits</button>
      </form>
    );
  }
}
