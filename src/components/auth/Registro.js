import React, { Component, Fragment } from 'react';

const initialState = {
	usuario: '',
	password: '',
	repetirPassword: ''
}

const regexNombreUsuario = new RegExp(/^[A-Za-a0-9.\-_*/|]{8,}$/);
const regexPassword = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!*^?+-_@#$%&]{8,}$/);

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
		let validacionesFormularioCorrectas = false;
		if (!usuario || !password || !repetirPassword) {
			validacionesFormularioCorrectas = true;
		}

		if (password !== repetirPassword) {
			validacionesFormularioCorrectas = true;
		}

		if (!regexNombreUsuario.test(usuario)) {
			validacionesFormularioCorrectas = true;
		}

		if (!regexPassword.test(password)) {
			validacionesFormularioCorrectas = true;
		}

		if (!regexPassword.test(repetirPassword)) {
			validacionesFormularioCorrectas = true;
		}

		return validacionesFormularioCorrectas;
	}

	render() {
		return (
			<Fragment>
				<h2 className="text-center">Nuevo usuario</h2>

				<div className="row justify-content-center mt-4">
					<form className="col-md-8">
						<div className="form-group">
							<label>Usuario <span className="text-danger">*</span></label>
							<input
								onChange={this.actualizarState}
								type="text"
								name="usuario"
								className="form-control"
								placeholder="Nombre Usuario"
								required
								autoFocus
								pattern="^[A-Za-a0-9.\-_\*\/\|]{8,}$"
							/>
							<small id="usuarioHelp" className="form-text text-muted">Mínimo 8 caracters. Los espacios no están permitidos</small>
						</div>
						<div className="form-group">
							<label>Password <span className="text-danger">*</span></label>
							<input
								onChange={this.actualizarState}
								type="password"
								name="password"
								className="form-control"
								placeholder="Password"
								required
								pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!*^?+-_@#$%&]{8,}$"
							/>
							<small id="passwordHelp" className="form-text text-muted">Mínimo 8 caracters. Debe contener números, letras en minúscula y letras en mayúscula. Los espacios no están permitidos</small>
						</div>
						<div className="form-group">
							<label>Repetir Password <span className="text-danger">*</span></label>
							<input
								onChange={this.actualizarState}
								type="password"
								name="repetirPassword"
								className="form-control"
								placeholder="Repetir Password"
								required
								pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!*^?+-_@#$%&]{8,}$"
							/>
							<small id="repetirPasswordHelp" className="form-text text-muted">Mínimo 8 caracters. Debe contener números, letras en minúscula y letras en mayúscula. Los espacios no están permitidos</small>
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