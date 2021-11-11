import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext';
import authContext from '../../context/auth/authContext';
import SignIllustration from '../../assets/sign-up.png'


const SignUp = (props) => {

    //get items from context 
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    //auth context
    const Authcontext = useContext(authContext);
    const { msg, authenticated,  signUp } = Authcontext;

    //in case user already exists or it have already been authenticated
    useEffect(()=>{
        if(authenticated){
            props.history.push('/projects');
        }
        if(msg){
            showAlert(msg.msg, msg.category);    
        }
    },[msg, authenticated, props.history])
    
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
            return;
        }
        signUp({
            name,
            email,
            password,

        })
    }

    return ( 
        <div className="form-usuario">
            { alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
            <div className="contenedor-form sombra-dark">
            <h1> Create an account <img src={SignIllustration} alt="illustration" className='illustration' /></h1>
                

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