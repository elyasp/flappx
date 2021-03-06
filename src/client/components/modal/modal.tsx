import React, { useState } from "react";
import { createBundle } from "../../services";
import Zoom from "react-reveal";
import {
  ModalContainer,
  ModalContent,
  Form,
  SubmitButton,
  CancelButton,
} from "./styles";
import { InputError } from "./inputError";

interface IBundle {
  name: string;
  bundle: string;
  company: string;
  email: string;
  active: boolean;
  category: string;
}

interface ToggleProps {
  closeModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Modal = (props: ToggleProps) => {
  const [inputBundle, setInputBundle] = useState<IBundle>();
  const [validInput, setValidInput] = useState(true);
  const { closeModal } = props;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createBundle(inputBundle)
      .then(() => {
        window.location.reload(true);
      })
      .catch((error) => {
        console.log("Bundle not added", error);
      });
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    setInputBundle({ ...inputBundle, [e.target.name]: e.target.value });
  };

  const validateInput = (e: React.FocusEvent<HTMLInputElement>) => {
    const { bundle } = inputBundle || {};
    const regex = /^[a-z]\w*(\.[a-z]\w*)+$/i;
    regex.test(bundle) ? setValidInput(true) : setValidInput(false);
  };

  return (
    <ModalContainer>
      <Zoom>
        <ModalContent>
          <Form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Bundle Name</label>
              <input name="name" type="text" required onChange={onChange} />
            </div>

            <div>
              <label htmlFor="bundle">Package Name</label>
              <input
                name="bundle"
                type="text"
                required
                placeholder="e.g. com.example.app"
                onBlur={validateInput}
                onChange={onChange}
              />
              <InputError isHidden={validInput} />
            </div>
            <div>
              <span>
                Is the bundle active?
                <label htmlFor="active">
                  <input
                    name="active"
                    type="radio"
                    value="TRUE"
                    onChange={onChange}
                    required
                  />
                  YES
                </label>
                <label htmlFor="active">
                  <input
                    name="active"
                    type="radio"
                    value="FALSE"
                    onChange={onChange}
                  />
                  NO
                </label>
              </span>
            </div>
            <div>
              <label htmlFor="company">Developed by company</label>
              <input name="company" type="text" required onChange={onChange} />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input name="email" type="text" required onChange={onChange} />
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <select required name="category" onChange={onChange}>
                <option selected={true} disabled={true}>
                  Please select a category
                </option>
                <option value="Tool">Tool</option>
                <option value="Music">Music</option>
                <option value="Games">Games</option>
                <option value="Social">Social</option>
              </select>
            </div>
            <span>
              <SubmitButton type="submit">Submit</SubmitButton>
              <CancelButton onClick={closeModal}>Cancel</CancelButton>
            </span>
          </Form>
        </ModalContent>
      </Zoom>
    </ModalContainer>
  );
};
