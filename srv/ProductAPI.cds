using {md} from '../db/schema';

service ProductAPI {

    entity Products as projection on md.Products;

}
