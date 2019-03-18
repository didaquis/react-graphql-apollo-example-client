import React, { Component, Fragment } from 'react';
import Select from 'react-select';
import Animated from 'react-select/lib/animated';


import Resumen from './Resumen';


class ContenidoPedido extends Component {
	state = {
		productos: []
	}

	seleccionarProducto = (productos) => {
		this.setState({ productos });
	}

	render() {

			//{ console.log(this.props.productos) }
			//{ console.log(this.props.idCliente) }
		return(
			<Fragment>
				<h3 className="text-center mb-5">Seleccionar artículos</h3>
				{this.props.productos.forEach((p) => {
					return (<p>lol: {p.nombre}</p>)
				})}
				<Select
					onChange={this.seleccionarProducto}
					options={this.props.productos}
					isMulti={true}
					components={ Animated() }
					placeholder="Seleccionar productos"
					getOptionValue={ (options) => options.id }
					getOptionLabel={ (options) => options.nombre }
				/>

				<Resumen
					productos={this.state.productos}
				/>
			</Fragment>
		);
	}
}

export default ContenidoPedido;
