import { ErrorMessage, Field } from "formik";
import React from "react";

function ContactSecond() {
  return (
    <div className="lg:px-28 md:px-14  px-5 lg:py-16 md:py-10 py-6  bg-transparent  lg:gap-28 md:gap-14 gap-10">
      <div className="lg:text-6xl md:text-4xl text-2xl font-bold text-center">
        Input your personal info
      </div>
      <div className="flex flex-col mt-10 md:gap-6 gap-4 text-sm text-[var(--text-paragraph-color)]">
        <div className="flex justify-center">
          <Field
            name="phoneNo"
            type="number"
            className="h-fit p-4 rounded-lg  bg-gray-100  outline-2 w-1/3 flex "
            placeholder="Phone Number"
          />
        </div>
          <div className="text-sm text-center text-red-500">
            <ErrorMessage name="phoneNo" />
          </div>
        <div className="flex justify-center">
          <Field
            name="email"
            type="email"
            className="h-fit p-4 rounded-lg   bg-gray-100  outline-2 w-1/3"
            placeholder="Email"
          />
        </div>
          <div className="text-sm text-center text-red-500">
            <ErrorMessage name="email" />
          </div>

        <Field
          name="any"
          as="textarea"
          rows={5}
          className="h-fit p-4 rounded-lg mx-auto  bg-gray-100  outline-2 w-1/3 flex justify-center"
          placeholder="Your Message Here"
        />

        <button
          type="submit"
          className="bg-blue-600 rounded-lg text-white col-span-4 mx-auto px-16 py-4"
          >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ContactSecond;
