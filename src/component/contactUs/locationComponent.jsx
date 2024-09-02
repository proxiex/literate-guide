import React from "react";
import LocationField from "./locationField";
import toast from "react-hot-toast";


function LocationComponent({ values, setFieldValue, setstepper }) {
    const nextHandler = () => {
        if(values.From === "" || values.To === ""){
            toast.error("Fields are required");
        }else {
setstepper(2)
        }
    }
  return (
    <div className="lg:px-28 md:px-14  px-5 lg:py-16 md:py-10 py-6 primary-bg bg-transparent flex flex-col h-full mt-20">
      <div className="w-1/3 m-auto flex flex-col gap-6">
        <div className="font-semibold">


        Add pickup and delivery points
        </div>
        <LocationField name="From" setFieldValue={setFieldValue} values={values.From}/>
        <LocationField name="To" setFieldValue={setFieldValue} values={values.To}/>
        <button
          type="Button"
          className="secondary-button col-span-2 ml-auto px-16 py-4"
          onClick={() => nextHandler()}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default LocationComponent;
