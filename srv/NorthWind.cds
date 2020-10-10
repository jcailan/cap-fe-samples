using {md} from '../db/schema';

service northwind {

    @readonly
    entity Products      as
        select from md.Products {
            Id,
            Name,
            Description,
            ImageUrl,
            ReleaseDate,
            DiscontinuedDate,
            Rating,
            Price,
            ToCurrency,
            ToCategory,
            ToCategory.Name as Category
        };

    @readonly
    entity VH_Categories as
        select from md.Categories {
            Id   as Code,
            Name as Text
        };

    @readonly
    entity VH_Currencies as
        select from md.Currencies {
            Id          as Code,
            Description as Text
        };
}
