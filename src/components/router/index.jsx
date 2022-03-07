import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from 'components/homepage';

function Router() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="*" component={Homepage}/>
        </Switch>
      </BrowserRouter>
    );
  }
  
  export default Router;