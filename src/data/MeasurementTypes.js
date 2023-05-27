export const measurementTypes = [
  {
    kind: "MeasurementType", // Type of the Object
    name: "Temperature", // Name of the Measurement Type
    defaultUnit: "C", // The Default Unit
    supportedUnits: {
      C: {
        kind: "Unit", // Type of the Object
        unit: "C", // Name / Symbol of the Unit
        description: "Celsius", // Description / long-name of the Unit
        conversionToDefaultUnit: "X",
        conversionFromDefaultUnit: "X"
      },
      F: {
        kind: "Unit",
        unit: "F",
        description: "Fahrenheit",
        conversionToDefaultUnit: "(X-32)*5/9", // converts F to C
        conversionFromDefaultUnit: "X*9/5+32" // converts C to F
      }
    }
  }
  // ,
  // {
  //   name: "Length",
  //   kind: "MeasurementType",
  //   defaultUnit: "CM",
  //   supportedUnits: {
  //     CM: {
  //       kind: "Unit",
  //       unit: "CM",
  //       description: "Centimeters",
  //       conversionToDefaultUnit: "X",
  //       conversionFromDefaultUnit: "X"
  //     },
  //     MM: {
  //       kind: "Unit",
  //       unit: "MM",
  //       description: "Millimeters",
  //       conversionToDefaultUnit: "x/10",
  //       conversionFromDefaultUnit: "X*10"
  //     }
  //   }
  // }
];
