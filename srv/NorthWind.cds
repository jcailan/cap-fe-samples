using {
    md,
    td,
    view
} from '../db/schema';

service northwind {

    entity Products          as
        SELECT FROM view.Products {
            Id,
            Name                        @mandatory,
            Description                 @mandatory,
            ImageUrl,
            ReleaseDate,
            DiscontinuedDate,
            Rating,
            Price                       @mandatory,
            Height,
            Width,
            Depth,
            Quantity                    @(
                mandatory,
                assert.range : [
                    0.00,
                    20.00
                ]
            ),
            ToUnitOfMeasure             @mandatory,
            ToCurrency                  @mandatory,
            ToCategory                  @mandatory,
            ToCategory.Name AS Category @readonly,
            ToDimensionUnit,
            ToSalesData,
            ToStockAvailability,
            StockAvailability,
            ToSupplier,
            ToReviews
        };

    @readonly
    entity Suppliers         as
        SELECT FROM md.Suppliers {
            Id,
            Name,
            Email,
            Phone,
            Fax,
            ToProduct
        };

    @readonly
    entity Reviews           as
        SELECT FROM td.ProductReviews {
            Id,
            Name,
            Rating,
            Comment,
            CreatedAt,
            ToProduct
        };

    @readonly
    entity SalesData         as
        SELECT FROM td.SalesData {
            Id,
            DeliveryDate,
            Revenue,
            ToCurrency.Id               AS CurrencyKey,
            ToDeliveryMonth.Id          AS DeliveryMonthId,
            ToDeliveryMonth.Description AS DeliveryMonth,
            ToProduct
        };

    @readonly
    entity StockAvailability as
        SELECT FROM md.StockAvailability {
            Id,
            Description,
            ToProduct
        };

    @readonly
    entity VH_Categories     as
        SELECT FROM md.Categories {
            Id   AS Code,
            Name AS Text
        };

    @readonly
    entity VH_Currencies     as
        SELECT FROM md.Currencies {
            Id          AS Code,
            Description AS Text
        };

    @readonly
    entity VH_UnitOfMeasures as
        SELECT FROM md.UnitOfMeasures {
            Id          AS Code,
            Description AS Text
        };

    @readonly
    entity VH_DimensionUnits as
        SELECT FROM md.DimensionUnits {
            Id          AS Code,
            Description AS Text
        };
}
