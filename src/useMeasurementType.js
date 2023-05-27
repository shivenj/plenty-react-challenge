import { useMemo, useState } from "react";
import { measurementTypes } from "./data/MeasurementTypes";
import { MEASUREMENT_TYPE } from "./conts";
const useMeasurementType = () => {
  const [selectedType, setSelectedType] = useState(
    () => JSON.parse(localStorage.getItem(MEASUREMENT_TYPE)) || {}
  );
  const onTypeChange = (name, value) => {
    setSelectedType({ [name]: value });
    localStorage.setItem(MEASUREMENT_TYPE, JSON.stringify({ [name]: value }));
  };

  return { selectedType, onTypeChange };
};
export default useMeasurementType;
