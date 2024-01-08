import { gql } from "@apollo/client";
import createApolloClient from "./components/apolloclient";


export default async function ThePage() {
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
  
    return <main>{data.now}</main>;
  }