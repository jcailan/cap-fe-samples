using {
    md,
    td,
    view
} from '../db/schema';

service ProductService {

    entity Products          as
        select from view.Products {
            key ID,
                name,
                description,
                imageUrl,
                releaseDate,
                discontinuedDate,
                rating,
                price,
                height,
                width,
                depth,
                quantity,
                UnitOfMeasure,
                Currency,
                Category,
                Category.name as category @readonly,
                DimensionUnit,
                SalesData,
                StockStatus,
                stockStatus,
                Supplier,
                Reviews
        };

    @readonly
    entity Suppliers         as
        select from md.Suppliers {
            key ID,
                name,
                email,
                phone,
                fax,
                Product
        };

    @readonly
    entity Reviews           as
        select from td.ProductReviews {
            key ID,
                name,
                rating,
                comment,
                createdAt,
                Product
        };

    @readonly
    entity SalesData         as
        select from td.SalesData {
            key ID,
                deliveryDate,
                revenue,
                Currency.ID        as currencyId,
                DeliveryMonth.ID   as deliveryMonthId,
                DeliveryMonth.name as deliveryMonth,
                Product
        };

    @readonly
    entity StockStatuses     as projection on md.StockStatuses;

    @readonly
    entity VH_Categories     as projection on md.Categories;

    @readonly
    entity VH_Currencies     as projection on md.Currencies;

    @readonly
    entity VH_UnitOfMeasures as projection on md.UnitOfMeasures;

    @readonly
    entity VH_DimensionUnits as projection on md.DimensionUnits;
}
