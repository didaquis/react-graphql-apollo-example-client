import React, { Fragment } from 'react';


const validarPedido = (props) => {
	return !props.productos || props.total === 0;
}

const GenerarPedido = (props) => {

	return (
		<Fragment>
			<button
				disabled={validarPedido(props)}
				type="button"
				className="btn btn-warning font-weight-bold mt-4"
			>Generar Pedido</button>
		</Fragment>
	);
}

export default GenerarPedido;