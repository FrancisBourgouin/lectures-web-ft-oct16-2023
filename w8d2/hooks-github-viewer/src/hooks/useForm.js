import { useState } from "react";

export default function useForm(initialValues, onSubmit) {
  const [formData, setFormData] = useState(initalValues);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(formData);

    setFormData(initalValues);
  };

  return { values: formData, handleChange, handleSubmit };
}

// const actions = {
//   addFavorite
//   addPhoto
//   editPhoto

// }
