# SAP Fiori Element and CAP Model - Demo Project

This is a demo of SAP Fiori Element List Report App using SAP Cloud Application Programming Model (CAP) backend service.

The demo project is patterned after the SAP Developer Tutorial called [Create a List Report Object Page App with SAP Fiori Tools](https://developers.sap.com/group.fiori-tools-lrop.html) while the Data Model is based on [North Wind OData Service](https://services.odata.org/Experimental/OData/(S(5n1vtnh00l13aqltnijnoldh))/OData.svc/$metadata).

## RELATED BLOG POSTS

For more information see blog posts below:

- [SAP Fiori Element using CAP Model – Introduction](https://blogs.sap.com/2020/09/29/sap-fiori-element-using-cap-model-introduction/)
- [SAP Fiori Element using CAP Model – List Report App](https://blogs.sap.com/2020/10/19/sap-fiori-element-using-cap-model-list-report-app/)

## REPOSITORY

### [master](../../tree/master) branch
This is the main and the default branch where the core demo application is located. This is a mono-repo demo project that contains 2 project set up:
- SAP CAP Project - [root](../../tree/master) folder
- SAP Fiori Element - [app/product](./app/product) folder

### Demo branches

These are the branches that may be a copy of the main master branch or can be a branch on their own. The branches in this category serves a particular purpose.

| No. | Branch | Purpose |
| ---:|:------ |:------- |
| 1.  | [demo-list-report][branch-1] | Serves as the step by step guide for replicating the List Report App |
| 2.  | [demo-job-scheduler][branch-2] | Serves as a demo of using Job Scheduling Service with CAP endpoint |

[branch-1]: ../../tree/demo-list-report
[branch-2]: ../../tree/demo-job-scheduler

## GETTING STARTED

#### 1. SAP CAP Project

- From [root](../../tree/master) folder, install node modules _(one-time step)_
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