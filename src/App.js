
import './App.css';
import './index.css';
import './output.css'

import { BrowserRouter, Route, Switch , Redirect  } from 'react-router-dom';
import Landing from './Layouts/Landing';
import Admin from './Layouts/Admin';

function App() {
  return (
  
    <>
    <BrowserRouter>

      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/admin" component={Admin}/>

        <Redirect from ="*" to="/"/>
      </Switch>
            
      
    </BrowserRouter>
    </>
  
  );
}

export default App;
