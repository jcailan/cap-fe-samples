using {northwind} from './NorthWind';

/**
 * Annotations for Products Entity
 */
annotate northwind.Products with @(
    Common : {Label : '{i18n>Products}'},
    UI     : {
        SelectionFields : [ToCategory_Id],
        LineItem        : {$value : [
        {Value : Name},
        {Value : Description},
        {Value : ToCategory_Id},
        {Value : ReleaseDate},
        {Value : DiscontinuedDate},
        {Value : Rating},
        {Value : Price}
        ]}
    }
) {
    Id               @title : '{i18n>Id}';
    Name             @title : '{i18n>Name}';
    Description      @title : '{i18n>Description}';
    ToCategory       @(
        title  : '{i18n>Category}',
        Common : {
            Text      : {
                $value                 : Category,
                ![@UI.TextArrangement] : #TextOnly
            },
            ValueList : {
                SearchSupported : true,
                CollectionPath  : 'VH_Categories',
                Parameters      : [
                {
                    $Type             : 'Common.ValueListParameterInOut',
                    LocalDataProperty : ToCategory_Id,
                    ValueListProperty : 'Code'
                },
                {
                    $Type             : 'Common.ValueListParameterInOut',
                    LocalDataProperty : Category,
                    ValueListProperty : 'Text'
                }
                ]
            }
        }
    );
    ReleaseDate      @title : '{i18n>ReleaseDate}';
    DiscontinuedDate @title : '{i18n>DiscontinuedDate}';
    Rating           @title : '{i18n>Rating}';
    Price            @title : '{i18n>Price}';
};

/**
 * Annotations for VH_Categories Entity
 */
annotate northwind.VH_Categories with {
    Code @(
        title  : '{i18n>Code}',
        UI     : {Hidden : true},
        Common : {Text : {
            $value                 : Text,
            ![@UI.TextArrangement] : #TextOnly
        }}
    );
    Text @(
        title : '{i18n>Category}',
        UI    : {HiddenFilter : true}
    );
};
