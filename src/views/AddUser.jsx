import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/userSlice";

import Button from "../components/Button";
import Input from "../components/Input";

export default function AddUser() {
  const initialValues = {
    name: "",
    email: "",
  };
  const [values, setValues] = useState(initialValues);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.users);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  function handleAddUser() {
    setValues(initialValues);

    dispatch(
      addUser({
        id: users.length + 1,
        name: values.name,
        email: values.email,
      })
    );
    navigate("..");
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <Input
        label="Name"
        value={values.name}
        onChange={handleInputChange}
        InputProps={{ type: "text", placeholder: "Eric Muganga", name: "name" }}
      />
      <br />
      <Input
        label="Email"
        value={values.email}
        onChange={handleInputChange}
        InputProps={{
          type: "email",
          placeholder: "eric@gmail.com",
          name: "email",
        }}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
}
