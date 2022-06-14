import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from 'components/homepage';
import DougsApp from 'components/dougsApp';

function Router() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/doug-realm" component={DougsApp} />
          <Route component={Homepage} />
        </Switch>
      </BrowserRouter>
    );
  }
  
  export default Router;