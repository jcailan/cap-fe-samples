using {
    cuid,
    managed
} from '@sap/cds/common';

context md {
    entity Products : cuid, managed {
        @mandatory
        name             : localized String;
        @mandatory
        description      : localized String;
        imageUrl         : String;
        releaseDate      : DateTime;
        discontinuedDate : DateTime;
        @mandatory
        price            : Decimal(16, 2);
        height           : Decimal(16, 2);
        width            : Decimal(16, 2);
        depth            : Decimal(16, 2);
        @(
            mandatory,
            assert.range : [
                0.00,
                20.00
            ]
        )
        quantity         : Decimal(16, 2);
        @mandatory
        UnitOfMeasure    : Association to one UnitOfMeasures;
        @mandatory
        Currency         : Association to one Currencies;
        DimensionUnit    : Association to one DimensionUnits;
        SalesData        : Association to many td.SalesData
                               on SalesData.Product = $self;
        @mandatory
        Category         : Association to one Categories;
        Supplier         : Association to one Suppliers;
        Reviews          : Association to many td.ProductReviews
                               on Reviews.Product = $self;
    }

    entity Suppliers : cuid, managed {
        name       : String;
        street     : String;
        city       : String;
        state      : String(2);
        postalCode : String(5);
        country    : String(3);
        email      : String;
        phone      : String;
        fax        : String;
        Product    : Association to one Products
                         on Product.Supplier = $self;
    }

    entity Categories {
        key ID   : String(1);
            name : localized String;
    }

    entity StockStatuses {
        key ID      : Integer;
            name    : localized String;
            Product : Association to one view.Products
                          on Product.StockStatus = $self;
    }

    entity Currencies {
        key ID   : String(3);
            name : localized String;
    }

    entity UnitOfMeasures {
        key ID   : String(2);
            name : localized String;
    }

    entity DimensionUnits {
        key ID   : String(2);
            name : localized String;
    }

    entity Months {
        key ID   : String(2);
            name : localized String;
            code : localized String(3);
    }
}

context td {
    entity ProductReviews : cuid, managed {
        name    : String;
        rating  : Integer;
        comment : String;
        Product : Association to one md.Products;
    }

    entity SalesData : cuid {
        deliveryDate  : DateTime;
        revenue       : Decimal(16, 2);
        Product       : Association to one md.Products;
        Currency      : Association to one md.Currencies;
        DeliveryMonth : Association to one md.Months;
    }
}

context view {

    entity AverageRatings as
        select from td.ProductReviews {
            Product.ID  as productId,
            avg(rating) as averageRating : Decimal(16, 2)
        }
        group by
            Product.ID;

    entity Products       as
        select from md.Products
        mixin {
            StockStatus   : Association to one md.StockStatuses
                                on StockStatus.ID = $projection.StockStatus_ID;
            AverageRating : Association to one AverageRatings
                                on AverageRating.productId = $projection.ID;
        }
        into {
            *,
            AverageRating.averageRating as rating,
            case
                when
                    quantity >= 8
                then
                    3
                when
                    quantity > 0
                then
                    2
                else
                    1
            end                         as StockStatus_ID : Integer,
            StockStatus
        };
}
