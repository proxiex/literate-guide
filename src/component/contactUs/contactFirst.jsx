import { Field } from "formik";
import React from "react";

function ContactFirst({ setFieldValue, setstepper }) {
  const setHandler = (value) => {
    setFieldValue("lookingFor", value);
    if (value === "Other") {
      setstepper(1);
    } else {
      setstepper(2);
    }
  };
  return (
    <div className="lg:px-28 md:px-14  px-5 py-4  grid grid-cols-4 w-full  gap-8 my-auto">
      <div className="col-span-4 mx-auto lg:text-6xl md:text-4xl text-2xl font-semibold md:mb-14 mb-10">
        What are you looking for
      </div>

      {data.map((item) => (
        <button
          type="button"
          onClick={() => setHandler(item)}
          className="bg-[#e8e8e8]  px-4   lg:py-6 py-3 rounded-full w-full lg:col-span-1 col-span-2 hover:bg-[#6b6969] hover:text-white"
        >
          {item}
        </button>
      ))}
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
