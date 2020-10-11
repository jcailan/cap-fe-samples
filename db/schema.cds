using {
    cuid,
    managed
} from './lib/common';

context md {
    entity Products : cuid, managed {
        Name             : localized String;
        Description      : localized String;
        ImageUrl         : String;
        ReleaseDate      : DateTime;
        DiscontinuedDate : DateTime;
        Price            : Decimal(16, 2);
        Height           : Decimal(16, 2);
        Width            : Decimal(16, 2);
        Depth            : Decimal(16, 2);
        Quantity         : Decimal(16, 2);
        ToUnitOfMeasure  : Association to UnitOfMeasures;
        ToCurrency       : Association to Currencies;
        ToDimensionUnit  : Association to DimensionUnits;
        ToSalesData      : Association to many td.SalesData
                               on ToSalesData.ToProduct = $self;
        ToCategory       : Association to Categories;
        ToSupplier       : Association to Suppliers;
        ToReviews        : Association to many td.ProductReviews
                               on ToReviews.ToProduct = $self;
    }

    entity Suppliers : cuid, managed {
        Name       : String;
        Street     : String;
        City       : String;
        State      : String(2);
        PostalCode : String(5);
        Country    : String(3);
        Email      : String;
        Phone      : String;
        Fax        : String;
        ToProduct  : Association to Products
                         on ToProduct.ToSupplier = $self;
    }

    entity Categories {
        key Id   : String(1);
            Name : localized String;
    }

    entity StockAvailability {
        key Id          : Integer;
            Description : localized String;
            ToProduct   : Association to view.Products
                              on ToProduct.StockAvailability = Id;
    }

    entity Currencies {
        key Id          : String(3);
            Description : localized String;
    }

    entity UnitOfMeasures {
        key Id          : String(2);
            Description : localized String;
    }

    entity DimensionUnits {
        key Id          : String(2);
            Description : localized String;
    }

    entity Months {
        key Id               : String(2);
            Description      : localized String;
            ShortDescription : localized String(3);
    }
}

context td {
    entity ProductReviews : cuid, managed {
        Name      : String;
        Rating    : Integer;
        Comment   : String;
        ToProduct : Association to md.Products;
    }

    entity SalesData : cuid {
        DeliveryDate    : DateTime;
        Revenue         : Decimal(16, 2);
        ToProduct       : Association to md.Products;
        ToCurrency      : Association to md.Currencies;
        ToDeliveryMonth : Association to md.Months;
    }
}

context view {
    entity AverageRating as
        select from td.ProductReviews {
            ToProduct.Id as ProductId,
            avg(
                Rating
            )            as AverageRating : Decimal(16, 2)
        }
        group by
            ToProduct.Id;

    entity Products      as
        select from md.Products
        mixin {
            ToStockAvailability : Association to md.StockAvailability
                                      on ToStockAvailability.Id = $projection.StockAvailability;
            ToAverageRating     : Association to AverageRating
                                      on ToAverageRating.ProductId = Id;
        }
        into {
            *,
            ToAverageRating.AverageRating as Rating,
            case
                when
                    Quantity >= 8
                then
                    3
                when
                    Quantity > 0
                then
                    2
                else
                    1
            end                           as StockAvailability : Integer,
            ToStockAvailability
        };
}
