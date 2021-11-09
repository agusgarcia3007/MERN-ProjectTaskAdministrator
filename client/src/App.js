import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Projects from './components/projects/Projects';
import ProjectState from './context/projects/ProjectState';
import TaskState from './context/tasks/TaskState';
import AlertState from './context/alert/AlertState'

const App = () => {
    return ( 
        <ProjectState>
            <TaskState>
                <AlertState>
                    <Router>
                        <Switch>
                            <Route  exact path='/' component={Login}/>
                            <Route  exact path='/signUp' component={SignUp}/>
                            <Route  exact path='/projects' component={Projects}/>
                        </Switch>
                    </Router>
                </AlertState>
            </TaskState>
        </ProjectState>
     );
}
 
export default App;