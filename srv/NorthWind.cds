using {md} from '../db/schema';

service northwind {

    @readonly
    entity Products as
        select from md.Products {
            Id,
            Name,
            Description,
            ReleaseDate,
            DiscontinuedDate,
            Rating,
            Price
        };
}
