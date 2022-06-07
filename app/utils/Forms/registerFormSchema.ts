import * as yup from "yup";

export const FormSchema = yup.object({
    username: yup.string().required("First name is required"),
    email: yup.string().required("Last name is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup.string().required("Confirm Password is required"),
  }).required();