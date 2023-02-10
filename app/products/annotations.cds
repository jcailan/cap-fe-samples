using ProductService as service from '../../srv/ProductService';

annotate service.Products with @(
    Capabilities: {DeleteRestrictions: {Deletable: false}},
    Common      : {Label: '{i18n>products}'},
    UI          : {
        SelectionFields               : [
            Category_ID,
            Currency_ID,
            StockStatus_ID
        ],
        HeaderInfo                    : {
            TypeName      : '{i18n>product}',
            TypeNamePlural: '{i18n>products}',
            ImageUrl      : imageUrl,
            Title         : {Value: name},
            Description   : {Value: description}
        },
        LineItem                      : {$value: [
            {Value: imageUrl},
            {
                Value            : name,
                ![@UI.Importance]: #High
            },
            {
                Value            : description,
                ![@UI.Importance]: #Low
            },
            {Value: Category_ID},
            {
                $Type : 'UI.DataFieldForAnnotation',
                Label : '{i18n>supplier}',
                Target: 'Supplier/@Communication.Contact'
            },
            {
                $Type            : 'UI.DataFieldForAnnotation',
                Target           : '@UI.DataPoint#AverageRatingValue',
                ![@UI.Importance]: #High
            },
            {
                Value            : StockStatus_ID,
                Criticality      : StockStatus_ID,
                ![@UI.Importance]: #High
            },
            {Value: quantity},
            {
                $Type : 'UI.DataFieldForAnnotation',
                Target: '@UI.DataPoint#Price'
            }
        ]},
        HeaderFacets                  : [
            {
                $Type : 'UI.ReferenceFacet',
                Target: '@UI.FieldGroup#GeneralInformation',
                Label : '{i18n>generalInformation}'
            },
            {
                $Type : 'UI.ReferenceFacet',
                Target: '@UI.DataPoint#AverageRatingValue'
            },
            {
                $Type : 'UI.ReferenceFacet',
                Target: '@UI.DataPoint#Price'
            },
            {
                $Type : 'UI.ReferenceFacet',
                Target: '@UI.DataPoint#StockAvailability'
            },
            {
                $Type : 'UI.ReferenceFacet',
                Target: '@UI.DataPoint#Availability'
            }
        ],
        Facets                        : [
            {
                $Type : 'UI.ReferenceFacet',
                Target: '@UI.FieldGroup#TechnicalData',
                Label : '{i18n>technicalData}'
            },
            {
                $Type : 'UI.ReferenceFacet',
                Target: 'Reviews/@UI.LineItem',
                Label : '{i18n>productReviews}'
            },
            {
                $Type : 'UI.ReferenceFacet',
                Target: 'SalesData/@UI.Chart',
                Label : '{i18n>monthlyRevenue}'
            },
            {
                $Type : 'UI.ReferenceFacet',
                Target: 'SalesData/@UI.PresentationVariant',
                Label : '{i18n>salesData}'
            }
        ],
        DataPoint #AverageRatingValue : {
            Value        : rating,
            Title        : '{i18n>rating}',
            TargetValue  : 5,
            Visualization: #Rating
        },
        DataPoint #Price              : {
            Value      : price,
            ValueFormat: {NumberOfFractionalDigits: 3},
            Title      : '{i18n>price}'
        },
        DataPoint #StockAvailability  : {
            Title      : '{i18n>stockStatus}',
            Value      : StockStatus.ID,
            Criticality: StockStatus_ID
        },
        DataPoint #Availability       : {
            Title        : '{i18n>availability}',
            Description  : '{i18n>stockIndicator}',
            Value        : quantity,
            TargetValue  : 20,
            Criticality  : StockStatus_ID,
            Visualization: #Progress
        },
        FieldGroup #GeneralInformation: {Data: [
            {Value: Category_ID},
            {Value: releaseDate},
            {
                $Type : 'UI.DataFieldForAnnotation',
                Label : '{i18n>supplier}',
                Target: 'Supplier/@Communication.Contact'
            }
        ]},
        FieldGroup #TechnicalData     : {Data: [
            {Value: height},
            {Value: width},
            {Value: depth}
        ]}
    }
) {
    imageUrl         @(
        title: '{i18n>image}',
        UI   : {IsImageURL: true}
    );
    ID               @(UI: {Hidden: true});
    name             @title: '{i18n>name}';
    description      @title: '{i18n>description}';
    Category         @(
        title : '{i18n>category}',
        Common: {
            Text           : Category.name,
            TextArrangement: #TextOnly,
            ValueList      : {
                Label          : '{i18n>category}',
                SearchSupported: true,
                CollectionPath : 'VH_Categories',
                Parameters     : [
                    {
                        $Type            : 'Common.ValueListParameterInOut',
                        LocalDataProperty: Category_ID,
                        ValueListProperty: 'ID'
                    },
                    {
                        $Type            : 'Common.ValueListParameterInOut',
                        LocalDataProperty: Category.name,
                        ValueListProperty: 'name'
                    }
                ]
            }
        }
    );
    releaseDate      @title: '{i18n>releaseDate}';
    discontinuedDate @title: '{i18n>discontinuedDate}';
    rating           @title: '{i18n>rating}';
    height           @(
        title   : '{i18n>height}',
        Measures: {Unit: DimensionUnit_ID}
    );
    width            @(
        title   : '{i18n>width}',
        Measures: {Unit: DimensionUnit_ID}
    );
    depth            @(
        title   : '{i18n>depth}',
        Measures: {Unit: DimensionUnit_ID}
    );
    DimensionUnit    @(
        title : '{i18n>dimensionUnit}',
        Common: {
            ValueListWithFixedValues: false,
            ValueList               : {
                SearchSupported: true,
                CollectionPath : 'VH_DimensionUnits',
                Parameters     : [
                    {
                        $Type            : 'Common.ValueListParameterInOut',
                        LocalDataProperty: DimensionUnit_ID,
                        ValueListProperty: 'ID'
                    },
                    {
                        $Type            : 'Common.ValueListParameterDisplayOnly',
                        ValueListProperty: 'name'
                    }
                ]
            }
        }
    );
    price            @(
        title   : '{i18n>price}',
        Measures: {Unit: Currency_ID}
    );
    Currency         @(
        title : '{i18n>currency}',
        Common: {
            ValueListWithFixedValues: false,
            ValueList               : {
                Label          : '{i18n>currency}',
                SearchSupported: true,
                CollectionPath : 'VH_Currencies',
                Parameters     : [
                    {
                        $Type            : 'Common.ValueListParameterInOut',
                        LocalDataProperty: Currency_ID,
                        ValueListProperty: 'ID'
                    },
                    {
                        $Type            : 'Common.ValueListParameterDisplayOnly',
                        ValueListProperty: 'name'
                    }
                ]
            }
        }
    );
    quantity         @(
        title   : '{i18n>quantity}',
        Measures: {Unit: UnitOfMeasure_ID}
    );
    UnitOfMeasure    @(
        title : '{i18n>unitOfMeasure}',
        Common: {
            ValueListWithFixedValues: false,
            ValueList               : {
                SearchSupported: true,
                CollectionPath : 'VH_UnitOfMeasures',
                Parameters     : [
                    {
                        $Type            : 'Common.ValueListParameterInOut',
                        LocalDataProperty: UnitOfMeasure_ID,
                        ValueListProperty: 'ID'
                    },
                    {
                        $Type            : 'Common.ValueListParameterDisplayOnly',
                        ValueListProperty: 'name'
                    }
                ]
            }
        }
    );
    StockStatus_ID   @(
        title : '{i18n>stockStatus}',
        Common: {
            Text                    : StockStatus.name,
            TextArrangement         : #TextOnly,
            ValueListWithFixedValues: true,
            ValueList               : {
                CollectionPath: 'VH_StockStatuses',
                Parameters    : [{
                    $Type            : 'Common.ValueListParameterInOut',
                    LocalDataProperty: StockStatus_ID,
                    ValueListProperty: 'ID'
                }]
            }
        }
    );
};

/**
 * Annotations for Reviews Entity
 */
annotate service.Reviews with @(UI: {
    HeaderInfo         : {
        TypeName      : '{i18n>review}',
        TypeNamePlural: '{i18n>reviews}',
        Title         : {Value: name},
        Description   : {Value: createdAt}
    },
    LineItem           : [
        {Value: name},
        {Value: createdAt},
        {
            $Type : 'UI.DataFieldForAnnotation',
            Target: '@UI.DataPoint#Rating'
        },
        {Value: comment}
    ],
    HeaderFacets       : [{
        $Type : 'UI.ReferenceFacet',
        Target: '@UI.DataPoint#Rating'
    }],
    Facets             : [{
        $Type : 'UI.ReferenceFacet',
        Target: '@UI.FieldGroup#Comment',
        Label : '{i18n>review}'
    }],
    DataPoint #Rating  : {
        Value        : rating,
        Title        : '{i18n>rating}',
        TargetValue  : 5,
        Visualization: #Rating
    },
    FieldGroup #Comment: {Data: [{Value: comment}]}
}) {
    ID        @(UI: {Hidden: true});
    Product   @(UI: {Hidden: true});
    name      @(title: '{i18n>name}');
    rating    @(title: '{i18n>rating}');
    createdAt @(title: '{i18n>createdOn}');
    comment   @(
        title: '{i18n>comment}',
        UI   : {MultiLineText: true}
    );
};

/**
 * Annotations for Suppliers Entity
 */
annotate service.Suppliers with @(Communication: {Contact: {
    fn   : name,
    role : '{i18n>supplier}',
    photo: 'sap-icon://supplier',
    email: [{
        type   : #work,
        address: email
    }],
    tel  : [
        {
            type: #work,
            uri : phone
        },
        {
            type: #fax,
            uri : fax
        }
    ]
}});

/**
 * Annotations for SalesData Entity
 */
annotate service.SalesData with @(
    // required by FEV2, otherwise do not use @sap annotations
    sap.semantics: 'aggregate',
    Aggregation  : {ApplySupported: {
        GroupableProperties   : [DeliveryMonth_ID],
        AggregatableProperties: [{Property: revenue}]
    }},
    Analytics    : {AggregatedProperty #totalRevenue: {
        Name                : 'totalRevenue',
        AggregationMethod   : 'sum',
        AggregatableProperty: 'revenue',
        ![@Common.Label]    : '{i18n>totalRevenue}'
    }},
    UI           : {
        PresentationVariant: {
            SortOrder     : [{Property: DeliveryMonth_ID}],
            GroupBy       : [DeliveryMonth_ID],
            Visualizations: ['@UI.LineItem']
        },
        HeaderInfo         : {
            TypeName      : '{i18n>salesOrder}',
            TypeNamePlural: '{i18n>salesOrders}'
        },
        LineItem           : [
            {Value: DeliveryMonth_ID},
            {Value: revenue},
            {Value: deliveryDate}
        ],
        Chart              : {
            Title            : '{i18n>revenueHistory}',
            ChartType        : #Column,
            Dimensions       : [DeliveryMonth_ID],
            DynamicMeasures  : ['@Analytics.AggregatedProperty#totalRevenue'],
            MeasureAttributes: [{
                $Type         : 'UI.ChartMeasureAttributeType',
                DynamicMeasure: '@Analytics.AggregatedProperty#totalRevenue',
                Role          : #Axis1
            }]
        }
    }
) {
    ID            @(UI: {Hidden: true});
    DeliveryMonth @(
        title               : '{i18n>deliveryMonth}',
        Common              : {
            Text           : deliveryMonth,
            TextArrangement: #TextOnly
        },
        // required by FEV2, otherwise do not use @sap annotations
        sap.aggregation.role: 'dimension'
    );
    revenue       @(
        title               : '{i18n>revenue}',
        Measures            : {Unit: Currency_ID},
        // required by FEV2, otherwise do not use @sap annotations
        sap.aggregation.role: 'measure',
    );
    deliveryDate  @(
        title               : '{i18n>deliveryDate}',
        // required by FEV2, otherwise do not use @sap annotations
        sap.aggregation.role: 'dimension'
    );
    deliveryMonth @(UI: {Hidden: true});
    Currency      @(UI: {Hidden: true});
    Product       @(UI: {Hidden: true});
};

/**
 * Annotations for StockAvailability Entity
 */
annotate service.VH_StockStatuses with {
    ID @(
        title : '{i18n>stockStatus}',
        Common: {
            Text           : name,
            TextArrangement: #TextOnly
        }
    )
};

/**
 * Annotations for VH_Currencies Entity
 */
annotate service.VH_Currencies with {
    ID   @(
        title: '{i18n>currencyKey}',
        UI   : {HiddenFilter: true}
    );
    name @(
        title: '{i18n>name}',
        UI   : {HiddenFilter: true}
    );
};

/**
 * Annotations for VH_Categories Entity
 */
annotate service.VH_Categories with {
    ID   @(
        title : '{i18n>category}',
        UI    : {HiddenFilter: true},
        Common: {
            Text           : name,
            TextArrangement: #TextOnly
        }
    );
    name @(UI: {Hidden: true});
};
