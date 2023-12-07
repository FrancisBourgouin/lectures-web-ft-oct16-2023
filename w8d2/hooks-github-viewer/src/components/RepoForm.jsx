import useForm from "../hooks/useForm";

export default function RepoForm(props) {
  const { onSubmit } = props;
  const initalValues = { owner: "", repo: "" };

  const formData = useForm(initalValues, onSubmit);

  return (
    <form className="RepoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="owner"
        placeholder="Enter the owner"
        value={formData.owner}
        onChange={handleChange}
      />
      <input
        type="text"
        name="repo"
        placeholder="Enter the repo"
        value={formData.repo}
        onChange={handleChange}
      />
      <button>Fetch commits</button>
    </form>
  );
}
