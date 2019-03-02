import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Query, Mutation } from 'react-apollo';
import { CLIENTES_QUERY } from '../gql/queries/index';
import { ELIMINAR_CLIENTE } from '../gql/mutations/index';


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
									const { id } = cliente;

									return (<li key={cliente.id} className="list-group-item">
										<div className="row justify-content-between align items center">
											<div className="col-md-8 d-flex justify-content-between align items center">
													{cliente.nombre} {cliente.apellido}
													<br/>
													{cliente.empresa} {cliente.email}
											</div>
											<div className="col-md-4 d-flex justify-content-end align-items-center">
												<Mutation
													mutation={ELIMINAR_CLIENTE}
												>


													{ eliminarCliente => (
														<button
															type="button"
															className="btn btn-danger d-block d-md-inline-block mr-2"
															onClick={ () => {
																const message = '¿Seguro que quieres eliminar el cliente?';
																if (window.confirm(message)) {
																	eliminarCliente({
																		variables: { id }
																	})
																}
															} }
														>
															&times; Eliminar cliente
														</button>
													) }
												</Mutation>
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