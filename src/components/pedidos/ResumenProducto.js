import React, { Fragment } from 'react';

const ResumenProducto = (props) => {

    const { producto, cantidad, precio } = props;

	return (
		<Fragment>
            <div className="border mb-4 p-4">
                <p className="card-text font-weight-bold">
                    Nombre del producto:
                    <span className="font-weight-normal"> {producto.nombre}</span>
                </p>
                <p className="card-text font-weight-bold">
                    Cantidad de producto:
                    <span className="font-weight-normal"> {cantidad}</span>
                </p>
                <p className="card-text font-weight-bold">
                    Precio por unidad:
                    <span className="font-weight-normal"> {precio} $</span>
                </p>
            </div>
        </Fragment>
	);
}

export default ResumenProducto;
