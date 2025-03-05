"use client";
import { contact_schema } from "@/utils/validation-schema";
import React from "react";
import { useFormik } from "formik";
import ErrorMsg from "@/form/ErrorMsg";
import Button from "../button/button";

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
      <div className="contact-2-area pt-120 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
              <div className="section-title text-center ml-50 mr-50 mb-75">
                <span className="border-left-1"></span>
                <span>contact us</span>
                <span className="border-right-1"></span>
                <h1>{`Don't`} Hesitate To Contact Us</h1>
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="appointment-wrapper contact-form-page">
              <form onSubmit={handleSubmit} className="appointment-form">
                <div className="row">
                  <div className="col-lg-4">
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
                  <div className="col-lg-4">
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
                  <div className="col-lg-4">
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
                        defaultValue={values.massage}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Write message"></textarea>
                      <span>
                        <i className="fas fa-pencil-alt"></i>
                      </span>
                      {touched.massage && <ErrorMsg error={errors.massage} />}
                    </div>
                    <div className="  text-center">
                      <Button text="submit" url="/"></Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
