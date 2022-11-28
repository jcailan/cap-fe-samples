module.exports = `<?xml version="1.0" encoding="utf-8"?>
<edmx:Edmx Version="4.0" xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx">
  <edmx:Reference Uri="https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Aggregation.V1.xml">
	<edmx:Include Alias="Aggregation" Namespace="Org.OData.Aggregation.V1"/>
  </edmx:Reference>
  <edmx:Reference Uri="https://sap.github.io/odata-vocabularies/vocabularies/Analytics.xml">
	<edmx:Include Alias="Analytics" Namespace="com.sap.vocabularies.Analytics.v1"/>
  </edmx:Reference>
  <edmx:Reference Uri="https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Capabilities.V1.xml">
	<edmx:Include Alias="Capabilities" Namespace="Org.OData.Capabilities.V1"/>
  </edmx:Reference>
  <edmx:Reference Uri="https://sap.github.io/odata-vocabularies/vocabularies/Common.xml">
	<edmx:Include Alias="Common" Namespace="com.sap.vocabularies.Common.v1"/>
  </edmx:Reference>
  <edmx:Reference Uri="https://sap.github.io/odata-vocabularies/vocabularies/Communication.xml">
	<edmx:Include Alias="Communication" Namespace="com.sap.vocabularies.Communication.v1"/>
  </edmx:Reference>
  <edmx:Reference Uri="https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Core.V1.xml">
	<edmx:Include Alias="Core" Namespace="Org.OData.Core.V1"/>
  </edmx:Reference>
  <edmx:Reference Uri="https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Measures.V1.xml">
	<edmx:Include Alias="Measures" Namespace="Org.OData.Measures.V1"/>
  </edmx:Reference>
  <edmx:Reference Uri="https://sap.github.io/odata-vocabularies/vocabularies/UI.xml">
	<edmx:Include Alias="UI" Namespace="com.sap.vocabularies.UI.v1"/>
  </edmx:Reference>
  <edmx:Reference Uri="https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Validation.V1.xml">
	<edmx:Include Alias="Validation" Namespace="Org.OData.Validation.V1"/>
  </edmx:Reference>
  <edmx:DataServices>
	<Schema Namespace="ProductService" xmlns="http://docs.oasis-open.org/odata/ns/edm">
	  <EntityContainer Name="EntityContainer">
		<EntitySet Name="Products" EntityType="ProductService.Products">
		  <NavigationPropertyBinding Path="UnitOfMeasure" Target="VH_UnitOfMeasures"/>
		  <NavigationPropertyBinding Path="Currency" Target="VH_Currencies"/>
		  <NavigationPropertyBinding Path="DimensionUnit" Target="VH_DimensionUnits"/>
		  <NavigationPropertyBinding Path="SalesData" Target="SalesData"/>
		  <NavigationPropertyBinding Path="Category" Target="VH_Categories"/>
		  <NavigationPropertyBinding Path="Supplier" Target="Suppliers"/>
		  <NavigationPropertyBinding Path="Reviews" Target="Reviews"/>
		  <NavigationPropertyBinding Path="texts" Target="Products_texts"/>
		  <NavigationPropertyBinding Path="localized" Target="Products_texts"/>
		  <NavigationPropertyBinding Path="StockStatus" Target="VH_StockStatuses"/>
		</EntitySet>
		<EntitySet Name="Suppliers" EntityType="ProductService.Suppliers">
		  <NavigationPropertyBinding Path="Product" Target="Products"/>
		</EntitySet>
		<EntitySet Name="Reviews" EntityType="ProductService.Reviews">
		  <NavigationPropertyBinding Path="Product" Target="Products"/>
		</EntitySet>
		<EntitySet Name="SalesData" EntityType="ProductService.SalesData">
		  <NavigationPropertyBinding Path="Product" Target="Products"/>
		  <NavigationPropertyBinding Path="Currency" Target="VH_Currencies"/>
		  <NavigationPropertyBinding Path="DeliveryMonth" Target="VH_Months"/>
		</EntitySet>
		<EntitySet Name="VH_StockStatuses" EntityType="ProductService.VH_StockStatuses">
		  <NavigationPropertyBinding Path="Product" Target="Products"/>
		  <NavigationPropertyBinding Path="texts" Target="VH_StockStatuses_texts"/>
		  <NavigationPropertyBinding Path="localized" Target="VH_StockStatuses_texts"/>
		</EntitySet>
		<EntitySet Name="VH_Categories" EntityType="ProductService.VH_Categories">
		  <NavigationPropertyBinding Path="texts" Target="VH_Categories_texts"/>
		  <NavigationPropertyBinding Path="localized" Target="VH_Categories_texts"/>
		</EntitySet>
		<EntitySet Name="VH_Currencies" EntityType="ProductService.VH_Currencies">
		  <NavigationPropertyBinding Path="texts" Target="VH_Currencies_texts"/>
		  <NavigationPropertyBinding Path="localized" Target="VH_Currencies_texts"/>
		</EntitySet>
		<EntitySet Name="VH_UnitOfMeasures" EntityType="ProductService.VH_UnitOfMeasures">
		  <NavigationPropertyBinding Path="texts" Target="VH_UnitOfMeasures_texts"/>
		  <NavigationPropertyBinding Path="localized" Target="VH_UnitOfMeasures_texts"/>
		</EntitySet>
		<EntitySet Name="VH_DimensionUnits" EntityType="ProductService.VH_DimensionUnits">
		  <NavigationPropertyBinding Path="texts" Target="VH_DimensionUnits_texts"/>
		  <NavigationPropertyBinding Path="localized" Target="VH_DimensionUnits_texts"/>
		</EntitySet>
		<EntitySet Name="VH_Months" EntityType="ProductService.VH_Months">
		  <NavigationPropertyBinding Path="texts" Target="VH_Months_texts"/>
		  <NavigationPropertyBinding Path="localized" Target="VH_Months_texts"/>
		</EntitySet>
		<EntitySet Name="Products_texts" EntityType="ProductService.Products_texts"/>
		<EntitySet Name="VH_StockStatuses_texts" EntityType="ProductService.VH_StockStatuses_texts"/>
		<EntitySet Name="VH_Categories_texts" EntityType="ProductService.VH_Categories_texts"/>
		<EntitySet Name="VH_Currencies_texts" EntityType="ProductService.VH_Currencies_texts"/>
		<EntitySet Name="VH_UnitOfMeasures_texts" EntityType="ProductService.VH_UnitOfMeasures_texts"/>
		<EntitySet Name="VH_DimensionUnits_texts" EntityType="ProductService.VH_DimensionUnits_texts"/>
		<EntitySet Name="VH_Months_texts" EntityType="ProductService.VH_Months_texts"/>
	  </EntityContainer>
	  <EntityType Name="Products">
		<Key>
		  <PropertyRef Name="ID"/>
		</Key>
		<Property Name="ID" Type="Edm.Guid" Nullable="false"/>
		<Property Name="createdAt" Type="Edm.DateTimeOffset" Precision="7"/>
		<Property Name="createdBy" Type="Edm.String" MaxLength="255"/>
		<Property Name="modifiedAt" Type="Edm.DateTimeOffset" Precision="7"/>
		<Property Name="modifiedBy" Type="Edm.String" MaxLength="255"/>
		<Property Name="name" Type="Edm.String"/>
		<Property Name="description" Type="Edm.String"/>
		<Property Name="imageUrl" Type="Edm.String"/>
		<Property Name="releaseDate" Type="Edm.DateTimeOffset"/>
		<Property Name="discontinuedDate" Type="Edm.DateTimeOffset"/>
		<Property Name="price" Type="Edm.Decimal" Scale="2" Precision="16"/>
		<Property Name="height" Type="Edm.Decimal" Scale="2" Precision="16"/>
		<Property Name="width" Type="Edm.Decimal" Scale="2" Precision="16"/>
		<Property Name="depth" Type="Edm.Decimal" Scale="2" Precision="16"/>
		<Property Name="quantity" Type="Edm.Decimal" Scale="2" Precision="16"/>
		<NavigationProperty Name="UnitOfMeasure" Type="ProductService.VH_UnitOfMeasures">
		  <ReferentialConstraint Property="UnitOfMeasure_ID" ReferencedProperty="ID"/>
		</NavigationProperty>
		<Property Name="UnitOfMeasure_ID" Type="Edm.String" MaxLength="2"/>
		<NavigationProperty Name="Currency" Type="ProductService.VH_Currencies">
		  <ReferentialConstraint Property="Currency_ID" ReferencedProperty="ID"/>
		</NavigationProperty>
		<Property Name="Currency_ID" Type="Edm.String" MaxLength="3"/>
		<NavigationProperty Name="DimensionUnit" Type="ProductService.VH_DimensionUnits">
		  <ReferentialConstraint Property="DimensionUnit_ID" ReferencedProperty="ID"/>
		</NavigationProperty>
		<Property Name="DimensionUnit_ID" Type="Edm.String" MaxLength="2"/>
		<NavigationProperty Name="SalesData" Type="Collection(ProductService.SalesData)" Partner="Product"/>
		<NavigationProperty Name="Category" Type="ProductService.VH_Categories">
		  <ReferentialConstraint Property="Category_ID" ReferencedProperty="ID"/>
		</NavigationProperty>
		<Property Name="Category_ID" Type="Edm.String" MaxLength="1"/>
		<NavigationProperty Name="Supplier" Type="ProductService.Suppliers" Partner="Product">
		  <ReferentialConstraint Property="Supplier_ID" ReferencedProperty="ID"/>
		</NavigationProperty>
		<Property Name="Supplier_ID" Type="Edm.Guid"/>
		<NavigationProperty Name="Reviews" Type="Collection(ProductService.Reviews)" Partner="Product"/>
		<NavigationProperty Name="texts" Type="Collection(ProductService.Products_texts)">
		  <OnDelete Action="Cascade"/>
		</NavigationProperty>
		<NavigationProperty Name="localized" Type="ProductService.Products_texts">
		  <ReferentialConstraint Property="ID" ReferencedProperty="ID"/>
		</NavigationProperty>
		<Property Name="rating" Type="Edm.Decimal" Scale="2" Precision="16"/>
		<Property Name="StockStatus_ID" Type="Edm.Int32"/>
		<NavigationProperty Name="StockStatus" Type="ProductService.VH_StockStatuses" Partner="Product">
		  <ReferentialConstraint Property="StockStatus_ID" ReferencedProperty="ID"/>
		</NavigationProperty>
	  </EntityType>
	  <EntityType Name="Suppliers">
		<Key>
		  <PropertyRef Name="ID"/>
		</Key>
		<Property Name="ID" Type="Edm.Guid" Nullable="false"/>
		<Property Name="createdAt" Type="Edm.DateTimeOffset" Precision="7"/>
		<Property Name="createdBy" Type="Edm.String" MaxLength="255"/>
		<Property Name="modifiedAt" Type="Edm.DateTimeOffset" Precision="7"/>
		<Property Name="modifiedBy" Type="Edm.String" MaxLength="255"/>
		<Property Name="name" Type="Edm.String"/>
		<Property Name="street" Type="Edm.String"/>
		<Property Name="city" Type="Edm.String"/>
		<Property Name="state" Type="Edm.String" MaxLength="2"/>
		<Property Name="postalCode" Type="Edm.String" MaxLength="5"/>
		<Property Name="country" Type="Edm.String" MaxLength="3"/>
		<Property Name="email" Type="Edm.String"/>
		<Property Name="phone" Type="Edm.String"/>
		<Property Name="fax" Type="Edm.String"/>
		<NavigationProperty Name="Product" Type="ProductService.Products" Partner="Supplier">
		  <ReferentialConstraint Property="ID" ReferencedProperty="Supplier_ID"/>
		</NavigationProperty>
	  </EntityType>
	  <EntityType Name="Reviews">
		<Key>
		  <PropertyRef Name="ID"/>
		</Key>
		<Property Name="ID" Type="Edm.Guid" Nullable="false"/>
		<Property Name="createdAt" Type="Edm.DateTimeOffset" Precision="7"/>
		<Property Name="createdBy" Type="Edm.String" MaxLength="255"/>
		<Property Name="modifiedAt" Type="Edm.DateTimeOffset" Precision="7"/>
		<Property Name="modifiedBy" Type="Edm.String" MaxLength="255"/>
		<Property Name="name" Type="Edm.String"/>
		<Property Name="rating" Type="Edm.Int32"/>
		<Property Name="comment" Type="Edm.String"/>
		<NavigationProperty Name="Product" Type="ProductService.Products" Partner="Reviews">
		  <ReferentialConstraint Property="Product_ID" ReferencedProperty="ID"/>
		</NavigationProperty>
		<Property Name="Product_ID" Type="Edm.Guid"/>
	  </EntityType>
	  <EntityType Name="SalesData">
		<Key>
		  <PropertyRef Name="ID"/>
		</Key>
		<Property Name="ID" Type="Edm.Guid" Nullable="false"/>
		<Property Name="deliveryDate" Type="Edm.DateTimeOffset"/>
		<Property Name="revenue" Type="Edm.Decimal" Scale="2" Precision="16"/>
		<NavigationProperty Name="Product" Type="ProductService.Products" Partner="SalesData">
		  <ReferentialConstraint Property="Product_ID" ReferencedProperty="ID"/>
		</NavigationProperty>
		<Property Name="Product_ID" Type="Edm.Guid"/>
		<NavigationProperty Name="Currency" Type="ProductService.VH_Currencies">
		  <ReferentialConstraint Property="Currency_ID" ReferencedProperty="ID"/>
		</NavigationProperty>
		<Property Name="Currency_ID" Type="Edm.String" MaxLength="3"/>
		<NavigationProperty Name="DeliveryMonth" Type="ProductService.VH_Months">
		  <ReferentialConstraint Property="DeliveryMonth_ID" ReferencedProperty="ID"/>
		</NavigationProperty>
		<Property Name="DeliveryMonth_ID" Type="Edm.String" MaxLength="2"/>
		<Property Name="deliveryMonth" Type="Edm.String"/>
	  </EntityType>
	  <EntityType Name="VH_StockStatuses">
		<Key>
		  <PropertyRef Name="ID"/>
		</Key>
		<Property Name="ID" Type="Edm.Int32" Nullable="false"/>
		<Property Name="name" Type="Edm.String"/>
		<NavigationProperty Name="Product" Type="ProductService.Products" Partner="StockStatus">
		  <ReferentialConstraint Property="ID" ReferencedProperty="StockStatus_ID"/>
		</NavigationProperty>
		<NavigationProperty Name="texts" Type="Collection(ProductService.VH_StockStatuses_texts)">
		  <OnDelete Action="Cascade"/>
		</NavigationProperty>
		<NavigationProperty Name="localized" Type="ProductService.VH_StockStatuses_texts">
		  <ReferentialConstraint Property="ID" ReferencedProperty="ID"/>
		</NavigationProperty>
	  </EntityType>
	  <EntityType Name="VH_Categories">
		<Key>
		  <PropertyRef Name="ID"/>
		</Key>
		<Property Name="ID" Type="Edm.String" MaxLength="1" Nullable="false"/>
		<Property Name="name" Type="Edm.String"/>
		<NavigationProperty Name="texts" Type="Collection(ProductService.VH_Categories_texts)">
		  <OnDelete Action="Cascade"/>
		</NavigationProperty>
		<NavigationProperty Name="localized" Type="ProductService.VH_Categories_texts">
		  <ReferentialConstraint Property="ID" ReferencedProperty="ID"/>
		</NavigationProperty>
	  </EntityType>
	  <EntityType Name="VH_Currencies">
		<Key>
		  <PropertyRef Name="ID"/>
		</Key>
		<Property Name="ID" Type="Edm.String" MaxLength="3" Nullable="false"/>
		<Property Name="name" Type="Edm.String"/>
		<NavigationProperty Name="texts" Type="Collection(ProductService.VH_Currencies_texts)">
		  <OnDelete Action="Cascade"/>
		</NavigationProperty>
		<NavigationProperty Name="localized" Type="ProductService.VH_Currencies_texts">
		  <ReferentialConstraint Property="ID" ReferencedProperty="ID"/>
		</NavigationProperty>
	  </EntityType>
	  <EntityType Name="VH_UnitOfMeasures">
		<Key>
		  <PropertyRef Name="ID"/>
		</Key>
		<Property Name="ID" Type="Edm.String" MaxLength="2" Nullable="false"/>
		<Property Name="name" Type="Edm.String"/>
		<NavigationProperty Name="texts" Type="Collection(ProductService.VH_UnitOfMeasures_texts)">
		  <OnDelete Action="Cascade"/>
		</NavigationProperty>
		<NavigationProperty Name="localized" Type="ProductService.VH_UnitOfMeasures_texts">
		  <ReferentialConstraint Property="ID" ReferencedProperty="ID"/>
		</NavigationProperty>
	  </EntityType>
	  <EntityType Name="VH_DimensionUnits">
		<Key>
		  <PropertyRef Name="ID"/>
		</Key>
		<Property Name="ID" Type="Edm.String" MaxLength="2" Nullable="false"/>
		<Property Name="name" Type="Edm.String"/>
		<NavigationProperty Name="texts" Type="Collection(ProductService.VH_DimensionUnits_texts)">
		  <OnDelete Action="Cascade"/>
		</NavigationProperty>
		<NavigationProperty Name="localized" Type="ProductService.VH_DimensionUnits_texts">
		  <ReferentialConstraint Property="ID" ReferencedProperty="ID"/>
		</NavigationProperty>
	  </EntityType>
	  <EntityType Name="VH_Months">
		<Key>
		  <PropertyRef Name="ID"/>
		</Key>
		<Property Name="ID" Type="Edm.String" MaxLength="2" Nullable="false"/>
		<Property Name="name" Type="Edm.String"/>
		<Property Name="code" Type="Edm.String" MaxLength="3"/>
		<NavigationProperty Name="texts" Type="Collection(ProductService.VH_Months_texts)">
		  <OnDelete Action="Cascade"/>
		</NavigationProperty>
		<NavigationProperty Name="localized" Type="ProductService.VH_Months_texts">
		  <ReferentialConstraint Property="ID" ReferencedProperty="ID"/>
		</NavigationProperty>
	  </EntityType>
	  <EntityType Name="Products_texts">
		<Key>
		  <PropertyRef Name="locale"/>
		  <PropertyRef Name="ID"/>
		</Key>
		<Property Name="locale" Type="Edm.String" MaxLength="14" Nullable="false"/>
		<Property Name="ID" Type="Edm.Guid" Nullable="false"/>
		<Property Name="name" Type="Edm.String"/>
		<Property Name="description" Type="Edm.String"/>
	  </EntityType>
	  <EntityType Name="VH_StockStatuses_texts">
		<Key>
		  <PropertyRef Name="locale"/>
		  <PropertyRef Name="ID"/>
		</Key>
		<Property Name="locale" Type="Edm.String" MaxLength="14" Nullable="false"/>
		<Property Name="ID" Type="Edm.Int32" Nullable="false"/>
		<Property Name="name" Type="Edm.String"/>
	  </EntityType>
	  <EntityType Name="VH_Categories_texts">
		<Key>
		  <PropertyRef Name="locale"/>
		  <PropertyRef Name="ID"/>
		</Key>
		<Property Name="locale" Type="Edm.String" MaxLength="14" Nullable="false"/>
		<Property Name="ID" Type="Edm.String" MaxLength="1" Nullable="false"/>
		<Property Name="name" Type="Edm.String"/>
	  </EntityType>
	  <EntityType Name="VH_Currencies_texts">
		<Key>
		  <PropertyRef Name="locale"/>
		  <PropertyRef Name="ID"/>
		</Key>
		<Property Name="locale" Type="Edm.String" MaxLength="14" Nullable="false"/>
		<Property Name="ID" Type="Edm.String" MaxLength="3" Nullable="false"/>
		<Property Name="name" Type="Edm.String"/>
	  </EntityType>
	  <EntityType Name="VH_UnitOfMeasures_texts">
		<Key>
		  <PropertyRef Name="locale"/>
		  <PropertyRef Name="ID"/>
		</Key>
		<Property Name="locale" Type="Edm.String" MaxLength="14" Nullable="false"/>
		<Property Name="ID" Type="Edm.String" MaxLength="2" Nullable="false"/>
		<Property Name="name" Type="Edm.String"/>
	  </EntityType>
	  <EntityType Name="VH_DimensionUnits_texts">
		<Key>
		  <PropertyRef Name="locale"/>
		  <PropertyRef Name="ID"/>
		</Key>
		<Property Name="locale" Type="Edm.String" MaxLength="14" Nullable="false"/>
		<Property Name="ID" Type="Edm.String" MaxLength="2" Nullable="false"/>
		<Property Name="name" Type="Edm.String"/>
	  </EntityType>
	  <EntityType Name="VH_Months_texts">
		<Key>
		  <PropertyRef Name="locale"/>
		  <PropertyRef Name="ID"/>
		</Key>
		<Property Name="locale" Type="Edm.String" MaxLength="14" Nullable="false"/>
		<Property Name="ID" Type="Edm.String" MaxLength="2" Nullable="false"/>
		<Property Name="name" Type="Edm.String"/>
		<Property Name="code" Type="Edm.String" MaxLength="3"/>
	  </EntityType>
	  <Annotations Target="ProductService.Products">
		<Annotation Term="Common.Label" String="Products"/>
		<Annotation Term="UI.SelectionFields">
		  <Collection>
			<PropertyPath>Category_ID</PropertyPath>
			<PropertyPath>Currency_ID</PropertyPath>
			<PropertyPath>StockStatus_ID</PropertyPath>
		  </Collection>
		</Annotation>
		<Annotation Term="UI.HeaderInfo">
		  <Record Type="UI.HeaderInfoType">
			<PropertyValue Property="TypeName" String="Product"/>
			<PropertyValue Property="TypeNamePlural" String="Products"/>
			<PropertyValue Property="ImageUrl" Path="imageUrl"/>
			<PropertyValue Property="Title">
			  <Record Type="UI.DataField">
				<PropertyValue Property="Value" Path="name"/>
			  </Record>
			</PropertyValue>
			<PropertyValue Property="Description">
			  <Record Type="UI.DataField">
				<PropertyValue Property="Value" Path="description"/>
			  </Record>
			</PropertyValue>
		  </Record>
		</Annotation>
		<Annotation Term="UI.LineItem">
		  <Collection>
			<Record Type="UI.DataField">
			  <PropertyValue Property="Value" Path="imageUrl"/>
			</Record>
			<Record Type="UI.DataField">
			  <PropertyValue Property="Value" Path="name"/>
			  <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
			</Record>
			<Record Type="UI.DataField">
			  <PropertyValue Property="Value" Path="description"/>
			  <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/Low"/>
			</Record>
			<Record Type="UI.DataField">
			  <PropertyValue Property="Value" Path="Category_ID"/>
			</Record>
			<Record Type="UI.DataFieldForAnnotation">
			  <PropertyValue Property="Label" String="Supplier"/>
			  <PropertyValue Property="Target" AnnotationPath="Supplier/@Communication.Contact"/>
			</Record>
			<Record Type="UI.DataFieldForAnnotation">
			  <PropertyValue Property="Target" AnnotationPath="@UI.DataPoint#AverageRatingValue"/>
			  <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
			</Record>
			<Record Type="UI.DataField">
			  <PropertyValue Property="Value" Path="StockStatus_ID"/>
			  <PropertyValue Property="Criticality" Path="StockStatus_ID"/>
			  <Annotation Term="UI.Importance" EnumMember="UI.ImportanceType/High"/>
			</Record>
			<Record Type="UI.DataField">
			  <PropertyValue Property="Value" Path="quantity"/>
			</Record>
		  </Collection>
		</Annotation>
		<Annotation Term="UI.HeaderFacets">
		  <Collection>
			<Record Type="UI.ReferenceFacet">
			  <PropertyValue Property="Target" AnnotationPath="@UI.FieldGroup#GeneralInformation"/>
			  <PropertyValue Property="Label" String="General Information"/>
			</Record>
			<Record Type="UI.ReferenceFacet">
			  <PropertyValue Property="Target" AnnotationPath="@UI.DataPoint#AverageRatingValue"/>
			</Record>
			<Record Type="UI.ReferenceFacet">
			  <PropertyValue Property="Target" AnnotationPath="@UI.DataPoint#Price"/>
			</Record>
			<Record Type="UI.ReferenceFacet">
			  <PropertyValue Property="Target" AnnotationPath="@UI.DataPoint#StockAvailability"/>
			</Record>
			<Record Type="UI.ReferenceFacet">
			  <PropertyValue Property="Target" AnnotationPath="@UI.DataPoint#Availability"/>
			</Record>
		  </Collection>
		</Annotation>
		<Annotation Term="UI.Facets">
		  <Collection>
			<Record Type="UI.ReferenceFacet">
			  <PropertyValue Property="Target" AnnotationPath="@UI.FieldGroup#TechnicalData"/>
			  <PropertyValue Property="Label" String="Technical Data"/>
			</Record>
			<Record Type="UI.ReferenceFacet">
			  <PropertyValue Property="Target" AnnotationPath="Reviews/@UI.LineItem"/>
			  <PropertyValue Property="Label" String="Product Reviews"/>
			</Record>
			<Record Type="UI.ReferenceFacet">
			  <PropertyValue Property="Target" AnnotationPath="SalesData/@UI.Chart"/>
			  <PropertyValue Property="Label" String="Monthly Revenue"/>
			</Record>
			<Record Type="UI.ReferenceFacet">
			  <PropertyValue Property="Target" AnnotationPath="SalesData/@UI.PresentationVariant"/>
			  <PropertyValue Property="Label" String="Sales Data"/>
			</Record>
		  </Collection>
		</Annotation>
		<Annotation Term="UI.DataPoint" Qualifier="AverageRatingValue">
		  <Record Type="UI.DataPointType">
			<PropertyValue Property="Value" Path="rating"/>
			<PropertyValue Property="Title" String="Rating"/>
			<PropertyValue Property="TargetValue" Int="5"/>
			<PropertyValue Property="Visualization" EnumMember="UI.VisualizationType/Rating"/>
		  </Record>
		</Annotation>
		<Annotation Term="UI.DataPoint" Qualifier="Price">
		  <Record Type="UI.DataPointType">
			<PropertyValue Property="Value" Path="price"/>
			<PropertyValue Property="Title" String="Price"/>
		  </Record>
		</Annotation>
		<Annotation Term="UI.DataPoint" Qualifier="StockAvailability">
		  <Record Type="UI.DataPointType">
			<PropertyValue Property="Title" String="Stock Status"/>
			<PropertyValue Property="Value" Path="StockStatus/ID"/>
			<PropertyValue Property="Criticality" Path="StockStatus_ID"/>
		  </Record>
		</Annotation>
		<Annotation Term="UI.DataPoint" Qualifier="Availability">
		  <Record Type="UI.DataPointType">
			<PropertyValue Property="Title" String="Availability"/>
			<PropertyValue Property="Description" String="Stock Availability Indicator"/>
			<PropertyValue Property="Value" Path="quantity"/>
			<PropertyValue Property="TargetValue" Int="20"/>
			<PropertyValue Property="Criticality" Path="StockStatus_ID"/>
			<PropertyValue Property="Visualization" EnumMember="UI.VisualizationType/Progress"/>
		  </Record>
		</Annotation>
		<Annotation Term="UI.FieldGroup" Qualifier="GeneralInformation">
		  <Record Type="UI.FieldGroupType">
			<PropertyValue Property="Data">
			  <Collection>
				<Record Type="UI.DataField">
				  <PropertyValue Property="Value" Path="Category_ID"/>
				</Record>
				<Record Type="UI.DataField">
				  <PropertyValue Property="Value" Path="releaseDate"/>
				</Record>
				<Record Type="UI.DataFieldForAnnotation">
				  <PropertyValue Property="Label" String="Supplier"/>
				  <PropertyValue Property="Target" AnnotationPath="Supplier/@Communication.Contact"/>
				</Record>
			  </Collection>
			</PropertyValue>
		  </Record>
		</Annotation>
		<Annotation Term="UI.FieldGroup" Qualifier="TechnicalData">
		  <Record Type="UI.FieldGroupType">
			<PropertyValue Property="Data">
			  <Collection>
				<Record Type="UI.DataField">
				  <PropertyValue Property="Value" Path="height"/>
				</Record>
				<Record Type="UI.DataField">
				  <PropertyValue Property="Value" Path="width"/>
				</Record>
				<Record Type="UI.DataField">
				  <PropertyValue Property="Value" Path="depth"/>
				</Record>
			  </Collection>
			</PropertyValue>
		  </Record>
		</Annotation>
	  </Annotations>
	  <Annotations Target="ProductService.EntityContainer/Products">
		<Annotation Term="Capabilities.DeleteRestrictions">
		  <Record Type="Capabilities.DeleteRestrictionsType">
			<PropertyValue Property="Deletable" Bool="false"/>
		  </Record>
		</Annotation>
		<Annotation Term="Capabilities.InsertRestrictions">
		  <Record Type="Capabilities.InsertRestrictionsType">
			<PropertyValue Property="Insertable" Bool="false"/>
		  </Record>
		</Annotation>
		<Annotation Term="Capabilities.UpdateRestrictions">
		  <Record Type="Capabilities.UpdateRestrictionsType">
			<PropertyValue Property="Updatable" Bool="false"/>
		  </Record>
		</Annotation>
	  </Annotations>
	  <Annotations Target="ProductService.Products/ID">
		<Annotation Term="UI.Hidden" Bool="true"/>
	  </Annotations>
	  <Annotations Target="ProductService.Products/createdAt">
		<Annotation Term="UI.HiddenFilter" Bool="true"/>
		<Annotation Term="Core.Immutable" Bool="true"/>
		<Annotation Term="Core.Computed" Bool="true"/>
		<Annotation Term="Common.Label" String="Created On"/>
	  </Annotations>
	  <Annotations Target="ProductService.Products/createdBy">
		<Annotation Term="UI.HiddenFilter" Bool="true"/>
		<Annotation Term="Core.Immutable" Bool="true"/>
		<Annotation Term="Core.Computed" Bool="true"/>
		<Annotation Term="Core.Description" String="User's unique ID"/>
		<Annotation Term="Common.Label" String="Created By"/>
	  </Annotations>
	  <Annotations Target="ProductService.Products/modifiedAt">
		<Annotation Term="UI.HiddenFilter" Bool="true"/>
		<Annotation Term="Core.Computed" Bool="true"/>
		<Annotation Term="Common.Label" String="Changed On"/>
	  </Annotations>
	  <Annotations Target="ProductService.Products/modifiedBy">
		<Annotation Term="UI.HiddenFilter" Bool="true"/>
		<Annotation Term="Core.Computed" Bool="true"/>
		<Annotation Term="Core.Description" String="User's unique ID"/>
		<Annotation Term="Common.Label" String="Changed By"/>
	  </Annotations>
	  <Annotations Target="ProductService.Products/name">
		<Annotation Term="Common.Label" String="Name"/>
		<Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
	  </Annotations>
	  <Annotations Target="ProductService.Products/description">
		<Annotation Term="Common.Label" String="Description"/>
		<Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
	  </Annotations>
	  <Annotations Target="ProductService.Products/imageUrl">
		<Annotation Term="UI.IsImageURL" Bool="true"/>
		<Annotation Term="Common.Label" String="Image"/>
	  </Annotations>
	  <Annotations Target="ProductService.Products/releaseDate">
		<Annotation Term="Common.Label" String="Release Date"/>
	  </Annotations>
	  <Annotations Target="ProductService.Products/discontinuedDate">
		<Annotation Term="Common.Label" String="Discontinued Date"/>
	  </Annotations>
	  <Annotations Target="ProductService.Products/price">
		<Annotation Term="Measures.Unit" Path="Currency_ID"/>
		<Annotation Term="Common.Label" String="Price"/>
		<Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
	  </Annotations>
	  <Annotations Target="ProductService.Products/height">
		<Annotation Term="Measures.Unit" Path="DimensionUnit_ID"/>
		<Annotation Term="Common.Label" String="Height"/>
	  </Annotations>
	  <Annotations Target="ProductService.Products/width">
		<Annotation Term="Measures.Unit" Path="DimensionUnit_ID"/>
		<Annotation Term="Common.Label" String="Width"/>
	  </Annotations>
	  <Annotations Target="ProductService.Products/depth">
		<Annotation Term="Measures.Unit" Path="DimensionUnit_ID"/>
		<Annotation Term="Common.Label" String="Depth"/>
	  </Annotations>
	  <Annotations Target="ProductService.Products/quantity">
		<Annotation Term="Measures.Unit" Path="UnitOfMeasure_ID"/>
		<Annotation Term="Common.Label" String="Quantity"/>
		<Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
		<Annotation Term="Validation.Minimum" Int="0"/>
		<Annotation Term="Validation.Maximum" Int="20"/>
	  </Annotations>
	  <Annotations Target="ProductService.Products/UnitOfMeasure">
		<Annotation Term="Common.Label" String="Unit of Measure"/>
	  </Annotations>
	  <Annotations Target="ProductService.Products/UnitOfMeasure_ID">
		<Annotation Term="Common.ValueListWithFixedValues" Bool="false"/>
		<Annotation Term="Common.ValueList">
		  <Record Type="Common.ValueListType">
			<PropertyValue Property="SearchSupported" Bool="true"/>
			<PropertyValue Property="CollectionPath" String="VH_UnitOfMeasures"/>
			<PropertyValue Property="Parameters">
			  <Collection>
				<Record Type="Common.ValueListParameterInOut">
				  <PropertyValue Property="LocalDataProperty" PropertyPath="UnitOfMeasure_ID"/>
				  <PropertyValue Property="ValueListProperty" String="ID"/>
				</Record>
				<Record Type="Common.ValueListParameterDisplayOnly">
				  <PropertyValue Property="ValueListProperty" String="name"/>
				</Record>
			  </Collection>
			</PropertyValue>
		  </Record>
		</Annotation>
		<Annotation Term="Common.Label" String="Unit of Measure"/>
		<Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
	  </Annotations>
	  <Annotations Target="ProductService.Products/Currency">
		<Annotation Term="Common.Label" String="Currency"/>
	  </Annotations>
	  <Annotations Target="ProductService.Products/Currency_ID">
		<Annotation Term="Common.ValueListWithFixedValues" Bool="false"/>
		<Annotation Term="Common.ValueList">
		  <Record Type="Common.ValueListType">
			<PropertyValue Property="Label" String="Currency"/>
			<PropertyValue Property="SearchSupported" Bool="true"/>
			<PropertyValue Property="CollectionPath" String="VH_Currencies"/>
			<PropertyValue Property="Parameters">
			  <Collection>
				<Record Type="Common.ValueListParameterInOut">
				  <PropertyValue Property="LocalDataProperty" PropertyPath="Currency_ID"/>
				  <PropertyValue Property="ValueListProperty" String="ID"/>
				</Record>
				<Record Type="Common.ValueListParameterDisplayOnly">
				  <PropertyValue Property="ValueListProperty" String="name"/>
				</Record>
			  </Collection>
			</PropertyValue>
		  </Record>
		</Annotation>
		<Annotation Term="Common.Label" String="Currency"/>
		<Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
	  </Annotations>
	  <Annotations Target="ProductService.Products/DimensionUnit">
		<Annotation Term="Common.Label" String="Dimension Unit"/>
	  </Annotations>
	  <Annotations Target="ProductService.Products/DimensionUnit_ID">
		<Annotation Term="Common.ValueListWithFixedValues" Bool="false"/>
		<Annotation Term="Common.ValueList">
		  <Record Type="Common.ValueListType">
			<PropertyValue Property="SearchSupported" Bool="true"/>
			<PropertyValue Property="CollectionPath" String="VH_DimensionUnits"/>
			<PropertyValue Property="Parameters">
			  <Collection>
				<Record Type="Common.ValueListParameterInOut">
				  <PropertyValue Property="LocalDataProperty" PropertyPath="DimensionUnit_ID"/>
				  <PropertyValue Property="ValueListProperty" String="ID"/>
				</Record>
				<Record Type="Common.ValueListParameterDisplayOnly">
				  <PropertyValue Property="ValueListProperty" String="name"/>
				</Record>
			  </Collection>
			</PropertyValue>
		  </Record>
		</Annotation>
		<Annotation Term="Common.Label" String="Dimension Unit"/>
	  </Annotations>
	  <Annotations Target="ProductService.Products/Category">
		<Annotation Term="Common.Label" String="Category"/>
	  </Annotations>
	  <Annotations Target="ProductService.Products/Category_ID">
		<Annotation Term="Common.Text" Path="Category/name">
		  <Annotation Term="UI.TextArrangement" EnumMember="UI.TextArrangementType/TextOnly"/>
		</Annotation>
		<Annotation Term="Common.ValueList">
		  <Record Type="Common.ValueListType">
			<PropertyValue Property="Label" String="Category"/>
			<PropertyValue Property="SearchSupported" Bool="true"/>
			<PropertyValue Property="CollectionPath" String="VH_Categories"/>
			<PropertyValue Property="Parameters">
			  <Collection>
				<Record Type="Common.ValueListParameterInOut">
				  <PropertyValue Property="LocalDataProperty" PropertyPath="Category_ID"/>
				  <PropertyValue Property="ValueListProperty" String="ID"/>
				</Record>
				<Record Type="Common.ValueListParameterInOut">
				  <PropertyValue Property="LocalDataProperty" PropertyPath="Category/name"/>
				  <PropertyValue Property="ValueListProperty" String="name"/>
				</Record>
			  </Collection>
			</PropertyValue>
		  </Record>
		</Annotation>
		<Annotation Term="Common.Label" String="Category"/>
		<Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
	  </Annotations>
	  <Annotations Target="ProductService.Products/rating">
		<Annotation Term="Core.Computed" Bool="true"/>
		<Annotation Term="Common.Label" String="Rating"/>
	  </Annotations>
	  <Annotations Target="ProductService.Products/StockStatus_ID">
		<Annotation Term="Common.Text" Path="StockStatus/name">
		  <Annotation Term="UI.TextArrangement" EnumMember="UI.TextArrangementType/TextOnly"/>
		</Annotation>
		<Annotation Term="Common.ValueListWithFixedValues" Bool="true"/>
		<Annotation Term="Common.ValueList">
		  <Record Type="Common.ValueListType">
			<PropertyValue Property="CollectionPath" String="VH_StockStatuses"/>
			<PropertyValue Property="Parameters">
			  <Collection>
				<Record Type="Common.ValueListParameterInOut">
				  <PropertyValue Property="LocalDataProperty" PropertyPath="StockStatus_ID"/>
				  <PropertyValue Property="ValueListProperty" String="ID"/>
				</Record>
			  </Collection>
			</PropertyValue>
		  </Record>
		</Annotation>
		<Annotation Term="Common.Label" String="Stock Status"/>
		<Annotation Term="Core.Computed" Bool="true"/>
	  </Annotations>
	  <Annotations Target="ProductService.Suppliers">
		<Annotation Term="Communication.Contact">
		  <Record Type="Communication.ContactType">
			<PropertyValue Property="fn" Path="name"/>
			<PropertyValue Property="role" String="Supplier"/>
			<PropertyValue Property="photo" String="sap-icon://supplier"/>
			<PropertyValue Property="email">
			  <Collection>
				<Record Type="Communication.EmailAddressType">
				  <PropertyValue Property="type" EnumMember="Communication.ContactInformationType/work"/>
				  <PropertyValue Property="address" Path="email"/>
				</Record>
			  </Collection>
			</PropertyValue>
			<PropertyValue Property="tel">
			  <Collection>
				<Record Type="Communication.PhoneNumberType">
				  <PropertyValue Property="type" EnumMember="Communication.PhoneType/work"/>
				  <PropertyValue Property="uri" Path="phone"/>
				</Record>
				<Record Type="Communication.PhoneNumberType">
				  <PropertyValue Property="type" EnumMember="Communication.PhoneType/fax"/>
				  <PropertyValue Property="uri" Path="fax"/>
				</Record>
			  </Collection>
			</PropertyValue>
		  </Record>
		</Annotation>
	  </Annotations>
	  <Annotations Target="ProductService.EntityContainer/Suppliers">
		<Annotation Term="Capabilities.DeleteRestrictions">
		  <Record Type="Capabilities.DeleteRestrictionsType">
			<PropertyValue Property="Deletable" Bool="false"/>
		  </Record>
		</Annotation>
		<Annotation Term="Capabilities.InsertRestrictions">
		  <Record Type="Capabilities.InsertRestrictionsType">
			<PropertyValue Property="Insertable" Bool="false"/>
		  </Record>
		</Annotation>
		<Annotation Term="Capabilities.UpdateRestrictions">
		  <Record Type="Capabilities.UpdateRestrictionsType">
			<PropertyValue Property="Updatable" Bool="false"/>
		  </Record>
		</Annotation>
	  </Annotations>
	  <Annotations Target="ProductService.Suppliers/createdAt">
		<Annotation Term="UI.HiddenFilter" Bool="true"/>
		<Annotation Term="Core.Immutable" Bool="true"/>
		<Annotation Term="Core.Computed" Bool="true"/>
		<Annotation Term="Common.Label" String="Created On"/>
	  </Annotations>
	  <Annotations Target="ProductService.Suppliers/createdBy">
		<Annotation Term="UI.HiddenFilter" Bool="true"/>
		<Annotation Term="Core.Immutable" Bool="true"/>
		<Annotation Term="Core.Computed" Bool="true"/>
		<Annotation Term="Core.Description" String="User's unique ID"/>
		<Annotation Term="Common.Label" String="Created By"/>
	  </Annotations>
	  <Annotations Target="ProductService.Suppliers/modifiedAt">
		<Annotation Term="UI.HiddenFilter" Bool="true"/>
		<Annotation Term="Core.Computed" Bool="true"/>
		<Annotation Term="Common.Label" String="Changed On"/>
	  </Annotations>
	  <Annotations Target="ProductService.Suppliers/modifiedBy">
		<Annotation Term="UI.HiddenFilter" Bool="true"/>
		<Annotation Term="Core.Computed" Bool="true"/>
		<Annotation Term="Core.Description" String="User's unique ID"/>
		<Annotation Term="Common.Label" String="Changed By"/>
	  </Annotations>
	  <Annotations Target="ProductService.Reviews">
		<Annotation Term="UI.HeaderInfo">
		  <Record Type="UI.HeaderInfoType">
			<PropertyValue Property="TypeName" String="Review"/>
			<PropertyValue Property="TypeNamePlural" String="Reviews"/>
			<PropertyValue Property="Title">
			  <Record Type="UI.DataField">
				<PropertyValue Property="Value" Path="name"/>
			  </Record>
			</PropertyValue>
			<PropertyValue Property="Description">
			  <Record Type="UI.DataField">
				<PropertyValue Property="Value" Path="createdAt"/>
			  </Record>
			</PropertyValue>
		  </Record>
		</Annotation>
		<Annotation Term="UI.LineItem">
		  <Collection>
			<Record Type="UI.DataField">
			  <PropertyValue Property="Value" Path="name"/>
			</Record>
			<Record Type="UI.DataField">
			  <PropertyValue Property="Value" Path="createdAt"/>
			</Record>
			<Record Type="UI.DataFieldForAnnotation">
			  <PropertyValue Property="Target" AnnotationPath="@UI.DataPoint#Rating"/>
			</Record>
			<Record Type="UI.DataField">
			  <PropertyValue Property="Value" Path="comment"/>
			</Record>
		  </Collection>
		</Annotation>
		<Annotation Term="UI.HeaderFacets">
		  <Collection>
			<Record Type="UI.ReferenceFacet">
			  <PropertyValue Property="Target" AnnotationPath="@UI.DataPoint#Rating"/>
			</Record>
		  </Collection>
		</Annotation>
		<Annotation Term="UI.Facets">
		  <Collection>
			<Record Type="UI.ReferenceFacet">
			  <PropertyValue Property="Target" AnnotationPath="@UI.FieldGroup#Comment"/>
			  <PropertyValue Property="Label" String="Review"/>
			</Record>
		  </Collection>
		</Annotation>
		<Annotation Term="UI.DataPoint" Qualifier="Rating">
		  <Record Type="UI.DataPointType">
			<PropertyValue Property="Value" Path="rating"/>
			<PropertyValue Property="Title" String="Rating"/>
			<PropertyValue Property="TargetValue" Int="5"/>
			<PropertyValue Property="Visualization" EnumMember="UI.VisualizationType/Rating"/>
		  </Record>
		</Annotation>
		<Annotation Term="UI.FieldGroup" Qualifier="Comment">
		  <Record Type="UI.FieldGroupType">
			<PropertyValue Property="Data">
			  <Collection>
				<Record Type="UI.DataField">
				  <PropertyValue Property="Value" Path="comment"/>
				</Record>
			  </Collection>
			</PropertyValue>
		  </Record>
		</Annotation>
	  </Annotations>
	  <Annotations Target="ProductService.EntityContainer/Reviews">
		<Annotation Term="Capabilities.DeleteRestrictions">
		  <Record Type="Capabilities.DeleteRestrictionsType">
			<PropertyValue Property="Deletable" Bool="false"/>
		  </Record>
		</Annotation>
		<Annotation Term="Capabilities.InsertRestrictions">
		  <Record Type="Capabilities.InsertRestrictionsType">
			<PropertyValue Property="Insertable" Bool="false"/>
		  </Record>
		</Annotation>
		<Annotation Term="Capabilities.UpdateRestrictions">
		  <Record Type="Capabilities.UpdateRestrictionsType">
			<PropertyValue Property="Updatable" Bool="false"/>
		  </Record>
		</Annotation>
	  </Annotations>
	  <Annotations Target="ProductService.Reviews/ID">
		<Annotation Term="UI.Hidden" Bool="true"/>
	  </Annotations>
	  <Annotations Target="ProductService.Reviews/createdAt">
		<Annotation Term="UI.HiddenFilter" Bool="true"/>
		<Annotation Term="Core.Immutable" Bool="true"/>
		<Annotation Term="Core.Computed" Bool="true"/>
		<Annotation Term="Common.Label" String="Created On"/>
	  </Annotations>
	  <Annotations Target="ProductService.Reviews/createdBy">
		<Annotation Term="UI.HiddenFilter" Bool="true"/>
		<Annotation Term="Core.Immutable" Bool="true"/>
		<Annotation Term="Core.Computed" Bool="true"/>
		<Annotation Term="Core.Description" String="User's unique ID"/>
		<Annotation Term="Common.Label" String="Created By"/>
	  </Annotations>
	  <Annotations Target="ProductService.Reviews/modifiedAt">
		<Annotation Term="UI.HiddenFilter" Bool="true"/>
		<Annotation Term="Core.Computed" Bool="true"/>
		<Annotation Term="Common.Label" String="Changed On"/>
	  </Annotations>
	  <Annotations Target="ProductService.Reviews/modifiedBy">
		<Annotation Term="UI.HiddenFilter" Bool="true"/>
		<Annotation Term="Core.Computed" Bool="true"/>
		<Annotation Term="Core.Description" String="User's unique ID"/>
		<Annotation Term="Common.Label" String="Changed By"/>
	  </Annotations>
	  <Annotations Target="ProductService.Reviews/name">
		<Annotation Term="Common.Label" String="Name"/>
	  </Annotations>
	  <Annotations Target="ProductService.Reviews/rating">
		<Annotation Term="Common.Label" String="Rating"/>
	  </Annotations>
	  <Annotations Target="ProductService.Reviews/comment">
		<Annotation Term="UI.MultiLineText" Bool="true"/>
		<Annotation Term="Common.Label" String="Comment"/>
	  </Annotations>
	  <Annotations Target="ProductService.Reviews/Product">
		<Annotation Term="UI.Hidden" Bool="true"/>
	  </Annotations>
	  <Annotations Target="ProductService.Reviews/Product_ID">
		<Annotation Term="UI.Hidden" Bool="true"/>
	  </Annotations>
	  <Annotations Target="ProductService.SalesData">
		<Annotation Term="Aggregation.ApplySupported">
		  <Record Type="Aggregation.ApplySupportedType">
			<PropertyValue Property="GroupableProperties">
			  <Collection>
				<PropertyPath>DeliveryMonth_ID</PropertyPath>
			  </Collection>
			</PropertyValue>
			<PropertyValue Property="AggregatableProperties">
			  <Collection>
				<Record Type="Aggregation.AggregatablePropertyType">
				  <PropertyValue Property="Property" PropertyPath="revenue"/>
				</Record>
			  </Collection>
			</PropertyValue>
		  </Record>
		</Annotation>
		<Annotation Term="Analytics.AggregatedProperty" Qualifier="totalRevenue">
		  <Record Type="Analytics.AggregatedPropertyType">
			<PropertyValue Property="Name" String="totalRevenue"/>
			<PropertyValue Property="AggregationMethod" String="sum"/>
			<PropertyValue Property="AggregatableProperty" PropertyPath="revenue"/>
			<Annotation Term="Common.Label" String="Total Revenue"/>
		  </Record>
		</Annotation>
		<Annotation Term="UI.PresentationVariant">
		  <Record Type="UI.PresentationVariantType">
			<PropertyValue Property="SortOrder">
			  <Collection>
				<Record Type="Common.SortOrderType">
				  <PropertyValue Property="Property" PropertyPath="DeliveryMonth_ID"/>
				</Record>
			  </Collection>
			</PropertyValue>
			<PropertyValue Property="GroupBy">
			  <Collection>
				<PropertyPath>DeliveryMonth_ID</PropertyPath>
			  </Collection>
			</PropertyValue>
			<PropertyValue Property="Visualizations">
			  <Collection>
				<AnnotationPath>@UI.LineItem</AnnotationPath>
			  </Collection>
			</PropertyValue>
		  </Record>
		</Annotation>
		<Annotation Term="UI.HeaderInfo">
		  <Record Type="UI.HeaderInfoType">
			<PropertyValue Property="TypeName" String="Sales Order"/>
			<PropertyValue Property="TypeNamePlural" String="Sales Orders"/>
		  </Record>
		</Annotation>
		<Annotation Term="UI.LineItem">
		  <Collection>
			<Record Type="UI.DataField">
			  <PropertyValue Property="Value" Path="DeliveryMonth_ID"/>
			</Record>
			<Record Type="UI.DataField">
			  <PropertyValue Property="Value" Path="revenue"/>
			</Record>
			<Record Type="UI.DataField">
			  <PropertyValue Property="Value" Path="deliveryDate"/>
			</Record>
		  </Collection>
		</Annotation>
		<Annotation Term="UI.Chart">
		  <Record Type="UI.ChartDefinitionType">
			<PropertyValue Property="Title" String="Revenue History"/>
			<PropertyValue Property="ChartType" EnumMember="UI.ChartType/Column"/>
			<PropertyValue Property="Dimensions">
			  <Collection>
				<PropertyPath>DeliveryMonth_ID</PropertyPath>
			  </Collection>
			</PropertyValue>
			<PropertyValue Property="DynamicMeasures">
			  <Collection>
				<AnnotationPath>@Analytics.AggregatedProperty#totalRevenue</AnnotationPath>
			  </Collection>
			</PropertyValue>
			<PropertyValue Property="MeasureAttributes">
			  <Collection>
				<Record Type="UI.ChartMeasureAttributeType">
				  <PropertyValue Property="DynamicMeasure" AnnotationPath="@Analytics.AggregatedProperty#totalRevenue"/>
				  <PropertyValue Property="Role" EnumMember="UI.ChartMeasureRoleType/Axis1"/>
				</Record>
			  </Collection>
			</PropertyValue>
		  </Record>
		</Annotation>
	  </Annotations>
	  <Annotations Target="ProductService.EntityContainer/SalesData">
		<Annotation Term="Aggregation.ApplySupported">
		  <Record Type="Aggregation.ApplySupportedType">
			<PropertyValue Property="GroupableProperties">
			  <Collection>
				<PropertyPath>DeliveryMonth_ID</PropertyPath>
			  </Collection>
			</PropertyValue>
			<PropertyValue Property="AggregatableProperties">
			  <Collection>
				<Record Type="Aggregation.AggregatablePropertyType">
				  <PropertyValue Property="Property" PropertyPath="revenue"/>
				</Record>
			  </Collection>
			</PropertyValue>
		  </Record>
		</Annotation>
		<Annotation Term="UI.PresentationVariant">
		  <Record Type="UI.PresentationVariantType">
			<PropertyValue Property="SortOrder">
			  <Collection>
				<Record Type="Common.SortOrderType">
				  <PropertyValue Property="Property" PropertyPath="DeliveryMonth_ID"/>
				</Record>
			  </Collection>
			</PropertyValue>
			<PropertyValue Property="GroupBy">
			  <Collection>
				<PropertyPath>DeliveryMonth_ID</PropertyPath>
			  </Collection>
			</PropertyValue>
			<PropertyValue Property="Visualizations">
			  <Collection>
				<AnnotationPath>@UI.LineItem</AnnotationPath>
			  </Collection>
			</PropertyValue>
		  </Record>
		</Annotation>
		<Annotation Term="Capabilities.DeleteRestrictions">
		  <Record Type="Capabilities.DeleteRestrictionsType">
			<PropertyValue Property="Deletable" Bool="false"/>
		  </Record>
		</Annotation>
		<Annotation Term="Capabilities.InsertRestrictions">
		  <Record Type="Capabilities.InsertRestrictionsType">
			<PropertyValue Property="Insertable" Bool="false"/>
		  </Record>
		</Annotation>
		<Annotation Term="Capabilities.UpdateRestrictions">
		  <Record Type="Capabilities.UpdateRestrictionsType">
			<PropertyValue Property="Updatable" Bool="false"/>
		  </Record>
		</Annotation>
	  </Annotations>
	  <Annotations Target="ProductService.SalesData/ID">
		<Annotation Term="UI.Hidden" Bool="true"/>
	  </Annotations>
	  <Annotations Target="ProductService.SalesData/deliveryDate">
		<Annotation Term="Common.Label" String="Delivery Date"/>
	  </Annotations>
	  <Annotations Target="ProductService.SalesData/revenue">
		<Annotation Term="Measures.Unit" Path="Currency_ID"/>
		<Annotation Term="Common.Label" String="Revenue"/>
	  </Annotations>
	  <Annotations Target="ProductService.SalesData/Product">
		<Annotation Term="UI.Hidden" Bool="true"/>
	  </Annotations>
	  <Annotations Target="ProductService.SalesData/Product_ID">
		<Annotation Term="UI.Hidden" Bool="true"/>
	  </Annotations>
	  <Annotations Target="ProductService.SalesData/Currency">
		<Annotation Term="UI.Hidden" Bool="true"/>
	  </Annotations>
	  <Annotations Target="ProductService.SalesData/Currency_ID">
		<Annotation Term="UI.Hidden" Bool="true"/>
	  </Annotations>
	  <Annotations Target="ProductService.SalesData/DeliveryMonth">
		<Annotation Term="Common.Label" String="Delivery Month"/>
	  </Annotations>
	  <Annotations Target="ProductService.SalesData/DeliveryMonth_ID">
		<Annotation Term="Common.Text" Path="deliveryMonth">
		  <Annotation Term="UI.TextArrangement" EnumMember="UI.TextArrangementType/TextOnly"/>
		</Annotation>
		<Annotation Term="Common.Label" String="Delivery Month"/>
	  </Annotations>
	  <Annotations Target="ProductService.SalesData/deliveryMonth">
		<Annotation Term="UI.Hidden" Bool="true"/>
	  </Annotations>
	  <Annotations Target="ProductService.EntityContainer/VH_StockStatuses">
		<Annotation Term="Capabilities.DeleteRestrictions">
		  <Record Type="Capabilities.DeleteRestrictionsType">
			<PropertyValue Property="Deletable" Bool="false"/>
		  </Record>
		</Annotation>
		<Annotation Term="Capabilities.InsertRestrictions">
		  <Record Type="Capabilities.InsertRestrictionsType">
			<PropertyValue Property="Insertable" Bool="false"/>
		  </Record>
		</Annotation>
		<Annotation Term="Capabilities.UpdateRestrictions">
		  <Record Type="Capabilities.UpdateRestrictionsType">
			<PropertyValue Property="Updatable" Bool="false"/>
		  </Record>
		</Annotation>
	  </Annotations>
	  <Annotations Target="ProductService.VH_StockStatuses/ID">
		<Annotation Term="Common.Text" Path="name">
		  <Annotation Term="UI.TextArrangement" EnumMember="UI.TextArrangementType/TextOnly"/>
		</Annotation>
		<Annotation Term="Common.Label" String="Stock Status"/>
	  </Annotations>
	  <Annotations Target="ProductService.EntityContainer/VH_Categories">
		<Annotation Term="Capabilities.DeleteRestrictions">
		  <Record Type="Capabilities.DeleteRestrictionsType">
			<PropertyValue Property="Deletable" Bool="false"/>
		  </Record>
		</Annotation>
		<Annotation Term="Capabilities.InsertRestrictions">
		  <Record Type="Capabilities.InsertRestrictionsType">
			<PropertyValue Property="Insertable" Bool="false"/>
		  </Record>
		</Annotation>
		<Annotation Term="Capabilities.UpdateRestrictions">
		  <Record Type="Capabilities.UpdateRestrictionsType">
			<PropertyValue Property="Updatable" Bool="false"/>
		  </Record>
		</Annotation>
	  </Annotations>
	  <Annotations Target="ProductService.VH_Categories/ID">
		<Annotation Term="UI.HiddenFilter" Bool="true"/>
		<Annotation Term="Common.Text" Path="name">
		  <Annotation Term="UI.TextArrangement" EnumMember="UI.TextArrangementType/TextOnly"/>
		</Annotation>
		<Annotation Term="Common.Label" String="Category"/>
	  </Annotations>
	  <Annotations Target="ProductService.VH_Categories/name">
		<Annotation Term="UI.Hidden" Bool="true"/>
	  </Annotations>
	  <Annotations Target="ProductService.EntityContainer/VH_Currencies">
		<Annotation Term="Capabilities.DeleteRestrictions">
		  <Record Type="Capabilities.DeleteRestrictionsType">
			<PropertyValue Property="Deletable" Bool="false"/>
		  </Record>
		</Annotation>
		<Annotation Term="Capabilities.InsertRestrictions">
		  <Record Type="Capabilities.InsertRestrictionsType">
			<PropertyValue Property="Insertable" Bool="false"/>
		  </Record>
		</Annotation>
		<Annotation Term="Capabilities.UpdateRestrictions">
		  <Record Type="Capabilities.UpdateRestrictionsType">
			<PropertyValue Property="Updatable" Bool="false"/>
		  </Record>
		</Annotation>
	  </Annotations>
	  <Annotations Target="ProductService.VH_Currencies/ID">
		<Annotation Term="UI.HiddenFilter" Bool="true"/>
		<Annotation Term="Common.Label" String="Currency Key"/>
	  </Annotations>
	  <Annotations Target="ProductService.VH_Currencies/name">
		<Annotation Term="UI.HiddenFilter" Bool="true"/>
		<Annotation Term="Common.Label" String="Name"/>
	  </Annotations>
	  <Annotations Target="ProductService.EntityContainer/VH_UnitOfMeasures">
		<Annotation Term="Capabilities.DeleteRestrictions">
		  <Record Type="Capabilities.DeleteRestrictionsType">
			<PropertyValue Property="Deletable" Bool="false"/>
		  </Record>
		</Annotation>
		<Annotation Term="Capabilities.InsertRestrictions">
		  <Record Type="Capabilities.InsertRestrictionsType">
			<PropertyValue Property="Insertable" Bool="false"/>
		  </Record>
		</Annotation>
		<Annotation Term="Capabilities.UpdateRestrictions">
		  <Record Type="Capabilities.UpdateRestrictionsType">
			<PropertyValue Property="Updatable" Bool="false"/>
		  </Record>
		</Annotation>
	  </Annotations>
	  <Annotations Target="ProductService.EntityContainer/VH_DimensionUnits">
		<Annotation Term="Capabilities.DeleteRestrictions">
		  <Record Type="Capabilities.DeleteRestrictionsType">
			<PropertyValue Property="Deletable" Bool="false"/>
		  </Record>
		</Annotation>
		<Annotation Term="Capabilities.InsertRestrictions">
		  <Record Type="Capabilities.InsertRestrictionsType">
			<PropertyValue Property="Insertable" Bool="false"/>
		  </Record>
		</Annotation>
		<Annotation Term="Capabilities.UpdateRestrictions">
		  <Record Type="Capabilities.UpdateRestrictionsType">
			<PropertyValue Property="Updatable" Bool="false"/>
		  </Record>
		</Annotation>
	  </Annotations>
	  <Annotations Target="ProductService.EntityContainer/VH_Months">
		<Annotation Term="Capabilities.DeleteRestrictions">
		  <Record Type="Capabilities.DeleteRestrictionsType">
			<PropertyValue Property="Deletable" Bool="false"/>
		  </Record>
		</Annotation>
		<Annotation Term="Capabilities.InsertRestrictions">
		  <Record Type="Capabilities.InsertRestrictionsType">
			<PropertyValue Property="Insertable" Bool="false"/>
		  </Record>
		</Annotation>
		<Annotation Term="Capabilities.UpdateRestrictions">
		  <Record Type="Capabilities.UpdateRestrictionsType">
			<PropertyValue Property="Updatable" Bool="false"/>
		  </Record>
		</Annotation>
	  </Annotations>
	  <Annotations Target="ProductService.Products_texts/locale">
		<Annotation Term="Common.Label" String="Language Code"/>
	  </Annotations>
	  <Annotations Target="ProductService.Products_texts/name">
		<Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
	  </Annotations>
	  <Annotations Target="ProductService.Products_texts/description">
		<Annotation Term="Common.FieldControl" EnumMember="Common.FieldControlType/Mandatory"/>
	  </Annotations>
	  <Annotations Target="ProductService.VH_StockStatuses_texts/locale">
		<Annotation Term="Common.Label" String="Language Code"/>
	  </Annotations>
	  <Annotations Target="ProductService.VH_Categories_texts/locale">
		<Annotation Term="Common.Label" String="Language Code"/>
	  </Annotations>
	  <Annotations Target="ProductService.VH_Currencies_texts/locale">
		<Annotation Term="Common.Label" String="Language Code"/>
	  </Annotations>
	  <Annotations Target="ProductService.VH_UnitOfMeasures_texts/locale">
		<Annotation Term="Common.Label" String="Language Code"/>
	  </Annotations>
	  <Annotations Target="ProductService.VH_DimensionUnits_texts/locale">
		<Annotation Term="Common.Label" String="Language Code"/>
	  </Annotations>
	  <Annotations Target="ProductService.VH_Months_texts/locale">
		<Annotation Term="Common.Label" String="Language Code"/>
	  </Annotations>
	</Schema>
  </edmx:DataServices>
</edmx:Edmx>`;