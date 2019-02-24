import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import { createGlobalStyle } from 'styled-components';
import withApollo from '../lib/withApollo';

const GlobalStyle = createGlobalStyle`
  div#__next, html, body {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 26px;
    font-weight: 300;
    margin: 0;
  }
`;

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
