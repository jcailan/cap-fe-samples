using {
    md,
    td,
    view
} from '../db/schema';

service ProductService {

    @readonly
    entity Products          as projection on view.Products;

    @readonly
    entity Suppliers         as projection on md.Suppliers;

    @readonly
    entity Reviews           as projection on td.ProductReviews;

    @readonly
    entity SalesData         as
        select from td.SalesData {
            *,
            // @UI.Chart term doesn't support navigation properties
            // so here lies a workaround
            DeliveryMonth.name as deliveryMonth
        };

    @readonly
    entity VH_StockStatuses  as projection on md.StockStatuses;

    @readonly
    entity VH_Categories     as projection on md.Categories;

    @readonly
    entity VH_Currencies     as projection on md.Currencies;

    @readonly
    entity VH_UnitOfMeasures as projection on md.UnitOfMeasures;

    @readonly
    entity VH_DimensionUnits as projection on md.DimensionUnits;

    @readonly
    entity VH_Months         as projection on md.Months;

}
