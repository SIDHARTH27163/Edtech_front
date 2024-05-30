
import './App.css';
import './index.css';
import './output.css'

import { BrowserRouter, Route, Switch , Redirect  } from 'react-router-dom';
import Landing from './Layouts/Landing';
import Admin from './Layouts/Admin';
import Auth from './Layouts/Auth';
import Teacher from './Layouts/Teacher';

function App() {
  return (
  
    <>
    <BrowserRouter>

      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/auth" component={Auth}/>
        <Route path="/teacher" component={Teacher}/>
        <Redirect from ="*" to="/"/>
      </Switch>
            
      
    </BrowserRouter>
    </>
  
  );
}

export default App;
