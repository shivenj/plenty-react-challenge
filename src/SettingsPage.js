import { measurementTypes } from "./data/MeasurementTypes";
import useMeasurementType from "./useMeasurementType";
export function SettingsPage() {
  const { selectedType, onTypeChange } = useMeasurementType();

  return (
    <div>
      <h2>Settings</h2>
      <div>
        {measurementTypes.map((measurementType) => (
          <div key={measurementType.name}>
            <div>{measurementType.name}</div>
            <div display="flex">
              {Object.keys(measurementType.supportedUnits).map((unit) => (
                <button
                  key={unit}
                  onClick={() => onTypeChange(measurementType.name, unit)}
                >
                  {selectedType[measurementType.name] ===
                    measurementType.supportedUnits[unit].unit && "*"}
                  {measurementType.supportedUnits[unit].unit}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
