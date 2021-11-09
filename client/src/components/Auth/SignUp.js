import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext';


const SignUp = () => {

    //get items from context 
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;
    
    //SignUp state
    const [user, setUser] = useState({
        name:'',
        email:'',
        password:'',
        repeat:''
    });

    const {  email, password, name, repeat } = user;


    const handleBlur = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    };
    

    const handleSubmit = e => {
        e.preventDefault();

        if(email.trim() === '' || password.trim() === '' || name.trim() || repeat.trim()){
            showAlert('All fields are required', 'alerta-error');           
        }
        if(password.length < 6){
            showAlert('Use 6 characters or more for your password', 'alerta-error');  
        }
        if(password !== repeat){
            showAlert('Those passwords didn’t match. Please try again.', 'alerta-error');
            
        }
    }

    return ( 
        <div className="form-usuario">
            { alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Create an account</h1>

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