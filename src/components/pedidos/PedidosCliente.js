import React, { Fragment } from 'react';


const PedidosCliente = (props) => {

		const { clienteId } = props.match.params.id;

		return(
			<Fragment>
				<h2 className="text-center">Pedidos del Cliente</h2>
				<div className="row">
					<p>pedidos aquí</p>
				</div>
			</Fragment>
		);
}

export default PedidosCliente;
