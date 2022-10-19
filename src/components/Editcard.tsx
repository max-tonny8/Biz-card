import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editCard, getCardById } from "../services/cardService";
import { errorMsg, successMsg } from "../services/feedbackService";
import * as yup from "yup";
import { useFormik } from "formik";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Card } from "../interfaces/Card";

interface EditcardProps {}

const Editcard: FunctionComponent<EditcardProps> = () => {
  const { id } = useParams();
  const [card, setCard] = useState({
    business_name: "",
    business_desc: "",
    business_adress: "",
    business_phone: "",
    business_image: "",
  });

  useEffect(() => {
    getCardById(id as string)
      .then((result) => {
        setCard(result.data);
      })
      .catch(() => {
        errorMsg("Something went wrong! try agian.");
      });
  }, []);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      business_name: card.business_name,
      business_desc: card.business_desc,
      business_adress: card.business_adress,
      business_phone: card.business_phone,
      business_image: card.business_image,
    },
    enableReinitialize: true,
    validationSchema: yup.object({
      business_name: yup.string().required("Business Name is Required").min(2),
      business_desc: yup
        .string()
        .required("Business Description is Required")
        .min(2),
      business_adress: yup
        .string()
        .required("Business Adress is Required")
        .min(2),
      business_phone: yup
        .string()
        .required("Business Phone is Required")
        .min(9)
        .max(12),
      business_image: yup.string().required("Business Image is Required"),
    }),
    onSubmit: (values) => {
      let card: Card = { ...values, _id: id };
      editCard(card)
        .then((result) => {
          successMsg("Card Edited Successfully!");
          navigate("/all-cards");
        })
        .catch((err) => {
          errorMsg("Something went wrong!");
        });
    },
  });
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="leftDiv col-lg-6">
            <img className="login" src="/edit.png" alt="" />
          </div>
          <div className="rightDivScreenFit col-lg-6">
            <h1 className="text-center mb-3">
              <i className="fa-regular fa-pen-to-square"></i> Edit BizCard
            </h1>
            {/* FORM */}
            <form onSubmit={formik.handleSubmit}>
              <div className="form-floating mb-3 w-75 mx-auto">
                <input
                  id="business_name"
                  type="text"
                  className="form-control "
                  placeholder="Business Name"
                  name="business_name"
                  value={formik.values.business_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.business_name && formik.errors.business_name ? (
                  <p className="text-danger mt-2">
                    <i className="fa-solid fa-circle-exclamation mx-1"></i>
                    {formik.errors.business_name}
                  </p>
                ) : null}
                <label htmlFor="floatingInput">Business Name</label>
              </div>

              <div className="form-floating mb-3 w-75 mx-auto">
                <input
                  id="business_desc"
                  type="text"
                  className="form-control "
                  placeholder="Business Description"
                  name="business_desc"
                  value={formik.values.business_desc}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.business_desc && formik.errors.business_desc ? (
                  <p className="text-danger mt-2">
                    <i className="fa-solid fa-circle-exclamation mx-1"></i>
                    {formik.errors.business_desc}
                  </p>
                ) : null}
                <label htmlFor="floatingInput">Business Description</label>
              </div>

              <div className="form-floating mb-3 w-75 mx-auto">
                <input
                  id="business_adress"
                  type="text"
                  className="form-control "
                  placeholder="Business Adress"
                  name="business_adress"
                  value={formik.values.business_adress}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.business_adress &&
                formik.errors.business_adress ? (
                  <p className="text-danger mt-2">
                    <i className="fa-solid fa-circle-exclamation mx-1"></i>
                    {formik.errors.business_adress}
                  </p>
                ) : null}
                <label htmlFor="floatingInput">Business Adress</label>
              </div>

              <div className="form-floating mb-3 w-75 mx-auto">
                <input
                  id="business_phone"
                  type="text"
                  className="form-control "
                  placeholder="Business Phone"
                  name="business_phone"
                  value={formik.values.business_phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.business_phone &&
                formik.errors.business_phone ? (
                  <p className="text-danger mt-2">
                    <i className="fa-solid fa-circle-exclamation mx-1"></i>
                    {formik.errors.business_phone}
                  </p>
                ) : null}
                <label htmlFor="floatingInput">Business Phone</label>
              </div>

              <div className="form-floating mb-3 w-75 mx-auto">
                <input
                  id="business_image"
                  type="text"
                  className="form-control "
                  placeholder="Business Image"
                  name="business_image"
                  value={formik.values.business_image}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.business_image &&
                formik.errors.business_image ? (
                  <p className="text-danger mt-2">
                    <i className="fa-solid fa-circle-exclamation mx-1"></i>
                    {formik.errors.business_image}
                  </p>
                ) : null}
                <label htmlFor="floatingInput">Business Image</label>
              </div>

              <div className="button mx-auto">
                <button
                  disabled={!(formik.isValid && formik.dirty)}
                  type="submit"
                  className="btn btn-dark w-75  mt-1"
                >
                  Edit Card
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Editcard;
