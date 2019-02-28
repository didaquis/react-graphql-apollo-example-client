import React, { Component, Fragment } from 'react';

import { Query } from 'react-apollo';
import { CLIENTE_QUERY } from '../gql/queries/index';

import FormularioEditarCliente from './FormularioEditarCliente';


class EditarCliente extends Component {
	state = {

	};

	render() {

		// obtener el ID del contacto a editar a partir de la URL
		const { id } = this.props.match.params;

		return (
			<Fragment>
				<h2 className="text-center">Editar Cliente</h2>
				<div className="row justify-content-center">
					<Query
						query={CLIENTE_QUERY}
						variables={ { id } }
					>
						{({ loading, error, data }) => {
							if(loading) return 'Cargando datos...';
							if(error) return `Error: ${error.message}`;

							return (
								<FormularioEditarCliente
									cliente={data.getCliente}
								/>
							)
						}}
					</Query>
				</div>
			</Fragment>
		);
	};
};

export default EditarCliente;