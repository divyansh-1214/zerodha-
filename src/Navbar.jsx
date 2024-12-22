import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom">
                <div class="container p-2">
                    <Link class="navbar-brand ml-5" to="/">
                        <img src="public/logo.svg" alt="Bootstrap" width="20%" />
                    </Link>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-5">
                            <li class="nav-item ">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/pricing">Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/product">product</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;