using {product_external as external} from './external/products';

@impl: './handler/ProductRemoteService.js'
service ProductRemoteService {

    // draft is not supported for remote services
    // @odata.draft.enabled
    entity Products as projection on external.Products;

}
