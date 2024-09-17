"use client"
import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ContactFirst from "./contactFirst";
import ContactFirstOther from "./contactFirstOther";
import ContactHeader from "./contactHeader";
import ContactSecond from "./contactSecond";
import ContactThird from "./contactThird";

function ContactUsComponent() {
  const [stepper, setstepper] = useState(0);

  const initialValues = {
    lookingFor: [],
    lookingForOther: "",
    phoneNo: "",
    email: "",
    any: "",
  };

  const validationSchema = Yup.object().shape({
    lookingFor: Yup.string().required("Service type is required"),
    phoneNo: Yup.string(),
    email: Yup.string().email("Invalid email"),
    any: Yup.string(),
  });

  const onSubmit = (values) => {
    setstepper(3);
    // Further implementation for handling form submission
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center">
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue, errors }) => (
          <Form className="relative">
            <ContactHeader
              stepper={stepper}
              setstepper={setstepper}
              values={values}
              setFieldValue={setFieldValue}
            >
              {stepper === 0 && (
                <ContactFirst
                  setFieldValue={setFieldValue}
                  setstepper={setstepper}
                  values={values}
                />
              )}
              {stepper === 1 && <ContactFirstOther setstepper={setstepper} />}
              {stepper === 2 && (
                <ContactSecond values={values} setFieldValue={setFieldValue} />
              )}
              {stepper === 3 && <ContactThird />}
            </ContactHeader>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactUsComponent;
