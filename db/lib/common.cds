/**
 * Aspect for entities with canonical universal IDs.
 */
abstract entity cuid {
    key Id : UUID; //> automatically filled in
}

/**
 * Aspect to capture changes by user and name.
 */
aspect managed {
    CreatedAt  : Timestamp @cds.on.insert : $now;
    CreatedBy  : User      @cds.on.insert : $user;
    ModifiedAt : Timestamp @cds.on.insert : $now  @cds.on.update  : $now;
    ModifiedBy : User      @cds.on.insert : $user  @cds.on.update : $user;
}

/**
 * Canonical user ID
 */
type User : String(255);

//---------------------------------------------------------------------------
// Annotations for Fiori UIs...

annotate managed with {
    CreatedAt  @UI.HiddenFilter;
    CreatedBy  @UI.HiddenFilter;
    ModifiedAt @UI.HiddenFilter;
    ModifiedBy @UI.HiddenFilter;
}

annotate managed with {
    CreatedAt @Core.Immutable;
    CreatedBy @Core.Immutable;
}

//---------------------------------------------------------------------------
// Common Annotations...

annotate User with @(
    Title       : '{i18n>UserID}',
    Description : '{i18n>UserID.Description}'
);

annotate managed with {
    CreatedAt  @title : '{i18n>CreatedAt}';
    CreatedBy  @title : '{i18n>CreatedBy}';
    ModifiedAt @title : '{i18n>ChangedAt}';
    ModifiedBy @title : '{i18n>ChangedBy}';
}

//---------------------------------------------------------------------------
// Temporary Workarounds...
// REVISIT: change @odata.on... to @cds.on...
// REVISIT: @cds.on... should automatically result in @readonly @Core.Computed

annotate managed with {
    ModifiedAt @readonly  @odata.on.update : #now;
    CreatedAt  @readonly  @odata.on.insert : #now;
    CreatedBy  @readonly  @odata.on.insert : #user;
    ModifiedBy @readonly  @odata.on.update : #user;
}

//---------------------------------------------------------------------
