import { ChangeEvent, FunctionComponent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { User } from "../interfaces/User";
import { signup } from "../services/userService";
import { errorMsg, successMsg } from "../services/feedbackService";

interface SignupProps {}

const Signup: FunctionComponent<SignupProps> = () => {
  // Checks if Checkbox is business or not
  const [checkboxValue, setCheckboxValue] = useState<boolean>(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCheckboxValue(true);
    } else {
      setCheckboxValue(false);
    }
  };
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      name: yup.string().required().min(2),
      email: yup.string().required().min(6).max(1024).email(),
      password: yup.string().required().min(8).max(1024),
      biz: yup.boolean(),
    }),
    onSubmit: (values) => {
      let user: User = { ...values, biz: checkboxValue };
      signup(user)
        .then((result) => {
          sessionStorage.setItem("token", result.data.token);
          successMsg("You Registered Successfully!");
          if (checkboxValue == true) {
            navigate("/new-card");
          } else {
            navigate("/all-cards");
          }
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
            <img className="login" src="signup.png" alt="" />
          </div>
          {/* RIGHT DIV */}
          <div className="rightDiv col-lg-6">
            <Link className="center" to="/">
              <img className="big-logo mx-auto mb-5" src="logo.png" alt="" />
            </Link>
            <h1 className="text-center ">Create Account</h1>
            <h5 className="text-center mb-4">Join BizCards for Free!</h5>
            {/* FORM */}
            <form onSubmit={formik.handleSubmit}>
              <div className="form-floating w-75 mb-3 mx-auto">
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Name..."
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? (
                  <p className="text-danger mt-2">
                    {" "}
                    <i className="fa-solid fa-circle-exclamation mx-1"></i>
                    {formik.errors.name}
                  </p>
                ) : null}
                <label htmlFor="floatingPassword">Name</label>
              </div>
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
                  Sign Up
                </button>
              </div>
              <div className="form-check form-switch mx-auto mt-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  onChange={handleChange}
                  id="subscribe"
                  name="subscribe"
                />
                <label
                  className="form-check-label mx-2"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Sign up as Bussiness Account
                </label>
              </div>
              <p className="text-center mt-5">
                Already have an account?{" "}
                <Link className="link" to="/signin">
                  Click to Sign In
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
