"use client";
import { contact_schema } from "@/utils/validation-schema";
import React from "react";
import { useFormik } from "formik";
import ErrorMsg from "./ErrorMsg";
const ContactForm = () => {
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
      <form id="appointment-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-box user-icon mb-30">
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
          <div className="col-lg-6">
            <div className="form-box email-icon mb-30">
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
          <div className="col-lg-12">
            <div className="form-box date-icon mb-30">
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
          <div className="col-lg-12">
            <div className="form-box message-icon mb-30">
              <textarea
                name="message" 
                id="message"
                cols={30}
                rows={10}
                value={values.massage}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Write message"
              ></textarea>
              <span>
                <i className="fas fa-pencil-alt"></i>
              </span>
              {touched.massage && <ErrorMsg error={errors.massage} />}
            </div>
            <div className="contact-btn">
              <button className="btn" type="submit">
                <span className="btn-text">
                  send message <i className="fas fa-long-arrow-alt-righ"></i>
                </span>{" "}
                <span className="btn-border"></span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
