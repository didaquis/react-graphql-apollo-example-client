import gql from 'graphql-tag';

export const PRODUCTOS_QUERY = gql`
query obtenerProductos($limite: Int, $offset: Int){
	obtenerProductos(limite: $limite, offset: $offset){
		id
		nombre
		precio
		stock
	}
	totalProductos
}
`;