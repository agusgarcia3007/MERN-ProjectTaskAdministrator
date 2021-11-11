import React, {useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import HashLoader from "react-spinners/HashLoader";

const Header = () => {

        //get auth info
        const authContext = useContext(AuthContext);
        const { userAuthenticated, user, signOut } = authContext;
    
    
        useEffect(() => {
            userAuthenticated();
        }, [])

    return ( 
        <header className="app-header">
            {user ? 
            <p className="nombre-usuario">
                Hi <span>{user.name}</span>!
            </p>
            :
            <p className="nombre-usuario">
            <HashLoader color='#EDF2F6'/>
            </p> }
            

            <nav className="nav-principal">
                <button
                className='btn btn-blank nombre-usuario'
                onClick={() => signOut()}

                >Sign Out</button>
            </nav>
        </header>
     );
}
 
export default Header;