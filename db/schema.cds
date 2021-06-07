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
        ToReviews        : Composition of many td.ProductReviews
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
        SELECT FROM td.ProductReviews {
            ToProduct.Id AS ProductId,
            avg(
                Rating
            )            AS AverageRating : Decimal(16, 2)
        }
        GROUP BY
            ToProduct.Id;

    entity Products      as
        SELECT FROM md.Products
        MIXIN {
            ToStockAvailability : Association TO md.StockAvailability
                                      ON ToStockAvailability.Id = $projection.StockAvailability;
            ToAverageRating     : Association TO AverageRating
                                      ON ToAverageRating.ProductId = Id;
        }
        INTO {
            *,
            ToAverageRating.AverageRating AS Rating,
            CASE
                WHEN
                    Quantity >= 8
                THEN
                    3
                WHEN
                    Quantity > 0
                THEN
                    2
                ELSE
                    1
            END                           AS StockAvailability : Integer,
            ToStockAvailability
        };
}
