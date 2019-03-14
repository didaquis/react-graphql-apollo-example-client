import React, { Component, Fragment } from 'react';


import DatosCliente from './DatosCliente';

class NuevoPedido extends Component {
	state = {

	}

	render() {

		const { id } = this.props.match.params;

		return(
			<Fragment>
				<h2 className="text-center">Nuevo pedido</h2>

				<div className="row">
					<div className="col-md-3">
						<DatosCliente
							id={id}
						/>
					</div>
					<div className="col-md-9">
						pedido
					</div>
				</div>
			</Fragment>
		);
	}
}

export default NuevoPedido;
