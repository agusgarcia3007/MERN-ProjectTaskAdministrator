import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Projects from './components/projects/Projects';
import Private from './components/routes/private';
import ProjectState from './context/projects/ProjectState';
import TaskState from './context/tasks/TaskState';
import AlertState from './context/alert/AlertState';
import AuthState from './context/auth/AuthState';
import tokenAuth from './config/tokenAuth';

const token = localStorage.getItem('token');
if(token){
    tokenAuth(token);
}


const App = () => {

    return ( 
        <ProjectState>
            <TaskState>
                <AlertState>
                   <AuthState>
                        <Router>
                            <Switch>
                                <Route  exact path='/' component={Login}/>
                                <Route  exact path='/signUp' component={SignUp}/>
                                <Private  exact path='/projects' component={Projects}/>
                            </Switch>
                        </Router>
                   </AuthState>
                </AlertState>
            </TaskState>
        </ProjectState>
     );
}
 
export default App;