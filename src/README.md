# Plenty React Challenge

We've scaffolded a React application with two pages:

## DashboardPage:

This page renders a list of data loaded statically. Each datapoint is called an Observation, it has a name, time, Measurement Type and a value.

Each Measurement Type defines one or more Units and must define a "Default" Unit. The Observation's value always uses the "Default" Unit. In other words we don't carry information about which Unit we are using in our Data (or on the Backend) because we assume all the values are using the "Default" Unit.

For more details, look at the data under `./data/Observations.js`

Currently the Dashboard lists all Observations using the "Default" Unit.

## SettingsPage:

This page renders a list of Measurement Types loaded statically. A Measurement Type describes the type of measurement of an Observation and provides different Units with conversion formulas. Each Measurement Type specifies a "Default" Unit.

For more details, look at the data under `./data/MeasurementTypes.js`

Currently this page lists the Measurement Types and a button for each Unit.

## Questions:

As explained, the Dashboard Page lists all Observations using the "Default" Unit. Your task is to:

1. Allow the user to choose a "Preferred" Unit

- As a User I can go to the Settings Page and choose a Unit so that the Observations in the Dashboards are displayed using my "Preferred" Unit.

- As a User, when I choose a "Preferred" Unit, I should see a visual indicator next to its button.

- As a User, after I chose a "Preferred" Unit, when I reload the Browser, my "Preferred" Unit should persists.

2. Use the "Preferred" Unit" to display Observations

- As a User I can go to the Dashboards Page and see Observations' values displayed using my "Preferred" Unit. If I haven't chosen a "Preferred" Unit, the values displayed should be using the "Default" Unit.

## Before you start

Please communicate how, what and where would you store this Preferred unit.
