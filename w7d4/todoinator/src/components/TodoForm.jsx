import { useState } from "react";

export default function TodoForm(props) {
  const { onSubmit } = props;
  const initialValues = { task: "", color: "", dueDate: "" };

  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { value, name } = event.target;

    const updatedFormData = { ...formData };

    updatedFormData[name] = value;

    setFormData(updatedFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(formData);

    setFormData(initialValues);
    setIsActive(false);
  };

  const toggleForm = () => setIsActive(!isActive);

  return (
    <section className="TodoForm">
      {!isActive && <button onClick={toggleForm}>Add a todo</button>}
      {isActive && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            placeholder="Enter the task"
            value={formData.task}
            onChange={handleChange}
          />
          <input
            type="color"
            name="color"
            placeholder="Enter the color"
            value={formData.color}
            onChange={handleChange}
          />
          <input
            type="date"
            name="dueDate"
            placeholder="Enter the due date"
            value={formData.dueDate}
            onChange={handleChange}
          />
          <button>Add todo</button>
        </form>
      )}
    </section>
  );
}
