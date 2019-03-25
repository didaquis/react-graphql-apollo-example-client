import React, { Fragment } from 'react';

import { Query } from 'react-apollo';
import { OBTENER_PEDIDOS } from '../../gql/queries/pedidos';

import Spinner from '../Spinner/Spinner';
import Pedido from './Pedido';


const PedidosCliente = (props) => {

		const clienteId = props.match.params.id;

		return(
			<Fragment>
				<h2 className="text-center">Pedidos del Cliente</h2>
				<div className="row">
					<Query
						query={OBTENER_PEDIDOS}
						variables={ { clienteId } }
						pollInterval={200}
					>
						{({ loading, error, data, startPolling, stopPolling }) => {
							if(loading) {
								return (
									<Spinner />
								);
							}

							if(error) return `Error: ${error.message}`;

							return (
								data.obtenerPedidos.map(pedido => {
									return (<Pedido 
										key={pedido.id}
										pedido={pedido}
										clienteId={clienteId}
									/>);
								})
							);
						}}
					</Query>
				</div>
			</Fragment>
		);
}

export default PedidosCliente;
