/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetClientByPK ($ID1: String! ) {\n      clients_info_by_pk(ID: $ID1) {\n      ID\n      name\n      ServiceHistory\n      Car\n    }\n  }": types.GetClientByPkDocument,
    "\nquery GetAllHistory( $_eq: String!) {\n  carvaluation(where: {clientID: {_eq: $_eq}}) {\n    __typename\n    clientID\n    Car\n    Date\n    Price\n    Title\n    Comment\n  }\n  carServiceHistory(where: {clientID: {_eq: $_eq}}) {\n    __typename\n    Car\n    clientID\n    Comment\n    Date\n    Maker\n    Price\n    Title\n  }\n  carPurchaseHistory(where: {clientID: {_eq: $_eq}}) {\n    __typename\n    Car\n    Comment\n    Date\n    Maker\n    Price\n    Title\n    clientID\n  }\n}": types.GetAllHistoryDocument,
    "\nquery SearchClient( $_ilike: String! ) {\n  clients_info(where: {ID: {_ilike: $_ilike}}) {\n    ID\n    address\n    name\n    phone\n  }\n}": types.SearchClientDocument,
    " query allclients {\n    clients_info {\n      ID\n      address\n      name\n      phone\n    }\n  }\n  ": types.AllclientsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetClientByPK ($ID1: String! ) {\n      clients_info_by_pk(ID: $ID1) {\n      ID\n      name\n      ServiceHistory\n      Car\n    }\n  }"): (typeof documents)["\n  query GetClientByPK ($ID1: String! ) {\n      clients_info_by_pk(ID: $ID1) {\n      ID\n      name\n      ServiceHistory\n      Car\n    }\n  }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GetAllHistory( $_eq: String!) {\n  carvaluation(where: {clientID: {_eq: $_eq}}) {\n    __typename\n    clientID\n    Car\n    Date\n    Price\n    Title\n    Comment\n  }\n  carServiceHistory(where: {clientID: {_eq: $_eq}}) {\n    __typename\n    Car\n    clientID\n    Comment\n    Date\n    Maker\n    Price\n    Title\n  }\n  carPurchaseHistory(where: {clientID: {_eq: $_eq}}) {\n    __typename\n    Car\n    Comment\n    Date\n    Maker\n    Price\n    Title\n    clientID\n  }\n}"): (typeof documents)["\nquery GetAllHistory( $_eq: String!) {\n  carvaluation(where: {clientID: {_eq: $_eq}}) {\n    __typename\n    clientID\n    Car\n    Date\n    Price\n    Title\n    Comment\n  }\n  carServiceHistory(where: {clientID: {_eq: $_eq}}) {\n    __typename\n    Car\n    clientID\n    Comment\n    Date\n    Maker\n    Price\n    Title\n  }\n  carPurchaseHistory(where: {clientID: {_eq: $_eq}}) {\n    __typename\n    Car\n    Comment\n    Date\n    Maker\n    Price\n    Title\n    clientID\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery SearchClient( $_ilike: String! ) {\n  clients_info(where: {ID: {_ilike: $_ilike}}) {\n    ID\n    address\n    name\n    phone\n  }\n}"): (typeof documents)["\nquery SearchClient( $_ilike: String! ) {\n  clients_info(where: {ID: {_ilike: $_ilike}}) {\n    ID\n    address\n    name\n    phone\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: " query allclients {\n    clients_info {\n      ID\n      address\n      name\n      phone\n    }\n  }\n  "): (typeof documents)[" query allclients {\n    clients_info {\n      ID\n      address\n      name\n      phone\n    }\n  }\n  "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;