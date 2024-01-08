


import React, { useState } from "react";
import SideBar from "./components/SideBar";
//import Header from "./components/Header";

import { ApolloClient, InMemoryCache, ApolloProvider, gql, HttpLink } from '@apollo/client'


export default async function searchtable() {
  //refer to https://www.apollographql.com/docs/react/get-started for more detail, i copied the code from there 
  const client = new ApolloClient({
    
    uri: 'https://closing-muskrat-16.hasura.app/v1/graphql',
     
    cache: new InMemoryCache(),

    //https://cloud.hasura.io/project/3246199a-0b78-493b-83e9-cb0f13ccda39/console/api/api-explorer
    //if you take a look at the websites it shows you the request header and these are the things you need to make an api request 
    //https://www.apollographql.com/docs/react/networking/basic-http-networking 
    headers: {
      'content-type' : 'application/json',
      'x-hasura-admin-secret': 'GEBiWvxHO1XpFOhC17rJzg3KfLM05h73cy216qkOlraHyrFmSMi0Wds22mNuWTVO'
    }
  });
  
  //TODO: write the code so that you can display the result to the table 
  //TODO: line 221. write the code to send the search inputs to the callback function(thefetch)
  const {data}  = await  client.query({
    query: gql`
    query MyQuery {
      clients_info {
        name
        ID
        address
        phone
      }
    }
    `,
  })
  //the above coed will fetch the data from hasura

  console.log('in searchtable')
  
  return (
    data
  );
}


