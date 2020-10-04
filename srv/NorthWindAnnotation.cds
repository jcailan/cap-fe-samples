using {northwind} from './NorthWind';

/**
 * Annotations for Products Entity
 */
annotate northwind.Products with @(
    Common : {Label : '{i18n>Products}'},
    UI     : {LineItem : {$value : [
    {Value : Name},
    {Value : Description},
    {Value : ReleaseDate},
    {Value : DiscontinuedDate},
    {Value : Rating},
    {Value : Price}
    ]}}
) {
    Id               @title : '{i18n>Id}';
    Name             @title : '{i18n>Name}';
    Description      @title : '{i18n>Description}';
    ReleaseDate      @title : '{i18n>ReleaseDate}';
    DiscontinuedDate @title : '{i18n>DiscontinuedDate}';
    Rating           @title : '{i18n>Rating}';
    Price            @title : '{i18n>Price}';
};
