import { Field } from "formik";
import React from "react";

function ContactFirst({ setFieldValue, setstepper, values }) {
  const setHandler = (value) => {
    console.log(value)
    let newSelections;
    if (value === "Other") {
      // If "Other" is selected, clear other selections
      newSelections = ["Other"];
      setstepper(1);
    } else {
      if (values?.lookingFor?.includes("Other")) {
        // Remove "Other" selection if it's already selected
        newSelections = [value];
      } else {
        // Toggle selection
        if (values?.lookingFor?.includes(value)) {
          newSelections = values?.lookingFor?.filter((item) => item !== value);
        } else {
          newSelections = [...values.lookingFor, value];
        }
      }

    }

    setFieldValue("lookingFor", newSelections);
  };

  return (
    <div className="lg:px-28 md:px-14 px-5 py-4 grid grid-cols-4 w-full gap-8 my-auto">
      <div className="col-span-4 mx-auto lg:text-6xl md:text-4xl text-2xl font-semibold md:mb-14 mb-10">
        What are you looking for
      </div>

      {data.map((item) => (
        <button
          key={item} 
          type="button"
          onClick={() => setHandler(item)}
          className={` px-4 lg:py-6 py-3 rounded-full w-full lg:col-span-1 col-span-2 ${
             values?.lookingFor?.includes(item) ? "bg-[#3a3737]  text-white" : "hover:bg-[#201f1f] hover:text-white bg-[#e8e8e8]"
          }`}
        >
          {item}
        </button>
      ))}
      
      {/* Conditionally render "Next" button */}
      {values?.lookingFor?.length > 0 && !values?.lookingFor?.includes("Other") && (
        <button
          type="button"
          onClick={() => setstepper(2)}
          className="bg-blue-500 text-white px-6 py-3 rounded-full w-full lg:col-span-4 col-span-4 mt-4"
        >
          Next
        </button>
      )}
    </div>
  );
}

export default ContactFirst;

const data = [
  "Influencers",
  "Models",
  "Hostesses",
  "Promoters",
  "Sales Staff",
  "Presenters",
  "Event Manager",
  "Photographers/Videographers",
  "Bartenders",
  "Dj's",
  "Dancers",
  "Singers",
  "Actors",
  "Instrument players",
  "Stand Design/Build",
  "Social media manager",
  "Website development",
  "Other",
];
