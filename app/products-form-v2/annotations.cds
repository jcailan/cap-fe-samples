using ProductFormService as service from '../../srv/ProductFormService';

annotate service.Products with @(
    Capabilities: {
        DeleteRestrictions: {Deletable: false},
        UpdateRestrictions: {Updatable: false},
    },
    UI          : {
        HeaderInfo                    : {
            TypeName      : '{i18n>product}',
            TypeNamePlural: '{i18n>products}'
        },
        Facets                        : [{
            $Type : 'UI.ReferenceFacet',
            Target: '@UI.FieldGroup#GeneralInformation',
            Label : '{i18n>generalInformation}'
        }],
        FieldGroup #GeneralInformation: {Data: [
            {Value: name},
            {Value: description},
            {Value: releaseDate},
            {Value: discontinuedDate},
            {Value: price},
            {Value: height},
            {Value: width},
            {Value: depth},
            {Value: quantity},
            {Value: UnitOfMeasure_ID},
            {Value: Currency_ID},
            {Value: DimensionUnit_ID},
            {Value: Category_ID}
        ]}
    }
) {
    name             @title: '{i18n>name}';
    description      @title: '{i18n>description}';
    Category         @(
        title : '{i18n>category}',
        Common: {
            Text           : Category.name,
            TextArrangement: #TextOnly
        }
    );
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
};
