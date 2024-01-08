import { NextResponse } from "next/server";

//import { graphql, HttpResponse } from 'msw';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, HttpLink } from '@apollo/client'
import { getClient } from '../../../lib/client';

import { searchparams } from "react-router-dom";

//import { useSearchParams } from 'next/navigation'

const query = gql` query allclients {
  clients_info {
    name
    ID
    address
    phone
  }
}
`;

/*
const findquery = gql`query allclients{
  where: {ID: {_eq: 10}}
  {
    name
    ID
    address
    phone
  }
}

`;

*/

async  function fetchdata( ) {
    //get data 

    /*
    const response = await fetch( 'https://closing-muskrat-16.hasura.app/v1/graphql', {

    "method" : "GET",
    "headers": {
      'content-type' : 'application/json',
      'x-hasura-admin-secret': 'GEBiWvxHO1XpFOhC17rJzg3KfLM05h73cy216qkOlraHyrFmSMi0Wds22mNuWTVO'
    }

    })
    */
    
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
      async function thefetch(){
    
       client
      .query({
        query: gql`
        query allclients {
          clients_info {
            name
            ID
            address
            phone
          }
        }
        `,
      })
      .then((result) => {   
        
        console.log(result, 'here is teh client name' , result.data.clients_info[0].name    )
    
       // setresult(result.data.clients_info[0].name)
    
    
      });
      //the above coed will fetch the data from hasura
      }

      //const response   = await getClient().query({ query });

      //console.log(response.data)
      const response = thefetch()

      return response.data
  

}




export async function GET(request){
    const response = await fetchdata()
    const { searchparam } = new URL(request.url);

    

    console.log( request.url)

    const query = searchParams.get('query')


    const filteredclients = response.clients_info[0].filter( (theclients) => {
        return theclients.ID.includes(query)
    })

    return NextResponse.json( filteredclients )
}