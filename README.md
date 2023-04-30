# SAP Fiori Elements and CAP Model

This is a demo of SAP Fiori Element List Report App using SAP Cloud Application Programming Model (CAP) backend service.

The demo project is patterned after the SAP Developer Tutorial called [Create a List Report Object Page App with SAP Fiori Tools](https://developers.sap.com/group.fiori-tools-lrop.html) while the Data Model is based on [North Wind OData Service](https://services.odata.org/Experimental/OData/(S(5n1vtnh00l13aqltnijnoldh))/OData.svc/$metadata).


## GETTING STARTED

#### 1. Run the app

```shell
# install dependencies
> npm install
# run the cap service
> cds watch
```


## RELATED BLOG POSTS

For more information see blog posts below:

- [SAP Fiori Element using CAP Model – Introduction](https://blogs.sap.com/2020/09/29/sap-fiori-element-using-cap-model-introduction/)
- [SAP Fiori Element using CAP Model – List Report App](https://blogs.sap.com/2020/10/19/sap-fiori-element-using-cap-model-list-report-app/)
- [CAP: GraphQL as new protocol](https://blogs.sap.com/2023/03/18/cap-graphql-as-new-protocol/)


## REPOSITORY

### [master](../../tree/master) branch
This is the main and the default branch where the core demo application is located.


### Demo Branches

These are the branches that may be a copy of the main master branch or can be a branch on their own. The branches in this category serves a particular purpose.

| No. | Branch | Purpose |
| ---:|:------ |:------- |
| 1.  | [demo-list-report][branch-1] | Serves as the step by step guide for replicating the List Report App |
| 2.  | [demo-job-scheduler][branch-2] | Serves as a demo of using Job Scheduling Service with CAP endpoint |

[branch-1]: ../../tree/demo-list-report
[branch-2]: ../../tree/demo-job-scheduler


### Demo Apps

| No. | App Name | Purpose |
| ---:|:-------- |:------- |
| 1.  | **Display Products**<br>OData V4 | <ul><li>is a Fiori Element app that is used to showcase CAP CDS capabilities without the need for writing a single line of JavaScript code.</li></ul> |
| 2.  | **Display Products**<br>OData V2 | <ul><li>same as **Display Products** but done using Fiori Elements for OData V2.</li></ul> |
| 3.  | **Manage Products**<br>OData V4 | <ul><li>is a Fiori Element app that is used to showcase CAP's capabilities for the _managed scenario_.</li></ul> |
| 4.  | **Manage Products**<br>External Service<br>OData V4 | <ul><li>is a Fiori Element app that is used to showcase CAP's capabilities for the _managed scenario_ but in this case using an external OData V2 service.</li><li>Fiori Elements for OData V4 doesn't support non-draft OData V4 service, therefore, `create` and `update` operations are not supported in this scenario.</li></ul> |
| 5.  | **Manage Products**<br>External Service<br>OData V2 | <ul><li>same as **Manage Products** External Service OData V4 but done using Fiori Elements for OData V2.</li><li>Fiori Elements for OData V2 supports non-draft OData V2 service, therefore, all `CRUD` operations are supported in this scenario.</li></ul> |
| 6.  | **Manage Products**<br>External Service<br>CDSX | <ul><li>same as **Manage Products** External Service OData V4 but done using CDSX ([@rizing/cds-extension](https://www.npmjs.com/package/@rizing/cds-extension)) with draft enabled.</li></ul> |
| 7.  | **Create Products**<br>OData V2 | <ul><li>is a Fiori Element app that is used as Create Form template for creating new product which can be triggered via cross app navigation that accepts URL parameters to prepopulate the form fields.</li><li>to be able to test this app, you need to click this [link](http://localhost:4004/launchpage.html#ProductsV2-create?Category_ID=B&Currency_ID=USD&UnitOfMeasure_ID=EA&description=Milk%2520tea%2520with%2520chewy%2520black%2520pearls&name=Pearl%2520Milk%2520Tea&price=10&quantity=20&/Products(-)/) (works on VS Code).</li><li>then when you click on `Create` button, it will do another cross app navigation to **Manage Products** app and show the created product in this apps Object Page.</li><ul>
| 8.  | **Display Products**<br>FPM | <ul><li>is a custom Fiori Element app that is used to showcase how to use the new Flexible Programming Model framework.</li></ul> |


## APPENDIX

- [MIT License](LICENSE)