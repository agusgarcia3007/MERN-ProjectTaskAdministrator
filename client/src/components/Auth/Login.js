import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    
    //login state
    const [user, setUser] = useState({
        email:'',
        password:''
    });
    const [error, setError] = useState(false);

    const { email, password } = user;


    const handleBlur = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();

        if(email.trim() === '' || password.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Log In</h1>

                {error ? <p>error</p> : null}
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input 
                        type="email" 
                        name="email" 
                        id="email"  
                        placeholder='Email' 
                        onBlur={handleBlur}/>
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input 
                        type="password" 
                        name="password" 
                        id="password"  
                        placeholder='password' 
                        onBlur={handleBlur}/>
                    </div>

                    <div className="campo-form">
                        <input 
                        type="submit" 
                        value="Log In"
                        className='btn btn-primario btn-block' />
                    </div>
                </form>

                <Link to={'/signUp'} className='enlace-cuenta'>
                    Don't have an account? Create one now.
                </Link>
            </div>
        </div>
     );
}
 
export default Login;