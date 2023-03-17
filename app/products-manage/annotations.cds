using ManageProductService as service from '../../srv/ManageProductService';

annotate service.Products with @(UI: {
    LineItem                      : [
        {
            $Type: 'UI.DataField',
            Value: imageUrl,
        },
        {
            $Type: 'UI.DataField',
            Value: name,
        },
        {
            $Type: 'UI.DataField',
            Value: description,
        },
        {
            $Type: 'UI.DataField',
            Value: releaseDate,
        },
        {
            $Type: 'UI.DataField',
            Value: discontinuedDate,
        }
    ],
    HeaderInfo                    : {
        TypeName      : '{i18n>product}',
        TypeNamePlural: '{i18n>products}',
        ImageUrl      : imageUrl,
        Title         : {Value: name},
        Description   : {Value: description}
    },
    Facets                        : [
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'GeneralInformation',
            Label : '{i18n>generalInformation}',
            Target: '@UI.FieldGroup#GeneralInformation',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : '{i18n>translations}',
            Target: 'texts/@UI.LineItem'
        }
    ],
    FieldGroup #GeneralInformation: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Value: name,
            },
            {
                $Type: 'UI.DataField',
                Value: description,
            },
            {
                $Type: 'UI.DataField',
                Value: releaseDate,
            },
            {
                $Type: 'UI.DataField',
                Value: discontinuedDate,
            },
            {
                $Type: 'UI.DataField',
                Value: price,
            },
            {
                $Type: 'UI.DataField',
                Value: height,
            },
            {
                $Type: 'UI.DataField',
                Value: width,
            },
            {
                $Type: 'UI.DataField',
                Value: depth,
            },
            {
                $Type: 'UI.DataField',
                Value: quantity,
            },
            {
                $Type: 'UI.DataField',
                Value: UnitOfMeasure_ID,
            },
            {
                $Type: 'UI.DataField',
                Value: Currency_ID,
            },
            {
                $Type: 'UI.DataField',
                Value: DimensionUnit_ID,
            },
            {
                $Type: 'UI.DataField',
                Value: Category_ID,
            }
        ]
    }
}) {
    imageUrl         @(
        title: '{i18n>image}',
        UI   : {IsImageURL: true}
    );
    ID               @(UI: {Hidden: true});
    name             @title: '{i18n>name}';
    description      @title: '{i18n>description}';
    Category         @(title: '{i18n>category}');
    releaseDate      @title: '{i18n>releaseDate}';
    discontinuedDate @title: '{i18n>discontinuedDate}';
    rating           @title: '{i18n>rating}';
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
    DimensionUnit    @(title: '{i18n>dimensionUnit}');
    price            @(
        title   : '{i18n>price}',
        Measures: {Unit: Currency_ID}
    );
    Currency         @(title: '{i18n>currency}');
    quantity         @(
        title   : '{i18n>quantity}',
        Measures: {Unit: UnitOfMeasure_ID}
    );
    UnitOfMeasure    @(title: '{i18n>unitOfMeasure}');
    StockStatus_ID   @(
        title : '{i18n>stockStatus}',
        Common: {
            Text                    : StockStatus.name,
            TextArrangement         : #TextOnly,
            ValueListWithFixedValues: true,
            ValueList               : {
                CollectionPath: 'VH_StockStatuses',
                Parameters    : [{
                    $Type            : 'Common.ValueListParameterInOut',
                    LocalDataProperty: StockStatus_ID,
                    ValueListProperty: 'ID'
                }]
            }
        }
    );
};

annotate service.Products.texts with @(UI: {
    Identification : [{Value: name}],
    SelectionFields: [
        locale,
        name,
        description
    ],
    LineItem       : [
        {
            Value: locale,
            Label: '{i18n>locale}'
        },
        {
            Value: name,
            Label: '{i18n>name}'
        },
        {
            Value: description,
            Label: '{i18n>description}'
        },
    ]
}) {
    ID       @UI.Hidden;
    ID_texts @UI.Hidden;
    locale   @(
        ValueList.entity: 'Languages',
        Common.ValueListWithFixedValues,
    );
};
