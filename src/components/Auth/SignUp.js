import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    
    //SignUp state
    const [user, setUser] = useState({
        name:'',
        email:'',
        password:'',
        repeat:''
    });
    const [error, setError] = useState(false);

    const {  email, password } = user;


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
                <h1>Create an account</h1>

                {error? <p>error</p> : null}
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="name">
                            First Name
                        </label>
                        <input 
                        type="text" 
                        name="name" 
                        id="name"  
                        placeholder='Name' 
                        onBlur={handleBlur}/>
                    </div>

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
                        <label htmlFor="repeat">
                            Repeat password
                        </label>
                        <input 
                        type="password" 
                        name="repeat" 
                        id="repeat"  
                        placeholder='Repeat your password' 
                        onBlur={handleBlur}/>
                    </div>

                    
                    <div className="campo-form">
                        <input 
                        type="submit" 
                        value="Sign Up"
                        className='btn btn-primario btn-block' />
                    </div>
                </form>

                <Link to={'/'} className='enlace-cuenta'>
                    Alredy have an account? Log in
                </Link>
            </div>
        </div>
     );
}
 
export default SignUp;