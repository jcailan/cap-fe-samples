using {
    md,
    td,
    view
} from '../db/schema';

service ManageProductService {

    @odata.draft.enabled
    entity Products as projection on view.Products;

}
