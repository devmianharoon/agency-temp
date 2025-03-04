"use client";
import { contact_schema } from "@/utils/validation-schema";
import React from "react";
import { useFormik } from "formik";
import ErrorMsg from "./ErrorMsg";
import Button from "@/components/button/button";
const ContactFormHomeTwo = () => {
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        subject: "",
        massage: "",
      },
      validationSchema: contact_schema,
      onSubmit: (values, { resetForm }) => {
        resetForm();
      },
    });
  return (
    <>
      <form onSubmit={handleSubmit} id="contact-form">
        <div className="row">
          <div className="col-xl-6 mb-10">
            <div className="form-2-box user-icon mb-10">
              <input
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Full Name Here"
                id="email"
              />
              <span>
                <i className="fas fa-user"></i>
              </span>
              {touched.name && <ErrorMsg error={errors.name} />}
            </div>
          </div>
          <div className="col-xl-6 mb-10">
            <div className="form-2-box email-2-icon mb-10">
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email Here"
              />
              <span>
                <i className="fas fa-envelope"></i>
              </span>
              {touched.email && <ErrorMsg error={errors.email} />}
            </div>
          </div>
          <div className="col-xl-12 mb-35">
            <div className="form-2-box sub-icon mb-10">
              <input
                type="text"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Subject"
              />
              <span>
                <i className="fas fa-chevron-down"></i>
              </span>
              {touched.subject && <ErrorMsg error={errors.subject} />}
            </div>
          </div>
          <div className="col-xl-12 mb-30">
            <div className="form-2-box message-2-icon mb-10">
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                defaultValue={values.massage}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Write message"></textarea>
              <span>
                <i className="fas fa-pencil-alt"></i>
              </span>
              {touched.massage && <ErrorMsg error={errors.massage} />}
            </div>
          </div>
          <div className="col-xl-12">
            {/* <button type="submit" className="btn">
           
            </button> */}
            <Button text="submit" url="#" />
          </div>
        </div>
        <p className="form-message"></p>
      </form>
    </>
  );
};

export default ContactFormHomeTwo;
