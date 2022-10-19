import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { signin } from "../services/userService";
import { User } from "../interfaces/User";
import { errorMsg, successMsg } from "../services/feedbackService";

interface SigninProps {}

const Signin: FunctionComponent<SigninProps> = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .required("Email is Required")
        .min(6)
        .max(1024)
        .email(),
      password: yup.string().required("Password is Required").min(8).max(1024),
    }),
    onSubmit: (values: User) => {
      signin(values)
        .then((result) => {
          sessionStorage.setItem("token", result.data.token);
          successMsg("You Signed in Successfully!");
          navigate("/all-cards");
        })
        .catch((err) => {
          errorMsg("Something went Wrong, Try Agian");
        });
    },
  });
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* LEFT DIV */}
          <div className="leftDiv col-lg-6 col-sm-12">
            <img className="login" src="signin.png" alt="" />
          </div>
          {/* RIGHT DIV */}
          <div className="rightDiv col-lg-6">
            <Link className="center" to="/">
              <img className="big-logo mx-auto mb-5" src="logo.png" alt="" />
            </Link>
            <h1 className="text-center">Welcome Back !</h1>
            <h5 className="text-center mb-4">
              Sign in with your BizCards Account
            </h5>
            {/* FORM */}
            <form onSubmit={formik.handleSubmit}>
              <div className="form-floating mb-3 w-75 mx-auto">
                <input
                  id="email"
                  type="email"
                  className="form-control "
                  placeholder="Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-danger mt-2">
                    <i className="fa-solid fa-circle-exclamation mx-1"></i>
                    {formik.errors.email}
                  </p>
                ) : null}
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3 w-75 mx-auto">
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <p className="text-danger mt-2">
                    {" "}
                    <i className="fa-solid fa-circle-exclamation mx-1"></i>
                    {formik.errors.password}
                  </p>
                ) : null}
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="button mx-auto">
                <button
                  disabled={!(formik.isValid && formik.dirty)}
                  type="submit"
                  className="btn btn-dark w-75  mt-1"
                >
                  Sign In
                </button>
              </div>

              <p className="text-center mt-4">
                New User?{" "}
                <Link className="link" to="/signup">
                  Click to Sign Up
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
