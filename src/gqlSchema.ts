import { TypedDocumentNode, gql } from '@apollo/client';

//MYQuery2
export const Get_Detail : TypedDocumentNode<Data, Variables> = gql`
  query GetClientByPK ($ID1: String! ) {
      clients_info_by_pk(ID: $ID1) {
      ID
      name
      ServiceHistory
      Car
    }
  }`;

//MYQuery3
export const Get_AllHistory : TypedDocumentNode<Data2, Variables2> = gql`
query GetAllHistory( $_eq: String!) {
  carvaluation(where: {clientID: {_eq: $_eq}}) {
    ID
    __typename
    clientID
    Car
    Date
    Price
    Title
    Comment
  }
  carServiceHistory(where: {clientID: {_eq: $_eq}}) {
    ID
    __typename
    Car
    clientID
    Comment
    Date
    Maker
    Price
    Title
  }
  carPurchaseHistory(where: {clientID: {_eq: $_eq}}) {
    ID
    __typename
    Car
    Comment
    Date
    Maker
    Price
    Title
    clientID
  }
  cardata(where: {clientID: {_eq: $_eq}} ) {
    clientID
    imageURL
  }
}`;

export const Get_HistoryByID : TypedDocumentNode<Data2, Variables2> = gql`
query GetHistoryByID( $_eq: String!) {
  carvaluation(where: {ID: {_eq: $_eq}}) {
    ID
    __typename
    clientID
    Car
    Date
    Price
    Title
    Comment
  }
  carServiceHistory(where: {ID: {_eq: $_eq}}) {
    ID
    __typename
    Car
    clientID
    Comment
    Date
    Maker
    Price
    Title
  }
  carPurchaseHistory(where: {ID: {_eq: $_eq}}) {
    ID
    __typename
    Car
    Comment
    Date
    Maker
    Price
    Title
    clientID
  }
}`;

export const Get_MessageByID : TypedDocumentNode<Data5, Variables2> = gql`
query Get_Message( $_eq: String!) {
  messageData(where: {PHID: {_eq: $_eq}}) {
    date
    message
    messageID
  }
}`;

interface Data5 {
  messageData: messageData[]
}

type messageData = {
  date : Date,
  message : string,
  messageID : string
}


//car history/service history 
interface Data {
    clients_info_by_pk: clients_info_by_pk;
  }
  
  interface Variables {
    ID1: string;
  }
  
  type clients_info_by_pk = {
    ID: string,
    name: string,
    ServiceHistory: ServiceHistory,
    Car?: string[]
  }
  
  type ServiceHistory = {
    ServiceHistory: ServiceHistory1[]
    
  }
  
  type ServiceHistory1 = {
    History?: History[],
    Maker?: string,
    carName?: string,
    image?: string
  }
  
  
  type History = {
    comment?: string,
    date?: number,
    title?: string
  }
  
  //car valuation /service history / purchase history for myquery3
  interface Data2 {
    carvaluation: carvaluation[],
    carServiceHistory: carServiceHistory[],
    carPurchaseHistory: carPurchaseHistory[],
    cardata: cardata[]
  }
  
  interface Variables2 {
    _eq: string;
  }

  type cardata = {  
    clientID: string,
    imageURL?: string
  }
  
  type carvaluation = {
    ID?: string,
    Car?: string,
    Maker?: string,
    Date?: Date,
    Price?: string,
    clientID?: string,
    Comment?: string,
    Title?: string,
    __typename?:string
  }
  
  type carServiceHistory = {
    ID?: string,
    Car?: string,
    clientID?: string,
    Comment?: string,
    Date?: Date,
    Maker?: string,
    Price?: string,
    Title?: string,
    __typename?:string
  }
  
  type carPurchaseHistory = {
    ID?: string,
    clientID?: string,
    Car?: string, 
    Comment?: string,
    Maker?: string,
    Price?: string,
    Title?: string,
    Date?: Date,
    __typename?:string
  }
  


//client component
//MyQuery2
export  const Search_Client : TypedDocumentNode<Data3, Variables1> = gql`
query SearchClient( $_ilike: String! ) {
  clients_info(where: {ID: {_ilike: $_ilike}}) {
    ID
    address
    name
    phone
  }
}`;



export const Get_ALLClient = gql` query allclients {
    clients_info {
      ID
      address
      name
      phone
    }
  }
  `;


export const SearchCarData : TypedDocumentNode<Data4, Variables3> = gql`
query MyQuery($_ilike: String) {
  cardata(where: {Car: {_ilike: $_ilike}}) {
    clientID
    imageURL
  }
}
`;

interface Variables3 {
  _ilike : string;
}
interface Data4 {
  cardata: cardata[]
}






















interface Data3 {
  clients_info: clients_info[];
}

interface Variables1 {
  _ilike : string;
}

type clients_info = {
          __typename: string,
          name: string,
          ID: string,
          address: string,
          phone: string
}



type tabletype1 = {
    
        
  
  __typename: string,
          name: string,
          ID: number,
          address: string,
          phone: string
}

type tabletype2 = {
  clients_info:   clients_info[]
}





