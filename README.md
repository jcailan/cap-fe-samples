# Getting Started

To replicate the issue:

1. On terminal 1:

```shell
# install cap dependencies
> npm install
# run cap app
> cds watch
```

1. On terminal 2:

```shell
# change to app directory
> cd app/products
# install ui5 dependencies
> npm install
# run cap app
> npm run karma
```