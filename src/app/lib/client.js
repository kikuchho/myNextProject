import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";


export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://closing-muskrat-16.hasura.app/v1/graphql',
    headers: {
      'content-type' : 'application/json',
      'x-hasura-admin-secret': 'GEBiWvxHO1XpFOhC17rJzg3KfLM05h73cy216qkOlraHyrFmSMi0Wds22mNuWTVO'
    }
    
  });
});
//old url
//"https://main--spacex-l4uc6p.apollographos.net/graphql",



/*
// lib/client.js
import { NextSSRInMemoryCache,NextSSRApolloClient,} from "@apollo/experimental-nextjs-app-support/ssr";
//import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: "https://closing-muskrat-16.hasura.app/v1/graphql",
    }),
    headers: {
      'content-type' : 'application/json',
      'x-hasura-admin-secret': 'GEBiWvxHO1XpFOhC17rJzg3KfLM05h73cy216qkOlraHyrFmSMi0Wds22mNuWTVO'
    }
  });
});
*/