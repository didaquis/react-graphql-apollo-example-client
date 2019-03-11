import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex mb-4">
        <div className="container">
            <Link to="/" className="navbar-brand text-light font-weight-bold">
                CRM
            </Link>
            <button className="navbar-toggler mb-2" type="button" data-toggle="collapse" data-target="#main-Navbar" aria-controls="main-Navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="main-Navbar">
                <ul className="navbar-nav ml-auto text-right">
                    <li className="nav-item">
                        <Link to="/cliente/nuevo" className="btn btn-success mr-2">
                            Nuevo Cliente
                        </Link>
                        <Link to="/producto/nuevo" className="btn btn-success">
                            Nuevo Producto
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;