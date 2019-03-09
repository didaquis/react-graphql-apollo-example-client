import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Query, Mutation } from 'react-apollo';
import { PRODUCTOS_QUERY } from '../../gql/queries/productos';
import { ELIMINAR_PRODUCTO } from '../../gql/mutations/productos';


import Paginador from '../Paginador';


class Productos extends Component {

	limiteRegistrosVisibles = 10;

	state = {
		paginador: {
			actual: 1,
			offset: 0
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
		return (
			<Query
				query={PRODUCTOS_QUERY}
				pollInterval={500}
				variables={{limite: this.limiteRegistrosVisibles, offset: this.state.paginador.offset}}
			>
				{ ({ loading, error, data, startPolling, stopPolling }) => {
					if(loading) return 'Cargando datos...';
					if(error) return `Error: ${error.message}`;

					return (
						<Fragment>
							<h2 className="text-center">Listado de productos</h2>
							<table className="table mt-4">
								<thead>
									<tr className="table-primary">
										<th scope="col">Nombre</th>
										<th scope="col">Precio</th>
										<th scope="col">Stock</th>
										<th scope="col">Eliminar</th>
										<th scope="col">Editar</th>
									</tr>
								</thead>
								<tbody>
									{
										data.obtenerProductos.map((producto) => {
											const { id } = producto;

											return (
												<tr key={producto.id}>
													<td>{producto.nombre}</td>
													<td>{producto.precio}</td>
													<td>{producto.stock}</td>
													<td>
														<Mutation
															mutation={ELIMINAR_PRODUCTO}
														>


															{ eliminarProducto => (
																<button
																	type="button"
																	className="btn btn-danger d-block d-md-inline-block mr-2"
																	onClick={ () => {
																		const message = '¿Seguro que quieres eliminar el producto?';
																		if (window.confirm(message)) {
																			eliminarProducto({
																				variables: { id }
																			})
																		}
																	} }
																>
																	&times; Eliminar producto
																</button>
															) }
														</Mutation>
													</td>
													<td>
														<Link to={`/producto/editar/${producto.id}`} className="btn btn-success d-block d-md-inline-block">
															Editar producto
														</Link>
													</td>
											</tr>)
										})
									}
								</tbody>
							</table>
							<Paginador
								actual={this.state.paginador.actual}
								totalRegistros={data.totalProductos}
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

export default Productos;
