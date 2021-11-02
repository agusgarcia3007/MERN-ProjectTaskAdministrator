import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Projects from './components/projects/Projects';
import ProjectState from './context/projects/ProjectState';

const App = () => {
    return ( 
        <ProjectState>
            <Router>
                <Switch>
                    <Route  exact path='/' component={Login}/>
                    <Route  exact path='/signUp' component={SignUp}/>
                    <Route  exact path='/projects' component={Projects}/>
                </Switch>
            </Router>
        </ProjectState>
     );
}
 
export default App;