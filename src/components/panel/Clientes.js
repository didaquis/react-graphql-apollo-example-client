import React, { Fragment } from 'react';

import { Query } from 'react-apollo';
import { TOP_CLIENTES } from '../../gql/queries/graficas';

import Spinner from '../Spinner/Spinner';

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Clientes = (props) => {

		return(
			<Fragment>
				<h3 className="text-center my-5">Top 10 clientes</h3>
				<Query
					query={TOP_CLIENTES}
					pollInterval={200}
				>
					{({ loading, error, data }) => {
						if(loading) {
							return (
								<Spinner />
							);
						}
						if(error) return `Error: ${error.message}`;

						const topClientesGrafica = [];

						data.topClientes.map((pedido, index) => {
							return topClientesGrafica[index] = {
								...pedido.cliente[0],
								total: pedido.total
							};
						});

						return (
							<div style={{ width: '100%', height: 460 }}>
								<ResponsiveContainer>
									<BarChart
										data={topClientesGrafica}
										margin={{top: 5, right: 20, left: 20, bottom: 5}}
									>
										<CartesianGrid strokeDasharray="3 3"/>
										<XAxis dataKey="nombre"/>
										<YAxis/>
										<Tooltip/>
										<Bar dataKey="total" fill="#8884d8"/>
									</BarChart>
								</ResponsiveContainer>
							</div>
						);
					}}
				</Query>
			</Fragment>
		);
}

export default Clientes;
