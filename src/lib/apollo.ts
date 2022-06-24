import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o2b5h907p001z2cak2fj77/master',
  cache: new InMemoryCache()
})