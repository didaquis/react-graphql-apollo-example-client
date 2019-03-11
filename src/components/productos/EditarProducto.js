import React, { Component, Fragment } from 'react';

import { Query } from 'react-apollo';
import { PRODUCTO_QUERY } from '../../gql/queries/productos';

import FormularioEditarProducto from './FormularioEditarProducto';


class EditarProducto extends Component {

	render() {

		const { id } = this.props.match.params; // obtener el ID a partir de la URL

		return (
			<Fragment>
				<h2 className="text-center">Editar Producto</h2>
				<Query
					query={PRODUCTO_QUERY}
					variables={ { id } }
				>
					{({ loading, error, data, refetch }) => {
						if(loading) return 'Cargando datos...';
						if(error) return `Error: ${error.message}`;

						return (
							<FormularioEditarProducto
								producto={data.obtenerProducto}
								refetch={refetch}
							/>
						)
					}}
				</Query>
			</Fragment>
		);
	};
};

export default EditarProducto;
