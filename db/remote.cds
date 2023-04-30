context remote {

    @cdsx.api: 'product_external'
    entity Products {
        key ID               : UUID;

            @mandatory
            name             : String;

            @mandatory
            description      : String;
            imageUrl         : String;
            releaseDate      : DateTime;
            discontinuedDate : DateTime;

            @mandatory
            price            : Decimal(16, 2);
            height           : Decimal(16, 2);
            width            : Decimal(16, 2);
            depth            : Decimal(16, 2);

            @(
                mandatory,
                assert.range: [
                    0.00,
                    20.00
                ]
            )
            quantity         : Decimal(16, 2);

            @mandatory
            UnitOfMeasure_ID : String(3);

            @mandatory
            Currency_ID      : String(3);
            DimensionUnit_ID : String(2);

            @mandatory
            Category_ID      : String(1);
            Supplier_ID      : UUID;
            createdBy        : String;
            createdAt        : Timestamp;
            modifiedBy       : String;
            modifiedAt       : Timestamp;
    }
}
