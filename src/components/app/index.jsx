import Router from 'components/router';
import Header from 'components/header';
import TitlePage from 'components/titlePage';
import './index.scss';

// test change!
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
