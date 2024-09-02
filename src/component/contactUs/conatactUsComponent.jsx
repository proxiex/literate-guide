"use client";
import ContactFirst from "./contactFirst";
import ContactFirstOther from "./contactFirstOther";
import ContactHeader from "./contactHeader";
import ContactSecond from "./contactSecond";
import ContactThird from "./contactThird";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

function ContactUsComponent() {
  const [stepper, setstepper] = useState(0);

  const initialValues = {
    lookingFor: "",
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
    
    // const payload = {
    //   from: values.email,
    //   // to: "info@carmatransport.it",
    //   subject: "Contact Us",
    //   data: [
    //     { key: "First Name", value: values.firstName },
    //     { key: "Phone", value: values.phoneNo },
    //     { key: "Last Name", value: values.lastName },
    //     { key: "Email", value: values.email },
    //     { key: "Coordinaote From", value: values.coordinatesFrom },
    //     { key: "Coordinaote To", value: values.coordinatesTo },
    //     { key: "Address From", value: values.From },
    //     { key: "Address To", value: values.To },
    //     { key: "postcode From", value: values.postcodeFrom },
    //     { key: "postcode To", value: values.postcodeTo },
    //     { key: "service type", value: values.serviceType },
    //     { key: "message", values: values.message },
    //   ],
    // };

    // fetch("https://lintech-contact-api.vercel.app/api/v1/contact", {
    //   body: JSON.stringify(payload),
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.success === true) {
    //     }
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      // style={{ backgroundImage: 'url(/images/logo.png)'}}
    >
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
                />
              )}
              {stepper === 1 && <ContactFirstOther  setstepper={setstepper} />}
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
