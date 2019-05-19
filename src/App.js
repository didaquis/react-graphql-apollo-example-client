import React, { Component, Fragment, StrictMode } from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as BwsRouter, Route, Switch } from 'react-router-dom';


/* Import apollo client */
import apolloClient from './apollo/config';


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

import Estadisticas from './components/estadisticas/Estadisticas';

import Registro from './components/auth/Registro';
import Login from './components/auth/Login';

import Error404 from './components/Error404';


class App extends Component {
	render() {
		return (
			<ApolloProvider client={apolloClient}>
				<BwsRouter>
					<Fragment>
						<StrictMode>
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
									<Route exact path="/registro" component={Registro} />
									<Route exact path="/login" component={Login} />
									<Route component={Error404} />
								</Switch>
							</div>
						</StrictMode>
					</Fragment>
				</BwsRouter>
			</ApolloProvider>
		);
	}
}

export default App;
