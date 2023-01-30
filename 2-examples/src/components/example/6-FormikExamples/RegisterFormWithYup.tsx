import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  // password: Yup.string().required("Password is required"),
  // passwordConfirmation: Yup.string().oneOf(
  //   [Yup.ref("password"), null],
  //   "Passwords must match"
  // ),
  name: Yup.string()
    .min(3, "The name must be unique and between 3 - 128 characters")
    .max(128, "The name must be unique and between 3 - 128 characters")
    .required("The name is not blank"),
});

function RegisterFormWithYup() {
  const formik = useFormik({
    initialValues: {
      name: "default",
      email: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue(e.target.name, e.target.value);
    console.log(e.target);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <p>{formik.errors.name ?? null}</p>
      </div>
      <div>
        <input
          name="email"
          value={formik.values.email}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        />
        <p>{formik.errors.email ?? null}</p>
      </div>
      <input type="submit" />
    </form>
  );
}

export default RegisterFormWithYup;
