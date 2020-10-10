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
            ToUnitOfMeasure.Id as UnitOfMeasure,
            ToCurrency,
            ToCategory,
            ToCategory.Name    as Category,
            ToStockAvailability,
            StockAvailability
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
}
