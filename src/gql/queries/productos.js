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

export const PRODUCTO_QUERY = gql`
query ObtenerProducto($id:ID!){
	obtenerProducto(id: $id) {
		id
		nombre
		precio
		stock
	}
}`;
