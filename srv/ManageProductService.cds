using {md} from '../db/schema';
using {sap} from '@sap/cds/common';

service ManageProductService {

    @odata.draft.enabled
    entity Products  as projection on md.Products;

    @readonly
    entity Languages as projection on sap.common.Languages;

}
