import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "../components/Button";
import Input from "../components/Input";
import { editUser } from "../store/userSlice";

export default function EditUser() {
  const users = useSelector((state) => state.users.users);

  const params = useParams();

  const existingUser = users.filter((user) => user.id === parseInt(params.id));

  const { name, email } = existingUser[0];
  const initialValues = {
    name: "",
    email: "",
  };
  const [values, setValues] = useState({
    name,
    email,
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  function handleEditUser() {
    dispatch(
      editUser({
        id: parseInt(params.id),
        name: values.name,
        email: values.email,
      })
    );
    setValues(initialValues);
    navigate("..");
    //console.log(values);
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
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
}
