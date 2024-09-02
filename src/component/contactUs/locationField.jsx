"use client";
import React, { useState } from "react";
import { usePlacesWidget } from "react-google-autocomplete";

function LocationField({name, setFieldValue, values}) {
  const [searchInput, setSearchInput] = useState(values);
  const { ref } = usePlacesWidget({
    apiKey: "AIzaSyDv8pOMxP-jYLK9F8KWZd4HLC4Dw-xLWXg",
    onPlaceSelected: (place) => {
      const latitude = place.geometry.location.lat();
      const longitude = place.geometry.location.lng();
      setSearchInput(place.formatted_address);
      setFieldValue(`coordinates${name}`, { latitude, longitude });
      setFieldValue(name, place.formatted_address);

      // Extracting ZIP code
      const addressComponents = place.address_components;
      const zipCodeComponent = addressComponents.find(component =>
        component.types.includes('postal_code')
      );
      if (zipCodeComponent) {
        const zipCode = zipCodeComponent.long_name;
        setFieldValue(`postcode${name}`, zipCode);
      }
    },
  });
  return (
    <div>
      {" "}
      <input
        ref={ref}
        placeholder={`${name} (Company Name, City or Zip code)`}
        className="h-fit p-4 rounded-lg   input-color bg-opacity-35  outline-none md:col-span-1 col-span-2 w-full "
        id="standard-basic"
        variant="outlined"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
}

export default LocationField;
