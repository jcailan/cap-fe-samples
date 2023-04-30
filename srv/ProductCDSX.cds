using {remote} from '../db/remote';

service ProductCDSX {

    @odata.draft.enabled
    entity Products as projection on remote.Products;

}
