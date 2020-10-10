using {
    cuid,
    managed
} from './lib/common';

context md {
    entity Products : cuid, managed {
        Name             : localized String;
        Description      : localized String;
        ReleaseDate      : DateTime;
        DiscontinuedDate : DateTime;
        Rating           : Integer;
        Price            : Decimal(16, 2);
        ToCurrency       : Association to Currencies;
        ToCategory       : Association to Categories;
    }

    entity Categories {
        key Id   : String(1);
            Name : localized String;
    }

    entity Currencies {
        key Id          : String(3);
            Description : localized String;
    }
}
