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
        Rating           : Integer;
        Price            : Decimal(16, 2);
        Quantity         : Decimal(16, 2);
        ToUnitOfMeasure  : Association to UnitOfMeasures;
        ToCurrency       : Association to Currencies;
        ToCategory       : Association to Categories;
        ToSupplier       : Association to Suppliers;
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

}

context view {
    entity Products as
        select from md.Products
        mixin {
            ToStockAvailability : Association to md.StockAvailability
                                      on ToStockAvailability.Id = $projection.StockAvailability
        }
        into {
            *,
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
            end as StockAvailability : Integer,
            ToStockAvailability
        }
}
