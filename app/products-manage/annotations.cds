using ManageProductService as service from '../../srv/ManageProductService';

annotate service.Products with @(UI.LineItem : [
    {
        $Type : 'UI.DataField',
        Label : 'name',
        Value : name,
    },
    {
        $Type : 'UI.DataField',
        Label : 'description',
        Value : description,
    },
    {
        $Type : 'UI.DataField',
        Label : 'imageUrl',
        Value : imageUrl,
    },
    {
        $Type : 'UI.DataField',
        Label : 'releaseDate',
        Value : releaseDate,
    },
    {
        $Type : 'UI.DataField',
        Label : 'discontinuedDate',
        Value : discontinuedDate,
    },
]);

annotate service.Products with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data  : [
            {
                $Type : 'UI.DataField',
                Label : 'name',
                Value : name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'description',
                Value : description,
            },
            {
                $Type : 'UI.DataField',
                Label : 'imageUrl',
                Value : imageUrl,
            },
            {
                $Type : 'UI.DataField',
                Label : 'releaseDate',
                Value : releaseDate,
            },
            {
                $Type : 'UI.DataField',
                Label : 'discontinuedDate',
                Value : discontinuedDate,
            },
            {
                $Type : 'UI.DataField',
                Label : 'price',
                Value : price,
            },
            {
                $Type : 'UI.DataField',
                Label : 'height',
                Value : height,
            },
            {
                $Type : 'UI.DataField',
                Label : 'width',
                Value : width,
            },
            {
                $Type : 'UI.DataField',
                Label : 'depth',
                Value : depth,
            },
            {
                $Type : 'UI.DataField',
                Label : 'quantity',
                Value : quantity,
            },
            {
                $Type : 'UI.DataField',
                Label : 'UnitOfMeasure_ID',
                Value : UnitOfMeasure_ID,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Currency_ID',
                Value : Currency_ID,
            },
            {
                $Type : 'UI.DataField',
                Label : 'DimensionUnit_ID',
                Value : DimensionUnit_ID,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Category_ID',
                Value : Category_ID,
            },
            {
                $Type : 'UI.DataField',
                Label : 'rating',
                Value : rating,
            },
            {
                $Type : 'UI.DataField',
                Label : 'StockStatus_ID',
                Value : StockStatus_ID,
            },
        ],
    },
    UI.Facets                      : [{
        $Type  : 'UI.ReferenceFacet',
        ID     : 'GeneratedFacet1',
        Label  : 'General Information',
        Target : '@UI.FieldGroup#GeneratedGroup1',
    }, ]
);
