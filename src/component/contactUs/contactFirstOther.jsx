import { ErrorMessage, Field } from "formik";
import React from "react";

function ContactFirstOther({ setstepper }) {
  return (
    <div className="lg:px-28 md:px-14  px-5 py-4  grid grid-cols-4 w-full  gap-8 my-auto">
      <div className="col-span-4 mx-auto lg:text-6xl md:text-4xl text-2xl font-semibold md:mb-14 mb-10">
      Please specify what you require
      </div>
      <div className="col-span-4 flex justify-center ">
        <Field
          name="lookingForOther"
          type="text"
          className="h-fit p-4 rounded-lg   bg-gray-100  outline-2 w-1/3 text-center"
          placeholder="Please specify what you require"
        />
        <div className="text-sm text-red-500">
          <ErrorMessage name="lookingForOther" />
        </div>
      </div>
      <button
        type="button"
        onClick={() => setstepper(2)}
        className="bg-blue-600 rounded-lg text-white col-span-4 mx-auto px-16 py-4"
      >
        Next
      </button>
    </div>
  );
}

export default ContactFirstOther;
