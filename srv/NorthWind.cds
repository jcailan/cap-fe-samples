using {
    md,
    view
} from '../db/schema';

service northwind {

    @readonly
    entity Products          as
        select from view.Products {
            Id,
            Name,
            Description,
            ImageUrl,
            ReleaseDate,
            DiscontinuedDate,
            Rating,
            Price,
            Quantity,
            ToUnitOfMeasure,
            ToCurrency,
            ToCategory,
            ToCategory.Name as Category,
            ToStockAvailability,
            StockAvailability,
            ToSupplier
        };

    @readonly
    entity Suppliers         as
        select from md.Suppliers {
            Id,
            Name,
            Email,
            Phone,
            Fax,
            ToProduct
        };

    @readonly
    entity StockAvailability as
        select from md.StockAvailability {
            Id,
            Description,
            ToProduct
        };

    @readonly
    entity VH_Categories     as
        select from md.Categories {
            Id   as Code,
            Name as Text
        };

    @readonly
    entity VH_Currencies     as
        select from md.Currencies {
            Id          as Code,
            Description as Text
        };

    @readonly
    entity VH_UnitOfMeasures as
        select from md.UnitOfMeasures {
            Id          as Code,
            Description as Text
        };
}
