import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';


import { Mutation } from 'react-apollo';
import { ACTUALIZAR_PRODUCTO } from '../../gql/mutations/productos';


class FormularioEditarProducto extends Component {
    state =  {
        producto: this.props.producto,
        error: false
    };

    render() {

        const { nombre, precio, stock } = this.state.producto;

        const { error } = this.state;
        let alertaValidaciones = (error) ? <p className="alert alert-danger p-3 text-center">Los campos "Nombre", "Precio" y "Stock" son obligatorios</p> : '';

        return (
            <Fragment>
                {alertaValidaciones}

                <div className="row justify-content-center">
                    <Mutation
                        mutation={ACTUALIZAR_PRODUCTO}
                        onCompleted={ () => this.props.refetch().then(() => {
                            this.props.history.push('/');
                        }) }
                    >

                        {
                            actualizarProducto => (

                                <form className="col-md-8 m-3" onSubmit={ e => {
                                    e.preventDefault();

                                    const {id, nombre, precio, stock} = this.state.cliente;

                                    // validaciones
                                    if (nombre === '' || precio === '' || stock === '') {
                                        this.setState({error: true});
                                        return;
                                    }

                                    this.setState({error: false});

                                    const input = {
                                        id,
                                        nombre,
                                        precio: Number(precio),
                                        stock: Number(stock)
                                    };

                                    actualizarProducto({
                                        variables: {input}
                                    })
                                }}>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Nombre <span className="text-danger">*</span></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                required
                                                autoFocus
                                                defaultValue={nombre}
                                                onChange={ e => {
                                                    this.setState({
                                                        cliente: {
                                                            ...this.state.cliente,
                                                            nombre: e.target.value
                                                        }
                                                    })
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-success float-right">Guardar Cambios</button>
                                </form>
                            )
                        }
                    </Mutation>
                </div>
            </Fragment>
        )
    };
};

export default withRouter(FormularioEditarProducto);
