## Attempt to capture `$batch` payload using `body-parser` 

- Test run using `cds watch` and manual run of FE app `products`

```shell
GET /product/$metadata?sap-language=EN {}
[object Object]
[cds] - GET /product/$metadata?sap-language=EN {}
HEAD /product/ {}
[object Object]
[cds] - HEAD /product/ {}
POST /product/$batch {}
--batch_id-1669635397027-153
Content-Type:application/http
Content-Transfer-Encoding:binary

GET Products?$count=true&$select=Category_ID,ID,StockStatus_ID,UnitOfMeasure_ID,description,imageUrl,name,quantity,rating&$expand=Category($select=ID,name),StockStatus($select=ID,name),Supplier($select=ID,name)&$skip=0&$top=30 HTTP/1.1
Accept:application/json;odata.metadata=minimal;IEEE754Compatible=true
Accept-Language:en-US
Content-Type:application/json;charset=UTF-8;IEEE754Compatible=true


--batch_id-1669635397027-153--
Group ID: $auto.Workers
[cds] - POST /product/$batch <Buffer 2d 2d 62 61 74 63 68 5f 69 64 2d 31 36 36 39 36 33 35 33 39 37 30 32 37 2d 31 35 33 0d 0a 43 6f 6e 74 65 6e 74 2d 54 79 70 65 3a 61 70 70 6c 69 63 61 ... 505 more bytes>
```

> **NOTE:** It can log the payload


- Test run using `cds watch` (on root folder) + `npm run karma` (on app/products folder)

```shell
GET /product/$metadata?sap-language=6N {}
[object Object]
[cds] - GET /product/$metadata?sap-language=6N {}
HEAD /product/ {}
[object Object]
[cds] - HEAD /product/ {}

```

> **NOTE:** It will hang much earlier as it didn't even print out `/product/$batch`

## Result: Attempt Failed

# Last Attempt

Since CAP prevents me to capture the payload when using karma, I have tried mocking the response of the CAP application via an express app I've coded: see [express.js](express.js)

## Attempt to capture `$batch` payload using `body-parser` and mocked express server

- Test run using `node express` (on root folder) + `npm run karma` (on app/products folder)

```shell
POST /product/$batch {}
--batch_id-1669635229623-138
Content-Type:application/http
Content-Transfer-Encoding:binary

GET Products?$count=true&$select=Category_ID,ID,StockStatus_ID,UnitOfMeasure_ID,description,imageUrl,name,quantity,rating&$expand=Category($select=ID,name),StockStatus($select=ID,name),Supplier($select=ID,name)&$skip=0&$top=30 HTTP/1.1
Accept:application/json;odata.metadata=minimal;IEEE754Compatible=true
Accept-Language:en-GB
X-CSRF-Token:hRMP2EcJMMSEn9IacUi1MQ==
Content-Type:application/json;charset=UTF-8;IEEE754Compatible=true


--batch_id-1669635229623-138--
Group ID: $auto.Workers
```