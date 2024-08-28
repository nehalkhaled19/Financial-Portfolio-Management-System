import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import style from "./LoginForm.module.css";

export default function Signup() {
  let nav = useNavigate();

  //  validation
  let validationSchema = Yup.object({
    name: Yup.string()
      .required("name is required")
      .matches(/^[a-zA-Z]{3,15}[ ]?[a-zA-Z]*$/, "Enter valid name"),
    email: Yup.string()
      .required("email is required")
      .email("enter valid email"),
    password: Yup.string()
      .required("password is required")
      .matches(/^[a-z0-9]{6,16}$/, "enter Valid Passowrd"),
    rePassword: Yup.string()
      .required("repassword is required")
      .oneOf([Yup.ref("password")], "enter matched Password"),
    phone: Yup.string()
      .required("phone Required")
      .matches(/^01[1250][0-9]{8}$/, "Phone not Valid"),
  });
  // fotmik
  let forms = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    onSubmit: sendData,
    validationSchema,
  });
  function sendData(values) {
    localStorage.setItem("userName", values.name.toUpperCase());
    localStorage.setItem("password", values.password.toUpperCase());
    nav("/login");
  }

  return (
    <div className={`${style.main} sm:h-lvh flex align-middle`}>
      <form className={`${style.forms} sm:w-3/6 w-full`} onSubmit={forms.handleSubmit}>
        <h1 className="font-bold text-3xl mb-8">Signup Form</h1>
        <div className="my-2 w-full ">
          <input
            onBlur={forms.handleBlur}
            onChange={forms.handleChange}
            type="text"
            placeholder="name"
            className="border focus:bottom-0 rounded mb-1  w-full px-2  py-1"
            name="name"
            id="name"
          />
          {forms.touched.name ? (
            <p className="text-red-600">{forms.errors.name}</p>
          ) : (
            ""
          )}
        </div>
        <div className="my-2 w-full ">
          <input
            onBlur={forms.handleBlur}
            onChange={forms.handleChange}
            type="email"
            placeholder="email"
            className="border focus:bottom-0 rounded mb-1 w-full  px-2  py-1"
            name="email"
            id="email"
          />
          {forms.touched.email ? (
            <p className="text-red-600">{forms.errors.email}</p>
          ) : (
            ""
          )}
        </div>
        <div className="my-2 w-full ">
          <input
            onBlur={forms.handleBlur}
            onChange={forms.handleChange}
            type="password"
            placeholder="password"
            className="border focus:bottom-0 rounded mb-1 w-full der px-2  py-1"
            name="password"
            id="password"
          />
          {forms.touched.password ? (
            <p className="text-red-600">{forms.errors.password}</p>
          ) : (
            ""
          )}
        </div>
        <div className="my-2 w-full ">
          <input
            onBlur={forms.handleBlur}
            onChange={forms.handleChange}
            type="password"
            placeholder="repassword"
            className="border focus:bottom-0 rounded mb-1 w-full order px-2  py-1"
            name="rePassword"
            id="rePassword"
          />
          {forms.touched.rePassword ? (
            <p className="text-red-600">{forms.errors.rePassword}</p>
          ) : (
            ""
          )}
        </div>
        <div className="my-2 w-full ">
          <input
            onBlur={forms.handleBlur}
            onChange={forms.handleChange}
            type="tel"
            placeholder="phone"
            className="border focus:bottom-0 rounded mb-1 w-full  px-2  py-1"
            name="phone"
            id="phone"
          />
          {forms.touched.phone ? (
            <p className="text-red-600">{forms.errors.phone}</p>
          ) : (
            ""
          )}
        </div>
        <button
          disabled={!(forms.isValid && forms.dirty)}
          type="submit"
          className={style.btn}
        >
          Register
        </button>
      </form>
    </div>
  );
}
