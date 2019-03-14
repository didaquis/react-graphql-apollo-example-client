import React, { Component, Fragment } from 'react';


class ContenidoPedido extends Component {
	state = {

	}

	render() {

			//{ console.log(this.props.productos) }
			//{ console.log(this.props.idCliente) }
		return(
			<Fragment>
				{this.props.productos.forEach((p) => {
					return (<p>lol: {p.nombre}</p>)
				})}
			</Fragment>
		);
	}
}

export default ContenidoPedido;
