import React, { Component, Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { BrowserRouter as BwsRouter, Route, Switch } from 'react-router-dom';


/* Import components */
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';

import Clientes from './components/clientes/Clientes';
import EditarCliente from './components/clientes/EditarCliente';
import NuevoCliente from './components/clientes/NuevoCliente';

import Productos from './components/productos/Productos';
import EditarProducto from './components/productos/EditarProducto';
import NuevoProducto from './components/productos/NuevoProducto';

import NuevoPedido from './components/pedidos/NuevoPedido';
import PedidosCliente from './components/pedidos/PedidosCliente';

import Estadisticas from './components/panel/Estadisticas';


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
								<Route exact path="/" component={Home} />
								<Route exact path="/estadisticas" component={Estadisticas} />
								<Route exact path="/clientes" component={Clientes} />
								<Route exact path="/cliente/nuevo" component={NuevoCliente} />
								<Route exact path="/cliente/editar/:id" component={EditarCliente} />
								<Route exact path="/productos" component={Productos} />
								<Route exact path="/producto/nuevo" component={NuevoProducto} />
								<Route exact path="/producto/editar/:id" component={EditarProducto} />
								<Route exact path="/pedido/nuevo/:id" component={NuevoPedido} />
								<Route exact path="/pedido/:id" component={PedidosCliente} />
							</Switch>
						</div>
					</Fragment>
				</BwsRouter>
			</ApolloProvider>
		);
	}
}

export default App;
