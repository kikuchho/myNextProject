
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://closing-muskrat-16.hasura.app/v1/graphql': {
        headers: {
          'content-type' : 'application/json',
          'x-hasura-admin-secret': 'GEBiWvxHO1XpFOhC17rJzg3KfLM05h73cy216qkOlraHyrFmSMi0Wds22mNuWTVO'
          
        },
      },
    },
  ],
  documents: "src/**/*.ts",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    },
    
  }
};

export default config;

//line6 : schema: "./src/app/graphql/schema.graphql",