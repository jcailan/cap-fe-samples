using {northwind} from './NorthWind';

/**
 * Annotations for Products Entity
 */
annotate northwind.Products with @(
    Capabilities : {DeleteRestrictions : {Deletable : false}},
    Common       : {Label : '{i18n>Products}'},
    UI           : {
        SelectionFields                : [
            ToCategory_Id,
            ToCurrency_Id,
            StockAvailability
        ],
        HeaderInfo                     : {
            TypeName       : '{i18n>Product}',
            TypeNamePlural : '{i18n>Products}',
            ImageUrl       : ImageUrl,
            Title          : {Value : Name},
            Description    : {Value : Description}
        },
        LineItem                       : {$value : [
            {Value : ImageUrl},
            {Value : Name},
            {Value : Description},
            {Value : ToCategory_Id},
            {
                $Type  : 'UI.DataFieldForAnnotation',
                Label  : '{i18n>Supplier}',
                Target : 'ToSupplier/@Communication.Contact'
            },
            {Value : ReleaseDate},
            {
                Value       : ToStockAvailability.Id,
                Criticality : ToStockAvailability.Id
            },
            {
                $Type  : 'UI.DataFieldForAnnotation',
                Target : '@UI.DataPoint#AverageRatingValue'
            },
            {Value : Price}
        ]},
        HeaderFacets                   : [
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
        Facets                         : [
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
        DataPoint #AverageRatingValue  : {
            Value         : Rating,
            Title         : '{i18n>Rating}',
            TargetValue   : 5,
            Visualization : #Rating
        },
        DataPoint #Price               : {
            Value : Price,
            Title : '{i18n>Price}'
        },
        DataPoint #StockAvailability   : {
            Title       : '{i18n>StockAvailability}',
            Value       : ToStockAvailability.Id,
            Criticality : StockAvailability
        },
        DataPoint #Availability        : {
            Title         : '{i18n>Availability}',
            Description   : '{i18n>StockIndicator}',
            Value         : Quantity,
            TargetValue   : 20,
            Criticality   : StockAvailability,
            Visualization : #Progress
        },
        FieldGroup #GeneralInformation : {Data : [
            {Value : ToCategory_Id},
            {Value : ReleaseDate},
            {
                $Type  : 'UI.DataFieldForAnnotation',
                Label  : '{i18n>Supplier}',
                Target : 'ToSupplier/@Communication.Contact'
            }
        ]},
        FieldGroup #TechnicalData      : {Data : [
            {Value : Height},
            {Value : Width},
            {Value : Depth}
        ]}
    }
) {
    ImageUrl          @(
        title : '{i18n>Image}',
        UI    : {IsImageURL : true}
    );
    Id                @title : '{i18n>Id}';
    Name              @title : '{i18n>Name}';
    Description       @title : '{i18n>Description}';
    ToCategory        @(
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
                        $Type             : 'Common.ValueListParameterInOut',
                        LocalDataProperty : Category,
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
        title    : '{i18n>Height}',
        Measures : {Unit : ToDimensionUnit_Id}
    );
    Width             @(
        title    : '{i18n>Width}',
        Measures : {Unit : ToDimensionUnit_Id}
    );
    Depth             @(
        title    : '{i18n>Depth}',
        Measures : {Unit : ToDimensionUnit_Id}
    );
    ToDimensionUnit   @(
        title  : '{i18n>DimensionUnit}',
        Common : {
            ValueListWithFixedValues : false,
            ValueList                : {
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
        }
    );
    Price             @(
        title    : '{i18n>Price}',
        Measures : {Unit : ToCurrency_Id}
    );
    ToCurrency        @(
        title  : '{i18n>CurrencyKey}',
        Common : {
            ValueListWithFixedValues : false,
            ValueList                : {
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
        }
    );
    Quantity          @(
        title         : '{i18n>Quantity}',
        Measures.Unit : ToUnitOfMeasure_Id
    );
    ToUnitOfMeasure   @(
        title  : '{i18n>UnitOfMeasure}',
        Common : {
            ValueListWithFixedValues : false,
            ValueList                : {
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

/**
 * Annotations for Reviews Entity
 */
annotate northwind.Reviews with @(UI : {
    HeaderInfo          : {
        TypeName       : '{i18n>Review}',
        TypeNamePlural : '{i18n>Reviews}',
        Title          : {Value : Name},
        Description    : {Value : CreatedAt}
    },
    LineItem            : [
        {Value : Name},
        {Value : CreatedAt},
        {
            $Type  : 'UI.DataFieldForAnnotation',
            Target : '@UI.DataPoint#Rating'
        },
        {Value : Comment}
    ],
    HeaderFacets        : [{
        $Type  : 'UI.ReferenceFacet',
        Target : '@UI.DataPoint#Rating'
    }],
    Facets              : [{
        $Type  : 'UI.ReferenceFacet',
        Target : '@UI.FieldGroup#Comment',
        Label  : '{i18n>Review}'
    }],
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

/**
 * Annotations for Suppliers Entity
 */
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

/**
 * Annotations for SalesData Entity
 */
annotate northwind.SalesData with @(
    sap.semantics : 'aggregate',
    UI            : {
        PresentationVariant : {
            SortOrder      : [{Property : DeliveryMonthId}],
            Visualizations : ['@UI.LineItem']
        },
        HeaderInfo          : {
            TypeName       : '{i18n>SalesOrder}',
            TypeNamePlural : '{i18n>SalesOrders}'
        },
        LineItem            : [
            {Value : DeliveryMonthId},
            {Value : Revenue},
            {Value : DeliveryDate}
        ],
        Chart               : {
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
        }
    }
) {
    Id              @(
        sap.aggregation.role : 'dimension',
        UI                   : {Hidden : true}
    );
    DeliveryMonthId @(
        title                : '{i18n>DeliveryMonthId}',
        sap.aggregation.role : 'dimension',
        Common               : {Text : {
            $value                 : DeliveryMonth,
            ![@UI.TextArrangement] : #TextOnly
        }}
    );
    DeliveryMonth   @(
        title                : '{i18n>DeliveryMonth}',
        sap.aggregation.role : 'dimension',
        UI                   : {Hidden : true}
    );
    Revenue         @(
        title                : '{i18n>Revenue}',
        sap.aggregation.role : 'measure',
        Measures             : {Unit : CurrencyKey}
    );
    DeliveryDate    @(
        title                : '{i18n>DeliveryDate}',
        sap.aggregation.role : 'dimension'
    );
    CurrencyKey     @(
        sap.aggregation.role : 'dimension',
        UI                   : {Hidden : true}
    );
    ToProduct       @(
        sap.aggregation.role : 'dimension',
        UI                   : {Hidden : true}
    );
};

/**
 * Annotations for StockAvailability Entity
 */
annotate northwind.StockAvailability with {
    Id @(
        title  : '{i18n>StockAvailability}',
        Common : {Text : {
            $value                 : Description,
            ![@UI.TextArrangement] : #TextOnly
        }}
    )
};

/**
 * Annotations for VH_Categories Entity
 */
annotate northwind.VH_Categories with {
    Code @(
        title  : '{i18n>Code}',
        UI     : {Hidden : true},
        Common : {Text : {
            $value                 : Text,
            ![@UI.TextArrangement] : #TextOnly
        }}
    );
    Text @(
        title : '{i18n>Category}',
        UI    : {HiddenFilter : true}
    );
};

/**
 * Annotations for VH_Currencies Entity
 */
annotate northwind.VH_Currencies with {
    Code @(
        title : '{i18n>Currency}',
        UI    : {HiddenFilter : true}
    );
    Text @(
        title : '{i18n>Description}',
        UI    : {HiddenFilter : true}
    );
};

/**
 * Annotations for VH_UnitOfMeasures Entity
 */
annotate northwind.VH_UnitOfMeasures with {
    Code @(
        title : '{i18n>Code}',
        UI    : {HiddenFilter : true}
    );
    Text @(
        title : '{i18n>Description}',
        UI    : {HiddenFilter : true}
    );
};

/**
 * Annotations for VH_DimensionUnits Entity
 */
annotate northwind.VH_DimensionUnits with {
    Code @(
        title : '{i18n>Code}',
        UI    : {HiddenFilter : true}
    );
    Text @(
        title : '{i18n>Description}',
        UI    : {HiddenFilter : true}
    );
};
