import { Formik, Form, Field, ErrorMessage } from "formik";
import LoginImg from "../../../assets/images/img-01.png";
import { useLoginMutation } from "../../../gql/graphql";
const Login = () => {
  const [, login] = useLoginMutation();

  return (
    <>
      <img src={LoginImg} alt="img" />

      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors: any = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(data, { setSubmitting }) => {
          login({data:{
            email: data.email,
            password: data.password
          }})
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field className="Auth_layout_input" type="email" name="email" />
            <ErrorMessage className="Auth_layout_error" name="email" component="div" />
            <Field className="Auth_layout_input" type="password" name="password" />
            <ErrorMessage className="Auth_layout_error" name="password" component="div" />
            <button className="Auth_layout_submit" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;
