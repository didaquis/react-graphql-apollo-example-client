import gql from 'graphql-tag';

export const CLIENTES_QUERY = gql`{
	getClientes {
		id
		nombre
		apellido
		empresa
		email
	}
}`;

export const CLIENTE_QUERY = gql`
	query ObtenerCliente($id:ID!){
		getCliente(id: $id) {
			id
			nombre
			apellido
			empresa
			email
			tipo
		}
	}`;
