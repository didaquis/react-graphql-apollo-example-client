import React, { Component } from 'react';

class FormularioEditarCliente extends Component {
    state =  {
        cliente: this.props.cliente
    };

    render() { 

        const { nombre, apellido, empresa, email, tipo } = this.state.cliente;

        return (
            <form className="col-md-8 m-3">
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
    };
};

export default FormularioEditarCliente;
