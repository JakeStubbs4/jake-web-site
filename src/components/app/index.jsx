import React from 'react';
import Router from 'components/router';
import Header from 'components/header';
import TitlePage from 'components/titlePage';
import './index.scss';

function App() {
  return (
    <body>
      <Header />
      <TitlePage />
      <Router />
    </body>
  );
}

export default App;
