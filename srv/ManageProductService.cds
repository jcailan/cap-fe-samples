using {md} from '../db/schema';

service ManageProductService {

    @odata.draft.enabled
    entity Products as projection on md.Products;

}
