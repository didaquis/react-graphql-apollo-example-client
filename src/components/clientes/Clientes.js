import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Query, Mutation } from 'react-apollo';
import { CLIENTES_QUERY } from '../../gql/queries/clientes';
import { ELIMINAR_CLIENTE } from '../../gql/mutations/clientes';


import Paginador from '../Paginador';
import Exito from '../alertas/Exito';


class Clientes extends Component {

	limiteRegistrosVisibles = 10;

	state = {
		paginador: {
			actual: 1,
			offset: 0
		},
		alerta: {
			mostrar: false,
			mensaje: ''
		}
	}

	paginaAnterior = () => {
		this.setState({
			paginador: {
				offset: this.state.paginador.offset - this.limiteRegistrosVisibles,
				actual: this.state.paginador.actual - 1
			}
		})
	}

	paginaSiguiente = () => {
		this.setState({
			paginador: {
				offset: this.state.paginador.offset + this.limiteRegistrosVisibles,
				actual: this.state.paginador.actual + 1
			}
		})
	}

	render() {

		const { alerta: { mostrar, mensaje } } = this.state;

		const alerta = (mostrar) ? <Exito mensaje={mensaje} /> : '';

		return (
			<Query
				query={CLIENTES_QUERY}
				pollInterval={500}
				variables={{limite: this.limiteRegistrosVisibles, offset: this.state.paginador.offset}}
			>
				{ ({ loading, error, data, startPolling, stopPolling }) => {
					if(loading) return 'Cargando datos...';
					if(error) return `Error: ${error.message}`;

					return (
						<Fragment>
							<h2 className="text-center">Listado de clientes</h2>
							{alerta}
							<ul className="list-group mt-4">
								{
									data.getClientes.map((cliente) => {
										const { id } = cliente;

										return (<li key={cliente.id} className="list-group-item">
											<div className="row justify-content-between align items center">
												<div className="col-md-8 d-flex justify-content-between align items center">
														Nombre: {cliente.nombre} {cliente.apellido}
														<br/>
														Empresa: {cliente.empresa}
														<br/>
														Email: {cliente.email}
												</div>
												<div className="col-md-4 d-flex justify-content-end align-items-center">
													<Mutation
														mutation={ELIMINAR_CLIENTE}
														onCompleted={(data) => {
															this.setState({
																alerta: {
																	mostrar: true,
																	mensaje: data.eliminarCliente
																}
															}, () => {
																setTimeout(() => {
																	this.setState({
																		alerta: {
																			mostrar: false,
																			mensaje: ''
																		}
																	})
																}, 3000)
															})
														}}
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
							<Paginador
								actual={this.state.paginador.actual}
								totalRegistros={data.totalClientes}
								limiteRegistrosVisibles={this.limiteRegistrosVisibles}
								paginaAnterior={this.paginaAnterior}
								paginaSiguiente={this.paginaSiguiente}
							/>
						</Fragment>
					)
				} }
			</Query>
		);
	}
}

export default Clientes;
