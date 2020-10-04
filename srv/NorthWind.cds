using {md} from '../db/schema';

service northwind {

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
