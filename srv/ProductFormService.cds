using {md} from '../db/schema';

service ProductFormService {

    entity Products as projection on md.Products;

}
