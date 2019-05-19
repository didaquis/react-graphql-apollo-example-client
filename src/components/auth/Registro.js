import React, { Component, Fragment } from 'react';

const initialState = {
	usuario: '',
	password: '',
	repetirPassword: ''
}


class Registro extends Component {
	state = {
		...initialState
	}

	actualizarState = (e) => {
		const { name, value } = e.target;

		this.setState({
			[name] : value
		});
	}

	validarForm = () => {
		const { usuario, password, repetirPassword } = this.state;
		const noValido = !usuario || !password || !repetirPassword || password !== repetirPassword;
		return noValido;
	}

	render() {
		return (
			<Fragment>
				<h2 className="text-center">Nuevo usuario</h2>

				<div className="row justify-content-center mt-4">
					<form className="col-md-8">
						<div className="form-group">
							<label>Usuario</label>
							<input
								onChange={this.actualizarState}
								type="text"
								name="usuario"
								className="form-control"
								placeholder="Nombre Usuario"
								required
								autoFocus
							/>
						</div>
						<div className="form-group">
							<label>Password</label>
							<input
								onChange={this.actualizarState}
								type="password"
								name="password"
								className="form-control"
								placeholder="Password"
								required
							/>
						</div>
						<div className="form-group">
							<label>Repetir Password</label>
							<input
								onChange={this.actualizarState}
								type="password"
								name="repetirPassword"
								className="form-control"
								placeholder="Repetir Password"
								required
							/>
						</div>

						<button
							disabled={ this.validarForm() }
							type="submit"
							className="btn btn-success float-right">
								Crear Usuario
						</button>
					</form>
				</div>
			</Fragment>
		);
	}
}

export default Registro;