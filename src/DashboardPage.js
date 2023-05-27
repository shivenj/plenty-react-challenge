import { observations } from "./data/Observations";
import { useMemo } from "react";
import { measurementTypes } from "./data/MeasurementTypes";
import { MEASUREMENT_TYPE } from "./conts";
import useMeasurementType from "./useMeasurementType";
// Take into consideration measurementType from observations and default unit from measurement types;
export function DashboardPage() {
  const { selectedType } = useMeasurementType();

  const convertValues = (value, type) => {
    const measurementType = measurementTypes.find(({ name }) => type === name);
    const preferredUnit = selectedType[type] || measurementType.defaultUnit;
    if (preferredUnit === measurementType.defaultUnit) {
      return value;
    } else {
      return eval(
        measurementType.supportedUnits[
          preferredUnit
        ].conversionFromDefaultUnit.replace("X", value)
      );
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <table>
        <thead>
          <tr>
            <td width="100">Value</td>
            <td width="200">Time</td>
            <td width="150">Measurement Type</td>
            <td width="200">Observation Name</td>
          </tr>
        </thead>
        <tbody>
          {observations.map((observation) => (
            <tr key={observation.createdAt}>
              <td>
                {convertValues(observation.value, observation.measurementType)}
              </td>
              <td>{new Date(observation.createdAt).toLocaleString()}</td>
              <td>{observation.measurementType}</td>
              <td>{observation.observationName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
