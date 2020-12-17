// Here goes the schema for the form
import * as yup from "yup";

export default yup.object().shape({
    name: yup.string()
    .required('Name is required')
    .min(3, 'Name needs to be at least 3 characters long.'),

    email: yup.string()
    .email("Provide a valid email address")
    .required("Email is required"),

    password: yup.string()
    .required('Password is required')
    .min(4, 'Password needs to be at least 4 characters long.'),

    terms_of_service: yup.boolean()
    .oneOf([true], "Must accept Terms and Conditions")
});