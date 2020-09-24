# SAP Fiori Element and CAP Model - Demo Project

> Work In Progress

This is a demo of SAP Fiori Element List Report App using SAP Cloud Application Programming Model (CAP) backend service.

The Data Model is based on NorthWind Service OData V4:

```swift
https://services.odata.org/Experimental/OData/(S(5n1vtnh00l13aqltnijnoldh))/OData.svc/$metadata
```

## Repository

This is a mono-repo demo project that contains 2 project set up:
- SAP CAP Project - [root](./) folder
- SAP Fiori Element - [app/product](./app/product) folder

## How to set up

### SAP CAP Project

- From [root](./) folder, install node modules (one-time step)
```swift
> npm install
```
- Launch the cap service
```swift
> cds watch
```

### SAP Fiori Element Project
- From [app/product](./app/product) folder, install node modules (one-time step)
```swift
> npm install
```
- Launch the cap service
```swift
> npm start
```