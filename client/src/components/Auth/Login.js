import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext';
import authContext from '../../context/auth/authContext';
import LoginIllustration from '../../assets/Consulting-rafiki.png'


const Login = (props) => {

    //get items from context 
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    //auth context
    const Authcontext = useContext(authContext);
    const { msg, authenticated, login } = Authcontext;

    useEffect(()=>{
        if(authenticated){
            props.history.push('/projects');
        }
        if(msg){
            showAlert(msg.msg, msg.category);    
        }
    },[msg, authenticated, props.history])

    //login state
    const [user, setUser] = useState({
        email:'',
        password:''
    });

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
            showAlert('All fields are required', 'alerta-error');
            return;
        };

        login({email, password});

    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1> Login <img src={LoginIllustration} alt="illustration" className='illustration' /></h1>
                

                { alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
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
                        onChange={handleBlur}/>
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