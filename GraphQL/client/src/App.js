import './App.css';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client"
import { Content } from './Content';

export const App = () => {
  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Content />
    </ApolloProvider>
  );
}