import React, { useContext ,useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';


const Private = ({ component: Component, ...props }) => {

    const authContext = useContext(AuthContext);
    const { authenticated, userAuthenticated, loading } = authContext;

    useEffect(() => {
        userAuthenticated();
        //eslint-disable-next-line  
    },[])

    return ( 
        <Route 
            {...props} 
            render = { props => !authenticated && !loading ? (
                <Redirect to ='/' />
            )  :  (
                <Component {...props} />
            )}
        />
     );
}
 
export default Private;
