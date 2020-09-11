import React, { useState } from "react";
import { createBundle } from "../../services";

interface IBundle {
  name: string;
  bundle: string;
  company: string;
  email: string;
  active: boolean;
  category: string;
}

export const Modal = () => {
  const [inputBundle, setInputBundle] = useState<IBundle[]>();
  console.log("MODAL STATE", inputBundle);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createBundle(inputBundle)
      .then((res) => {
        console.log("CREATED", res);
      })
      .catch((error) => {
        console.log("Could not add bundle", error);
      });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputBundle({ ...inputBundle, [e.target.name]: e.target.value });
  };

  const validateInput = (e) => {
    const re = /[a-zA-Z0-9._]+/i;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name*</label>
        <input name="name" type="text" required onChange={onChange} />

        <label htmlFor="bundle">Bundle</label>
        <input
          name="bundle"
          type="text"
          required
          onKeyPress={validateInput}
          onChange={onChange}
        />

        <label htmlFor="company">Company</label>
        <input name="company" type="text" required onChange={onChange} />

        <label htmlFor="email">Email</label>
        <input name="email" type="text" required onChange={onChange} />

        <label htmlFor="active">Active</label>
        <input name="active" type="checkbox" value="TRUE" onChange={onChange} />

        <label htmlFor="category">Category</label>
        <select name="category" onChange={onChange}>
          <option value="Tool">Tool</option>
          <option value="Music">Music</option>
          <option value="Games">Games</option>
          <option value="Social">Social</option>
        </select>

        <button type="submit">Add Bundle</button>
      </form>
    </div>
  );
};
