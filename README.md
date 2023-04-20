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


## REPOSITORY

### [master](../../tree/master) branch
This is the main and the default branch where the core demo application is located.

### Demo Apps

1. **Create Product**
	- is a Fiori Element app that is used as Create Form template for creating new product which can be triggered via cross app navigation that accepts URL parameters to prepopulate the form fields.
	- to be able to test this app, you need to click this [link](http://localhost:4004/launchpage.html#ProductsV2-create?Category_ID=B&Currency_ID=USD&UnitOfMeasure_ID=EA&description=Milk%2520tea%2520with%2520chewy%2520black%2520pearls&name=Pearl%2520Milk%2520Tea&price=10&quantity=20&/Products(-)/) (works on VS Code).
	- Then when you click on `Create` button, it will do another cross app navigation to **Manage Products** app and show the created product in this apps Object Page.

### Demo Branches

These are the branches that may be a copy of the main master branch or can be a branch on their own. The branches in this category serves a particular purpose.

| No. | Branch | Purpose |
| ---:|:------ |:------- |
| 1.  | [demo-list-report][branch-1] | Serves as the step by step guide for replicating the List Report App |
| 2.  | [demo-job-scheduler][branch-2] | Serves as a demo of using Job Scheduling Service with CAP endpoint |

[branch-1]: ../../tree/demo-list-report
[branch-2]: ../../tree/demo-job-scheduler


## APPENDIX

- [MIT License](LICENSE)