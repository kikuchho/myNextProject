// this is passed to client component 

import { ApolloClient, InMemoryCache, ApolloProvider, gql, HttpLink } from '@apollo/client'
import { getClient } from '../lib/client';

export const dynamic = "force-dynamic";

interface serverProps {
    inputs: string;
}


const query = gql` query allclients {
    clients_info {
      name
      ID
      address
      phone
    }
  }
  `;


export default async function ServerComponent( {inputs} : serverProps   ) {

  /*


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

      
     

      // using getclient in here somehow broke the app 
      const response   = await getClient().query({ query });

      //console.log(response.data) {response.data.name} 
      
   */

    return <div> {inputs }  </div>;
  }






/*
export default async function ServerComponent() {


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
  

  

    client.query({
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
   
  //the above coed will fetch the data from hasura
  
  


  /*
    const data = await fetch(
      "https://main--time-pav6zq.apollographos.net/graphql",
      {
        method: "POST",
        body: JSON.stringify({
          query: '{ now(id: "1") }',
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
    */

     // return( <div> {}  </div>  )
   
  //}

  