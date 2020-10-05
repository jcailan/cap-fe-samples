using {md} from '../db/schema';

service northwind {

    @readonly
    entity Products      as
        select from md.Products {
            Id,
            Name,
            Description,
            ReleaseDate,
            DiscontinuedDate,
            Rating,
            Price,
            ToCategory,
            ToCategory.Name as Category
        };

    @readonly
    entity VH_Categories as
        select from md.Categories {
            Id   as Code,
            Name as Text
        };
}
