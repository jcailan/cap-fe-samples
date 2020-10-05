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
        Price            : Double;
        ToCategory       : Association to Categories;
    }

    entity Categories {
        key Id   : String(1);
            Name : localized String;
    }
}
