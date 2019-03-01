import React, { Component, Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { BrowserRouter as BwsRouter, Route, Switch } from 'react-router-dom';


/* Import components */
import Navbar from './components/Navbar';
import Clientes from './components/Clientes';
import EditarCliente from './components/EditarCliente';
import NuevoCliente from './components/NuevoCliente';


/* Configuration imported from '.env' file */
const backendProtocol 	= process.env.REACT_APP_PROTOCOL;
const backendHost 		= process.env.REACT_APP_HOST;
const backendPort 		= process.env.REACT_APP_PORT;
const backendGraphql 	= process.env.REACT_APP_GRAPHQL;

const backendAddress = `${backendProtocol}://${backendHost}:${backendPort}${backendGraphql}`;


const client = new ApolloClient({
	uri: backendAddress,
	cache: new InMemoryCache({
		addTypename: false
	}),
	onError: ({ networkError, graphQLErrors }) => {
		console.log('graphQLErrors', graphQLErrors);
		console.log('networkError', networkError);
	}
});

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<BwsRouter>
					<Fragment>
						<Navbar />
						<div className="container">
							<Switch>
								<Route exact path="/" component={Clientes} />
								<Route exact path="/cliente/editar/:id" component={EditarCliente} />
								<Route exact path="/cliente/nuevo" component={NuevoCliente} />
							</Switch>
						</div>
					</Fragment>
				</BwsRouter>
			</ApolloProvider>
		);
	}
}

export default App;
