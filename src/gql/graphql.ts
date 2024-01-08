/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  date: { input: any; output: any; }
  json: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** purchase history  */
export type CarPurchaseHistory = {
  __typename?: 'carPurchaseHistory';
  Car?: Maybe<Scalars['String']['output']>;
  Comment?: Maybe<Scalars['String']['output']>;
  Date?: Maybe<Scalars['date']['output']>;
  ID: Scalars['String']['output'];
  Maker?: Maybe<Scalars['String']['output']>;
  Price?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  clientID: Scalars['String']['output'];
};

/** aggregated selection of "carPurchaseHistory" */
export type CarPurchaseHistory_Aggregate = {
  __typename?: 'carPurchaseHistory_aggregate';
  aggregate?: Maybe<CarPurchaseHistory_Aggregate_Fields>;
  nodes: Array<CarPurchaseHistory>;
};

/** aggregate fields of "carPurchaseHistory" */
export type CarPurchaseHistory_Aggregate_Fields = {
  __typename?: 'carPurchaseHistory_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<CarPurchaseHistory_Max_Fields>;
  min?: Maybe<CarPurchaseHistory_Min_Fields>;
};


/** aggregate fields of "carPurchaseHistory" */
export type CarPurchaseHistory_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<CarPurchaseHistory_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "carPurchaseHistory". All fields are combined with a logical 'AND'. */
export type CarPurchaseHistory_Bool_Exp = {
  Car?: InputMaybe<String_Comparison_Exp>;
  Comment?: InputMaybe<String_Comparison_Exp>;
  Date?: InputMaybe<Date_Comparison_Exp>;
  ID?: InputMaybe<String_Comparison_Exp>;
  Maker?: InputMaybe<String_Comparison_Exp>;
  Price?: InputMaybe<String_Comparison_Exp>;
  Title?: InputMaybe<String_Comparison_Exp>;
  _and?: InputMaybe<Array<CarPurchaseHistory_Bool_Exp>>;
  _not?: InputMaybe<CarPurchaseHistory_Bool_Exp>;
  _or?: InputMaybe<Array<CarPurchaseHistory_Bool_Exp>>;
  clientID?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "carPurchaseHistory" */
export enum CarPurchaseHistory_Constraint {
  /** unique or primary key constraint on columns "ID" */
  CarPurchaseHistoryPkey = 'carPurchaseHistory_pkey'
}

/** input type for inserting data into table "carPurchaseHistory" */
export type CarPurchaseHistory_Insert_Input = {
  Car?: InputMaybe<Scalars['String']['input']>;
  Comment?: InputMaybe<Scalars['String']['input']>;
  Date?: InputMaybe<Scalars['date']['input']>;
  ID?: InputMaybe<Scalars['String']['input']>;
  Maker?: InputMaybe<Scalars['String']['input']>;
  Price?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  clientID?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type CarPurchaseHistory_Max_Fields = {
  __typename?: 'carPurchaseHistory_max_fields';
  Car?: Maybe<Scalars['String']['output']>;
  Comment?: Maybe<Scalars['String']['output']>;
  Date?: Maybe<Scalars['date']['output']>;
  ID?: Maybe<Scalars['String']['output']>;
  Maker?: Maybe<Scalars['String']['output']>;
  Price?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  clientID?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type CarPurchaseHistory_Min_Fields = {
  __typename?: 'carPurchaseHistory_min_fields';
  Car?: Maybe<Scalars['String']['output']>;
  Comment?: Maybe<Scalars['String']['output']>;
  Date?: Maybe<Scalars['date']['output']>;
  ID?: Maybe<Scalars['String']['output']>;
  Maker?: Maybe<Scalars['String']['output']>;
  Price?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  clientID?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "carPurchaseHistory" */
export type CarPurchaseHistory_Mutation_Response = {
  __typename?: 'carPurchaseHistory_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<CarPurchaseHistory>;
};

/** on_conflict condition type for table "carPurchaseHistory" */
export type CarPurchaseHistory_On_Conflict = {
  constraint: CarPurchaseHistory_Constraint;
  update_columns?: Array<CarPurchaseHistory_Update_Column>;
  where?: InputMaybe<CarPurchaseHistory_Bool_Exp>;
};

/** Ordering options when selecting data from "carPurchaseHistory". */
export type CarPurchaseHistory_Order_By = {
  Car?: InputMaybe<Order_By>;
  Comment?: InputMaybe<Order_By>;
  Date?: InputMaybe<Order_By>;
  ID?: InputMaybe<Order_By>;
  Maker?: InputMaybe<Order_By>;
  Price?: InputMaybe<Order_By>;
  Title?: InputMaybe<Order_By>;
  clientID?: InputMaybe<Order_By>;
};

/** primary key columns input for table: carPurchaseHistory */
export type CarPurchaseHistory_Pk_Columns_Input = {
  ID: Scalars['String']['input'];
};

/** select columns of table "carPurchaseHistory" */
export enum CarPurchaseHistory_Select_Column {
  /** column name */
  Car = 'Car',
  /** column name */
  Comment = 'Comment',
  /** column name */
  Date = 'Date',
  /** column name */
  Id = 'ID',
  /** column name */
  Maker = 'Maker',
  /** column name */
  Price = 'Price',
  /** column name */
  Title = 'Title',
  /** column name */
  ClientId = 'clientID'
}

/** input type for updating data in table "carPurchaseHistory" */
export type CarPurchaseHistory_Set_Input = {
  Car?: InputMaybe<Scalars['String']['input']>;
  Comment?: InputMaybe<Scalars['String']['input']>;
  Date?: InputMaybe<Scalars['date']['input']>;
  ID?: InputMaybe<Scalars['String']['input']>;
  Maker?: InputMaybe<Scalars['String']['input']>;
  Price?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  clientID?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "carPurchaseHistory" */
export type CarPurchaseHistory_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: CarPurchaseHistory_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type CarPurchaseHistory_Stream_Cursor_Value_Input = {
  Car?: InputMaybe<Scalars['String']['input']>;
  Comment?: InputMaybe<Scalars['String']['input']>;
  Date?: InputMaybe<Scalars['date']['input']>;
  ID?: InputMaybe<Scalars['String']['input']>;
  Maker?: InputMaybe<Scalars['String']['input']>;
  Price?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  clientID?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "carPurchaseHistory" */
export enum CarPurchaseHistory_Update_Column {
  /** column name */
  Car = 'Car',
  /** column name */
  Comment = 'Comment',
  /** column name */
  Date = 'Date',
  /** column name */
  Id = 'ID',
  /** column name */
  Maker = 'Maker',
  /** column name */
  Price = 'Price',
  /** column name */
  Title = 'Title',
  /** column name */
  ClientId = 'clientID'
}

export type CarPurchaseHistory_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CarPurchaseHistory_Set_Input>;
  /** filter the rows which have to be updated */
  where: CarPurchaseHistory_Bool_Exp;
};

/** all service history for clients  */
export type CarServiceHistory = {
  __typename?: 'carServiceHistory';
  Car: Scalars['String']['output'];
  Comment?: Maybe<Scalars['String']['output']>;
  Date?: Maybe<Scalars['date']['output']>;
  ID: Scalars['String']['output'];
  Maker: Scalars['String']['output'];
  Price?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  clientID: Scalars['String']['output'];
};

/** aggregated selection of "carServiceHistory" */
export type CarServiceHistory_Aggregate = {
  __typename?: 'carServiceHistory_aggregate';
  aggregate?: Maybe<CarServiceHistory_Aggregate_Fields>;
  nodes: Array<CarServiceHistory>;
};

/** aggregate fields of "carServiceHistory" */
export type CarServiceHistory_Aggregate_Fields = {
  __typename?: 'carServiceHistory_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<CarServiceHistory_Max_Fields>;
  min?: Maybe<CarServiceHistory_Min_Fields>;
};


/** aggregate fields of "carServiceHistory" */
export type CarServiceHistory_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<CarServiceHistory_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "carServiceHistory". All fields are combined with a logical 'AND'. */
export type CarServiceHistory_Bool_Exp = {
  Car?: InputMaybe<String_Comparison_Exp>;
  Comment?: InputMaybe<String_Comparison_Exp>;
  Date?: InputMaybe<Date_Comparison_Exp>;
  ID?: InputMaybe<String_Comparison_Exp>;
  Maker?: InputMaybe<String_Comparison_Exp>;
  Price?: InputMaybe<String_Comparison_Exp>;
  Title?: InputMaybe<String_Comparison_Exp>;
  _and?: InputMaybe<Array<CarServiceHistory_Bool_Exp>>;
  _not?: InputMaybe<CarServiceHistory_Bool_Exp>;
  _or?: InputMaybe<Array<CarServiceHistory_Bool_Exp>>;
  clientID?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "carServiceHistory" */
export enum CarServiceHistory_Constraint {
  /** unique or primary key constraint on columns "ID" */
  CarServiceHistoryPkey = 'carServiceHistory_pkey'
}

/** input type for inserting data into table "carServiceHistory" */
export type CarServiceHistory_Insert_Input = {
  Car?: InputMaybe<Scalars['String']['input']>;
  Comment?: InputMaybe<Scalars['String']['input']>;
  Date?: InputMaybe<Scalars['date']['input']>;
  ID?: InputMaybe<Scalars['String']['input']>;
  Maker?: InputMaybe<Scalars['String']['input']>;
  Price?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  clientID?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type CarServiceHistory_Max_Fields = {
  __typename?: 'carServiceHistory_max_fields';
  Car?: Maybe<Scalars['String']['output']>;
  Comment?: Maybe<Scalars['String']['output']>;
  Date?: Maybe<Scalars['date']['output']>;
  ID?: Maybe<Scalars['String']['output']>;
  Maker?: Maybe<Scalars['String']['output']>;
  Price?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  clientID?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type CarServiceHistory_Min_Fields = {
  __typename?: 'carServiceHistory_min_fields';
  Car?: Maybe<Scalars['String']['output']>;
  Comment?: Maybe<Scalars['String']['output']>;
  Date?: Maybe<Scalars['date']['output']>;
  ID?: Maybe<Scalars['String']['output']>;
  Maker?: Maybe<Scalars['String']['output']>;
  Price?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  clientID?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "carServiceHistory" */
export type CarServiceHistory_Mutation_Response = {
  __typename?: 'carServiceHistory_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<CarServiceHistory>;
};

/** on_conflict condition type for table "carServiceHistory" */
export type CarServiceHistory_On_Conflict = {
  constraint: CarServiceHistory_Constraint;
  update_columns?: Array<CarServiceHistory_Update_Column>;
  where?: InputMaybe<CarServiceHistory_Bool_Exp>;
};

/** Ordering options when selecting data from "carServiceHistory". */
export type CarServiceHistory_Order_By = {
  Car?: InputMaybe<Order_By>;
  Comment?: InputMaybe<Order_By>;
  Date?: InputMaybe<Order_By>;
  ID?: InputMaybe<Order_By>;
  Maker?: InputMaybe<Order_By>;
  Price?: InputMaybe<Order_By>;
  Title?: InputMaybe<Order_By>;
  clientID?: InputMaybe<Order_By>;
};

/** primary key columns input for table: carServiceHistory */
export type CarServiceHistory_Pk_Columns_Input = {
  ID: Scalars['String']['input'];
};

/** select columns of table "carServiceHistory" */
export enum CarServiceHistory_Select_Column {
  /** column name */
  Car = 'Car',
  /** column name */
  Comment = 'Comment',
  /** column name */
  Date = 'Date',
  /** column name */
  Id = 'ID',
  /** column name */
  Maker = 'Maker',
  /** column name */
  Price = 'Price',
  /** column name */
  Title = 'Title',
  /** column name */
  ClientId = 'clientID'
}

/** input type for updating data in table "carServiceHistory" */
export type CarServiceHistory_Set_Input = {
  Car?: InputMaybe<Scalars['String']['input']>;
  Comment?: InputMaybe<Scalars['String']['input']>;
  Date?: InputMaybe<Scalars['date']['input']>;
  ID?: InputMaybe<Scalars['String']['input']>;
  Maker?: InputMaybe<Scalars['String']['input']>;
  Price?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  clientID?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "carServiceHistory" */
export type CarServiceHistory_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: CarServiceHistory_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type CarServiceHistory_Stream_Cursor_Value_Input = {
  Car?: InputMaybe<Scalars['String']['input']>;
  Comment?: InputMaybe<Scalars['String']['input']>;
  Date?: InputMaybe<Scalars['date']['input']>;
  ID?: InputMaybe<Scalars['String']['input']>;
  Maker?: InputMaybe<Scalars['String']['input']>;
  Price?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  clientID?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "carServiceHistory" */
export enum CarServiceHistory_Update_Column {
  /** column name */
  Car = 'Car',
  /** column name */
  Comment = 'Comment',
  /** column name */
  Date = 'Date',
  /** column name */
  Id = 'ID',
  /** column name */
  Maker = 'Maker',
  /** column name */
  Price = 'Price',
  /** column name */
  Title = 'Title',
  /** column name */
  ClientId = 'clientID'
}

export type CarServiceHistory_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CarServiceHistory_Set_Input>;
  /** filter the rows which have to be updated */
  where: CarServiceHistory_Bool_Exp;
};

/** contain all car info */
export type Cardata = {
  __typename?: 'cardata';
  Car?: Maybe<Scalars['String']['output']>;
  ID: Scalars['String']['output'];
  Maker?: Maybe<Scalars['String']['output']>;
  purchaseHistory?: Maybe<Scalars['json']['output']>;
  serviceHistory?: Maybe<Scalars['json']['output']>;
};


/** contain all car info */
export type CardataPurchaseHistoryArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** contain all car info */
export type CardataServiceHistoryArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "cardata" */
export type Cardata_Aggregate = {
  __typename?: 'cardata_aggregate';
  aggregate?: Maybe<Cardata_Aggregate_Fields>;
  nodes: Array<Cardata>;
};

export type Cardata_Aggregate_Bool_Exp = {
  count?: InputMaybe<Cardata_Aggregate_Bool_Exp_Count>;
};

export type Cardata_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Cardata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Cardata_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "cardata" */
export type Cardata_Aggregate_Fields = {
  __typename?: 'cardata_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Cardata_Max_Fields>;
  min?: Maybe<Cardata_Min_Fields>;
};


/** aggregate fields of "cardata" */
export type Cardata_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cardata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "cardata" */
export type Cardata_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Cardata_Max_Order_By>;
  min?: InputMaybe<Cardata_Min_Order_By>;
};

/** input type for inserting array relation for remote table "cardata" */
export type Cardata_Arr_Rel_Insert_Input = {
  data: Array<Cardata_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Cardata_On_Conflict>;
};

/** Boolean expression to filter rows from the table "cardata". All fields are combined with a logical 'AND'. */
export type Cardata_Bool_Exp = {
  Car?: InputMaybe<String_Comparison_Exp>;
  ID?: InputMaybe<String_Comparison_Exp>;
  Maker?: InputMaybe<String_Comparison_Exp>;
  _and?: InputMaybe<Array<Cardata_Bool_Exp>>;
  _not?: InputMaybe<Cardata_Bool_Exp>;
  _or?: InputMaybe<Array<Cardata_Bool_Exp>>;
  purchaseHistory?: InputMaybe<Json_Comparison_Exp>;
  serviceHistory?: InputMaybe<Json_Comparison_Exp>;
};

/** unique or primary key constraints on table "cardata" */
export enum Cardata_Constraint {
  /** unique or primary key constraint on columns "ID" */
  CardataPkey = 'cardata_pkey'
}

/** input type for inserting data into table "cardata" */
export type Cardata_Insert_Input = {
  Car?: InputMaybe<Scalars['String']['input']>;
  ID?: InputMaybe<Scalars['String']['input']>;
  Maker?: InputMaybe<Scalars['String']['input']>;
  purchaseHistory?: InputMaybe<Scalars['json']['input']>;
  serviceHistory?: InputMaybe<Scalars['json']['input']>;
};

/** aggregate max on columns */
export type Cardata_Max_Fields = {
  __typename?: 'cardata_max_fields';
  Car?: Maybe<Scalars['String']['output']>;
  ID?: Maybe<Scalars['String']['output']>;
  Maker?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "cardata" */
export type Cardata_Max_Order_By = {
  Car?: InputMaybe<Order_By>;
  ID?: InputMaybe<Order_By>;
  Maker?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Cardata_Min_Fields = {
  __typename?: 'cardata_min_fields';
  Car?: Maybe<Scalars['String']['output']>;
  ID?: Maybe<Scalars['String']['output']>;
  Maker?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "cardata" */
export type Cardata_Min_Order_By = {
  Car?: InputMaybe<Order_By>;
  ID?: InputMaybe<Order_By>;
  Maker?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "cardata" */
export type Cardata_Mutation_Response = {
  __typename?: 'cardata_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Cardata>;
};

/** on_conflict condition type for table "cardata" */
export type Cardata_On_Conflict = {
  constraint: Cardata_Constraint;
  update_columns?: Array<Cardata_Update_Column>;
  where?: InputMaybe<Cardata_Bool_Exp>;
};

/** Ordering options when selecting data from "cardata". */
export type Cardata_Order_By = {
  Car?: InputMaybe<Order_By>;
  ID?: InputMaybe<Order_By>;
  Maker?: InputMaybe<Order_By>;
  purchaseHistory?: InputMaybe<Order_By>;
  serviceHistory?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cardata */
export type Cardata_Pk_Columns_Input = {
  ID: Scalars['String']['input'];
};

/** select columns of table "cardata" */
export enum Cardata_Select_Column {
  /** column name */
  Car = 'Car',
  /** column name */
  Id = 'ID',
  /** column name */
  Maker = 'Maker',
  /** column name */
  PurchaseHistory = 'purchaseHistory',
  /** column name */
  ServiceHistory = 'serviceHistory'
}

/** input type for updating data in table "cardata" */
export type Cardata_Set_Input = {
  Car?: InputMaybe<Scalars['String']['input']>;
  ID?: InputMaybe<Scalars['String']['input']>;
  Maker?: InputMaybe<Scalars['String']['input']>;
  purchaseHistory?: InputMaybe<Scalars['json']['input']>;
  serviceHistory?: InputMaybe<Scalars['json']['input']>;
};

/** Streaming cursor of the table "cardata" */
export type Cardata_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cardata_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Cardata_Stream_Cursor_Value_Input = {
  Car?: InputMaybe<Scalars['String']['input']>;
  ID?: InputMaybe<Scalars['String']['input']>;
  Maker?: InputMaybe<Scalars['String']['input']>;
  purchaseHistory?: InputMaybe<Scalars['json']['input']>;
  serviceHistory?: InputMaybe<Scalars['json']['input']>;
};

/** update columns of table "cardata" */
export enum Cardata_Update_Column {
  /** column name */
  Car = 'Car',
  /** column name */
  Id = 'ID',
  /** column name */
  Maker = 'Maker',
  /** column name */
  PurchaseHistory = 'purchaseHistory',
  /** column name */
  ServiceHistory = 'serviceHistory'
}

export type Cardata_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Cardata_Set_Input>;
  /** filter the rows which have to be updated */
  where: Cardata_Bool_Exp;
};

/** contain all car valuation history  */
export type Carvaluation = {
  __typename?: 'carvaluation';
  Car: Scalars['String']['output'];
  Comment?: Maybe<Scalars['String']['output']>;
  Date?: Maybe<Scalars['date']['output']>;
  ID: Scalars['String']['output'];
  Maker: Scalars['String']['output'];
  Price: Scalars['String']['output'];
  Title?: Maybe<Scalars['String']['output']>;
  clientID: Scalars['String']['output'];
};

/** aggregated selection of "carvaluation" */
export type Carvaluation_Aggregate = {
  __typename?: 'carvaluation_aggregate';
  aggregate?: Maybe<Carvaluation_Aggregate_Fields>;
  nodes: Array<Carvaluation>;
};

/** aggregate fields of "carvaluation" */
export type Carvaluation_Aggregate_Fields = {
  __typename?: 'carvaluation_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Carvaluation_Max_Fields>;
  min?: Maybe<Carvaluation_Min_Fields>;
};


/** aggregate fields of "carvaluation" */
export type Carvaluation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Carvaluation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "carvaluation". All fields are combined with a logical 'AND'. */
export type Carvaluation_Bool_Exp = {
  Car?: InputMaybe<String_Comparison_Exp>;
  Comment?: InputMaybe<String_Comparison_Exp>;
  Date?: InputMaybe<Date_Comparison_Exp>;
  ID?: InputMaybe<String_Comparison_Exp>;
  Maker?: InputMaybe<String_Comparison_Exp>;
  Price?: InputMaybe<String_Comparison_Exp>;
  Title?: InputMaybe<String_Comparison_Exp>;
  _and?: InputMaybe<Array<Carvaluation_Bool_Exp>>;
  _not?: InputMaybe<Carvaluation_Bool_Exp>;
  _or?: InputMaybe<Array<Carvaluation_Bool_Exp>>;
  clientID?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "carvaluation" */
export enum Carvaluation_Constraint {
  /** unique or primary key constraint on columns "ID" */
  CarvaluationPkey = 'carvaluation_pkey'
}

/** input type for inserting data into table "carvaluation" */
export type Carvaluation_Insert_Input = {
  Car?: InputMaybe<Scalars['String']['input']>;
  Comment?: InputMaybe<Scalars['String']['input']>;
  Date?: InputMaybe<Scalars['date']['input']>;
  ID?: InputMaybe<Scalars['String']['input']>;
  Maker?: InputMaybe<Scalars['String']['input']>;
  Price?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  clientID?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Carvaluation_Max_Fields = {
  __typename?: 'carvaluation_max_fields';
  Car?: Maybe<Scalars['String']['output']>;
  Comment?: Maybe<Scalars['String']['output']>;
  Date?: Maybe<Scalars['date']['output']>;
  ID?: Maybe<Scalars['String']['output']>;
  Maker?: Maybe<Scalars['String']['output']>;
  Price?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  clientID?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Carvaluation_Min_Fields = {
  __typename?: 'carvaluation_min_fields';
  Car?: Maybe<Scalars['String']['output']>;
  Comment?: Maybe<Scalars['String']['output']>;
  Date?: Maybe<Scalars['date']['output']>;
  ID?: Maybe<Scalars['String']['output']>;
  Maker?: Maybe<Scalars['String']['output']>;
  Price?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  clientID?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "carvaluation" */
export type Carvaluation_Mutation_Response = {
  __typename?: 'carvaluation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Carvaluation>;
};

/** on_conflict condition type for table "carvaluation" */
export type Carvaluation_On_Conflict = {
  constraint: Carvaluation_Constraint;
  update_columns?: Array<Carvaluation_Update_Column>;
  where?: InputMaybe<Carvaluation_Bool_Exp>;
};

/** Ordering options when selecting data from "carvaluation". */
export type Carvaluation_Order_By = {
  Car?: InputMaybe<Order_By>;
  Comment?: InputMaybe<Order_By>;
  Date?: InputMaybe<Order_By>;
  ID?: InputMaybe<Order_By>;
  Maker?: InputMaybe<Order_By>;
  Price?: InputMaybe<Order_By>;
  Title?: InputMaybe<Order_By>;
  clientID?: InputMaybe<Order_By>;
};

/** primary key columns input for table: carvaluation */
export type Carvaluation_Pk_Columns_Input = {
  ID: Scalars['String']['input'];
};

/** select columns of table "carvaluation" */
export enum Carvaluation_Select_Column {
  /** column name */
  Car = 'Car',
  /** column name */
  Comment = 'Comment',
  /** column name */
  Date = 'Date',
  /** column name */
  Id = 'ID',
  /** column name */
  Maker = 'Maker',
  /** column name */
  Price = 'Price',
  /** column name */
  Title = 'Title',
  /** column name */
  ClientId = 'clientID'
}

/** input type for updating data in table "carvaluation" */
export type Carvaluation_Set_Input = {
  Car?: InputMaybe<Scalars['String']['input']>;
  Comment?: InputMaybe<Scalars['String']['input']>;
  Date?: InputMaybe<Scalars['date']['input']>;
  ID?: InputMaybe<Scalars['String']['input']>;
  Maker?: InputMaybe<Scalars['String']['input']>;
  Price?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  clientID?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "carvaluation" */
export type Carvaluation_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Carvaluation_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Carvaluation_Stream_Cursor_Value_Input = {
  Car?: InputMaybe<Scalars['String']['input']>;
  Comment?: InputMaybe<Scalars['String']['input']>;
  Date?: InputMaybe<Scalars['date']['input']>;
  ID?: InputMaybe<Scalars['String']['input']>;
  Maker?: InputMaybe<Scalars['String']['input']>;
  Price?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  clientID?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "carvaluation" */
export enum Carvaluation_Update_Column {
  /** column name */
  Car = 'Car',
  /** column name */
  Comment = 'Comment',
  /** column name */
  Date = 'Date',
  /** column name */
  Id = 'ID',
  /** column name */
  Maker = 'Maker',
  /** column name */
  Price = 'Price',
  /** column name */
  Title = 'Title',
  /** column name */
  ClientId = 'clientID'
}

export type Carvaluation_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Carvaluation_Set_Input>;
  /** filter the rows which have to be updated */
  where: Carvaluation_Bool_Exp;
};

/** this store all clients crooober id , name , phone, address  */
export type Clients_Info = {
  __typename?: 'clients_info';
  Car?: Maybe<Scalars['json']['output']>;
  ID: Scalars['String']['output'];
  ServiceHistory?: Maybe<Scalars['json']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  /** fetch data from the table: "cardata" */
  cardata: Array<Cardata>;
  /** fetch aggregated fields from the table: "cardata" */
  cardata_aggregate: Cardata_Aggregate;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
};


/** this store all clients crooober id , name , phone, address  */
export type Clients_InfoCarArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** this store all clients crooober id , name , phone, address  */
export type Clients_InfoServiceHistoryArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** this store all clients crooober id , name , phone, address  */
export type Clients_InfoCardataArgs = {
  distinct_on?: InputMaybe<Array<Cardata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cardata_Order_By>>;
  where?: InputMaybe<Cardata_Bool_Exp>;
};


/** this store all clients crooober id , name , phone, address  */
export type Clients_InfoCardata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cardata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cardata_Order_By>>;
  where?: InputMaybe<Cardata_Bool_Exp>;
};

/** aggregated selection of "clients_info" */
export type Clients_Info_Aggregate = {
  __typename?: 'clients_info_aggregate';
  aggregate?: Maybe<Clients_Info_Aggregate_Fields>;
  nodes: Array<Clients_Info>;
};

/** aggregate fields of "clients_info" */
export type Clients_Info_Aggregate_Fields = {
  __typename?: 'clients_info_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Clients_Info_Max_Fields>;
  min?: Maybe<Clients_Info_Min_Fields>;
};


/** aggregate fields of "clients_info" */
export type Clients_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Clients_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "clients_info". All fields are combined with a logical 'AND'. */
export type Clients_Info_Bool_Exp = {
  Car?: InputMaybe<Json_Comparison_Exp>;
  ID?: InputMaybe<String_Comparison_Exp>;
  ServiceHistory?: InputMaybe<Json_Comparison_Exp>;
  _and?: InputMaybe<Array<Clients_Info_Bool_Exp>>;
  _not?: InputMaybe<Clients_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Clients_Info_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  cardata?: InputMaybe<Cardata_Bool_Exp>;
  cardata_aggregate?: InputMaybe<Cardata_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "clients_info" */
export enum Clients_Info_Constraint {
  /** unique or primary key constraint on columns "ID" */
  ClientsInfoIdKey = 'clients_info_ID_key',
  /** unique or primary key constraint on columns "ID" */
  ClientsInfoPkey = 'clients_info_pkey'
}

/** input type for inserting data into table "clients_info" */
export type Clients_Info_Insert_Input = {
  Car?: InputMaybe<Scalars['json']['input']>;
  ID?: InputMaybe<Scalars['String']['input']>;
  ServiceHistory?: InputMaybe<Scalars['json']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  cardata?: InputMaybe<Cardata_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Clients_Info_Max_Fields = {
  __typename?: 'clients_info_max_fields';
  ID?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Clients_Info_Min_Fields = {
  __typename?: 'clients_info_min_fields';
  ID?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "clients_info" */
export type Clients_Info_Mutation_Response = {
  __typename?: 'clients_info_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Clients_Info>;
};

/** on_conflict condition type for table "clients_info" */
export type Clients_Info_On_Conflict = {
  constraint: Clients_Info_Constraint;
  update_columns?: Array<Clients_Info_Update_Column>;
  where?: InputMaybe<Clients_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "clients_info". */
export type Clients_Info_Order_By = {
  Car?: InputMaybe<Order_By>;
  ID?: InputMaybe<Order_By>;
  ServiceHistory?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  cardata_aggregate?: InputMaybe<Cardata_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
};

/** primary key columns input for table: clients_info */
export type Clients_Info_Pk_Columns_Input = {
  ID: Scalars['String']['input'];
};

/** select columns of table "clients_info" */
export enum Clients_Info_Select_Column {
  /** column name */
  Car = 'Car',
  /** column name */
  Id = 'ID',
  /** column name */
  ServiceHistory = 'ServiceHistory',
  /** column name */
  Address = 'address',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone'
}

/** input type for updating data in table "clients_info" */
export type Clients_Info_Set_Input = {
  Car?: InputMaybe<Scalars['json']['input']>;
  ID?: InputMaybe<Scalars['String']['input']>;
  ServiceHistory?: InputMaybe<Scalars['json']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "clients_info" */
export type Clients_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Clients_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Clients_Info_Stream_Cursor_Value_Input = {
  Car?: InputMaybe<Scalars['json']['input']>;
  ID?: InputMaybe<Scalars['String']['input']>;
  ServiceHistory?: InputMaybe<Scalars['json']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "clients_info" */
export enum Clients_Info_Update_Column {
  /** column name */
  Car = 'Car',
  /** column name */
  Id = 'ID',
  /** column name */
  ServiceHistory = 'ServiceHistory',
  /** column name */
  Address = 'address',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone'
}

export type Clients_Info_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Clients_Info_Set_Input>;
  /** filter the rows which have to be updated */
  where: Clients_Info_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']['input']>;
  _gt?: InputMaybe<Scalars['json']['input']>;
  _gte?: InputMaybe<Scalars['json']['input']>;
  _in?: InputMaybe<Array<Scalars['json']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['json']['input']>;
  _lte?: InputMaybe<Scalars['json']['input']>;
  _neq?: InputMaybe<Scalars['json']['input']>;
  _nin?: InputMaybe<Array<Scalars['json']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "carPurchaseHistory" */
  delete_carPurchaseHistory?: Maybe<CarPurchaseHistory_Mutation_Response>;
  /** delete single row from the table: "carPurchaseHistory" */
  delete_carPurchaseHistory_by_pk?: Maybe<CarPurchaseHistory>;
  /** delete data from the table: "carServiceHistory" */
  delete_carServiceHistory?: Maybe<CarServiceHistory_Mutation_Response>;
  /** delete single row from the table: "carServiceHistory" */
  delete_carServiceHistory_by_pk?: Maybe<CarServiceHistory>;
  /** delete data from the table: "cardata" */
  delete_cardata?: Maybe<Cardata_Mutation_Response>;
  /** delete single row from the table: "cardata" */
  delete_cardata_by_pk?: Maybe<Cardata>;
  /** delete data from the table: "carvaluation" */
  delete_carvaluation?: Maybe<Carvaluation_Mutation_Response>;
  /** delete single row from the table: "carvaluation" */
  delete_carvaluation_by_pk?: Maybe<Carvaluation>;
  /** delete data from the table: "clients_info" */
  delete_clients_info?: Maybe<Clients_Info_Mutation_Response>;
  /** delete single row from the table: "clients_info" */
  delete_clients_info_by_pk?: Maybe<Clients_Info>;
  /** insert data into the table: "carPurchaseHistory" */
  insert_carPurchaseHistory?: Maybe<CarPurchaseHistory_Mutation_Response>;
  /** insert a single row into the table: "carPurchaseHistory" */
  insert_carPurchaseHistory_one?: Maybe<CarPurchaseHistory>;
  /** insert data into the table: "carServiceHistory" */
  insert_carServiceHistory?: Maybe<CarServiceHistory_Mutation_Response>;
  /** insert a single row into the table: "carServiceHistory" */
  insert_carServiceHistory_one?: Maybe<CarServiceHistory>;
  /** insert data into the table: "cardata" */
  insert_cardata?: Maybe<Cardata_Mutation_Response>;
  /** insert a single row into the table: "cardata" */
  insert_cardata_one?: Maybe<Cardata>;
  /** insert data into the table: "carvaluation" */
  insert_carvaluation?: Maybe<Carvaluation_Mutation_Response>;
  /** insert a single row into the table: "carvaluation" */
  insert_carvaluation_one?: Maybe<Carvaluation>;
  /** insert data into the table: "clients_info" */
  insert_clients_info?: Maybe<Clients_Info_Mutation_Response>;
  /** insert a single row into the table: "clients_info" */
  insert_clients_info_one?: Maybe<Clients_Info>;
  /** update data of the table: "carPurchaseHistory" */
  update_carPurchaseHistory?: Maybe<CarPurchaseHistory_Mutation_Response>;
  /** update single row of the table: "carPurchaseHistory" */
  update_carPurchaseHistory_by_pk?: Maybe<CarPurchaseHistory>;
  /** update multiples rows of table: "carPurchaseHistory" */
  update_carPurchaseHistory_many?: Maybe<Array<Maybe<CarPurchaseHistory_Mutation_Response>>>;
  /** update data of the table: "carServiceHistory" */
  update_carServiceHistory?: Maybe<CarServiceHistory_Mutation_Response>;
  /** update single row of the table: "carServiceHistory" */
  update_carServiceHistory_by_pk?: Maybe<CarServiceHistory>;
  /** update multiples rows of table: "carServiceHistory" */
  update_carServiceHistory_many?: Maybe<Array<Maybe<CarServiceHistory_Mutation_Response>>>;
  /** update data of the table: "cardata" */
  update_cardata?: Maybe<Cardata_Mutation_Response>;
  /** update single row of the table: "cardata" */
  update_cardata_by_pk?: Maybe<Cardata>;
  /** update multiples rows of table: "cardata" */
  update_cardata_many?: Maybe<Array<Maybe<Cardata_Mutation_Response>>>;
  /** update data of the table: "carvaluation" */
  update_carvaluation?: Maybe<Carvaluation_Mutation_Response>;
  /** update single row of the table: "carvaluation" */
  update_carvaluation_by_pk?: Maybe<Carvaluation>;
  /** update multiples rows of table: "carvaluation" */
  update_carvaluation_many?: Maybe<Array<Maybe<Carvaluation_Mutation_Response>>>;
  /** update data of the table: "clients_info" */
  update_clients_info?: Maybe<Clients_Info_Mutation_Response>;
  /** update single row of the table: "clients_info" */
  update_clients_info_by_pk?: Maybe<Clients_Info>;
  /** update multiples rows of table: "clients_info" */
  update_clients_info_many?: Maybe<Array<Maybe<Clients_Info_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_CarPurchaseHistoryArgs = {
  where: CarPurchaseHistory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_CarPurchaseHistory_By_PkArgs = {
  ID: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CarServiceHistoryArgs = {
  where: CarServiceHistory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_CarServiceHistory_By_PkArgs = {
  ID: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CardataArgs = {
  where: Cardata_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cardata_By_PkArgs = {
  ID: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CarvaluationArgs = {
  where: Carvaluation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Carvaluation_By_PkArgs = {
  ID: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Clients_InfoArgs = {
  where: Clients_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Clients_Info_By_PkArgs = {
  ID: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInsert_CarPurchaseHistoryArgs = {
  objects: Array<CarPurchaseHistory_Insert_Input>;
  on_conflict?: InputMaybe<CarPurchaseHistory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CarPurchaseHistory_OneArgs = {
  object: CarPurchaseHistory_Insert_Input;
  on_conflict?: InputMaybe<CarPurchaseHistory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CarServiceHistoryArgs = {
  objects: Array<CarServiceHistory_Insert_Input>;
  on_conflict?: InputMaybe<CarServiceHistory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CarServiceHistory_OneArgs = {
  object: CarServiceHistory_Insert_Input;
  on_conflict?: InputMaybe<CarServiceHistory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CardataArgs = {
  objects: Array<Cardata_Insert_Input>;
  on_conflict?: InputMaybe<Cardata_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cardata_OneArgs = {
  object: Cardata_Insert_Input;
  on_conflict?: InputMaybe<Cardata_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CarvaluationArgs = {
  objects: Array<Carvaluation_Insert_Input>;
  on_conflict?: InputMaybe<Carvaluation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Carvaluation_OneArgs = {
  object: Carvaluation_Insert_Input;
  on_conflict?: InputMaybe<Carvaluation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Clients_InfoArgs = {
  objects: Array<Clients_Info_Insert_Input>;
  on_conflict?: InputMaybe<Clients_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Clients_Info_OneArgs = {
  object: Clients_Info_Insert_Input;
  on_conflict?: InputMaybe<Clients_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CarPurchaseHistoryArgs = {
  _set?: InputMaybe<CarPurchaseHistory_Set_Input>;
  where: CarPurchaseHistory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_CarPurchaseHistory_By_PkArgs = {
  _set?: InputMaybe<CarPurchaseHistory_Set_Input>;
  pk_columns: CarPurchaseHistory_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CarPurchaseHistory_ManyArgs = {
  updates: Array<CarPurchaseHistory_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CarServiceHistoryArgs = {
  _set?: InputMaybe<CarServiceHistory_Set_Input>;
  where: CarServiceHistory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_CarServiceHistory_By_PkArgs = {
  _set?: InputMaybe<CarServiceHistory_Set_Input>;
  pk_columns: CarServiceHistory_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CarServiceHistory_ManyArgs = {
  updates: Array<CarServiceHistory_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CardataArgs = {
  _set?: InputMaybe<Cardata_Set_Input>;
  where: Cardata_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cardata_By_PkArgs = {
  _set?: InputMaybe<Cardata_Set_Input>;
  pk_columns: Cardata_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cardata_ManyArgs = {
  updates: Array<Cardata_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CarvaluationArgs = {
  _set?: InputMaybe<Carvaluation_Set_Input>;
  where: Carvaluation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Carvaluation_By_PkArgs = {
  _set?: InputMaybe<Carvaluation_Set_Input>;
  pk_columns: Carvaluation_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Carvaluation_ManyArgs = {
  updates: Array<Carvaluation_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Clients_InfoArgs = {
  _set?: InputMaybe<Clients_Info_Set_Input>;
  where: Clients_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Clients_Info_By_PkArgs = {
  _set?: InputMaybe<Clients_Info_Set_Input>;
  pk_columns: Clients_Info_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Clients_Info_ManyArgs = {
  updates: Array<Clients_Info_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "carPurchaseHistory" */
  carPurchaseHistory: Array<CarPurchaseHistory>;
  /** fetch aggregated fields from the table: "carPurchaseHistory" */
  carPurchaseHistory_aggregate: CarPurchaseHistory_Aggregate;
  /** fetch data from the table: "carPurchaseHistory" using primary key columns */
  carPurchaseHistory_by_pk?: Maybe<CarPurchaseHistory>;
  /** fetch data from the table: "carServiceHistory" */
  carServiceHistory: Array<CarServiceHistory>;
  /** fetch aggregated fields from the table: "carServiceHistory" */
  carServiceHistory_aggregate: CarServiceHistory_Aggregate;
  /** fetch data from the table: "carServiceHistory" using primary key columns */
  carServiceHistory_by_pk?: Maybe<CarServiceHistory>;
  /** fetch data from the table: "cardata" */
  cardata: Array<Cardata>;
  /** fetch aggregated fields from the table: "cardata" */
  cardata_aggregate: Cardata_Aggregate;
  /** fetch data from the table: "cardata" using primary key columns */
  cardata_by_pk?: Maybe<Cardata>;
  /** fetch data from the table: "carvaluation" */
  carvaluation: Array<Carvaluation>;
  /** fetch aggregated fields from the table: "carvaluation" */
  carvaluation_aggregate: Carvaluation_Aggregate;
  /** fetch data from the table: "carvaluation" using primary key columns */
  carvaluation_by_pk?: Maybe<Carvaluation>;
  /** fetch data from the table: "clients_info" */
  clients_info: Array<Clients_Info>;
  /** fetch aggregated fields from the table: "clients_info" */
  clients_info_aggregate: Clients_Info_Aggregate;
  /** fetch data from the table: "clients_info" using primary key columns */
  clients_info_by_pk?: Maybe<Clients_Info>;
};


export type Query_RootCarPurchaseHistoryArgs = {
  distinct_on?: InputMaybe<Array<CarPurchaseHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CarPurchaseHistory_Order_By>>;
  where?: InputMaybe<CarPurchaseHistory_Bool_Exp>;
};


export type Query_RootCarPurchaseHistory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CarPurchaseHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CarPurchaseHistory_Order_By>>;
  where?: InputMaybe<CarPurchaseHistory_Bool_Exp>;
};


export type Query_RootCarPurchaseHistory_By_PkArgs = {
  ID: Scalars['String']['input'];
};


export type Query_RootCarServiceHistoryArgs = {
  distinct_on?: InputMaybe<Array<CarServiceHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CarServiceHistory_Order_By>>;
  where?: InputMaybe<CarServiceHistory_Bool_Exp>;
};


export type Query_RootCarServiceHistory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CarServiceHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CarServiceHistory_Order_By>>;
  where?: InputMaybe<CarServiceHistory_Bool_Exp>;
};


export type Query_RootCarServiceHistory_By_PkArgs = {
  ID: Scalars['String']['input'];
};


export type Query_RootCardataArgs = {
  distinct_on?: InputMaybe<Array<Cardata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cardata_Order_By>>;
  where?: InputMaybe<Cardata_Bool_Exp>;
};


export type Query_RootCardata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cardata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cardata_Order_By>>;
  where?: InputMaybe<Cardata_Bool_Exp>;
};


export type Query_RootCardata_By_PkArgs = {
  ID: Scalars['String']['input'];
};


export type Query_RootCarvaluationArgs = {
  distinct_on?: InputMaybe<Array<Carvaluation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Carvaluation_Order_By>>;
  where?: InputMaybe<Carvaluation_Bool_Exp>;
};


export type Query_RootCarvaluation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Carvaluation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Carvaluation_Order_By>>;
  where?: InputMaybe<Carvaluation_Bool_Exp>;
};


export type Query_RootCarvaluation_By_PkArgs = {
  ID: Scalars['String']['input'];
};


export type Query_RootClients_InfoArgs = {
  distinct_on?: InputMaybe<Array<Clients_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clients_Info_Order_By>>;
  where?: InputMaybe<Clients_Info_Bool_Exp>;
};


export type Query_RootClients_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Clients_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clients_Info_Order_By>>;
  where?: InputMaybe<Clients_Info_Bool_Exp>;
};


export type Query_RootClients_Info_By_PkArgs = {
  ID: Scalars['String']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "carPurchaseHistory" */
  carPurchaseHistory: Array<CarPurchaseHistory>;
  /** fetch aggregated fields from the table: "carPurchaseHistory" */
  carPurchaseHistory_aggregate: CarPurchaseHistory_Aggregate;
  /** fetch data from the table: "carPurchaseHistory" using primary key columns */
  carPurchaseHistory_by_pk?: Maybe<CarPurchaseHistory>;
  /** fetch data from the table in a streaming manner: "carPurchaseHistory" */
  carPurchaseHistory_stream: Array<CarPurchaseHistory>;
  /** fetch data from the table: "carServiceHistory" */
  carServiceHistory: Array<CarServiceHistory>;
  /** fetch aggregated fields from the table: "carServiceHistory" */
  carServiceHistory_aggregate: CarServiceHistory_Aggregate;
  /** fetch data from the table: "carServiceHistory" using primary key columns */
  carServiceHistory_by_pk?: Maybe<CarServiceHistory>;
  /** fetch data from the table in a streaming manner: "carServiceHistory" */
  carServiceHistory_stream: Array<CarServiceHistory>;
  /** fetch data from the table: "cardata" */
  cardata: Array<Cardata>;
  /** fetch aggregated fields from the table: "cardata" */
  cardata_aggregate: Cardata_Aggregate;
  /** fetch data from the table: "cardata" using primary key columns */
  cardata_by_pk?: Maybe<Cardata>;
  /** fetch data from the table in a streaming manner: "cardata" */
  cardata_stream: Array<Cardata>;
  /** fetch data from the table: "carvaluation" */
  carvaluation: Array<Carvaluation>;
  /** fetch aggregated fields from the table: "carvaluation" */
  carvaluation_aggregate: Carvaluation_Aggregate;
  /** fetch data from the table: "carvaluation" using primary key columns */
  carvaluation_by_pk?: Maybe<Carvaluation>;
  /** fetch data from the table in a streaming manner: "carvaluation" */
  carvaluation_stream: Array<Carvaluation>;
  /** fetch data from the table: "clients_info" */
  clients_info: Array<Clients_Info>;
  /** fetch aggregated fields from the table: "clients_info" */
  clients_info_aggregate: Clients_Info_Aggregate;
  /** fetch data from the table: "clients_info" using primary key columns */
  clients_info_by_pk?: Maybe<Clients_Info>;
  /** fetch data from the table in a streaming manner: "clients_info" */
  clients_info_stream: Array<Clients_Info>;
};


export type Subscription_RootCarPurchaseHistoryArgs = {
  distinct_on?: InputMaybe<Array<CarPurchaseHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CarPurchaseHistory_Order_By>>;
  where?: InputMaybe<CarPurchaseHistory_Bool_Exp>;
};


export type Subscription_RootCarPurchaseHistory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CarPurchaseHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CarPurchaseHistory_Order_By>>;
  where?: InputMaybe<CarPurchaseHistory_Bool_Exp>;
};


export type Subscription_RootCarPurchaseHistory_By_PkArgs = {
  ID: Scalars['String']['input'];
};


export type Subscription_RootCarPurchaseHistory_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CarPurchaseHistory_Stream_Cursor_Input>>;
  where?: InputMaybe<CarPurchaseHistory_Bool_Exp>;
};


export type Subscription_RootCarServiceHistoryArgs = {
  distinct_on?: InputMaybe<Array<CarServiceHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CarServiceHistory_Order_By>>;
  where?: InputMaybe<CarServiceHistory_Bool_Exp>;
};


export type Subscription_RootCarServiceHistory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CarServiceHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CarServiceHistory_Order_By>>;
  where?: InputMaybe<CarServiceHistory_Bool_Exp>;
};


export type Subscription_RootCarServiceHistory_By_PkArgs = {
  ID: Scalars['String']['input'];
};


export type Subscription_RootCarServiceHistory_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CarServiceHistory_Stream_Cursor_Input>>;
  where?: InputMaybe<CarServiceHistory_Bool_Exp>;
};


export type Subscription_RootCardataArgs = {
  distinct_on?: InputMaybe<Array<Cardata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cardata_Order_By>>;
  where?: InputMaybe<Cardata_Bool_Exp>;
};


export type Subscription_RootCardata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cardata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cardata_Order_By>>;
  where?: InputMaybe<Cardata_Bool_Exp>;
};


export type Subscription_RootCardata_By_PkArgs = {
  ID: Scalars['String']['input'];
};


export type Subscription_RootCardata_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Cardata_Stream_Cursor_Input>>;
  where?: InputMaybe<Cardata_Bool_Exp>;
};


export type Subscription_RootCarvaluationArgs = {
  distinct_on?: InputMaybe<Array<Carvaluation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Carvaluation_Order_By>>;
  where?: InputMaybe<Carvaluation_Bool_Exp>;
};


export type Subscription_RootCarvaluation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Carvaluation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Carvaluation_Order_By>>;
  where?: InputMaybe<Carvaluation_Bool_Exp>;
};


export type Subscription_RootCarvaluation_By_PkArgs = {
  ID: Scalars['String']['input'];
};


export type Subscription_RootCarvaluation_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Carvaluation_Stream_Cursor_Input>>;
  where?: InputMaybe<Carvaluation_Bool_Exp>;
};


export type Subscription_RootClients_InfoArgs = {
  distinct_on?: InputMaybe<Array<Clients_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clients_Info_Order_By>>;
  where?: InputMaybe<Clients_Info_Bool_Exp>;
};


export type Subscription_RootClients_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Clients_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Clients_Info_Order_By>>;
  where?: InputMaybe<Clients_Info_Bool_Exp>;
};


export type Subscription_RootClients_Info_By_PkArgs = {
  ID: Scalars['String']['input'];
};


export type Subscription_RootClients_Info_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Clients_Info_Stream_Cursor_Input>>;
  where?: InputMaybe<Clients_Info_Bool_Exp>;
};

export type GetClientByPkQueryVariables = Exact<{
  ID1: Scalars['String']['input'];
}>;


export type GetClientByPkQuery = { __typename?: 'query_root', clients_info_by_pk?: { __typename?: 'clients_info', ID: string, name: string, ServiceHistory?: any | null, Car?: any | null } | null };

export type GetAllHistoryQueryVariables = Exact<{
  _eq: Scalars['String']['input'];
}>;


export type GetAllHistoryQuery = { __typename?: 'query_root', carvaluation: Array<{ __typename: 'carvaluation', clientID: string, Car: string, Date?: any | null, Price: string, Title?: string | null, Comment?: string | null }>, carServiceHistory: Array<{ __typename: 'carServiceHistory', Car: string, clientID: string, Comment?: string | null, Date?: any | null, Maker: string, Price?: string | null, Title?: string | null }>, carPurchaseHistory: Array<{ __typename: 'carPurchaseHistory', Car?: string | null, Comment?: string | null, Date?: any | null, Maker?: string | null, Price?: string | null, Title?: string | null, clientID: string }> };

export type SearchClientQueryVariables = Exact<{
  _ilike: Scalars['String']['input'];
}>;


export type SearchClientQuery = { __typename?: 'query_root', clients_info: Array<{ __typename?: 'clients_info', ID: string, address?: string | null, name: string, phone?: string | null }> };

export type AllclientsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllclientsQuery = { __typename?: 'query_root', clients_info: Array<{ __typename?: 'clients_info', ID: string, address?: string | null, name: string, phone?: string | null }> };


export const GetClientByPkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientByPK"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ID1"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clients_info_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ID1"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ServiceHistory"}},{"kind":"Field","name":{"kind":"Name","value":"Car"}}]}}]}}]} as unknown as DocumentNode<GetClientByPkQuery, GetClientByPkQueryVariables>;
export const GetAllHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_eq"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"carvaluation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"clientID"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_eq"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"clientID"}},{"kind":"Field","name":{"kind":"Name","value":"Car"}},{"kind":"Field","name":{"kind":"Name","value":"Date"}},{"kind":"Field","name":{"kind":"Name","value":"Price"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Comment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"carServiceHistory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"clientID"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_eq"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"Car"}},{"kind":"Field","name":{"kind":"Name","value":"clientID"}},{"kind":"Field","name":{"kind":"Name","value":"Comment"}},{"kind":"Field","name":{"kind":"Name","value":"Date"}},{"kind":"Field","name":{"kind":"Name","value":"Maker"}},{"kind":"Field","name":{"kind":"Name","value":"Price"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"carPurchaseHistory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"clientID"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_eq"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"Car"}},{"kind":"Field","name":{"kind":"Name","value":"Comment"}},{"kind":"Field","name":{"kind":"Name","value":"Date"}},{"kind":"Field","name":{"kind":"Name","value":"Maker"}},{"kind":"Field","name":{"kind":"Name","value":"Price"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"clientID"}}]}}]}}]} as unknown as DocumentNode<GetAllHistoryQuery, GetAllHistoryQueryVariables>;
export const SearchClientDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchClient"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_ilike"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clients_info"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ID"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_ilike"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}}]}}]} as unknown as DocumentNode<SearchClientQuery, SearchClientQueryVariables>;
export const AllclientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allclients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clients_info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ID"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}}]}}]} as unknown as DocumentNode<AllclientsQuery, AllclientsQueryVariables>;