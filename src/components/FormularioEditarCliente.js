import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';


import { Mutation } from 'react-apollo';
import { ACTUALIZAR_CLIENTE } from '../gql/mutations/index';


class FormularioEditarCliente extends Component {
    state =  {
        cliente: this.props.cliente,
        error: false
    };

    render() {

        const { nombre, apellido, empresa, email, tipo } = this.state.cliente;

        const { error } = this.state;
        let respuesta = (error) ? <p className="alert alert-danger p-3 text-center">Todos los campos son obligatorios</p> : '';

        return (

            <Fragment>
                {respuesta}

                    <Mutation
                        mutation={ACTUALIZAR_CLIENTE}
                        onCompleted={ () => this.props.refetch().then(() => {
                            this.props.history.push('/');
                        }) }
                    >

                        {
                            actualizarCliente => (

                                <form className="col-md-8 m-3" onSubmit={ e => {
                                    e.preventDefault();

                                    const {id, nombre, apellido, empresa, email, tipo} = this.state.cliente;

                                    // validaciones
                                    if (nombre === '' || apellido === '' || empresa === '' || email === '' || tipo === '') {
                                        this.setState({error: true});
                                        return;
                                    }

                                    this.setState({error: false});

                                    const input = {
                                        id,
                                        nombre,
                                        apellido,
                                        empresa,
                                        email,
                                        tipo
                                    };

                                    actualizarCliente({
                                        variables: {input}
                                    })
                                }}>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Nombre</label>
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
                                        <div className="form-group col-md-6">
                                            <label>Apellido</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={apellido}
                                                onChange={ e => {
                                                    this.setState({
                                                        cliente: {
                                                            ...this.state.cliente,
                                                            apellido: e.target.value
                                                        }
                                                    })
                                                }}
                                             />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Empresa</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={empresa}
                                                onChange={ e => {
                                                    this.setState({
                                                        cliente: {
                                                            ...this.state.cliente,
                                                            empresa: e.target.value
                                                        }
                                                    })
                                                }}
                                            />
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label>Email</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={email}
                                                onChange={ e => {
                                                    this.setState({
                                                        cliente: {
                                                            ...this.state.cliente,
                                                            email: e.target.value
                                                        }
                                                    })
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Tipo Cliente</label>
                                            <select
                                                className="form-control"
                                                defaultValue={tipo}
                                                onChange={ e => {
                                                    this.setState({
                                                        cliente: {
                                                            ...this.state.cliente,
                                                            tipo: e.target.value
                                                        }
                                                    })
                                                }}
                                            >
                                                <option value="">Elegir...</option>
                                                <option value="PREMIUM">PREMIUM</option>
                                                <option value="BASICO">BÁSICO</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-success float-right">Guardar Cambios</button>
                                </form>
                            )
                        }
                    </Mutation>
            </Fragment>
        )
    };
};

export default withRouter(FormularioEditarCliente);