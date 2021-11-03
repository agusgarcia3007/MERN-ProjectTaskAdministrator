import React from 'react'

const Header = () => {
    return ( 
        <header className="app-header">
            <p className="nombre-usuario">
                Hi <span>Agustin</span>!
            </p>

            <nav className="nav-principal">
                <a href="#!">Sign Out</a>
            </nav>
        </header>
     );
}
 
export default Header;