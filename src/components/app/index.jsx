import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useMedia } from 'react-use';
import Homepage from 'components/homepage';
import Header from 'components/header';
import TitlePage from 'components/titlePage';
import MobileLanding from 'components/mobileLanding';
import BGWCTitlePage from 'components/bgwcTitlePage';
import BGWCMobileLanding from 'components/bgwcMobileLanding';
import './index.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePageRoute/>
        </Route>
        <Route path="/bgwc">
          <BGWCRoute/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

function HomePageRoute() {
  const requiredWidth = useMedia('(min-width: 1330px)');
  return (
    <div>
      <Header requiredWidth={requiredWidth} />
      { requiredWidth ? <TitlePage /> : <MobileLanding /> }
      { requiredWidth && <Homepage /> }
    </div>
  );
}

function BGWCRoute() {
  const requiredWidth = useMedia('(min-width: 1330px)');
  return (
    <div>
      { requiredWidth ? <BGWCTitlePage /> : <BGWCMobileLanding /> }
    </div>
  );
}

export default App;
