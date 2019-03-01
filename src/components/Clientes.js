import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Query } from 'react-apollo';
import { CLIENTES_QUERY } from '../gql/queries/index';


const Contactos = () => {
	return (
		<Query
			query={CLIENTES_QUERY}
			pollInterval={500}
		>
			{ ({ loading, error, data, startPolling, stopPolling }) => {
				if(loading) return 'Cargando datos...';
				if(error) return `Error: ${error.message}`;

				return (
					<Fragment>
						<h2 className="text-center">Listado de clientes</h2>
						<ul className="list-group mt-4">
							{
								data.getClientes.map((cliente) => {
									return (<li key={cliente.id} className="list-group-item">
										<div className="row justify-content-between align items center">
											<div className="col-md-8 d-flex justify-content-between align items center">
													{cliente.nombre} {cliente.apellido}
													<br/>
													{cliente.empresa} {cliente.email}
											</div>
											<div className="col-md-4 d-flex justify-content-end">
												<Link to={`/cliente/editar/${cliente.id}`} className="btn btn-success d-block d-md-inline-block">
													Editar cliente
												</Link>
											</div>
										</div>
									</li>)
								})
							}
						</ul>
					</Fragment>
				)
			} }
		</Query>
	)
}

export default Contactos;