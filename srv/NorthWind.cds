using {
    md,
    td,
    view
} from '../db/schema';

service northwind {

    entity Products          as
        select from view.Products {
            Id,
            Name,
            Description,
            ImageUrl,
            ReleaseDate,
            DiscontinuedDate,
            Rating,
            Price,
            Height,
            Width,
            Depth,
            Quantity,
            ToUnitOfMeasure,
            ToCurrency,
            ToCategory,
            ToCategory.Name as Category,
            ToDimensionUnit,
            ToSalesData,
            StockAvailability,
            ToStockAvailability,
            ToSupplier,
            ToReviews
        };

    @readonly
    entity Suppliers         as
        select from md.Suppliers {
            Id,
            Name,
            Email,
            Phone,
            Fax,
            ToProduct
        };

    @readonly
    entity Reviews           as
        select from td.ProductReviews {
            Id,
            Name,
            Rating,
            Comment,
            CreatedAt,
            ToProduct
        };

    @readonly
    entity SalesData         as
        select from td.SalesData {
            Id,
            DeliveryDate,
            Revenue,
            ToCurrency.Id               as CurrencyKey,
            ToDeliveryMonth.Id          as DeliveryMonthId,
            ToDeliveryMonth.Description as DeliveryMonth,
            ToProduct
        };

    @readonly
    entity StockAvailability as
        select from md.StockAvailability {
            Id,
            Description,
            ToProduct
        };

    @readonly
    entity VH_Categories     as
        select from md.Categories {
            Id   as Code,
            Name as Text
        };

    @readonly
    entity VH_Currencies     as
        select from md.Currencies {
            Id          as Code,
            Description as Text
        };

    @readonly
    entity VH_UnitOfMeasures as
        select from md.UnitOfMeasures {
            Id          as Code,
            Description as Text
        };

    @readonly
    entity VH_DimensionUnits as
        select from md.DimensionUnits {
            Id          as Code,
            Description as Text
        };
}

annotate northwind.Products with @(
    Capabilities                      : {DeleteRestrictions : {Deletable : false}},
    Common.Label                      : '{i18n>Products}',
    UI.SelectionFields                : [
    ToCategory_Id,
    ToCurrency_Id,
    StockAvailability
    ],
    UI.DataPoint #StockAvailability   : {
        Title       : '{i18n>StockAvailability}',
        Value       : ToStockAvailability.Id,
        Criticality : StockAvailability
    },
    UI.DataPoint #Availability        : {
        Title         : '{i18n>Availability}',
        Description   : '{i18n>StockIndicator}',
        Value         : Quantity,
        TargetValue   : 20,
        Criticality   : StockAvailability,
        Visualization : #Progress
    },
    UI.DataPoint #AverageRatingValue  : {
        Value         : Rating,
        Title         : '{i18n>Rating}',
        TargetValue   : 5,
        Visualization : #Rating
    },
    UI.DataPoint #Price               : {
        Value : Price,
        Title : '{i18n>Price}'
    },
    UI.FieldGroup #GeneralInformation : {Data : [
    {
        Value             : ToCategory_Id,
        ![@UI.Importance] : #High
    },
    {
        Value             : ReleaseDate,
        ![@UI.Importance] : #Low
    },
    {
        $Type             : 'UI.DataFieldForAnnotation',
        Label             : '{i18n>Supplier}',
        Target            : 'ToSupplier/@Communication.Contact',
        ![@UI.Importance] : #High
    }
    ]},
    UI.FieldGroup #TechnicalData      : {Data : [
    {
        Value             : Height,
        ![@UI.Importance] : #Medium
    },
    {
        Value             : Width,
        ![@UI.Importance] : #Medium
    },
    {
        Value             : Depth,
        ![@UI.Importance] : #Medium
    }
    ]},
    UI.HeaderFacets                   : [
    {
        $Type  : 'UI.ReferenceFacet',
        Target : '@UI.FieldGroup#GeneralInformation',
        Label  : '{i18n>GeneralInformation}'
    },
    {
        $Type  : 'UI.ReferenceFacet',
        Target : '@UI.DataPoint#AverageRatingValue'
    },
    {
        $Type  : 'UI.ReferenceFacet',
        Target : '@UI.DataPoint#Price'
    },
    {
        $Type  : 'UI.ReferenceFacet',
        Target : '@UI.DataPoint#StockAvailability'
    },
    {
        $Type  : 'UI.ReferenceFacet',
        Target : '@UI.DataPoint#Availability'
    }
    ],
    UI.Facets                         : [
    {
        $Type  : 'UI.ReferenceFacet',
        Target : '@UI.FieldGroup#TechnicalData',
        Label  : '{i18n>TechnicalData}'
    },
    {
        $Type  : 'UI.ReferenceFacet',
        Target : 'ToReviews/@UI.LineItem',
        Label  : '{i18n>ProductReviews}'
    },
    {
        $Type  : 'UI.ReferenceFacet',
        Target : 'ToSalesData/@UI.Chart',
        Label  : '{i18n>MonthlyRevenue}'
    },
    {
        $Type  : 'UI.ReferenceFacet',
        Target : 'ToSalesData/@UI.LineItem',
        Label  : '{i18n>SalesData}'
    }
    ],
    UI.HeaderInfo                     : {
        TypeName       : '{i18n>Product}',
        TypeNamePlural : '{i18n>Products}',
        ImageUrl       : ImageUrl,
        Title          : {Value : Name},
        Description    : {Value : Description}
    },
    UI.LineItem                       : [
    {
        $Type             : 'UI.DataField',
        Value             : ImageUrl,
        ![@UI.Importance] : #High
    },
    {
        $Type             : 'UI.DataField',
        Value             : Name,
        ![@UI.Importance] : #High
    },
    {
        $Type             : 'UI.DataField',
        Value             : Description,
        ![@UI.Importance] : #High
    },
    {
        $Type             : 'UI.DataField',
        Value             : ToCategory_Id,
        ![@UI.Importance] : #High
    },
    {
        $Type             : 'UI.DataFieldForAnnotation',
        Label             : '{i18n>Supplier}',
        Target            : 'ToSupplier/@Communication.Contact',
        ![@UI.Importance] : #High
    },
    {
        $Type             : 'UI.DataField',
        Value             : ReleaseDate,
        ![@UI.Importance] : #High
    },
    {
        $Type             : 'UI.DataField',
        Value             : ToStockAvailability.Id,
        Criticality       : ToStockAvailability.Id,
        ![@UI.Importance] : #High
    },
    {
        $Type             : 'UI.DataFieldForAnnotation',
        Target            : '@UI.DataPoint#AverageRatingValue',
        ![@UI.Importance] : #High
    },
    {
        $Type             : 'UI.DataField',
        Value             : Price,
        ![@UI.Importance] : #High
    }
    ]
) {
    ImageUrl          @(
        title         : '{i18n>Image}',
        UI.IsImageURL : true
    );
    Id                @title : '{i18n>Id}';
    Name              @(
        mandatory,
        title : '{i18n>Name}'
    );
    Description       @(
        mandatory,
        title : '{i18n>Description}'
    );
    Category          @readonly;
    ToCategory        @(
        mandatory,
        title  : '{i18n>Category}',
        Common : {
            Text      : {
                $value                 : Category,
                ![@UI.TextArrangement] : #TextOnly
            },
            ValueList : {
                SearchSupported : true,
                CollectionPath  : 'VH_Categories',
                Parameters      : [
                {
                    $Type             : 'Common.ValueListParameterInOut',
                    LocalDataProperty : ToCategory_Id,
                    ValueListProperty : 'Code'
                },
                {
                    $Type             : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty : 'Text'
                }
                ]
            }
        }
    );
    ReleaseDate       @title : '{i18n>ReleaseDate}';
    DiscontinuedDate  @title : '{i18n>DiscontinuedDate}';
    Rating            @title : '{i18n>Rating}';
    Height            @(
        title         : '{i18n>Height}',
        Measures.Unit : ToDimensionUnit_Id
    );
    Width             @(
        title         : '{i18n>Width}',
        Measures.Unit : ToDimensionUnit_Id
    );
    Depth             @(
        title         : '{i18n>Depth}',
        Measures.Unit : ToDimensionUnit_Id
    );
    ToDimensionUnit   @(
        title                           : '{i18n>DimensionUnit}',
        Common.ValueListWithFixedValues : false,
        Common.ValueList                : {
            SearchSupported : true,
            CollectionPath  : 'VH_DimensionUnits',
            Parameters      : [
            {
                $Type             : 'Common.ValueListParameterInOut',
                LocalDataProperty : ToDimensionUnit_Id,
                ValueListProperty : 'Code'
            },
            {
                $Type             : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'Text'
            }
            ]
        }
    );
    Price             @(
        mandatory,
        title         : '{i18n>Price}',
        Measures.Unit : ToCurrency_Id
    );
    ToCurrency        @(
        mandatory,
        title                           : '{i18n>CurrencyKey}',
        Common.ValueListWithFixedValues : false,
        Common.ValueList                : {
            SearchSupported : true,
            CollectionPath  : 'VH_Currencies',
            Parameters      : [
            {
                $Type             : 'Common.ValueListParameterInOut',
                LocalDataProperty : ToCurrency_Id,
                ValueListProperty : 'Code'
            },
            {
                $Type             : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'Text'
            }
            ]
        }
    );
    Quantity          @(
        mandatory,
        assert.range  : [
        0.00,
        20.00
        ],
        title         : '{i18n>Quantity}',
        Measures.Unit : ToUnitOfMeasure_Id
    );
    ToUnitOfMeasure   @(
        mandatory,
        title                           : '{i18n>UnitOfMeasure}',
        Common.ValueListWithFixedValues : false,
        Common.ValueList                : {
            SearchSupported : true,
            CollectionPath  : 'VH_UnitOfMeasures',
            Parameters      : [
            {
                $Type             : 'Common.ValueListParameterInOut',
                LocalDataProperty : ToUnitOfMeasure_Id,
                ValueListProperty : 'Code'
            },
            {
                $Type             : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'Text'
            }
            ]
        }
    );
    StockAvailability @(
        title  : '{i18n>StockAvailability}',
        Common : {
            ValueListWithFixedValues : true,
            ValueList                : {
                CollectionPath : 'StockAvailability',
                Parameters     : [{
                    $Type             : 'Common.ValueListParameterInOut',
                    LocalDataProperty : StockAvailability,
                    ValueListProperty : 'Id'
                }]
            }
        }
    );
};

annotate northwind.Suppliers with @(Communication : {Contact : {
    fn    : Name,
    role  : '{i18n>Supplier}',
    photo : 'sap-icon://supplier',
    email : [{
        type    : #work,
        address : Email
    }],
    tel   : [
    {
        type : #work,
        uri  : Phone
    },
    {
        type : #fax,
        uri  : Fax
    }
    ]
}});

annotate northwind.Reviews with @(UI : {
    HeaderInfo          : {
        TypeName       : '{i18n>Review}',
        TypeNamePlural : '{i18n>Reviews}',
        Title          : {Value : Name},
        Description    : {Value : CreatedAt}
    },
    HeaderFacets        : [{
        $Type  : 'UI.ReferenceFacet',
        Target : '@UI.DataPoint#Rating'
    }],
    Facets              : [{
        $Type  : 'UI.ReferenceFacet',
        Target : '@UI.FieldGroup#Comment',
        Label  : '{i18n>Review}'
    }],
    LineItem            : [
    {
        Value             : Name,
        ![@UI.Importance] : #High
    },
    {
        Value             : CreatedAt,
        ![@UI.Importance] : #High
    },
    {
        $Type             : 'UI.DataFieldForAnnotation',
        Target            : '@UI.DataPoint#Rating',
        ![@UI.Importance] : #High
    },
    {
        Value             : Comment,
        ![@UI.Importance] : #High
    }
    ],
    DataPoint #Rating   : {
        Value         : Rating,
        Title         : '{i18n>Rating}',
        TargetValue   : 5,
        Visualization : #Rating
    },
    FieldGroup #Comment : {Data : [{Value : Comment}]}
}) {
    Id        @(UI : {Hidden : true});
    ToProduct @(UI : {Hidden : true});
    Name      @(title : '{i18n>Name}');
    Rating    @(title : '{i18n>Rating}');
    CreatedAt @(title : '{i18n>CreatedOn}');
    Comment   @(
        title : '{i18n>Comment}',
        UI    : {MultiLineText : true}
    );
};

annotate northwind.SalesData with @(
    sap.semantics          : 'aggregate',
    UI.Chart               : {
        Title               : '{i18n>RevenueHistory}',
        ChartType           : #Column,
        Dimensions          : [DeliveryMonthId],
        DimensionAttributes : [{
            Dimension : DeliveryMonthId,
            Role      : #Category
        }],
        Measures            : [Revenue],
        MeasureAttributes   : [{
            Measure : Revenue,
            Role    : #Axis1
        }]
    },
    UI.PresentationVariant : {
        SortOrder      : [{Property : DeliveryMonthId}],
        Visualizations : ['@UI.LineItem']
    },
    UI.HeaderInfo          : {
        TypeName       : '{i18n>SalesOrder}',
        TypeNamePlural : '{i18n>SalesOrders}'
    },
    UI.LineItem            : [
    {
        $Type             : 'UI.DataField',
        Value             : DeliveryMonthId,
        ![@UI.Importance] : #High
    },
    {
        $Type             : 'UI.DataField',
        Value             : Revenue,
        ![@UI.Importance] : #High
    },
    {
        $Type             : 'UI.DataField',
        Value             : DeliveryDate,
        ![@UI.Importance] : #High
    }
    ]
) {
    Id              @(
        sap.aggregation.role : 'dimension',
        UI.Hidden            : true
    );
    DeliveryMonthId @(
        title                : '{i18n>DeliveryMonthId}',
        sap.aggregation.role : 'dimension',
        Common.Text          : {
            $value                 : DeliveryMonth,
            ![@UI.TextArrangement] : #TextOnly
        }
    );
    DeliveryMonth   @(
        title                : '{i18n>DeliveryMonth}',
        sap.aggregation.role : 'dimension',
        UI.Hidden            : true
    );
    Revenue         @(
        title                : '{i18n>Revenue}',
        sap.aggregation.role : 'measure',
        Measures.Unit        : CurrencyKey
    );
    DeliveryDate    @(
        title                : '{i18n>DeliveryDate}',
        sap.aggregation.role : 'dimension'
    );
    CurrencyKey     @(
        sap.aggregation.role : 'dimension',
        UI.Hidden            : true
    );
    ToProduct       @(
        sap.aggregation.role : 'dimension',
        UI.Hidden            : true
    );
};

annotate northwind.StockAvailability with {
    Id @(
        title  : '{i18n>StockAvailability}',
        Common : {Text : {
            $value                 : Description,
            ![@UI.TextArrangement] : #TextOnly
        }}
    )
};

annotate northwind.VH_Categories with {
    Code @(
        title : '{i18n>Code}',
        UI    : {Hidden : true}
    );
    Text @(
        title : '{i18n>Category}',
        UI    : {HiddenFilter : true}
    );
};

annotate northwind.VH_Currencies with {
    Code @(
        title           : '{i18n>Currency}',
        UI.HiddenFilter : true
    );
    Text @(
        title           : '{i18n>Description}',
        UI.HiddenFilter : true
    );
};
