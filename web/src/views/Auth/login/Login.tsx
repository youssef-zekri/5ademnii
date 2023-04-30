import { Formik, Form, Field, ErrorMessage } from "formik";
import LoginImg from "../../../assets/images/img-01.png";
import { useLoginMutation } from "../../../gql/graphql";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  // const [, login] = useLoginMutation();
  const navigate = useNavigate();
  return (
    <>
      <img src={LoginImg} alt="img" className="login-logo" />

      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors: any = {};
          if (!values.email) {
            errors.email = "Required*";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={async (data, { setSubmitting }) => {

          toast.success("welcome back !", { autoClose: 600 });
          setTimeout(() => {
            navigate("/");
          }, 1000);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="Login_template">
            <p className="Login_title">Member Login</p>
            <Field className="Auth_layout_input" type="email" name="email" placeHolder="Email" />
            <ErrorMessage className="Auth_layout_error" name="email" component="div" />
            <Field
              className="Auth_layout_input"
              type="password"
              name="password"
              placeHolder="Password"
            />
            <ErrorMessage className="Auth_layout_error" name="password" component="div" />
            <button className="Auth_layout_submit" type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <p className="Auth_Link">Don't have an acount ? <Link to='/register' className="Auth_Link-register">SignUp</Link></p>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;
