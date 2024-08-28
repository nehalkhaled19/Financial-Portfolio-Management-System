import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import style from './LoginForm.module.css';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const handleSubmit = (values) => {
    const storedUserName = localStorage.getItem('userName');
    const storedPassword = localStorage.getItem('password');

    // Convert to uppercase for case-insensitive comparison
    if (values.userName.toUpperCase() === storedUserName && values.password.toUpperCase() === storedPassword) {
      setLoginError(""); // Clear any previous errors
      navigate('/portfolio'); // Navigate to the users page
    } else {
      setLoginError("Invalid username or password");
    }
  };

  function handleValidate(values) {
    const errors = {};
    if (!values.userName) {
      errors.userName = 'Username is required';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    return errors;
  }

  return (
<div className={`${style.main} sm:h-lvh flex align-middle`}>
      <Formik
        initialValues={{ userName: "", password: "" }}
        onSubmit={handleSubmit}
        validate={handleValidate}
        validateOnBlur={false}
      >
        {({ errors }) =>
          <Form className={`${style.forms} sm:w-3/6 w-full`}>
            <h1 className='font-bold text-3xl mb-4'>Login Form</h1>
            <Field
              placeholder='Enter username'
              className='border focus:bottom-0 rounded mb-1 w-full px-2 py-1 my-4'
              type="text"
              name="userName"
            />
            {errors.userName && <p style={{color: 'red'}}>{errors.userName}</p>}
            <Field
              placeholder='Enter Password'
              className='border focus:bottom-0 rounded mb-1 w-full px-2 py-1 my-4'
              type="password"
              name="password"
            />
            {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
            <button type="submit" className={style.btn}>
              Submit
            </button>
            {loginError && <p style={{color: 'red'}}>{loginError}</p>}
          </Form>
        }
      </Formik>
    </div>
  );
}
