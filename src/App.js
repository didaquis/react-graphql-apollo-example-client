import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';


/* Import components */
import Header from './components/Header';
import Clientes from './components/Clientes';


/* Configuration imported from '.env' file */
const backendProtocol 	= process.env.REACT_APP_PROTOCOL;
const backendHost 		= process.env.REACT_APP_HOST;
const backendPort 		= process.env.REACT_APP_PORT;
const backendGraphql 	= process.env.REACT_APP_GRAPHQL;

const backendAddress = `${backendProtocol}://${backendHost}:${backendPort}${backendGraphql}`;


const client = new ApolloClient({
	uri: backendAddress,
	onError: ({ networkError, graphQLErrors }) => {
		console.log('graphQLErrors', graphQLErrors);
		console.log('networkError', networkError);
	}
});

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<Header />
				<div className="container">
					<Clientes />
				</div>
			</ApolloProvider>
		);
	}
}

export default App;
