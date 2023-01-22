import { useState } from "react";
import "./App.css";
import "./components/formInput.css";
import FormInput from "./components/FormInput";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "username should be 3-12 characters!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,12}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "www.godstime@yahoo.com",
      errorMessage: "it should be valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      errorMessage: "",
      label: "Birthday",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMessage: "Password should be 8 characters and special character!",
      label: "Password",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "text",
      placeholder: "Confirm Password",
      errorMessage: "Password don't match!",
      label: "Confirm Password",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData(e.target);
    // console.log(Object.fromEntries(data.entries()));
  };

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  console.log(values);
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        {/* <FormInput name="username" placeholder="Username" />
        {/* <FormInput name="email" placeholder="Email" />
        <FormInput name="full name" placeholder="Full name" />
        <FormInput name="others" placeholder="Others" /> */}
        <button>SUBMIT</button>
      </form>
    </div>
  );
}

export default App;
