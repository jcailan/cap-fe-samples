using ProductRemoteService as service from '../../srv/ProductRemoteService';

annotate service.Products with @(UI: {
    SelectionFields               : [
        Category_ID,
        Currency_ID
    ],
    HeaderInfo                    : {
        TypeName      : '{i18n>product}',
        TypeNamePlural: '{i18n>products}',
        ImageUrl      : imageUrl,
        Title         : {Value: name},
        Description   : {Value: description}
    },
    LineItem                      : {$value: [
        {Value: imageUrl},
        {
            Value            : name,
            ![@UI.Importance]: #High
        },
        {
            Value            : description,
            ![@UI.Importance]: #Low
        },
        {Value: Category_ID},
        {Value: price},
        {Value: quantity}
    ]},
    HeaderFacets                  : [
        {
            $Type : 'UI.ReferenceFacet',
            Target: '@UI.FieldGroup#BasicData',
            Label : '{i18n>technicalData}'
        },
        {
            $Type : 'UI.ReferenceFacet',
            Target: '@UI.DataPoint#Price'
        }
    ],
    Facets                        : [{
        $Type : 'UI.ReferenceFacet',
        Target: '@UI.FieldGroup#GeneralInformation',
        Label : '{i18n>generalInformation}'
    }],
    DataPoint #Price              : {
        Value      : price,
        ValueFormat: {NumberOfFractionalDigits: 3},
        Title      : '{i18n>price}'
    },
    FieldGroup #BasicData         : {Data: [
        {Value: Category_ID},
        {Value: releaseDate}
    ]},
    FieldGroup #GeneralInformation: {Data: [
        {Value: name},
        {Value: description},
        {Value: height},
        {Value: width},
        {Value: depth},
        {Value: price},
        {Value: quantity},
        {Value: Category_ID},
        {Value: UnitOfMeasure_ID},
        {Value: Currency_ID}
    ]}
}) {
    imageUrl         @(
        title: '{i18n>image}',
        UI   : {IsImageURL: true}
    );
    ID               @(UI: {Hidden: true});
    name             @(title: '{i18n>name}');
    description      @(title: '{i18n>description}');
    Category_ID      @(title: '{i18n>category}');
    releaseDate      @title: '{i18n>releaseDate}';
    discontinuedDate @title: '{i18n>discontinuedDate}';
    height           @(
        title   : '{i18n>height}',
        Measures: {Unit: DimensionUnit_ID}
    );
    width            @(
        title   : '{i18n>width}',
        Measures: {Unit: DimensionUnit_ID}
    );
    depth            @(
        title   : '{i18n>depth}',
        Measures: {Unit: DimensionUnit_ID}
    );
    DimensionUnit_ID @(title: '{i18n>dimensionUnit}');
    price            @(
        title   : '{i18n>price}',
        Measures: {Unit: Currency_ID}
    );
    Currency_ID      @(title: '{i18n>currency}');
    quantity         @(
        title   : '{i18n>quantity}',
        Measures: {Unit: UnitOfMeasure_ID}
    );
    UnitOfMeasure_ID @(title: '{i18n>unitOfMeasure}');
    Supplier_ID      @(UI: {Hidden});
    createdBy        @(title: '{i18n>createdBy}');
    createdAt        @(title: '{i18n>createdAt}');
    modifiedBy       @(title: '{i18n>modifiedBy}');
    modifiedAt       @(title: '{i18n>modifiedAt}');
};
