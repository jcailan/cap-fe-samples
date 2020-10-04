# SAP Fiori Element and CAP Model - Demo Project

#### ==WORK IN PROGRESS==

This is a demo of SAP Fiori Element List Report App using SAP Cloud Application Programming Model (CAP) backend service.

The demo project is patterned after the SAP Developer Tutorial called [Create a List Report Object Page App with SAP Fiori Tools](https://developers.sap.com/group.fiori-tools-lrop.html) while the Data Model is based on [North Wind OData Service](https://services.odata.org/Experimental/OData/(S(5n1vtnh00l13aqltnijnoldh))/OData.svc/$metadata).

## RELATED BLOG POSTS

For more information see blog posts below:

- [SAP Fiori Element using CAP Model – Introduction](https://blogs.sap.com/2020/09/29/sap-fiori-element-using-cap-model-introduction/)
- SAP Fiori Element using CAP Model – List Report App ==(unpublished)==

## REPOSITORY

This is a mono-repo demo project that contains 2 project set up:
- SAP CAP Project - [root](./) folder
- SAP Fiori Element - [app/product](./app/product) folder

## GETTING STARTED

#### 1. SAP CAP Project

- From [root](./) folder, install node modules _(one-time step)_
```swift
> npm install
```
- Launch the CAP service
```swift
> cds watch
```

#### 2. SAP Fiori Element Project
- From [app/product](./app/product) folder, install node modules _(one-time step)_
```swift
> npm install
```
- Launch the Fiori Element App
```swift
> npm start
```

## APPENDIX

- [Change Log](CHANGELOG.md)
- [MIT License](LICENSE)
- [How To Contribute?](CONTRIBUTING.md)