import React, { Component, Fragment } from 'react';

class Registro extends Component {
	state = {}

	render() {
		return (
			<Fragment>
				<h2 className="text-center">Nuevo usuario</h2>

				<div className="row justify-content-center mt-4">
					<form className="col-md-8">
						<div className="form-group">
							<label>Usuario</label>
							<input 
								type="text" 
								name="usuario" 
								className="form-control" 
								placeholder="Nombre Usuario" 
							/>
						</div>
						<div className="form-group">
							<label>Password</label>
							<input 
								type="password" 
								name="password" 
								className="form-control" 
								placeholder="Password"
							/>
						</div>
						<div className="form-group">
							<label>Repetir Password</label>
							<input 
								type="password" 
								name="repetirPassword" 
								className="form-control" 
								placeholder="Repetir Password" 
							/>
						</div>

						<button 
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